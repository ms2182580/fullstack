export const ORG_Sortyby = (whichSort, sourceArr = [], userFetched, whoTrigger = "dont typed") => {
  // console.log('💕whoTrigger:', whoTrigger)
  // console.log('sourceArr:', sourceArr)
  // console.log('whichSort:', whichSort)
  let newOrder
  if (whichSort.toLowerCase() === "rating") {
    newOrder = sourceArr
      .map((x, i) => [Number(x.rating), i])
      .sort((a, b) => {
        return b[0] - a[0]
      })
      .map((x) => x[1])
  }

  if (whichSort.toLowerCase() === "distance") {
    newOrder = sourceArr
      .map((x, i) => [x.distance, i])
      .sort((a, b) => {
        // console.log('💨a, b:', a, b)
        const firstNumber = a[0].match(/[0,5,10]+(?=\-)|(?<=\+)[20]+/g)
        // console.log('firstNumber:', firstNumber)
        const secondNumber = b[0].match(/[0,5,10]+(?=\-)|(?<=\+)[20]+/g)
        // console.log('secondNumber:', secondNumber)
        // console.dir()
        return firstNumber[0] - secondNumber[0]
      })
      .map((x) => x[1])
  }

  if (whichSort.toLowerCase() === "review count") {
    let toSplit = sourceArr
      .map((x, i) => {
        if (/(?<!\+)[0-9]/g.test(x.reviews)) {
          return [Number(x.reviews), i]
        } else {
          return [x.reviews, i]
        }
      })
      .sort()

    let onlyNumbers = toSplit
      .map((x) => {
        if (typeof x[0] === "number") {
          return x
        }
      })
      .filter((x) => x !== undefined)
      .reverse()

    let onlyStrings = toSplit
      .map((x) => {
        if (typeof x[0] === "string") {
          return x
        }
      })
      .filter((x) => x !== undefined)
    newOrder = [...onlyStrings, ...onlyNumbers].map((x) => x[1])
  }

  const newOrderData = []
  const newOrderFilters = []
  for (const x in newOrder) {
    for (const y in userFetched.allData) {
      if (newOrder[x] === Number(y)) {
        newOrderData.push(userFetched.allData[y])
        newOrderFilters.push(sourceArr[y])
        break
      }
    }
  }
  return { newOrderData, newOrderFilters }
}
