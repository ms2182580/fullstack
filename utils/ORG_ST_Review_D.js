import { pickJustOne } from "./ORG_FilterdataFunctions_D"

const AboutCollection = {
  FiveStars: [
    "I was extremely satisfied with the care I received from __NAMEHERE__. They were knowledgeable, compassionate, and always made me feel comfortable",

    "__FULLNAMEHERE__ is top-notch. Their expertise, kindness, and dedication to my well-being were truly appreciated. I highly recommend their services to anyone seeking quality medical care",

    "I had an excellent experience with __NAMEHERE__. They were very skilled, caring, and made me feel at ease throughout my treatment. I highly recommend their services to anyone in need of medical care",

    "I am extremely impressed with the care I received from __NAMEHERE__. They were knowledgeable, patient, and always went above and beyond to ensure I was receiving the best possible treatment",

    "__FULLNAMEHERE__ was amazing. Knowledgeable and caring. Highly recommend",

    "__NAMEHERE__ was fantastic. Professional, compassionate, and efficient. Highly recommend",

    "I had a great experience with __NAMEHERE__. Knowledgeable, kind, and attentive",

    "I am very happy with __FULLNAMEHERE__",

    "Excellent Service: Highly Recommend!",

    "Outstanding Service: Will Use Again!",

    "Quick Response, Quality Work. Thank You!",

    "Top-Notch Service: Friendly, Efficient, Skilled!",

    "Amazing Experience: Exceeded Expectations!",

    "Highly Recommended: Couldn't Be Happier!",

    "Absolutely blown away by the exceptional service provided. Professional, efficient and exceeded my expectations. Highly recommend!",

    "I couldn't be happier with the results. The service was top-notch, and __NAMEHERE__ went above and beyond to make sure I was satisfied",

    "The level of professionalism and expertise shown by __NAMEHERE__ is unmatched. I highly recommend them to anyone in need of their services",

    "I was impressed by the quality of service provided. __FULLNAMEHERE__ was knowledgeable, responsive and a pleasure to work with",

    "I highly recommend this service for their exceptional work and attention to detail. __FULLNAMEHERE__ went above and beyond to ensure my satisfaction",

    "The service provided was outstanding. The __NAMEHERE__ was professional, courteous and delivered beyond my expectations. Highly recommend!",
  ],

  ThreeStars: [
    "This professional I saw was just okay. Nothing particularly stands out as exceptional or inadequate",

    "The service I received from __NAMEHERE__ was satisfactory, but nothing to write home about",

    "I can't say that I was overly impressed with this professional I saw. The service was fine, but not exceptional",

    "I was not particularly impressed with __NAMEHERE__. The service was satisfactory, but nothing special",
  ],
}

export const getAllReviews = (amountOfReviews = 3) => {
  let needMore = amountOfReviews > AboutCollection.FiveStars.length
  let shuffledArr

  if (needMore) {
    let arrayWithAllElements = [...AboutCollection.FiveStars]

    for (let i = 0; arrayWithAllElements.length < amountOfReviews; i++) {
      let indexToPush = i % AboutCollection.FiveStars.length
      arrayWithAllElements.push(AboutCollection.FiveStars[indexToPush])
    }

    shuffledArr = arrayWithAllElements
  } else {
    shuffledArr = [...AboutCollection.FiveStars]
      .sort(() => 0.5 - Math.random())
      .slice(0, amountOfReviews)
  }

  const starOfFourReview = pickJustOne(["FiveStars", "ThreeStars"])
  if (starOfFourReview === "ThreeStars") {
    const getLastReview = pickJustOne(AboutCollection[starOfFourReview])
    shuffledArr.push({ review: getLastReview, stars: 3 })
  } else {
    let randomIndex = Math.floor(
      Math.random() * AboutCollection.FiveStars.length
    )
    const finalFiveStarRandom = [...AboutCollection.FiveStars][randomIndex]
    shuffledArr.push(finalFiveStarRandom)
  }
  return shuffledArr
}

export const formatNamesFunction = (arr, name, lastName) => {
  const fullName = `${name} ${lastName}`

  if (Array.isArray(arr)) {
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

  if (typeof arr === "string") {
    let firstChange = arr.replace("__FULLNAMEHERE__", fullName)
    let secondChange = firstChange.replaceAll("__NAMEHERE__", name)
    return secondChange
  }
}

export const ORG_ST_Review = (name, lastName, amountOfReviews) => {
  const retrieveReviews = getAllReviews(amountOfReviews)
  const formatedNames = formatNamesFunction(retrieveReviews, name, lastName)
  return formatedNames
}

export const ORG_ST_Review_Map = (name, lastName, review) => {
  return <div>ORG_ST_Review_Map</div>
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
  "December",
]

export const ORG_ST_Review_Months = (howMuch = 1) => {
  if (howMuch === 1) {
    const pickedOneMonth = pickJustOne(months)
    return pickedOneMonth
  }

  if (howMuch > 1 && howMuch <= months.length) {
    const shuffled = [...months].sort(() => 0.5 - Math.random())
    const shuffledArr = shuffled.slice(0, howMuch)
    return shuffledArr
  }

  if (howMuch > months.length) {
    let newRandomMonths = [...months].sort(() => 0.5 - Math.random())
    for (let i = 0; newRandomMonths.length < howMuch; i++) {
      let indexToPush = i % months.length
      newRandomMonths.push(months[indexToPush])
    }

    return newRandomMonths
  }
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
