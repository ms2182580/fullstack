import CheckNo from "@/assets/icons/check_no.svg"
import CheckYes from "@/assets/icons/check_yes.svg"
import Tooltip from "@/assets/icons/tooltip.svg"
import ArrowUp from "@/assets/images/arrow_up.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import Image from "next/image"
import { PVES_General_D_PublicAssistanceApplicantsWrapper } from "./styles/PVES_General_D_PublicAssistanceApplicantsWrapper"

type CardData_Type = {
  title?: string
  isHeader?: string[]
  single?: boolean
  family?: boolean
}[]

const cardData: CardData_Type = [
  {
    isHeader: ["Benefit Name", "Single person", "Family"],
  },
  {
    title: "Social Security Disability (SSD)",
    single: true,
    family: true,
  },
  {
    title: "Supplemental Security Income (SSI)",
    single: false,
    family: false,
  },
  {
    title: "Supplemental Nutrition Assistance (SNAP)",
    single: false,
    family: false,
  },
  {
    title: "Section 8 Housing Voucher Program",
    single: true,
    family: true,
  },
]

export const PVES_General_D_PublicAssistanceApplicants = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  return (
    <PVES_General_D_PublicAssistanceApplicantsWrapper id={theIdForComponent}>
      <details open>
        <summary tabIndex={0}>
          <H3>Public Assistance Applicants</H3>
          <span>
            <Image src={ArrowUp} alt="arrow to open or close the text" />
          </span>
        </summary>
        <div>
          <header>
            <span>
              <H4>Benefits Information for candidates</H4>
              <Tooltip />
            </span>
            <P>
              This position may effect benefit eligibility for Individuals and
              families with intellectual and developmental disabilities.{" "}
              <span tabIndex={0}>See more here</span>
            </P>
          </header>

          <div>
            {/* <header>
              <ul>
                <li>Benefit Name</li>
                <li>Single person</li>
                <li>Family</li>
              </ul>
            </header> */}

            <ul>
              {cardData.map((x) => {
                if (x.isHeader) {
                  return (
                    <li>
                      {x.isHeader.map((xHeader) => {
                        return (
                          <>
                            <span key={xHeader}>{xHeader}</span>
                          </>
                        )
                      })}
                    </li>
                  )
                }

                return (
                  <li key={x.title}>
                    <span>{x.title}</span>
                    <span>{x.single ? <CheckYes /> : <CheckNo />}</span>
                    <span>{x.family ? <CheckYes /> : <CheckNo />}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </details>
    </PVES_General_D_PublicAssistanceApplicantsWrapper>
  )
}
