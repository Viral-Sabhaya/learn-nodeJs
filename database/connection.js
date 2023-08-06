const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/nodejstutorial")
  .then(() => {
    console.log("Connection succesfull");
  })
  .catch((err) => {
    console.log("ERROR::>>>>", err);
  });

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cnfpassword: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", schema);
module.exports = user;
