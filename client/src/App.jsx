import "./App.css";
import { useState, useEffect } from "react";
import Storage from "./tools/Storage";
import Autocomplete from "./components/Autocomplete";
import Chart from "./components/Chart";
import Card from "./components/Card";

function App() {
  const [userSelection, setUserSelection] = useState("");
  const [userOptions, setUserOptions] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userPins, setUserPins] = useState([]);
  const [ready, setReady] = useState(false);

  // side effects
  useEffect(() => {
    const initialize = async () => {
      try {
        const optionsResponse = await fetch("/countries");
        if (optionsResponse.ok) {
          const opitonsData = await optionsResponse.json();
          setUserOptions(opitonsData);
        } else {
          throw new Error("Error fetching country data");
        }

        const bookmarks = await Storage.async_getItems();
        setUserPins(bookmarks);
        if (bookmarks?.length > 0) {
          const dataResponse = await fetch("/countries/batch", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ countryIDs: bookmarks }),
          });
          if (dataResponse.ok) {
            const data = await dataResponse.json();
            setUserData(data);
          } else {
            throw new Error("Error fetching user data");
          }
        }

        setReady(true);
      } catch (error) {
        console.error(error);
      }
    };
    initialize();
  }, [ready]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userSelection !== "") {
          const current = userData.find((item) => item.name === userSelection);
          if (!current) {
            const response = await fetch(`countries/name/${userSelection}`);
            if (response.ok) {
              const data = await response.json();
              setUserData([...userData, data]);
            } else {
              throw new Error("Error fetching country data");
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userSelection]);

  // handlers
  const handleUserSelection = (userSelection) => {
    setUserSelection(userSelection);
  };

  const handleCardClose = (itemID) => {
    setUserData(
      userData.filter((item) => {
        return item.id !== itemID;
      })
    );
  };

  const handleCardPin = async (itemID) => {
    try {
      let pins = [...userPins, itemID];
      await Storage.async_setItems(pins);
      setUserPins(pins);
    } catch (error) {
      console.log("file: App.jsx:94 ~ handleCardPin ~ error:", error);
    }
  };

  const handleCardUnpin = async (itemID) => {
    try {
      let updatedUserPins = userPins.filter((item) => {
        return item !== itemID;
      });
      setUserPins(updatedUserPins);
      await Storage.async_setItems(updatedUserPins);
    } catch (error) {
      console.log("file: App.jsx:107 ~ handleCardUnpin ~ error:", error);
    }
  };

  // template
  return (
    <div>
      {ready ? (
        <div>
          <Autocomplete
            userOptions={userOptions}
            onUserSelection={handleUserSelection}
          />
          {userData?.length > 0 && (
            <>
              <ul>
                {userData.map((item) => (
                  <li key={item.id}>
                    <Card
                      item={item}
                      bookmark={userPins.includes(item.id)}
                      onClose={handleCardClose}
                      onUnpin={handleCardUnpin}
                      onPin={handleCardPin}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
