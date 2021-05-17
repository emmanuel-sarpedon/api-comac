const rrs = require("recursive-readdir-sync");
const isExpExt = require("./isExpectedExtension");

const dir = "/Volumes/Windows/00-Engie/D3 ENEDIS";
const ext = "pcm";
const tab = [];

const getFilesWithExpectedExtension = (directory, extension) => {
  const files = rrs(directory); // Get files list in directory
  const filesWithExtension = [];
  for (let i = 0; i < files.length; i++) {
    if (isExpExt(files[i], extension)) {
      filesWithExtension.push(files[i]);
    }
  }
  return filesWithExtension;
};

module.exports = getFilesWithExpectedExtension;
