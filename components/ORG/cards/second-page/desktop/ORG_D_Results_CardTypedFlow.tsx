import { DATA_PCC_D } from "@/utils/ORG/pcc/DATA_PCC_D"
import { DATA_PCMPS_D } from "@/utils/ORG/pcmps/DATA_PCMPS_D"
import { DATA_PDCTR_D } from "@/utils/ORG/pdctr/DATA_PDCTR_D"
import { DATA_PMHSS_D } from "@/utils/ORG/pmhss/DATA_PMHSS_D"
import { DATA_PST_D } from "@/utils/ORG/pst/DATA_PST_D"
import { Fragment } from "react"
import { ORG_D_Results_CardTypedFlow_Individuals } from "./ORG_D_Results_CardTypedFlow_Individuals"
import { ORG_D_Results_CardTypedFlowWrapper } from "./styles/ORG_D_Results_CardTypedFlowWrapper"
/* import { DATA_PPSYT_D } from "@/utils/ORG/pdctr/DATA_PSYT_D"
import { DATA_PMH_D } from "@/utils/ORG/pmhss/DATA_PMH_D"
import { DATA_PSLP_D } from "@/utils/ORG/pst/DATA_PSLP_D"
import { Fragment } from "react"
import { ORG_D_Results_CardTypedFlow_Individuals } from "./ORG_D_Results_CardTypedFlow_Individuals"
import { ORG_D_Results_CardTypedFlowWrapper } from "./styles/ORG_D_Results_CardTypedFlowWrapper" */

// export type Resources_TYPE = {
//   title: string | object
//   // dataToRender: (string | number | { [key: string]: string | number })[]
//   dataToRender: string | number | object
// }

const Resources = [
  {
    title: DATA_PMHSS_D[0][0], // string here!
    dataToRender: DATA_PMHSS_D[0].slice(1), // array with strings, number or objects with string or number
  },
  {
    title: DATA_PST_D[0][0],
    dataToRender: DATA_PST_D[0].slice(1),
  },
  {
    title: DATA_PCC_D[0][0],
    dataToRender: DATA_PCC_D[0].slice(1),
  },
  {
    title: DATA_PCMPS_D[0][0],
    dataToRender: DATA_PCMPS_D[0].slice(1),
  },
  {
    title: DATA_PDCTR_D[0][0],
    dataToRender: DATA_PDCTR_D[0].slice(1),
  },
]

export const ORG_D_Results_CardTypedFlow = () => {
  return (
    <ORG_D_Results_CardTypedFlowWrapper>
      {Resources.map((x, index) => {
        let theTitle: any = x.title

        let dataToRender: any = x.dataToRender

        return (
          <Fragment key={theTitle}>
            <ORG_D_Results_CardTypedFlow_Individuals
              title={theTitle}
              dataToRender={dataToRender}
            />
          </Fragment>
        )
      })}
    </ORG_D_Results_CardTypedFlowWrapper>
  )
}
