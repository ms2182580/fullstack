import { Highlights_D } from "@/components/org/highlights/Highlights_D"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { ORG_D_Results_Main_RightWrapper } from "./styles/ORG_D_Results_Main_RightWrapper"

type Props = {
  backendData?: any
  theIndex: number
}

/* 
Code here to know which keys you want there
*/

const whichKeys = {
  "THERAPEUTIC SERVICES": ["diagnosisServed", "goals", "languages"],
  LEGAL: [
    /* 
    
    */
  ],
}

const dataList = [
  {
    key: "practice area",
    value: ["ADHD"],
  },
  {
    key: "years in practice",
    value: "7",
  },
  {
    key: "ages served",
    value: "3-21 years old",
  },
  {
    key: "languages",
    value: ["English", "Spanish"],
  },
]

export const ORG_D_Results_Main_Right = ({ backendData, theIndex }: Props) => {
  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData()

  if (backendData) {
    return (
      <ORG_D_Results_Main_RightWrapper backendData={backendData}>
        <H3>{backendData.recordName}</H3>
        <H4>{backendData.recordSubtype}</H4>
        <P>
          {backendData.address[0].city}, {backendData.address[0].state}{" "}
        </P>
        <StarsRatingReview_D rating={5} reviews={147 + theIndex} />
        <span>
          <Highlights_D highlights={["Highlight 1", "Highlight 2"]} />
        </span>

        <div>
          <ul>
            {dataList.map(({ key, value }, index) => {
              const theValueOnMap =
                typeof value === "string"
                  ? value
                  : Array.isArray(value)
                  ? new Intl.ListFormat("en").format(value)
                  : "_UNEXPECTED_"
              return (
                <li key={index}>
                  <P>{key}:</P>
                  <P>{theValueOnMap}</P>
                </li>
              )
            })}
          </ul>
        </div>
      </ORG_D_Results_Main_RightWrapper>
    )
  }

  return null
}
