/* -- PACKAGES -- */
const xml2js = require("xml2js").parseString;
const fs = require("fs");
const readline = require("readline");
const pathPcm = "assets/47032-AGE-PMZ-02378.PCM";

//let xml = fs.readFileSync("./assets/47032-AGE-PMZ-02378.PCM", "utf8"); // todo: select directory with readline ?
//const pathPcm = "ssets/47032-AGE-PMZ-02378.PCM"; // * error expected..

/* -- FUNCTIONS -- */
const convertPcmToJson = (path) => {
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

const exportComacToCsv = (path) => {
  let csv = "Nom;Hauteur;Classe;Effort;X;Y"; // .csv quitheading
  let json = convertPcmToJson(path);
  const pole = json.Etude.Supports[0].Support; // ? there is only one value in "Supports" array
  for (let i = 0; i < pole.length; i++) {
    csv += `\n${pole[i].Nom};${pole[i].Hauteur};${pole[i].Classe};${pole[i].Effort};${pole[i].X};${pole[i].Y}`;
  }
  return csv;
};

console.log(exportComacToCsv(pathPcm));
//let json = convertPcmToJson(pathPcm);
//

//console.log(json.Etude.Supports[0].Support[0]);

// ! console.log(supports[2].NonCalcule[0] === "1");

// console.log(supportsToExport);
// console.log(supports);

// let test = "Ceci;est;un;test\n0;2;3;4";
// todo: fs.writeFileSync("test.csv", test);
//console.log(test);

/** .PCM support 
 * ? [Object].Etude.Supports[0].Support[i] --> there is only one value in Supports array
{
  * ! Nom: [ 'NC0001' ],
  Facade: [ '0' ],
  Nature: [ 'BE' ],
  * ! Hauteur: [ '11' ], 
  * ! Classe: [ 'A' ],
  * ! Effort: [ '1,5' ],
  Orientation: [ '390' ],
  Etat: [ 'Bon �tat' ],
  Commentaire: [ '' ],
  BranchementsBT: [ '0' ],
  optBranchementsTelExistants: [ '0' ],
  * ? optBandeauVertAPoser: [ '0' ],
  optBandeauVertExistant: [ '0' ],
  ReservationEP: [ '0' ],
  PresenceEP: [ '1' ],
  HauteurEP: [ '9' ],
  APoser: [ '0' ],
  * ? NonCalcule: [ '1' ], 
  Illisible: [ '1' ],
  Surimplantation: [ '0' ],
  * ! X: [ '444571,2' ],
  * ! Y: [ '6430938' ],
  Z: [ '0' ],
  Annee: [ '' ],
  optMALTBT: [ '0' ],
  RASBT: [ '0' ],
  RASFT: [ '0' ],
  RASCO: [ '0' ],
  RASFO: [ '0' ],
  optMALTCuivre: [ '0' ],
  optMALTCoaxial: [ '0' ],
  optBoitierCuivre: [ '0' ],
  optBoitierCoaxial: [ '0' ],
  optBoitierFibre: [ '0' ],
  NbRaccordementsCuivre: [ '0' ],
  NbRaccordementsCoaxial: [ '0' ],
  NbRaccordementsFibre: [ '0' ]
  */

/** BETTER COMMENTS METHOD
 * *important
 * !très important
 * ?question
 * todo:a faire
 * @param parametre
 */
