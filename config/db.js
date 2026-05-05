const mongoose = require("mongoose");

mongoose.connect("mongodb://ayham:Ayham12345@ac-bo7q8zp-shard-00-00.klqtouu.mongodb.net:27017,ac-bo7q8zp-shard-00-01.klqtouu.mongodb.net:27017,ac-bo7q8zp-shard-00-02.klqtouu.mongodb.net:27017/work14?ssl=true&replicaSet=atlas-gap54r-shard-0&authSource=admin&appName=Cluster0")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });