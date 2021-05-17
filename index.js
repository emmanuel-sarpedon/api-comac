const fs = require("fs");
const rp2csv = require("./lib/recursive-pcm2csv");

try {
  fs.appendFileSync("./waste/comac.csv", rp2csv("/Volumes/Windows/00-Engie"));
  console.log("File successfully created !");
} catch (error) {
  console.log(error.message);
}
