function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

const pickOne = (arr) => {
  const random = Math.floor(Math.random() * arr.length)

  return arr[random]
}

export const ORG_Filterdata_Distance = () => {
  const actualDistanceMiles = ["0-5", "5-10", "10-20", "+20"]

  return pickOne(actualDistanceMiles)
}

export const ORG_Filterdata_Rating = () => {
  const rating = ["1", "2", "3", "4", "5"]
  
  return pickOne(rating)
}

export const ORG_Filterdata_Diagnoses = () => {
  const diagnoses = [
    "Autism (ASD)",
    "ADHD",
    "Down Syndrome",
    "Cerebral Palsy",
    "Fragile X",
    "Other"
  ]
  
  return getMultipleRandom(diagnoses, howMuch(diagnoses))
}

export const ORG_Filterdata_AgesServed = () => {
  return <div>Enter</div>
}

export const ORG_Filterdata_Languages = () => {
  return <div>Enter</div>
}

export const ORG_Filterdata_YoP = () => {
  return <div>Enter</div>
}

export const ORG_Filterdata_ServiceSetting = () => {
  return <div>Enter</div>
}

export const ORG_Filterdata_Accepts = () => {
  return <div>Enter</div>
}

export const ORG_Filterdata_MeetingFormat = () => {
  return <div>Enter</div>
}

export const ORG_Filterdata_SessionType = () => {
  return <div>Enter</div>
}

export const ORG_Filterdata_Transportation = () => {
  return <div>Enter</div>
}

export const ORG_Filterdata_ProviderType = () => {
  return <div>Enter</div>
}
