const pcm2json = require("./pcm2json");

const pcm2csv = (path) => {
  try {
    let csv = "Fichier;Nom;Hauteur;Classe;Effort;BandeauVertAPoser;X;Y"; // .csv heading
    const json = pcm2json(path);
    const pole = json.Etude.Supports[0].Support; // ? there is only one value in "Supports" array
    for (let i = 0; i < pole.length; i++) {
      csv += "\n" + path.split("/").pop() + ";";
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
    return csv;
  } catch (error) {}
};

module.exports = pcm2csv;

/** .PCM pole 
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
