import {
  INDEX_D_HorizontalNavigationNav,
  useHorizontalNavigationNavLogic,
} from "@/components/horizontal-navigation-nav"
import { OrgCardsList } from "@/components/org/flow/first-page/desktop/org-cards-list"
import { ORG_D_SearchComponent } from "@/components/org/inputs/desktop/ORG_D_SearchComponent"
import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import { useMemo } from "react"
import { INDEX_D_OrgOnTabsFirstPageWrapper } from "./styles/index-wrapper"

/* 
!FH0 Keep creating all the UI here: 
check the file "@/components/org/flow/first-page/desktop/index.tsx" to make a reusable component of the rest of the UI

- Make the "INDEX_D_HorizontalNavigationNav" a hook to use it

- Fix the visual bug when the "Create care plan" is toggled off
*/

type Props = {
  handleNextComponent?: (e) => void
}

export const INDEX_D_OrgOnTabsFirstPage = ({ handleNextComponent }: Props) => {
  const { FETCHED } = useCtxOrgTabsFlow().ORG_TABS_FLOW_FIRST_PAGE

  const {
    singleCardIsSelected,
    matchNameState,
    handleShowAll,
    handleShowOneCard,
  } = useHorizontalNavigationNavLogic()

  const { HANDLER } = useCtxOrgTabsFlow().ORG_TABS_FLOW_SECOND_PAGE

  const handleMoveView = useMemo(() => {
    const handleMoveToSecondPageORG = (e) => {
      if (handleNextComponent) {
        const { category, theSubcategory, raw } = e

        HANDLER({
          category,
          theSubcategory,
          raw,
          thePush: () => handleNextComponent(e),
        })
      }

      /* 
      
      !FH0
      - Here I should have the same logic to pass the data to the second page as the file "@/utils/org/handleMoveToSecondPage_Backend.ts" does.
      here the caveat is: the logic to move from the 1° page to the 2°page on ORG is done by some "push" logic from the URL. Now I only wanto to pass the data into the context in order the display the data into the second component.
      
      So question here, should I use a new context only for this part? Or should I combine them? For now, for the sake of Separation of Concerns, I should create a new context only for the view here, because in the future this flow could have another characteristics
      */
    }

    const handleMoveToThirdPageORG = () => {
      return
    }

    const handleMoveToTypedFlowORG = () => {
      return
    }

    return {
      handleMoveToSecondPageORG,
      handleMoveToThirdPageORG,
      handleMoveToTypedFlowORG,
    }
  }, [])

  return (
    <INDEX_D_OrgOnTabsFirstPageWrapper>
      <h1>More recommendations</h1>

      <ORG_D_SearchComponent
        handleMoveView={handleMoveView.handleMoveToTypedFlowORG}
      />

      <INDEX_D_HorizontalNavigationNav
        dataToDisplay={ALL_DATA}
        handleShowAll={handleShowAll}
        handleShowOneCard={handleShowOneCard}
        singleCardIsSelected={singleCardIsSelected}
        matchNameState={matchNameState}
      />

      <OrgCardsList
        dataToDisplay={ALL_DATA}
        allBackendData={FETCHED}
        matchNameState={matchNameState}
        singleCardIsSelected={singleCardIsSelected}
        handleMoveToSecondPage={handleMoveView.handleMoveToSecondPageORG}
        handleMoveToThirdPage={handleMoveView.handleMoveToThirdPageORG}
      />
    </INDEX_D_OrgOnTabsFirstPageWrapper>
  )
}
