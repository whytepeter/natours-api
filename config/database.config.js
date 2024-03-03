const mongoose = require("mongoose");

const setupDB = () => {
  const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then((con) => {
      //   console.log(con.connections);
      console.log("DB connection successful!");
    });
};

module.exports = setupDB;
