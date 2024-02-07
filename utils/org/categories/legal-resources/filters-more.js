import { ORG_Filters_D_Range_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Range_Isolated"
import { ORG_FILTERS_KEYS_D } from "@/utils/ORG_FiltersCategories"
import { FILTERS_RANGE } from "./filters"

export const FILTERS_MORE = {
  range: [
    <ORG_Filters_D_Range_Isolated
      buttonName={FILTERS_RANGE.price.buttonName}
      minSpecialCharacter={FILTERS_RANGE.price.minSpecialCharacter}
      min={FILTERS_RANGE.price.min}
      max={FILTERS_RANGE.price.max}
      whichMeasure={FILTERS_RANGE.price.whichMeasure}
      addCharacter={FILTERS_RANGE.price.addCharacter}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.distance.titleToShow}
      min={ORG_FILTERS_DATA_D.distanceRange.minimum}
      max={ORG_FILTERS_DATA_D.distanceRange.maximum}
      whichMeasure={ORG_FILTERS_DATA_D.distanceRange.whichMeasure}
      addCharacter={ORG_FILTERS_DATA_D.distanceRange.addCharacter}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.agesServed.titleToShow}
      min={ORG_FILTERS_DATA_D.agesServedRange.minimum}
      max={ORG_FILTERS_DATA_D.agesServedRange.maximum}
      whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
      addCharacter={ORG_FILTERS_DATA_D.agesServedRange.addCharacter}
      maxSpecialCharacter={
        ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter
      }
    />,
  ],
}
