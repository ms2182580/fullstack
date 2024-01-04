import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { SPECIFIC_DATA_KEY } from "@/utils/org/second-page/desktop/specificData"
import { useMemo } from "react"
import { ORG_D_Detail_MainCard_Left } from "./ORG_D_Detail_MainCard_Left"
import { ORG_D_Detail_MainCard_Right } from "./ORG_D_Detail_MainCard_Right"
import { ORG_D_Detail_MainCardWrapper } from "./styles/ORG_D_Detail_MainCardWrapper"

export const ORG_D_Detail_MainCard = ({ defaultId = "about", layout_MainCardRight, addToCarePlanWithIcon, howIsMap, tooltipDisplay }: any) => {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const isPVES = useMemo(() => {
    let haveSpecificData = thirdpageDataORG.card.leftPart[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]

    if (haveSpecificData) {
      return Boolean(haveSpecificData[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA].isPVES)
    }
    return false
  }, [])

  return (
    <ORG_D_Detail_MainCardWrapper id={defaultId}>
      <ORG_D_Detail_MainCard_Left
        howIsMap={howIsMap}
        isPVES={isPVES}
      />

      <ORG_D_Detail_MainCard_Right
        layout_MainCardRight={layout_MainCardRight}
        addToCarePlanWithIcon={addToCarePlanWithIcon}
        tooltipDisplay={tooltipDisplay}
        isPVES={isPVES}
      />
    </ORG_D_Detail_MainCardWrapper>
  )
}
