/*
const cars = ["agya","ayla","cayla","sigra"];

const panjangCars = cars.length
const ambilIndexNol = cars[0]
const ambilData = cars.slice(1,3)


console.log(panjangCars)
console.log(ambilIndexNol)
console.log(ambilData)
*/

//mengambil data
/*
const secondCars = ["honda", "toyota", "suzuki", ["almaz", "confero", "airev"]];

const ambilConfero = secondCars[3][1];
console.log(ambilConfero);
*/

//mengganti data
/*
const secondCars = ["honda", "toyota", "suzuki", ["almaz", "confero", "airev"]];

secondCars[2] = "Wulling";
secondCars[0] = "mazda";

console.log(secondCars);
*/

//const secondCars = ["honda", "toyota", "suzuki", ["almaz", "confero", "airev"]];

/*
secondCars.push("dono");

console.log(secondCars);
*/

/*
const searchEsemka = secondCars.includes("suzuki", 0);
console.log(searchEsemka);
*/
/*
const motors = ['legenda', 'supra', 'astrea', ['almaz', 'confero', 'airev']]

for (let i = 0; i <= 3; i++) {
  console.log(motors[i])
}
*/

/*
const data = [80, 50, 20, 10, 0]
let iniDataBaru = []
for (let i = 0; i <= 4; i++) {
  let nilaiData = data[i]
  if (nilaiData > 40) {
    iniDataBaru.push(nilaiData)
  } else {
  }
}

console.log(iniDataBaru)
*/

/*
const data = [80, 50, 20, 10, 0]

function munculkanArraw(param) {
    let iniDataBaru = []

    for (let i = 0; i <= 4; i++){
        if (param[i] > 40)
    }
}
*/

//map
/*
const score = [10, 50, 70, 80]

const cetak = score.filter(function (item) {
  return item > 10
})
console.log(cetak)

const print = score.map((item) => {
  return item > 10
})
console.log(print)
*/
/*
const me = {
  name: "haki",
  parents: ["devi", "miko"],
  address: "bogor",
  hobby: "coding",
  olderBrother: {
    name: "altaf",
    address: "bogor",
    hobby: ["coding", "sleeping"],
  },
};

me.address = "bandung"
console.log(me.address)
*/

const NFTStore = {
  artPieces: [
    {
      pieceName: "Emo Flamingos",
      price: 30,
      ownerList: [
        {
          name: "Fida Ernest",
          userID: 23849,
          purchaseDate: "09/13/2021",
        },
        {
          name: "Eric Karger",
          userID: 23510,
          purchaseDate: "09/13/2021",
        },
      ],
    },
    {
      pieceName: "Where is my bit wallet",
      price: 100,
      ownerList: [],
    },
  ],
  storeCredits: 1000,
};


const ambilPurchaseDate = NFTStore.artPieces[0].ownerList[0].purchaseDate
NFTStore.artPieces[1].ownerList = ["dadang", "dudung"]

console.log(ambilPurchaseDate)
console.log(NFTStore.artPieces[1].ownerList)