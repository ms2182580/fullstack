import { ORG_FILTERS_DATA } from "./ORG_FiltersCategories"

export const pickJustOne = (arr) => {
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

const pickMoreThanOne = (arr, pickEnglish = false) => {
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
  const actualDistanceMiles =
    whichSelect.length === 0 ? ["0-5", "5-10", "10-20", "+20"] : whichSelect
  return pickJustOne(actualDistanceMiles)
}

export const ORG_Filterdata_Rating = (whichSelect = []) => {
  const rating =
    whichSelect.length === 0 ? ["1", "2", "3", "4", "5"] : whichSelect
  return pickJustOne(rating)
}

export const ORG_Filterdata_Reviews = () => {
  const reviews = ["1", "2", "3", "4", "5", "+5"]
  return pickJustOne(reviews)
}

export const ORG_Filterdata_Diagnosis = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }

  return pickMoreThanOne(ORG_FILTERS_DATA.diagnosis)
}

export const ORG_Filterdata_AgesServed = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }

  return pickMoreThanOne(ORG_FILTERS_DATA.agesServed)
}

export const ORG_Filterdata_Languages = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }

  return pickMoreThanOne(ORG_FILTERS_DATA.languages, true)
}

export const ORG_Filterdata_YoP = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }
  return pickJustOne(ORG_FILTERS_DATA.yearsOfPractice)
}

export const ORG_Filterdata_ServiceSetting = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }

  // const serviceSetting = ["clinic", "home", "school", "community"]

  return pickMoreThanOne(ORG_FILTERS_DATA.serviceSetting)
}

export const ORG_Filterdata_Insurance = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }
  // const accepts = ["Private Pay", "Medicaid", "DOE", "Contract"]

  return pickMoreThanOne(ORG_FILTERS_DATA.insurance)
}

export const ORG_Filterdata_MeetingFormat = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }

  // const meetingFormat = ["virtual", "in-person"]

  return pickMoreThanOne(ORG_FILTERS_DATA.meetingFormat)
}

export const ORG_Filterdata_SessionType = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }
  // const sessionType = ["individual", "group"]
  return pickMoreThanOne(ORG_FILTERS_DATA.sessionType)
}

// export const ORG_Filterdata_Transportation = (whichSelect = []) => {
//   if (whichSelect.length !== 0) {
//     return whichSelect
//   }

//   const transportation = [
//     "near metro",
//     "near bus",
//     "meter parking",
//     "street parking",
//     "parking lot"
//   ]

//   return pickMoreThanOne(transportation)
// }

export const ORG_Filterdata_ProviderType = (whichSelect = []) => {
  if (whichSelect.length !== 0) {
    return whichSelect
  }

  return pickJustOne(ORG_FILTERS_DATA.providerType)
}
