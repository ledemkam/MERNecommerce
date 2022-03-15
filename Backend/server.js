const express = require("express");
const produkt = require("./data/produkt");
const dotenv = require("dotenv");

const app = express();

dotenv.config;

app.get("/", (req, res) => {
  res.send("api auf dem server");
});
app.get("/api/produkt", (req, res) => {
  res.json(produkt);
});

app.get("/api/produkt/:id", (req, res) => {
  const produks = produkt.find((produk) => produk.id === req.params.id);
  res.json(produks);
});
const PORT = process.env.PORT || 5009;
app.listen(PORT, console.log(`to listen server au port ${PORT}`));
