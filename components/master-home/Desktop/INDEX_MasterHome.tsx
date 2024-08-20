import { MasterHome_Hero_D } from "./MasterHome_Hero_D"
import { MasterHome_QuickHelp_D } from "./MasterHome_QuickHelp_D"
import { INDEX_MasterHomeNWrapper } from "./styles/INDEX_MasterHomeNWrapper"

export const INDEX_MasterHome = () => {
  return (
    <INDEX_MasterHomeNWrapper>
      <MasterHome_Hero_D />
      <MasterHome_QuickHelp_D />
      <div>Hello</div>
    </INDEX_MasterHomeNWrapper>
  )
}
