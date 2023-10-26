import { ORG_D_Detail_AT_WCMD_SimilarProducts } from "@/components/ORG/cards_resources/third-page/pat/at-wheelchair-mobility-devices/desktop/ORG_D_Detail_AT_WCMD_SimilarProducts"
import { ORG_D_Detail_AT_WCMD_WhereToBuy } from "@/components/ORG/cards_resources/third-page/pat/at-wheelchair-mobility-devices/desktop/ORG_D_Detail_AT_WCMD_WhereToBuy"
import { SectionToRender_InnerData_ARG } from "@/utils/ORG/third-page/SectionToRender"
import { generateRandomNumber } from "@/utils/generateRandomNumber"
import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"
import { ORG_D_Detail_ContactUs } from "../../../../../cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "../../../../../cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "../../../../../cards/third-page/desktop/ORG_D_Detail_Reviews"

const categoriesOfProducts = [
  {
    key: "Customer rating",
    values: [
      {
        component: {
          toRender: "component_StarsRatingReview_D",
          props: {
            rating: generateRandomNumber(4, 5),
            reviews: generateRandomNumber(44, 99),
          },
        },
      },
      {
        component: {
          toRender: "component_StarsRatingReview_D",
          props: {
            rating: generateRandomNumber(4, 5),
            reviews: generateRandomNumber(44, 99),
          },
        },
      },
      {
        component: {
          toRender: "component_StarsRatingReview_D",
          props: {
            rating: generateRandomNumber(4, 5),
            reviews: generateRandomNumber(44, 99),
          },
        },
      },
    ],
  },
  {
    key: "Price",
    values: [
      {
        value: 1231,
      },
      {
        value: 1232,
      },
      {
        value: 1233,
      },
    ],
  },
  {
    key: "Speed",
    values: [
      {
        value: "Quality recertified_1",
      },
      {
        value: "Quality recertified_2",
      },
      {
        value: "Quality recertified_3",
      },
    ],
  },
  {
    key: "Range",
    values: [
      {
        value: "16 GB_1",
      },
      {
        value: "16 GB_2",
      },
      {
        value: "16 GB_3",
      },
    ],
  },
  {
    key: "Seat lift",
    values: [
      {
        value: "core i7_A",
      },
      {
        value: "core i7_B",
      },
      {
        value: "core i7_C",
      },
    ],
  },
]

export const INDEX_D_AT_AT_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pat/at-wheelchair-mobility-devices/")

    return
  }

  const theArrayOfObject: SectionToRender_InnerData_ARG = [
    { name: ORG_D_Detail_AT_WCMD_WhereToBuy.name, component: ORG_D_Detail_AT_WCMD_WhereToBuy },
    { name: ORG_D_Detail_ContactUs.name, component: ORG_D_Detail_ContactUs },
    { name: ORG_D_Detail_AT_WCMD_SimilarProducts.name, component: ORG_D_Detail_AT_WCMD_SimilarProducts },
    { name: ORG_D_Detail_Reviews.name, component: ORG_D_Detail_Reviews },
    { name: ORG_D_Detail_FAQS.name, component: ORG_D_Detail_FAQS },
  ]

  return (
    <>
      <INDEX_ORG_Detail_D sectionToRender={theArrayOfObject} />
      {/* <INDEX_ORG_Detail_D /> */}
    </>
  )
}
