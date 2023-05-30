export const ORG_Detail_getDate = (howMuchDays = 5) => {
  let allData = []
  for (let i = 0; i < howMuchDays; i++) {
    const theActualDate = new Date()
    theActualDate.setDate(theActualDate.getDate() + i)
    allData.push(
      new Intl.DateTimeFormat("en-us", {
        year: "numeric",
        month: "long",
        weekday: "long",
        day: "2-digit"
      })
        .format(theActualDate)
        .split(" ")
        .map((x) => x.replace(",", ""))
    )
  }

  return allData
}

