// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti,
// falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array in cui elementi contengono solo nomi e
// falli subiti e stampiamo tutto in console.

const squadre = [
  {
    nome: "Juventus",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Sassuolo",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Shakhtar",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Leicester",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Maccabi",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Bayern Munich",
    puntifatti: 0,
    falli: 0,
  },
]

let newDati = []

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntifatti = randomNumberInRange(0, 100);
  squadre[i].falli = randomNumberInRange(0, 100);

  const {nome, falli} = squadre[i]
  newDati.push({nome, falli});
  // $('#lista').append(`<li>${nome}, ${falli}</li>`);
}

console.log(newDati);

// FUNCTIONS

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.log(squadre);






// var squadre = [
//   {
//     nome: "Juventus",
//     puntifatti: randomNumberInRange(0, 100),
//     falli: randomNumberInRange(0, 100),
//   },
//
//   {
//     nome: "Sassuolo",
//     puntifatti: randomNumberInRange(0, 100),
//     falli: randomNumberInRange(0, 100),
//   },
//
//   {
//     nome: "Shakhtar",
//     puntifatti: randomNumberInRange(0, 100),
//     falli: randomNumberInRange(0, 100),
//   },
// ]
