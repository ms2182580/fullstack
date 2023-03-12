import { pickJustOne } from "./ORG_Filterdata"

const AboutCollection = {
  FiveStars: [
    "I was extremely satisfied with the care I received from __NAMEHERE__. They were knowledgeable, compassionate, and always made me feel comfortable",

    "__FULLNAMEHERE__ is top-notch. Their expertise, kindness, and dedication to my well-being were truly appreciated. I highly recommend their services to anyone seeking quality medical care",

    "I had an excellent experience with __NAMEHERE__. They were very skilled, caring, and made me feel at ease throughout my treatment. I highly recommend their services to anyone in need of medical care",

    "I am extremely impressed with the care I received from __NAMEHERE__. They were knowledgeable, patient, and always went above and beyond to ensure I was receiving the best possible treatment",

    "__FULLNAMEHERE__ was amazing. Knowledgeable and caring. Highly recommend",

    "__NAMEHERE__ was fantastic. Professional, compassionate, and efficient. Highly recommend",

    "I had a great experience with __NAMEHERE__. Knowledgeable, kind, and attentive",

    "I am very happy with __FULLNAMEHERE__"
  ],

  ThreeStars: [
    "This professional I saw was just okay. Nothing particularly stands out as exceptional or inadequate",

    "The service I received from __NAMEHERE__ was satisfactory, but nothing to write home about",

    "I can't say that I was overly impressed with this professional I saw. The service was fine, but not exceptional",

    "I was not particularly impressed with __NAMEHERE__. The service was satisfactory, but nothing special."
  ]
}

export const getAllReviews = (amountOfReviews = 3) => {
  const shuffled = [...AboutCollection.FiveStars].sort(() => 0.5 - Math.random())
  const shuffledArr = shuffled.slice(0, amountOfReviews)

  const starOfFourReview = pickJustOne(["FiveStars", "ThreeStars"])
  if (starOfFourReview === "ThreeStars") {
    const getLastReview = pickJustOne(AboutCollection[starOfFourReview])
    shuffledArr.push({ review: getLastReview, stars: 3 })
  } else {
    const finalFiveStarReview = AboutCollection.FiveStars.filter((x) => !shuffledArr.includes(x))
    shuffledArr.push(finalFiveStarReview[0])
  }
  return shuffledArr
}

const formatNamesFunction = (arr, name, lastName) => {
  const fullName = `${name} ${lastName}`

  const namesChanged = arr.map((x) => {
    if (typeof x === "string") {
      let firstChange = x.replace("__FULLNAMEHERE__", fullName)
      let secondChange = firstChange.replaceAll("__NAMEHERE__", name)
      return secondChange
    } else {
      let firstChange = x.review.replace("__FULLNAMEHERE__", fullName)
      let secondChange = firstChange.replaceAll("__NAMEHERE__", name)
      return { review: secondChange, stars: 3 }
    }
  })

  return namesChanged
}

export const ORG_ST_Review = (name, lastName, amountOfReviews) => {
  const retrieveReviews = getAllReviews(amountOfReviews)
  const formatedNames = formatNamesFunction(retrieveReviews, name, lastName)
  return formatedNames
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export const ORG_ST_Review_Months = () => {
  const pickedOneMonth = pickJustOne(months)
  return pickedOneMonth
}

export const ORG_ST_LastUpdate = () => {
  const nineDaysMore = 777_600_000
  const getDate = new Date(new Date().getTime() - nineDaysMore)

  const getYear = getDate.getFullYear()
  const getDay = getDate.getDate()
  const getMonth = getDate.getMonth() + 1
  
  const montFormatted = getMonth <= 9 ? `0${getMonth}` : `${getMonth}`
  
  
  
  return `${montFormatted}/${getDay}/${getYear}`
}
