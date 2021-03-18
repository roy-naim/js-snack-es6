const bikes = [];

bikes.push ({
  nome: "BMX",
  peso: 3
});

bikes.push ({
  nome: "Graziella",
  peso: 4
});

bikes.push ({
  nome: "Bici",
  peso: 5
});

let index = 0;
let min = bikes[0].peso;
for (let i = 0; i < bikes.length; i++) {
  if (bikes[0].peso < min) {
    min = bikes[i].peso;
    index = i;
  }
}

const {peso} = bikes;
 console.log(`La bici che pesa di meno e' ${bikes[index].nome} ed il suo peso e' ${min}`);
