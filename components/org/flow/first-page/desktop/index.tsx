import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import ORG_1_page from "@/assets/images/org/1_page/org_1_page.png"
import {
  INDEX_D_HorizontalNavigationNav,
  useHorizontalNavigationNavLogic,
} from "@/components/horizontal-navigation-nav"
import { ORG_D_SearchComponent } from "@/components/org/inputs/desktop/ORG_D_SearchComponent"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import Image from "next/image.js"
import { useEffect } from "react"
import { OrgCardsList } from "./org-cards-list"
import { INDEX_D_ORGWrapper } from "./styles/index-wrapper"

type Props = {
  allBackendData: object[] | any
}

export const INDEX_D_ORGHome = ({ allBackendData }: Props) => {
  const {
    singleCardIsSelected,
    matchNameState,
    handleShowAll,
    handleShowOneCard,
  } = useHorizontalNavigationNavLogic()

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  return (
    <INDEX_D_ORGWrapper data-testid={KEYS_DATA_TESTID.INDEX_D_ORG_HOME}>
      <header>
        <H1>
          Find exactly what <br /> you're looking for
        </H1>
        <Image
          src={ORG_1_page}
          alt="Image of doctors and patients looking forward, smiling and shaking hands"
        />
        <ORG_D_SearchComponent />
        <Image
          src={"/background/background2.svg"}
          width={1}
          height={1}
          alt="Background Image"
        />
        <Image
          src={"/background/background3.svg"}
          width={1}
          height={1}
          alt="Background Image"
        />
      </header>

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
    </INDEX_D_ORGWrapper>
  )
}
