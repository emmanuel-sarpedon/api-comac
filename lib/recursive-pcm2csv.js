const getFiles = require("./getFilesWithExpectedExtension");
const pcm2json = require("./pcm2json");

const recursivePcm2csv = path => {
	let csv =
		"Fichier;Nom;Hauteur;Classe;Effort;BandeauVertAPoser;NonCalculé;X;Y;CPFOR";
	const files = getFiles(path, "pcm");

	const typeArray = ["A", "B", "C", "D", "E", "S", "SC", "SCX", "SD"];
	const firstPole = "CCAFH";
	const nextPole = "PVCFH";

	for (let i = 0; i < files.length; i++) {
		const json = pcm2json(files[i]);

		if (json) {
			const pole = json.Etude.Supports[0].Support; // ? there is only one value in "Supports" array

			let isFirstPole = true;

			for (let j = 0; j < pole.length; j++) {
				csv += "\n" + files[i].split("/").pop() + ";";
				csv += pole[j].Nom[0] + ";";
				csv += pole[j].Hauteur[0] + ";";
				csv += pole[j].Classe[0] + ";";
				csv += pole[j].Effort[0] + ";";
				csv +=
					pole[j].optBandeauVertAPoser[0] === "1" ? "OUI" + ";" : "NON" + ";";
				csv += pole[j].NonCalcule[0] === "1" ? "OUI" + ";" : "NON" + ";";
				csv += pole[j].X[0] + ";";
				csv += pole[j].Y[0] + ";";

				if (isFirstPole && typeArray.includes(pole[j].Classe[0])) {
					csv += firstPole + ";";
					isFirstPole = false;
				} else if (!isFirstPole && typeArray.includes(pole[j].Classe[0])) {
					csv += nextPole + ";";
				} else {
					csv += ";";
				}
			}
		}
	}
	return csv;
};

module.exports = recursivePcm2csv;

// /Volumes/Windows/00-Engie/D3 ENEDIS/RETOUR PYS2/Listing .pcm/24
