export const capitalizeWords = (str) => {
  //console.log("❤️"+ str)
  let words = str.split(" ")

  let capitalizedWords = words.map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())

  let capitalizedStr = capitalizedWords.join(" ")
  return capitalizedStr
}
