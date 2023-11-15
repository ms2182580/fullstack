import { DATA_ORG_KeyNamesForCards_D_KEYS } from "./DATA_ORG_KeyNamesForCards_D"
import { filterThirdPageDataOnObject } from "./filterThirdPageDataOnObject"
import { SPECIFIC_DATA_KEY } from "./specificData"

export const formatDataToThirdPage = (dataCard, dataCardLeft, rightPart, fullName, specificDataForThisResource) => {
  let getFilterThirdPageDataOnObject = filterThirdPageDataOnObject(rightPart?.thirdPageData)

  let allDataToThirdPage = {
    card: {
      leftPart: {
        photo: dataCard.imageToUse,
        title: dataCard.title,
        subtitle: dataCard.subtitle,
        city: dataCard.city,
        rating: dataCard.rating,
        reviews: dataCard.reviews,
        phone: dataCardLeft?.phone || "",
        email: dataCardLeft?.email || "",
        website: dataCardLeft?.web || "",
        location: dataCardLeft?.location || "",
        [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: dataCardLeft[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY] || "",
      },
      rightPart: rightPart,
    },
    fullName,
    [DATA_ORG_KeyNamesForCards_D_KEYS.OTHER]: {
      [DATA_ORG_KeyNamesForCards_D_KEYS.GET_FILTER_THIRDPAGE_DATAONOBJECT]: getFilterThirdPageDataOnObject,
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: specificDataForThisResource,
    },
  }

  return allDataToThirdPage
}
