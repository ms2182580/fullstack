import UnderConstructionImagePurple from "@/assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_HorizontalNavigationNav } from "@/components/horizontal-navigation-nav"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import Image from "next/image"
import { useState } from "react"
import { INDEX_D_OrgOnTabsFirstPageWrapper } from "./styles/index-wrapper"

/* 
!FH0 Keep creating all the UI here: 
check the file "@/components/org/flow/first-page/desktop/index.tsx" to make a reusable component of the rest of the UI
*/

export const INDEX_D_OrgOnTabsFirstPage = ({ allBackendData }) => {
  const [singleCardIsSelected, setSingleCardIsSelected] = useState(false)
  const [matchNameState, setMatchNameState] = useState("All")

  const handleShowAll = () => {
    setSingleCardIsSelected(false)
    setMatchNameState("All")
  }

  const handleShowOneCard = (e) => {
    setSingleCardIsSelected(true)
    setMatchNameState(e.target.dataset.name)
  }

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

      <Image
        src={UnderConstructionImagePurple}
        alt="under construction image"
      />
    </INDEX_D_OrgOnTabsFirstPageWrapper>
  )
}
