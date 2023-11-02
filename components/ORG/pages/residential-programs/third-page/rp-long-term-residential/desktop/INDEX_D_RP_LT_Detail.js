import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"

export const INDEX_D_RP_LT_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/prp/rp-long-term-residential/")

    return
  }

  const selectTags = {
    title: "I have questions about",
    data: [
      "Payment",
      "Accessibility Options",
      "Schedule a tour",
      "Specialized programming",
      "Reasonable accomodations",
      "Languages",
      "Amenities",
      "Roommate selection",
      "On-site staff",
      "Something else",
    ],
  }

  return (
    <>
      <INDEX_ORG_Detail_D selectTags={selectTags} />
    </>
  )
}
