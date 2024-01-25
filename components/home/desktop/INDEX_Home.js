import { Hero_D_Banner } from "./Hero_D_Banner"
import { Home_D_Service_N } from "./Home_D_Services_N"
import { Home_Feature_D_N } from "./Home_Feature_D_N"
import { Home_Hero_D_N } from "./Home_Hero_D_N"
import { INDEX_HomeNWrapper } from "./styles/INDEX_HomeNWrapper"

export const INDEX_Home = () => {
  return (
    <INDEX_HomeNWrapper>
      <Home_Hero_D_N />
      <Home_Feature_D_N />
      <Home_D_Service_N />
      <Hero_D_Banner />
    </INDEX_HomeNWrapper>
  )
}
