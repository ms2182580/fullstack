import ORG_AT_ThirdPage1 from "@/assets/images/org/assistive-technology/ORG_AT_ThirdPage1_A.png"
import ORG_AT_ThirdPage2 from "@/assets/images/org/assistive-technology/ORG_AT_ThirdPage2_A.png"
import ORG_AT_ThirdPage3 from "@/assets/images/org/assistive-technology/ORG_AT_ThirdPage3_A.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import {
  ORG_D_Detail_AT_WCMD_WhereToBuy_Section,
  Section_Props,
} from "./ORG_D_Detail_AT_WCMD_WhereToBuy_Section"
import { ORG_D_Detail_AT_WCMD_WhereToBuyWrapper } from "./styles/ORG_D_Detail_AT_WCMD_WhereToBuyWrapper"

const section_1: Section_Props = {
  amountOfMoney: 36_000,
  imageSource: ORG_AT_ThirdPage1.src,
  linkToVisit: "#",
  productSpecifications: ["1 in stock", "Free delivery", "Accepts Insurance"],
}

const section_2: Section_Props = {
  amountOfMoney: 36_400,
  imageSource: ORG_AT_ThirdPage2.src,
  linkToVisit: "#",
  productSpecifications: ["2 in stock", "$50 delivery", "Accepts Insurance"],
}
const section_3: Section_Props = {
  amountOfMoney: 37_700,
  imageSource: ORG_AT_ThirdPage3.src,
  linkToVisit: "#",
  productSpecifications: ["1 in stock", "Free delivery", "Accepts Insurance"],
}

type Props = {
  [ArraySection_KEYS.ALL_DATA]: {
    theIdForComponent: string
  }
}

export const ORG_D_Detail_AT_WCMD_WhereToBuy = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}: Props) => {
  const { theIdForComponent = "#" } = allProps || {}

  return (
    <ORG_D_Detail_AT_WCMD_WhereToBuyWrapper id={theIdForComponent}>
      <header>
        <H3>Where to buy</H3>
      </header>
      <ORG_D_Detail_AT_WCMD_WhereToBuy_Section
        amountOfMoney={section_1.amountOfMoney}
        imageSource={section_1.imageSource}
        linkToVisit={section_1.linkToVisit}
        productSpecifications={section_1.productSpecifications}
      />
      <ORG_D_Detail_AT_WCMD_WhereToBuy_Section
        amountOfMoney={section_2.amountOfMoney}
        imageSource={section_2.imageSource}
        linkToVisit={section_2.linkToVisit}
        productSpecifications={section_2.productSpecifications}
      />
      <ORG_D_Detail_AT_WCMD_WhereToBuy_Section
        amountOfMoney={section_3.amountOfMoney}
        imageSource={section_3.imageSource}
        linkToVisit={section_3.linkToVisit}
        productSpecifications={section_3.productSpecifications}
      />

      <span>
        <P tabIndex={0}>View all</P>
      </span>
    </ORG_D_Detail_AT_WCMD_WhereToBuyWrapper>
  )
}
