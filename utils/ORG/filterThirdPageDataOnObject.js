export const filterThirdPageDataOnObject = (obj) => {
  let filteredObj = {}

  for (let key in obj) {
    if (key !== "card" && key !== "folderName") {
      filteredObj[key] = obj[key]
    }
  }

  return filteredObj
}
