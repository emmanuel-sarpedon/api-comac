const xml2js = require("xml2js");
const fs = require("fs");
const readline = require("readline");

let xml = fs.readFileSync("./assets/33243-LIB-PMZ-19928.PCM", "utf8");

xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
  //json = JSON.stringify(result, null, 2);
  json = result;
  //fs.writeFileSync("comac.json", json);
});

console.log(json.Etude.Supports[0].Support[0]);

// let test = "Ceci;est;un;test\n0;2;3;4";
// fs.writeFileSync("test.csv", test);
//console.log(test);

/**
{
  Nom: [ 'NC0001' ],
  Facade: [ '0' ],
  Nature: [ 'BE' ],
  Hauteur: [ '11' ], 
  Classe: [ 'A' ],
  Effort: [ '1,5' ],
  Orientation: [ '390' ],
  Etat: [ 'Bon �tat' ],
  Commentaire: [ '' ],
  BranchementsBT: [ '0' ],
  optBranchementsTelExistants: [ '0' ],
  * ! optBandeauVertAPoser: [ '0' ],
  optBandeauVertExistant: [ '0' ],
  ReservationEP: [ '0' ],
  PresenceEP: [ '1' ],
  HauteurEP: [ '9' ],
  APoser: [ '0' ],
  * ! NonCalcule: [ '1' ], 
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
