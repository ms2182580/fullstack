export const capitalizeWords = (str) => {
  let words = str.split(" ")

  let capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
  })

  let capitalizedStr = capitalizedWords.join(" ")
  return capitalizedStr
}
