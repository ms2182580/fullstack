import ORG_AT13 from "@/assets/images/ORG/assistive-technology/ORG_AT13.png"
import ORG_AT15 from "@/assets/images/ORG/assistive-technology/ORG_AT15.png"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { SectionToRender_PROPS } from "@/utils/ORG/third-page/SectionToRender"
import { generateRandomNumber } from "@/utils/generateRandomNumber"
import { Fragment } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { InFrontModal_D_Wrapper } from "../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ChatAI } from "../../../ChatAI"
import { ORG_D_Detail_BreadcrumbsLastUpdated } from "./ORG_D_Detail_BreadcrumbsLastUpdated"
import { ORG_D_Detail_ContactUs } from "./ORG_D_Detail_ContactUs"
import { ORG_D_Detail_Header } from "./ORG_D_Detail_Header"
import { ORG_D_Detail_MainCard } from "./ORG_D_Detail_MainCard"
import { ORG_D_Detail_Reviews } from "./ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "./ORG_D_Detail_Schedule"
import { INDEX_ORG_Detail_DWrapper } from "./styles/INDEX_ORG_Detail_DWrapper"

let cardFirstRow = [
  {
    image: ORG_AT13,
    title: "Really long product name...",
    subtitle: "Device type name here. Short product description [no more than 3 lines",
    linkRef: "#",
  },
  {
    image: ORG_AT15.src,
    title: "Really long product name...",
    subtitle: "Device type name here. Short product description [no more than 3 lines",
    linkRef: "#",
  },
  {
    image: ORG_AT13.src,
    title: "Really long product name...",
    subtitle: "Device type name here. Short product description [no more than 3 lines",
    linkRef: "#",
  },
]

let cardSecondRow = [
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
export const INDEX_ORG_Detail_D = ({ sectionToRender = null }: SectionToRender_PROPS) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <INDEX_ORG_Detail_DWrapper>
        <div>
          <ORG_D_Detail_Header thirdpageDataORG={thirdpageDataORG} />

          <ORG_D_Detail_MainCard thirdpageDataORG={thirdpageDataORG} />

          {sectionToRender ? (
            <>
              {sectionToRender.map((x, index) => {
                return (
                  <Fragment key={`${x.name}_${index}`}>
                    <x.component />
                  </Fragment>
                )
              })}
            </>
          ) : (
            <>
              <ORG_D_Detail_Schedule />

              <ORG_D_Detail_ContactUs />

              <ORG_D_Detail_Reviews />

              <ORG_D_Detail_FAQS />
            </>
          )}

          <ORG_D_Detail_BreadcrumbsLastUpdated thirdpageDataORG={thirdpageDataORG} />
        </div>
        <ChatAI />
      </INDEX_ORG_Detail_DWrapper>

      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </>
  )
}
