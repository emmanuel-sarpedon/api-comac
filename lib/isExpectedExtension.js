const isExpectedExtension = (fileName, ext) => {
  const tabExt = [ext, ext.toLowerCase(), ext.toUpperCase()];
  if (
    tabExt.indexOf(fileName.split(".").pop()) >= 0 ||
    tabExt.indexOf(fileName.toLowerCase().split(".").pop()) >= 0 ||
    tabExt.indexOf(fileName.toUpperCase().split(".").pop()) >= 0
  ) {
    return true;
  }
  return false;
};

module.exports = isExpectedExtension;
