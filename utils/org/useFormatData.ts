import { useEffect, useState } from "react"
import { DATA_ORG_D, DATA_ORG_D_TYPES } from "./DATA_ORG_D"

type Props = {
  thisParticularBackendData: any[]
  keyToSearch?: string
  whichCategoryIs: string
}

export const enum Return_KEYS {
  SUB_CATEGORY_NAME = "SUB_CATEGORY_NAME",
  CATEGORY_NAME = "CATEGORY_NAME",
  SUB_CATEGORY_LISTS = "SUB_CATEGORY_LISTS",
}

type Return = {
  [key: string]: {
    /*
     * By default this check for the key "recordSubtype", but other key can be used
     * The string of [Return_KEYS.SUB_CATEGORY_NAME] should be a key that is inside the object
     * If there's no key that match with any key inside the object the string "NOT_PROVIDED" will be use instead
     */
    [Return_KEYS.SUB_CATEGORY_NAME]: string
    [Return_KEYS.CATEGORY_NAME]: string
    [Return_KEYS.SUB_CATEGORY_LISTS]: object[]
  }[]
}

/*
 * This function «formatData» format the data that comes from the backend
 * The idea is return data that looks like «Return»
 
 */

const formatData = ({
  thisParticularBackendData,
  keyToSearch = "recordSubtype",
  whichCategoryIs = "NOT_PROVIDED",
}: Props): Return => {
  let filteredLists = thisParticularBackendData.filter((item) =>
    item.hasOwnProperty(keyToSearch)
  )

  let uniqueSubcategories = [
    ...new Set(filteredLists.map((item) => item[keyToSearch])),
  ]

  let category = [...new Set(filteredLists.map((item) => item.listingType))][0]

  let formattedList = uniqueSubcategories.map((subCategory) => {
    let listsWithCategory = filteredLists.filter(
      (item) => item.recordSubtype === subCategory
    )

    return {
      [Return_KEYS.SUB_CATEGORY_NAME]: subCategory,
      [Return_KEYS.CATEGORY_NAME]: category,

      [Return_KEYS.SUB_CATEGORY_LISTS]: listsWithCategory,
    }
  })

  return { [whichCategoryIs]: formattedList }
}

const prepareToDATA_ORG_D = ({ dataToPrepare }) => {
  let arrToORG: any = []

  for (const x of dataToPrepare) {
    arrToORG.push([
      x[Return_KEYS.SUB_CATEGORY_NAME],
      ...x[Return_KEYS.SUB_CATEGORY_LISTS],
    ])
  }

  let theDataToPush: DATA_ORG_D_TYPES = {
    nameJSX: dataToPrepare[0][Return_KEYS.CATEGORY_NAME],
    thisParticularData: arrToORG,
    somethingSpecial: {
      isFromBackend: true,
    },
  }

  return theDataToPush
}

export const useFormatData = ({ allBackendData, allBackendFetched }) => {
  const [allDataFormatted, setAllDataFormatted] = useState<any>([])

  useEffect(() => {
    let dataToUpdate

    for (const x in allBackendData) {
      let dataFormatted = formatData({
        thisParticularBackendData: allBackendData[x],
        whichCategoryIs: x,
      })

      dataToUpdate = dataFormatted
    }

    setAllDataFormatted((prevState) => [...prevState, dataToUpdate])
  }, [])

  const [dataToPushToORG, setDataToPushToORG] = useState<any>([])

  useEffect(() => {
    if (allDataFormatted.length !== 0) {
      for (const x of allDataFormatted) {
        let [theKey, theData] = Object.entries(x)[0]

        let preparedToDATA_ORG_D = prepareToDATA_ORG_D({
          dataToPrepare: theData,
        })

        setDataToPushToORG((prevState) => [...prevState, preparedToDATA_ORG_D])
      }
    }
  }, [allDataFormatted])

  const [dataToORG, setDataToORG] = useState([...DATA_ORG_D])

  useEffect(() => {
    if (dataToPushToORG.length !== 0) {
      setDataToORG((prevState) => [...prevState, ...dataToPushToORG])
    }
  }, [dataToPushToORG])

  return { dataToORG }
}
