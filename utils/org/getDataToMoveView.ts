import * as AllCards from "@/utils/org/second-page/desktop/AllCards"
import * as AllData from "@/utils/org/second-page/desktop/AllData"
import * as AllFilters from "@/utils/org/second-page/desktop/AllFilters"
import { DATA_ORG_CheckPaths_Results_D } from "./DATA_ORG_CheckPaths_Results_D"
import { DATA_ORG_D } from "./DATA_ORG_D"
import { SPECIFIC_DATA_KEY } from "./second-page/desktop/specificData"

type GetDataToMoveView_Type = {
  categoryPosition: number
  subcategoryPosition: number
  resourcePosition?: number | null
}

export const getDataToMoveView = ({ categoryPosition, subcategoryPosition, resourcePosition = null }: GetDataToMoveView_Type) => {
  let folder = DATA_ORG_D[categoryPosition].acronym
  let subFolder = DATA_ORG_CheckPaths_Results_D[folder][subcategoryPosition]

  const theActualFilter = AllFilters[`${folder}_filters`][`filtersUI_${folder.toUpperCase()}`]

  const acronymSubcategory = DATA_ORG_CheckPaths_Results_D[folder].at(-2)[subFolder]

  const rightCard = AllCards.cardsObj[acronymSubcategory].right
  const leftCard = AllCards.cardsObj[acronymSubcategory].left

  const theActualData = AllData[`data_${folder}`]

  const subcategory = theActualData[`DATA_${folder.toUpperCase()}_D`][subcategoryPosition]

  /* Every subcategory should have the same specific data. The things is, when I type this words, that specific data is passed resource per resource. That' because is safe to look always the first element because all of them should have the same data   */
  const subcategorySpecificData = subcategory.slice(1)[0][SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY] ?? null

  return { theActualFilter, subcategory, rightCard, leftCard, subcategorySpecificData, subFolder }
}
