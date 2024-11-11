import { UseHorizontalNavigationNavLogic_Return } from "@/components/horizontal-navigation-nav"
import {
  ALL_DATA_ORG_Type,
  NamesCategories_KEY,
} from "@/utils/org/categories/general/ALL_DATA"
import { Fragment } from "react"
import { OrgCardsFirst } from "./org-cards-first"

type Props = {
  dataToDisplay: ALL_DATA_ORG_Type
  allBackendData: object[] | any
  singleCardIsSelected: UseHorizontalNavigationNavLogic_Return["singleCardIsSelected"]
  matchNameState: UseHorizontalNavigationNavLogic_Return["matchNameState"]
}

export const OrgCardsList = ({
  dataToDisplay,
  allBackendData,
  singleCardIsSelected,
  matchNameState,
}: Props) => {
  return (
    <article>
      {Object.values(dataToDisplay).map(({ CATEGORY, SUB_CATEGORY }: any) => {
        if (singleCardIsSelected === false) {
          return (
            <Fragment key={CATEGORY}>
              <OrgCardsFirst
                category={CATEGORY}
                allSubcategories={SUB_CATEGORY}
                allBackendData={
                  allBackendData[
                    NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]
                  ]
                }
              />
            </Fragment>
          )
        }

        if (
          singleCardIsSelected &&
          matchNameState?.toLowerCase() === CATEGORY.toLowerCase()
        ) {
          return (
            <Fragment key={CATEGORY}>
              <OrgCardsFirst
                category={CATEGORY}
                allSubcategories={SUB_CATEGORY}
                allBackendData={
                  allBackendData[
                    NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]
                  ]
                }
                isSelected={singleCardIsSelected}
              />
            </Fragment>
          )
        }
      })}
    </article>
  )
}
