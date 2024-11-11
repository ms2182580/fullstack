import {
  INDEX_D_HorizontalNavigationNav,
  useHorizontalNavigationNavLogic,
} from "@/components/horizontal-navigation-nav"
import { OrgCardsList } from "@/components/org/flow/first-page/desktop/org-cards-list"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import { INDEX_D_OrgOnTabsFirstPageWrapper } from "./styles/index-wrapper"

/* 
!FH0 Keep creating all the UI here: 
check the file "@/components/org/flow/first-page/desktop/index.tsx" to make a reusable component of the rest of the UI

- Make the "INDEX_D_HorizontalNavigationNav" a hook to use it

- Fix the visual bug when the "Create care plan" is toggled off
*/

export const INDEX_D_OrgOnTabsFirstPage = ({ allBackendData }) => {
  const {
    singleCardIsSelected,
    matchNameState,
    handleShowAll,
    handleShowOneCard,
  } = useHorizontalNavigationNavLogic()

  return (
    <INDEX_D_OrgOnTabsFirstPageWrapper>
      <h1>More recommendations</h1>

      <INDEX_D_HorizontalNavigationNav
        dataToDisplay={ALL_DATA}
        handleShowAll={handleShowAll}
        handleShowOneCard={handleShowOneCard}
        singleCardIsSelected={singleCardIsSelected}
        matchNameState={matchNameState}
      />

      <OrgCardsList
        dataToDisplay={ALL_DATA}
        allBackendData={allBackendData}
        matchNameState={matchNameState}
        singleCardIsSelected={singleCardIsSelected}
      />
    </INDEX_D_OrgOnTabsFirstPageWrapper>
  )
}
