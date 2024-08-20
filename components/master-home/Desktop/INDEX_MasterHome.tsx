import MasterHome_Comment_D from "./MasterHome_Comment_D"
import MasterHome_Contribute_D from "./MasterHome_Contribute_D"
import { MasterHome_Hero_D } from "./MasterHome_Hero_D"
import { MasterHome_QuickHelp_D } from "./MasterHome_QuickHelp_D"
import { INDEX_MasterHomeNWrapper } from "./styles/INDEX_MasterHomeNWrapper"

export const INDEX_MasterHome = () => {
  return (
    <INDEX_MasterHomeNWrapper>
      <MasterHome_Hero_D />
      <MasterHome_QuickHelp_D />
      <MasterHome_Comment_D />
      <MasterHome_Contribute_D />
    </INDEX_MasterHomeNWrapper>
  )
}
