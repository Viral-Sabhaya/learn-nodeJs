const userDetail = {
  name: "viral",
  age: 25,
  address: "Surat",
};
// convert json data
const jsonData = JSON.stringify(userDetail);
console.log("jsonData::>>>", jsonData);

// convert json to object
const objectData = JSON.parse(jsonData);
console.log("objectData::>>>", objectData);
