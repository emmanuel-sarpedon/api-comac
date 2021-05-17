// $$ -- DEPENDENCIES -- $$
const readline = require("readline");
const fs = require("fs");
const pcm2csv = require("./lib/recursive-pcm2csv");
const getFiles = require("./lib/getFilesWithExpectedExtension");

// $$ -- HEADING-- $$

const heading = `
---------------------------------------------
PCM to CSV
---------------------------------------------
Version : 0.0.1
Description : Generate .csv files from .pcm files data
Author : Emmanuel SARPEDON
License : ISC
---------------------------------------------`;

// $$ -- APP -- $$

console.log(heading);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quel est le répertoire source ? \n", async (res) => {
  try {
    console.log(`Génération .csv depuis : ${res}`);
    const files = getFiles(res, "pcm");
    console.log(`${files.length} fichier(s) .pcm trouvés !`);
    const csv = pcm2csv(res);
    rl.question(
      "Dans quel répertoire enregistrer le .csv ? \n",
      async (dir) => {
        try {
          rl.question(
            "Nommage du fichier (ne pas préciser d'extension) : ",
            async (file) => {
              await fs.appendFileSync(`${dir}/${file}.csv`, csv);
              console.log(
                `Fichier bien créé : ${dir.split("/").pop()}/${file}`
              );
              rl.close();
            }
          );
        } catch (error) {
          console.log(`Le script a planté ... ! Error : ${error.message}`);
          rl.close();
        }
      }
    );
  } catch (error) {
    console.log(`Erreur... : ${error.message}`);
    rl.close();
  }
});
