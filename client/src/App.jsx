import "./App.css";
import { useState, useEffect } from "react";
import Service from "./tools/Service";
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
        let options = await Service.async_getOptions();
        let pins = await Storage.async_getItems();
        let data = await Service.async_getCountries(pins);
        setUserOptions(options);
        setUserData(data);
        setUserPins(pins);
        setReady(true);
      } catch (error) {
        console.log(error);
      }
    };
    initialize();
  }, [ready]);

  // fetch on selection
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userSelection !== "") {
          const selected = userData.find((item) => item.name === userSelection);
          if (selected) {
            return;
          } else {
            const dataItem = await Service.async_getCountry(userSelection);
            setUserData([...userData, dataItem]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
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

  const handlePinButtonClick = async (e, itemName) => {
    e.preventDefault();
    let updatedUserPins = [...userPins, itemName];
    setUserPins(updatedUserPins);
    await Storage.async_setItems(updatedUserPins);
  };

  const handleUnpinButtonClick = async (e, itemName) => {
    e.preventDefault();
    let updatedUserPins = userPins.filter((item) => {
      return item !== itemName;
    });
    setUserPins(updatedUserPins);
    await Storage.async_setItems(updatedUserPins);
  };

  const itemIsPinned = (itemName) => {
    return userPins.includes(itemName);
  };

  return (
    <>
      <Autocomplete
        userOptions={userOptions}
        onUserSelection={handleUserSelection}
      />

      {userData?.length > 0 && (
        <ul>
          {userData.map((item, index) => (
            <li key={index}>
              {itemIsPinned(item.name) ? (
                // unpin button
                <button
                  onClick={(e) => {
                    handleUnpinButtonClick(e, item.name);
                  }}
                >
                  unpin
                </button>
              ) : (
                // pin button
                <button
                  onClick={(e) => {
                    handlePinButtonClick(e, item.name);
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
        </ul>
      )}
    </>
  );
}

export default App;
