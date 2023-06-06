let allReviewUsers = [
  "Leanne G.",
  "Ervin H.",
  "Clementine B.",
  "Patricia L.",
  "Chelsey D.",
  "Dennis S.",
  "Kurtis W.",
  "Nicholas R.",
  "Glenna R.",
  "Clementina D.",
  "Anonymous"
]

export const ORG_ReviewsUsersName = (howMuchReturn = 4) => {
  let needMore = howMuchReturn > allReviewUsers.length

  if (needMore) {
    let arrayWithAllElements = [...allReviewUsers]

    for (let i = 0; arrayWithAllElements.length - 1 < howMuchReturn; i++) {
      let indexToPush = i % allReviewUsers.length
      arrayWithAllElements.push(allReviewUsers[indexToPush])
    }
    return arrayWithAllElements
  } else {
    const shuffled = [...allReviewUsers].sort(() => 0.5 - Math.random())
    const shuffledArr = shuffled.slice(0, howMuchReturn)
    return shuffledArr
  }
}
