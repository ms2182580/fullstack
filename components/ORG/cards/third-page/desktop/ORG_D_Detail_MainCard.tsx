import { ORG_D_Detail_MainCard_Left } from "./ORG_D_Detail_MainCard_Left"
import { ORG_D_Detail_MainCard_Right } from "./ORG_D_Detail_MainCard_Right"
import { ORG_D_Detail_MainCardWrapper } from "./styles/ORG_D_Detail_MainCardWrapper"

export const ORG_D_Detail_MainCard = ({ defaultId = "about", arrayInnerNavBar, layout_MainCardRight, addToCarePlanWithIcon, howIsMap }) => {
  return (
    <ORG_D_Detail_MainCardWrapper id={defaultId}>
      <ORG_D_Detail_MainCard_Left howIsMap={howIsMap} />

      <ORG_D_Detail_MainCard_Right
        layout_MainCardRight={layout_MainCardRight}
        addToCarePlanWithIcon={addToCarePlanWithIcon}
      />
    </ORG_D_Detail_MainCardWrapper>
  )
}
