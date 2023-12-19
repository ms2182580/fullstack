import { getDataToMoveView } from "./getDataToMoveView"
import { SPECIFIC_DATA_KEY } from "./second-page/desktop/specificData"
import { allRoutes } from "./useCheckSlug_ORG"

export const handleMoveToSecondPage = (_, categoryPosition: number, subcategoryPosition: number, setSecondpageFiltersORG, setSecondpageDataORG, pathname, push) => {
  const { theActualFilter, subcategory, rightCard, leftCard, subcategorySpecificData, subFolder } = getDataToMoveView({ categoryPosition, subcategoryPosition })

  setSecondpageFiltersORG(theActualFilter)
  setSecondpageDataORG({
    cardData: subcategory.slice(1),
    mainNameORG: subcategory[0],
    right: rightCard,
    left: leftCard,
    [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: subcategorySpecificData,
  })

  push({
    pathname: `${pathname}/${allRoutes.results}/${subFolder}`,
  })
}
