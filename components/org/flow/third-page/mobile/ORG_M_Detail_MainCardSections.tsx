import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { useRouter } from "next/router"
import { ORG_M_Detail_FAQS } from "./ORG_M_Detail_FAQS"
import { ORG_M_Detail_MainCard_About } from "./ORG_M_Detail_MainCard_About"
import { ORG_M_Detail_Reviews } from "./ORG_M_Detail_Reviews"
import { ORG_M_Detail_Schedule } from "./ORG_M_Detail_Schedule"
import { ORG_M_Detail_MainCardSectionWrapper } from "./styles/ORG_M_Detail_MainCardSections"

type Props = {
  getAllSpecificThirdPageData: any
  thirdpageDataORG: any
}
export const ORG_M_Detail_MainCardSections = ({
  getAllSpecificThirdPageData,
  thirdpageDataORG,
}: Props) => {
  const { asPath } = useRouter()

  const defaultId = asPath.split("#")[1] || "about"
  // console.log({ thirdpageDataORG })
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
  } else if (defaultId === "faqs") {
    const currentIndex = getAllSpecificThirdPageData.renderSections.findIndex(
      (item) => item.toNavbar.id === "faqs"
    )
    const data = getAllSpecificThirdPageData.renderSections[currentIndex]
    let theIdForComponent =
      data?.[ArraySection_KEYS.TO_NAVBAR]?.[ArraySection_KEYS.ID] ?? "#"
    let allProps = data?.[ArraySection_KEYS.PROPS_COMPONENT] ?? null

    let allData = {
      theIdForComponent,
      ...allProps,
    }
    component = <ORG_M_Detail_FAQS all_data={allData} />
  } else if (defaultId === "booking") {
    const currentIndex = getAllSpecificThirdPageData.renderSections.findIndex(
      (item) => item.toNavbar.id === "faqs"
    )
    const data = getAllSpecificThirdPageData.renderSections[currentIndex]
    let theIdForComponent =
      data?.[ArraySection_KEYS.TO_NAVBAR]?.[ArraySection_KEYS.ID] ?? "#"
    let allProps = data?.[ArraySection_KEYS.PROPS_COMPONENT] ?? null

    let allData = {
      theIdForComponent,
      ...allProps,
    }
    component = (
      <ORG_M_Detail_Schedule
        all_data={allData}
        thirdpageDataORG={thirdpageDataORG}
      />
    )
  }
  return (
    <ORG_M_Detail_MainCardSectionWrapper>
      {component}
    </ORG_M_Detail_MainCardSectionWrapper>
  )
}
