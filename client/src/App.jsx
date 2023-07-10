import "./App.css";
import { useState, useEffect } from "react";
import Storage from "./tools/Storage";
import Autocomplete from "./components/Autocomplete";

function App() {
  const [userSelection, setUserSelection] = useState("");
  const [userOptions, setUserOptions] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userPins, setUserPins] = useState([]);
  const [ready, setReady] = useState(false);

  // initialize
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

  // fetch on selection
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
        // if (userSelection !== "") {
        //   const selected = userData.find((item) => item.name === userSelection);
        //   if (selected) {
        //     return;
        //   } else {
        //     const dataItem = await Service.async_getCountry(userSelection);
        //     setUserData([...userData, dataItem]);
        //   }
        // }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userSelection]);

  const handleUserSelection = (userSelection) => {
    setUserSelection(userSelection);
  };

  const handleCloseButtonClick = (e, itemName) => {
    e.preventDefault();
    let updatedUserData = userData.filter((item) => {
      return item.name !== itemName;
    });
    setUserData(updatedUserData);
  };

  const handlePinButtonClick = async (e, itemID) => {
    e.preventDefault();
    let updatedUserPins = [...userPins, itemID];
    setUserPins(updatedUserPins);
    await Storage.async_setItems(updatedUserPins);
  };

  const handleUnpinButtonClick = async (e, itemID) => {
    e.preventDefault();
    let updatedUserPins = userPins.filter((item) => {
      return item !== itemID;
    });
    setUserPins(updatedUserPins);
    await Storage.async_setItems(updatedUserPins);
  };

  const itemIsPinned = (itemID) => {
    return userPins.includes(itemID);
  };

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
              <small>{userData?.length}</small>
              {userData.map((item) => (
                <li key={item.id}>
                  {itemIsPinned(item.id) ? (
                    // unpin/unpin button
                    <button
                      onClick={(e) => {
                        handleUnpinButtonClick(e, item.id);
                      }}
                    >
                      unpin
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        handlePinButtonClick(e, item.id);
                      }}
                    >
                      pin
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      handleCloseButtonClick(e, item.name);
                    }}
                  >
                    close
                  </button>

                  <div>{item.name}</div>
                  <div>{item.cases}</div>
                  <div>{item.deaths}</div>
                  <div>{item.todayCases}</div>
                  <div>{item.todayDeaths}</div>
                </li>
              ))}
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
