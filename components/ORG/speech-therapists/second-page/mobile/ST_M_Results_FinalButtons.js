import { useORG_Ctx_ShowFiltersMobile } from "../../../../../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { ST_M_Results_FinalButtonsWrapper } from "./styles/ST_M_Results_FinalButtonsWrapper.js"

export const ST_M_Results_FinalButtons = () => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  return (
    <ST_M_Results_FinalButtonsWrapper mustShowFiltersMobile={mustShowFiltersMobile}>
      ST_M_Results_FinalButtons
    </ST_M_Results_FinalButtonsWrapper>
  )
}
