export const DATA_AT_D_Filters = [
  {
    price: "$36,000 - $37,888",
    speed: "7.5 mph (12 kmh)",
    range: "24 miles (40 km)",
    maxWeight: "300 lbs (136 kg)"
  },
  {
    price: "From $1,495.00",
    speed: "Manual",
    range: "Self powered",
    maxWeight: "264 lbs (120 kg)"
  }
]

export const DATA_AT_D_Filters_Contact = {
  phone: "(012) 345-6789, ext. 4001",
  email: "denise@truong-macgill.com",
  web: {
    fistName: "truong",
    lastName: "macgill"
  },
  location: {
    city: "Brooklyn",
    streetName: "Remsen Street, Suite #2",
    streetNumber: "163",
    state: "NY 11201",
    howFar: "3"
  }
}



export const generateRandomNumber = (min = 1, max = 999) => {
  let random = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(random)
}

/* 
this file is not used
*/

/* 
let arrayToUse = Array(10).fill(0)
console.log("arrayToUse:", arrayToUse)

let arrayToGetFilters = Array(2).fill({price:"", type:""})
console.log("🔰arrayToGetFilters:", arrayToGetFilters, arrayToGetFilters.length)

let theLength = arrayToGetFilters.length
console.log("💕theLength:", theLength + 1)

let whichUse =  arrayToUse.map((x,i) => console.log("x:", x, i % (theLength + 1) === 0 ? 0 : 1))

*/
