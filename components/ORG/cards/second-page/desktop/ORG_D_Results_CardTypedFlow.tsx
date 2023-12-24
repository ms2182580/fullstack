import { DATA_ORG_D } from "@/utils/org/DATA_ORG_D"
import { DATA_PCC_D } from "@/utils/org/pcc/DATA_PCC_D"
import { DATA_PCMPS_D } from "@/utils/org/pcmps/DATA_PCMPS_D"
import { DATA_PDCTR_D } from "@/utils/org/pdctr/DATA_PDCTR_D"
import { DATA_PMHSS_D } from "@/utils/org/pmhss/DATA_PMHSS_D"
import { DATA_PST_D } from "@/utils/org/pst/DATA_PST_D"
import { Fragment } from "react"
import { ORG_D_Results_CardTypedFlow_Individuals } from "./ORG_D_Results_CardTypedFlow_Individuals"
import { ORG_D_Results_CardTypedFlowWrapper } from "./styles/ORG_D_Results_CardTypedFlowWrapper"

/* 
!FH0
- Add all the data needed to use this to move the view to second and third page (like home of ORG)
*/

type Resources_TYPE = {
  title: string
  dataToRender: object[]
  toSecondPageData: object
  toThirdPageData?: unknown
}[]

const Resources = [
  {
    title: DATA_PMHSS_D[0][0], // string here!
    dataToRender: DATA_PMHSS_D[0].slice(1), // array with strings, number or objects with string or number
    toSecondPageData: DATA_ORG_D[5], // required data to go to second page
    categoryPosition: 5, // index on category to make search on function to move the user to second page
  },
  {
    title: DATA_PST_D[0][0],
    dataToRender: DATA_PST_D[0].slice(1),
    toSecondPageData: DATA_ORG_D[9],
    categoryPosition: 9,
  },
  {
    title: DATA_PCC_D[0][0],
    dataToRender: DATA_PCC_D[0].slice(1),
    toSecondPageData: DATA_ORG_D[3],
    categoryPosition: 3,
  },
  {
    title: DATA_PCMPS_D[0][0],
    dataToRender: DATA_PCMPS_D[0].slice(1),
    toSecondPageData: DATA_ORG_D[2],
    categoryPosition: 2,
  },
  {
    title: DATA_PDCTR_D[0][0],
    dataToRender: DATA_PDCTR_D[0].slice(1),
    toSecondPageData: DATA_ORG_D[4],
    categoryPosition: 4,
  },
]

export const ORG_D_Results_CardTypedFlow = () => {
  return (
    <ORG_D_Results_CardTypedFlowWrapper>
      {Resources.map((x) => {
        let theTitle: any = x.title

        let dataToRender: any = x.dataToRender

        return (
          <Fragment key={theTitle}>
            <ORG_D_Results_CardTypedFlow_Individuals
              title={theTitle}
              dataToRender={dataToRender}
              toSecondPageData={x.toSecondPageData}
              categoryPosition={x.categoryPosition}
            />
          </Fragment>
        )
      })}
    </ORG_D_Results_CardTypedFlowWrapper>
  )
}
