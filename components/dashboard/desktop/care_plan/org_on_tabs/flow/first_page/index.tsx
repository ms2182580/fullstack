import {
  INDEX_D_HorizontalNavigationNav,
  useHorizontalNavigationNavLogic,
} from "@/components/horizontal-navigation-nav"
import { OrgCardsList } from "@/components/org/flow/first-page/desktop/org-cards-list"
import { ORG_D_SearchComponent } from "@/components/org/inputs/desktop/ORG_D_SearchComponent"
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
  allBackendData?: object[]
  handleNextComponent?: (e) => void
}

export const INDEX_D_OrgOnTabsFirstPage = ({
  allBackendData,
  handleNextComponent,
}: Props) => {
  const {
    singleCardIsSelected,
    matchNameState,
    handleShowAll,
    handleShowOneCard,
  } = useHorizontalNavigationNavLogic()

  const handleMoveView = useMemo(() => {
    const handleMoveToSecondPageORG = (e) => {
      if (handleNextComponent) {
        handleNextComponent(e)
      }

      return
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
        allBackendData={allBackendData}
        matchNameState={matchNameState}
        singleCardIsSelected={singleCardIsSelected}
        handleMoveToSecondPage={handleMoveView.handleMoveToSecondPageORG}
        handleMoveToThirdPage={handleMoveView.handleMoveToThirdPageORG}
      />
    </INDEX_D_OrgOnTabsFirstPageWrapper>
  )
}
