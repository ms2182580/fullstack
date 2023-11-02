import { InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"
import { ORG_D_Detail_MainCard_Left } from "./ORG_D_Detail_MainCard_Left"
import { ORG_D_Detail_MainCard_Right } from "./ORG_D_Detail_MainCard_Right"
import { ORG_D_Detail_MainCardWrapper } from "./styles/ORG_D_Detail_MainCardWrapper"

export const ORG_D_Detail_MainCard = ({ defaultId = "about", arrayInnerNavBar, layout_MainCardRight }) => {
  return (
    <ORG_D_Detail_MainCardWrapper id={defaultId ? defaultId : arrayInnerNavBar[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY]}>
      <ORG_D_Detail_MainCard_Left />

      <ORG_D_Detail_MainCard_Right layout_MainCardRight={layout_MainCardRight} />
    </ORG_D_Detail_MainCardWrapper>
  )
}
