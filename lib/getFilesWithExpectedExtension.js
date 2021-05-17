const rrs = require("recursive-readdir-sync");
const isExpExt = require("./isExpectedExtension");

const getFilesWithExpectedExtension = (directory, extension) => {
  const files = rrs(directory); // Get files list in directory
  const filesWithExtension = [];
  for (let i = 0; i < files.length; i++) {
    let fileName = files[i].split("/").pop();
    if (isExpExt(files[i], extension) && fileName.slice(0, 1) !== ".") {
      // Exclude hidden files
      filesWithExtension.push(files[i]);
    }
  }
  filesWithExtension.sort();
  return filesWithExtension;
};

module.exports = getFilesWithExpectedExtension;
