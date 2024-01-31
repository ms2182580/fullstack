import { Home_Hero_D } from "./Home_Hero_D"
import { Home_HowItWorks_D } from "./Home_HowItWorks_D"
import { Home_HowItWorks_FinalThree_D } from "./Home_HowItWorks_FinalThree_D"
import { Home_NewPath_D } from "./Home_NewPath_D"
import { Home_OurFeatures } from "./Home_OurFeatures"
import { Home_Search_D } from "./Home_Search_D"
import { INDEX_HomeNWrapper } from "./styles/INDEX_HomeNWrapper"

// Home_OurFeatures
export const INDEX_Home = () => {
  return (
    <INDEX_HomeNWrapper>
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
