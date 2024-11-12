import { UseHorizontalNavigationNavLogic_Return } from "@/components/horizontal-navigation-nav"
import {
  ALL_DATA_ORG_Type,
  NamesCategories_KEY,
} from "@/utils/org/categories/general/ALL_DATA"
import { OrgCardsFirst, OrgCardsFirst_Props } from "./org-cards-first"

type Props = {
  dataToDisplay: ALL_DATA_ORG_Type
  allBackendData: object[] | any
  singleCardIsSelected: UseHorizontalNavigationNavLogic_Return["singleCardIsSelected"]
  matchNameState: UseHorizontalNavigationNavLogic_Return["matchNameState"]
} & Pick<
  OrgCardsFirst_Props,
  "handleMoveToSecondPage" | "handleMoveToThirdPage"
>

export const OrgCardsList = ({
  dataToDisplay,
  allBackendData,
  singleCardIsSelected,
  matchNameState,
  handleMoveToSecondPage,
  handleMoveToThirdPage,
}: Props) => {
  console.log(handleMoveToSecondPage, handleMoveToThirdPage)
  return (
    <>
      {Object.values(dataToDisplay).map(({ CATEGORY, SUB_CATEGORY }: any) => {
        if (singleCardIsSelected === false) {
          return (
            <OrgCardsFirst
              category={CATEGORY}
              allSubcategories={SUB_CATEGORY}
              allBackendData={
                allBackendData[
                  NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]
                ]
              }
              handleMoveToSecondPage={handleMoveToSecondPage}
              handleMoveToThirdPage={handleMoveToThirdPage}
            />
          )
        }

        if (
          singleCardIsSelected &&
          matchNameState?.toLowerCase() === CATEGORY.toLowerCase()
        ) {
          return (
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
          )
        }
      })}
    </>
  )
}
