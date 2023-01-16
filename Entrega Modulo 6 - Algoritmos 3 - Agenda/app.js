console.log("Entraga modulo 6 - Algoritmos 3");

// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

var randomAvailability = (a, b) => (Math.random() < 0.5 ? a : b);

var createRandomAgenda = (myTeam) => {
  for (let team of myTeam) {
    for (let i = 0; i < team.availability.length; i++) {
      team.availability[i] = randomAvailability("SI", "NO");
    }
  }
};

createRandomAgenda(myTeam);

var showRandomAgenda = (myTeam) => {
  for (let team of myTeam) {
    console.log(`Disponibilidad de ${team.name}`);
    for (let i = 0; i < 8; i++) {
      console.log(WORK_HOURS[i] + ": " + team.availability[i]);
    }
  }
};

showRandomAgenda(myTeam);

var findTheSpot = (myTeam) => {
  let freeSpot = 0;
  for (let i = 0; i < myTeam[0].availability.length; i++) {
    for (let j = 0; j < myTeam.length; j++) {
      if (myTeam[j].availability[i] === "SI") {
        freeSpot++;
        if (freeSpot === 4) {
          return console.log("Hay hueco en la franja " + WORK_HOURS[i]);
        }
      }
    }
    freeSpot = 0;
  }
  console.log("Lo siento. No hay hueco disponible en el equipo.");
};

findTheSpot(myTeam);
