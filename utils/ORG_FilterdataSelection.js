const pickJustOne = (arr) => {
  const random = Math.floor(Math.random() * arr.length)
  return arr[random]
}

const getCorrectOrder = (arrToOrder, arrCorrectOrder) => {
  let finalCorrectOrder = []
  for (const x of arrCorrectOrder) {
    for (const y of arrToOrder) {
      if (x === y) {
        finalCorrectOrder.push(x)
        break
      }
    }
  }
  return finalCorrectOrder
}

const pickMoreThanOne = (arr, pickEnglish = false, diagnoses = false) => {
  const howMuch = Math.floor(Math.random() * arr.length + 1)
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  const shuffledArr = shuffled.slice(0, howMuch)

  if (pickEnglish) {
    shuffledArr.indexOf("english") === -1 && shuffledArr.push("english")
    let toReturn = getCorrectOrder(shuffledArr, arr)
    return toReturn
  }

  let toReturn = getCorrectOrder(shuffledArr, arr)
  return toReturn
}

export const ORG_Filterdata_Distance = (whichSelect = []) => {
  console.log("DISTANCE_whichSelect:", whichSelect)
  // console.log()

  const actualDistanceMiles = whichSelect.length === 0 ? ["0-5", "5-10", "10-20", "+20"] : whichSelect
  return pickJustOne(actualDistanceMiles)

}

export const ORG_Filterdata_Rating = (whichSelect) => {
  // console.log("RATING_whichSelect:", whichSelect)
  const rating = ["1", "2", "3", "4", "5"]
  return pickJustOne(rating)
}

export const ORG_Filterdata_Reviews = () => {
  const reviews = ["1", "2", "3", "4", "5", "+5"]
  return pickJustOne(reviews)
}

export const ORG_Filterdata_Diagnoses = (whichSelect) => {
  const diagnoses = [
    "Autism (ASD)",
    "ADHD",
    "Down Syndrome",
    "Cerebral Palsy",
    "Fragile X",
    "Other"
  ]
  return pickMoreThanOne(diagnoses)
}

export const ORG_Filterdata_AgesServed = (whichSelect) => {
  const agesServed = [
    "0-18 months",
    "2-3 years",
    "4-5 years",
    "6-11 years",
    "12-21 years",
    "22-40 years",
    "41-64 years",
    "65+ years"
  ]

  return pickMoreThanOne(agesServed)
}

export const ORG_Filterdata_Languages = (whichSelect) => {
  const languages = ["english", "spanish", "chinese", "tagalog", "french"]

  return pickMoreThanOne(languages, true)
}

export const ORG_Filterdata_YoP = (whichSelect) => {
  const yearsOfPractice = [
    "1+ years",
    "3+ years",
    "5+ years",
    "7+ years",
    "10+ years"
  ]
  return pickJustOne(yearsOfPractice)
}
export const ORG_Filterdata_ServiceSetting = (whichSelect) => {
  const serviceSetting = ["clinic", "home", "school", "community"]

  return pickMoreThanOne(serviceSetting)
}

export const ORG_Filterdata_Accepts = (whichSelect) => {
  const accepts = ["medicaid", "insurance", "private pay", "DOE approved"]

  return pickMoreThanOne(accepts)
}

export const ORG_Filterdata_MeetingFormat = (whichSelect) => {
  const meetingFormat = ["virtual", "in-person"]

  return pickMoreThanOne(meetingFormat)
}

export const ORG_Filterdata_SessionType = (whichSelect) => {
  const sessionType = ["individual", "group"]
  return pickMoreThanOne(sessionType)
}

export const ORG_Filterdata_Transportation = (whichSelect) => {
  const transportation = [
    "near metro",
    "near bus",
    "meter parking",
    "street parking",
    "parking lot"
  ]

  return pickMoreThanOne(transportation)
}

export const ORG_Filterdata_ProviderType = (whichSelect) => {
  const providerType = ["independent", "agency-based", "traveling"]

  return pickJustOne(providerType)
}
