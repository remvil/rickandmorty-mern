const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiBaseUrl = "https://rickandmortyapi.com/api";

/**
 * Get Route about Rick And Morty API characters
 */
router.get("/", function (req, res, next) {
  axios
    .get(apiBaseUrl + "/character")
    .then((response) => {
      // TODO Define pagination logic
      // TODO Manage list store into db to prevent multiple queries
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.send(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
});

/**
 * Get the detail of a single character
 */
router.get("/detail", function (req, res, next) {
  axios
    .get(apiBaseUrl + "/character/" + req.query.id)
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
