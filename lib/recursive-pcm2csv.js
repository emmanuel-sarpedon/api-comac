const getFiles = require("./getFilesWithExpectedExtension");
const pcm2json = require("./pcm2json");

const recursivePcm2csv = (path) => {
  let csv =
    "Fichier;Nom;Hauteur;Classe;Effort;BandeauVertAPoser;NonCalculé;X;Y";
  const files = getFiles(path, "pcm");

  for (let i = 0; i < files.length; i++) {
    const json = pcm2json(files[i]);
    try {
      const pole = json.Etude.Supports[0].Support;
      for (let i = 0; i < pole.length; i++) {
        csv += "\n" + files[i].split("/").pop() + ";";
        csv += pole[i].Nom[0] + ";";
        csv += pole[i].Hauteur[0] + ";";
        csv += pole[i].Classe[0] + ";";
        csv += pole[i].Effort[0] + ";";
        csv +=
          pole[i].optBandeauVertAPoser[0] === "1" ? "OUI" + ";" : "NON" + ";";
        csv += pole[i].NonCalcule[0] === "1" ? "OUI" + ";" : "NON" + ";";
        csv += pole[i].X[0] + ";";
        csv += pole[i].Y[0] + ";";
      }
    } catch (error) {}
  }
  return csv;
};

module.exports = recursivePcm2csv;
