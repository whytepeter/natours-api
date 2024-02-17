const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const setupDB = require("../../config/database.config");
const Tour = require("../../models/tourModel");

dotenv.config({ path: "./config.env" });

setupDB();

//READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

//IMPORT DATE INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data successully loaded");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

//DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data successully deleted");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
