import ImgCategories from "@/assets/images/teams/img-categories.png"
import { INDEX_ChatAI } from "@/components/chat_ai"
import { INDEX_CategoriesWrapper } from "./styles/index-wrapper"

export const INDEX_Categories = () => {
  return (
    <INDEX_CategoriesWrapper>
      <INDEX_ChatAI
        img={ImgCategories}
        alt={"image of a megaphone and two bubble chats"}
        whatUserWantToday={"categories"}
        activeCardProp="See Categories"
      />
    </INDEX_CategoriesWrapper>
  )
}
