import ImgResources from "@/assets/images/teams/img-resources.png"
import { INDEX_ChatAI } from "../chat_ai"
import { INDEX_ResourcesWrapper } from "./styles/index-wrapper"

export const INDEX_Resources = () => {
  return (
    <INDEX_ResourcesWrapper>
      <INDEX_ChatAI
        img={ImgResources}
        alt={"two bubble icon, two emails icons and one picture"}
        whatUserWantToday={"resources"}
        activeCardProp={"Get Listing"}
      />
    </INDEX_ResourcesWrapper>
  )
}
