import { useRouter } from "next/router"
import { ORG_M_Detail_MainCard_About } from "./ORG_M_Detail_MainCard_About"
import { ORG_M_Detail_MainCardSectionWrapper } from "./styles/ORG_M_Detail_MainCardSections"
import { ORG_M_Detail_Reviews } from "./ORG_M_Detail_Reviews"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"

enum TabSection {
  about = 1,
  booking = 2,
  reviews = 3,
  faqs = 4,
}
type Props = {
  getAllSpecificThirdPageData: any
}
export const ORG_M_Detail_MainCardSections = ({
  getAllSpecificThirdPageData,
}: Props) => {
  const { asPath } = useRouter()

  const defaultId = asPath.split("#")[1] || "about"

  let component
  if (defaultId === "about") {
    component = <ORG_M_Detail_MainCard_About />
  } else if (defaultId === "reviews") {
    const currentIndex = getAllSpecificThirdPageData.renderSections.findIndex(
      (item) => item.toNavbar.id === "reviews"
    )
    const data = getAllSpecificThirdPageData.renderSections[currentIndex]
    let theIdForComponent =
      data?.[ArraySection_KEYS.TO_NAVBAR]?.[ArraySection_KEYS.ID] ?? "#"
    let allProps = data?.[ArraySection_KEYS.PROPS_COMPONENT] ?? null

    let allData = {
      theIdForComponent,
      ...allProps,
    }

    component = <ORG_M_Detail_Reviews all_data={allData} />
  }

  return (
    <ORG_M_Detail_MainCardSectionWrapper>
      {component}
    </ORG_M_Detail_MainCardSectionWrapper>
  )
}
