import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { ORG_M_Detail_MainCard_AboutWrapper } from "./styles/ORG_M_Detail_MainCard_About"
import { DATA_ORG_KeyNamesForCards_D } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { Fragment } from "react"
import { ORG_D_Detail_Card_SecondRow_Info } from "../desktop/ORG_D_Detail_Card_SecondRow_Info"
import { capitalizeWords } from "@/utils/capitalizeWords"
import { ORG_D_Detail_About } from "../desktop/ORG_D_Detail_About"

export const ORG_M_Detail_MainCard_About = () => {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  return (
    <ORG_M_Detail_MainCard_AboutWrapper>
      <div>
        <div>
          {Object.entries(
            thirdpageDataORG.card.rightPart[
              DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA
            ][DATA_ORG_KeyNamesForCards_D.CARD][
              DATA_ORG_KeyNamesForCards_D.LEFT
            ]
          ).map((x: any, index) => {
            let shouldDisplayInBlock = x[1][
              DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK
            ]
              ? true
              : false

            return (
              <Fragment
                key={`${x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]}_${x[1][
                  DATA_ORG_KeyNamesForCards_D.VALUE_NAME
                ].join(", ")}_${index}`}
              >
                <ORG_D_Detail_Card_SecondRow_Info
                  title={capitalizeWords(
                    x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]
                  )}
                  dataToShow={x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]}
                  displayBlock={shouldDisplayInBlock}
                />
              </Fragment>
            )
          })}
        </div>
        <div>
          {Object.entries(
            thirdpageDataORG.card.rightPart[
              DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA
            ][DATA_ORG_KeyNamesForCards_D.CARD][
              DATA_ORG_KeyNamesForCards_D.RIGHT
            ]
          ).map((x: any, index) => {
            let shouldDisplayInBlock = x[1][
              DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK
            ]
              ? true
              : false

            return (
              <Fragment
                key={`${x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]}_${x[1][
                  DATA_ORG_KeyNamesForCards_D.VALUE_NAME
                ].join(", ")}`}
              >
                <ORG_D_Detail_Card_SecondRow_Info
                  title={capitalizeWords(
                    x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]
                  )}
                  dataToShow={x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]}
                  displayBlock={shouldDisplayInBlock}
                />
              </Fragment>
            )
          })}
        </div>
      </div>
      <ORG_D_Detail_About
        name={thirdpageDataORG.fullName.first}
        lastName={thirdpageDataORG.fullName.last}
        aboutRef={null}
      />
      <button>Book Appointment</button>
    </ORG_M_Detail_MainCard_AboutWrapper>
  )
}
