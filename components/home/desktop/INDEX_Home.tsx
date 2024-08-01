import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { Home_Hero_D } from "./Home_Hero_D"
import { Home_HowItWorks_D } from "./Home_HowItWorks_D"
import { Home_HowItWorks_FinalThree_D } from "./Home_HowItWorks_FinalThree_D"
import { Home_NewPath_D } from "./Home_NewPath_D"
import { Home_OurFeatures } from "./Home_OurFeatures"
import { Home_Search_D } from "./Home_Search_D"
import { INDEX_HomeNWrapper } from "./styles/INDEX_HomeNWrapper"

export const INDEX_Home = () => {
  return (
    <INDEX_HomeNWrapper data-testid={KEYS_DATA_TESTID.INDEX_D_HOME}>
      <Home_Hero_D />
      <Home_NewPath_D />
      <Home_Search_D />
      <span>
        <Home_HowItWorks_D />
        <Home_HowItWorks_FinalThree_D />
      </span>

      <Home_OurFeatures />
    </INDEX_HomeNWrapper>
  )
}
