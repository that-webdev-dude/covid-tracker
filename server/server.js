import Database from "./db/database.js";
import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();
const db = new Database();

app.use(cors());

app.get("/countries", (req, res) => {
  const countries = db.map((item) => ({
    id: item.id,
    name: item.name,
    code: item.code,
    img: item.img,
  }));
  res.json(countries);
});

app.get("/countries/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((country) => {
      res.json(country);
    })
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
});

app.get("/countries/name/:countryName", (req, res) => {
  const { countryName } = req.params;
  db.findByCountryName(countryName)
    .then((country) => {
      res.json(country);
    })
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
});

app.get("/countries/code/:countryCode", (req, res) => {
  const { countryCode } = req.params;
  db.findByCountryCode(countryCode)
    .then((country) => {
      res.json(country);
    })
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
});

// production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
