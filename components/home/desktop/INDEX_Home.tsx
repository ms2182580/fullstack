import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { Home_Hero_D } from "./Home_Hero_D"
import { INDEX_HomeNWrapper } from "./styles/INDEX_HomeNWrapper"
import { Home_QuickHelp_D } from "./Home_QuickHelp_D"
import Home_Steps_D from "./Home_Steps_D"
import Home_Comment_D from "./Home_Comment_D"
import Home_Contribute_D from "./Home_Contribute_D"
import Home_Organization_D from "./Home_Organization_D"
import Home_AboutYou_D from "./Home_AboutYou_D"

export const INDEX_Home = () => {
  return (
    <INDEX_HomeNWrapper data-testid={KEYS_DATA_TESTID.INDEX_D_HOME}>
      <Home_Hero_D />
      <Home_QuickHelp_D />
      <Home_Steps_D />
      <Home_Comment_D />
      <Home_Contribute_D />
      <Home_Organization_D />
      <Home_AboutYou_D />
    </INDEX_HomeNWrapper>
  )
}
