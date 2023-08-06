const express = require("express");
const app = express();
const port = 3000;
const user = require("./connection");

// POST GET PUT/PATCH  DELETE0

// POST ==> data send to database
// GET ==> data get from to database
// PUT/(PATCH) ==> Update data to database
// DELETE ==> Delete data from to database

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const getEmail = await user.findOne({ email: userEmail });
    res.send(getEmail);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const senData = new user(req.body);
    const saveData = await senData.save();
    res.send(saveData);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/user", async (req, res) => {
  try {
    const getData = await user.find({});
    res.send(getData);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await user.findOneAndDelete({ _id: id });
    res.send(deleteData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await user.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(updateData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getIdData = await user.findById({ _id: id });
    res.send(getIdData);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
