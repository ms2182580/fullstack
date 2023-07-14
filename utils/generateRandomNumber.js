export const generateRandomNumber = (min = 1, max = 999) => {
  let random = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(random)
}

