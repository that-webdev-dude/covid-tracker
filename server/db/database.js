import data from "./data.js";

class Database {
  constructor() {
    this.data = data;
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        return {
          done: index > this.data.length - 1 ? true : false,
          value: this.data[index++],
        };
      },
    };
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      for (let item of this.data) {
        if (id === item.id) resolve(item);
      }
      reject(new Error(`DB Error: ${id} is not registered in the Database`));
    });
  }

  findByCountryName(countryName) {
    return new Promise((resolve, reject) => {
      for (const item of this.data) {
        if (countryName === item.name) resolve(item);
      }
      reject(
        new Error(`DB Error: ${countryName} is not registered in the Database`)
      );
    });
  }

  findByCountryCode(countryCode) {
    return new Promise((resolve, reject) => {
      for (const item of this.data) {
        if (countryCode === item.code) resolve(item);
      }
      reject(
        new Error(`DB Error: ${countryCode} is not registered in the Database`)
      );
    });
  }

  map(f) {
    return this.data.map(f);
  }
}

export default Database;
