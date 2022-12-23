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
  "Initials Hidden"
]

export const ORG_ReviewsUsersName = () => {
  const shuffled = [...allReviewUsers].sort(() => 0.5 - Math.random())
  const shuffledArr = shuffled.slice(0, 4)
  
  return shuffledArr
}