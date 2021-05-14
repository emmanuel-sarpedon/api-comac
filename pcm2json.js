const xml2js = require("xml2js").parseString;
const fs = require("fs");

const pcm2json = (path) => {
  try {
    let pcm = fs.readFileSync(path, "utf8"); // Import .pcm file in app
    xml2js(pcm, (err, res) => {
      // Convert xml data to json data and create a global variable 'resultJson'
      resultJson = res;
    });
    return resultJson;
  } catch (error) {
    return error;
  }
};

module.exports = pcm2json;
