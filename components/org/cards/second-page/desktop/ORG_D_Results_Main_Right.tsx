import { Highlights_2_D } from "@/components/org/highlights/Highlights_2_D"
import { Highlights_D } from "@/components/org/highlights/Highlights_D"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  H3,
  H4,
} from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { capitalizeWords } from "@/utils/capitalizeWords"
import {
  DATA_ORG_KeyNamesForCards_D,
  DATA_ORG_KeyNamesForCards_D_KEYS,
} from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ORG_D_Results_Main_RightWrapper } from "./styles/ORG_D_Results_Main_RightWrapper"

type Props = {
  renderThisCard?: number
  renderThisFilter?: number
  backendData?: any
}

/* 
Code here to know which keys you want there
*/

const whichKeys = {
  "THERAPEUTIC SERVICES": [
    "diagnosisServed",
    "goals",
    "languages",
  ],
  LEGAL: [
    /* 
    
    */
  ],
}

export const ORG_D_Results_Main_Right = ({
  renderThisCard = 0,
  renderThisFilter = 0,
  backendData,
}: Props) => {
  const { secondpageDataORG }: any =
    useORG_Ctx_D_SecondpageData()

  if (backendData) {
    return (
      <ORG_D_Results_Main_RightWrapper
        backendData={backendData}
      >
        <H3>{backendData.recordName}</H3>
        <H4>{backendData.recordSubtype}</H4>
        <P>{backendData.address[0].city}</P>
        <StarsRatingReview_D
          reviews={backendData.reviews.length}
        />

        <ul>
          {Array(3)
            .fill(0)
            .map((x, index) => {
              return (
                <li key={index}>
                  <P>data coming soon!</P>
                </li>
              )
            })}
        </ul>
      </ORG_D_Results_Main_RightWrapper>
    )
  }

  return (
    <ORG_D_Results_Main_RightWrapper>
      <H3>
        {secondpageDataORG.cardData[renderThisCard].title}
      </H3>
      <H4>
        {
          secondpageDataORG.cardData[renderThisCard]
            .subtitle
        }
      </H4>
      <P>
        {secondpageDataORG.cardData[renderThisCard].city}
      </P>
      <StarsRatingReview_D
        rating={
          secondpageDataORG.cardData[renderThisCard].rating
        }
        reviews={
          secondpageDataORG.cardData[renderThisCard].reviews
        }
      />

      <div>
        {Object.entries(
          secondpageDataORG.right[renderThisFilter]
        ).map((x: any, index) => {
          if (
            x[0] ===
            DATA_ORG_KeyNamesForCards_D_KEYS.HIGHLIGHT_PLUS
          ) {
            return (
              <span
                className="HIGHLIGHTS_PLUS"
                key={`${x[0]}_${x[1][
                  DATA_ORG_KeyNamesForCards_D_KEYS
                    .VALUE_NAME
                ].join(", ")}`}
              >
                <Highlights_2_D
                  highlights={
                    x[1][
                      DATA_ORG_KeyNamesForCards_D_KEYS
                        .VALUE_NAME
                    ]
                  }
                />
              </span>
            )
          }

          if (
            x[0] === DATA_ORG_KeyNamesForCards_D.HIGHLIGHT
          ) {
            return (
              <span
                className="HIGHLIGHTS"
                key={`${x[0]}_${x[1][
                  DATA_ORG_KeyNamesForCards_D.VALUE_NAME
                ].join(", ")}`}
              >
                <Highlights_D
                  highlights={
                    x[1][
                      DATA_ORG_KeyNamesForCards_D.VALUE_NAME
                    ]
                  }
                />
              </span>
            )
          }

          if (
            x[0] !==
            DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA
          ) {
            return (
              <span
                className="NO_THIRDPAGE_DATA"
                key={`${x[0]}`}
              >
                <P>
                  {capitalizeWords(
                    x[1][
                      DATA_ORG_KeyNamesForCards_D.KEY_NAME
                    ]
                  )}
                  :{" "}
                  <span>
                    {new Intl.ListFormat("en").format(
                      x[1][
                        DATA_ORG_KeyNamesForCards_D
                          .VALUE_NAME
                      ]
                    )}
                  </span>
                </P>
              </span>
            )
          }
        })}
      </div>
    </ORG_D_Results_Main_RightWrapper>
  )
}
