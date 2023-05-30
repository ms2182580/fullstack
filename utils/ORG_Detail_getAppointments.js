export const ORG_Detail_getAppointments = (dayName) => {
  let arrayToUse = Array(13).fill(9)

  let returnNumberChecked = arrayToUse.map((x, i) => {
    const numberToCheck = x + i
    let pmORam = Math.trunc(Math.abs(numberToCheck) / 12) % 2 === 0 ? "AM" : "PM"
    if (numberToCheck % 12 !== 0) return `${numberToCheck % 12}:00 ${pmORam}`
    if (numberToCheck % 12 === 0) return `12:00 ${pmORam}`
  })

  let howManyNotShow = Math.floor(Math.random() * returnNumberChecked.length)

  if (howManyNotShow === 0) return returnNumberChecked

  let whichIndexNotShow = [];
  for (let x = 0; x < howManyNotShow; x++) {
    let theIndexToNotShow = Math.floor(Math.random() * returnNumberChecked.length)
    while (whichIndexNotShow.includes(theIndexToNotShow)) {
      theIndexToNotShow = Math.floor(Math.random() * returnNumberChecked.length)
    }
    whichIndexNotShow.push(theIndexToNotShow)
  }
  let finalChanged = returnNumberChecked.map((value, index) => whichIndexNotShow.includes(index) ? null : value)

  return finalChanged
}