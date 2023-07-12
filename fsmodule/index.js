const fs = require("fs");

// non-blocking io model (asyncronus) ===> means first run outer console then run function console
// fs.writeFile("file.txt", "Viral Sabhaya", () => {
//   console.log("Data is succesfully added");
// });
// console.log("DDDD");

// (syncronus) ===> means that first run first console than run another console
let b = fs.writeFileSync("file2.txt", "add file data");
console.log(b);
console.log("add data");

// Read data
// const read = fs.readFile("file2.txt", "utf-8", (err, data) => {
//   console.log(data);
//   console.log(err);
// });

// add data
fs.appendFile("file.txt", " data is not askjasdjkasdkjsakd", (err, data) => {
  console.log(err);
});

// rename file name
// fs.rename("viral.txt", "file.txt", (err) => {
//   console.log(err);
// });

// delete data
// fs.unlinkSync("file2.txt");
