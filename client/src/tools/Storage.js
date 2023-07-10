class Storage {
  static async_getItems() {
    return new Promise((resolve) => {
      const data_serialized = localStorage.getItem("bookmarks");
      if (data_serialized) {
        resolve(JSON.parse(data_serialized));
      } else {
        resolve([]);
      }
    });
  }

  static async_setItems(items = []) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(items)) {
        localStorage.setItem("bookmarks", JSON.stringify(items));
        resolve(true);
      } else {
        reject(
          new Error("Storage Error (setItems): items must be of type Array")
        );
      }
    });
  }
}

export default Storage;
