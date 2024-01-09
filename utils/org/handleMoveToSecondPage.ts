/* 
!FH0
Check how to move the view to the second page by this and create a new way to make it considering the data that comes from the backend
*/

import { getDataToMoveView } from "./getDataToMoveView"
import { SPECIFIC_DATA_KEY } from "./second-page/desktop/specificData"
import { ALL_ROUTES } from "./useCheckSlug_ORG"

export const handleMoveToSecondPage = ({
  event,
  categoryPosition,
  subcategoryPosition,
  setSecondpageFiltersORG,
  setSecondpageDataORG,
  push,
}) => {
  const {
    theActualFilter,
    subcategory,
    rightCard,
    leftCard,
    subcategorySpecificData,
    subFolder,
  } = getDataToMoveView({ categoryPosition, subcategoryPosition })

  setSecondpageFiltersORG(theActualFilter)
  setSecondpageDataORG({
    cardData: subcategory.slice(1),
    mainNameORG: subcategory[0],
    right: rightCard,
    left: leftCard,
    [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: subcategorySpecificData,
    categoryPosition,
    subcategoryPosition,
  })

  push({
    pathname: `/${ALL_ROUTES.ORG}/${ALL_ROUTES.RESULTS}/${subFolder}`,
  })
}
