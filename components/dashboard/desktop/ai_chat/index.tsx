import SVGChatAIDefault from "@/assets/icons/chatai.svg"
import SvgMagicWand from "@/assets/icons/magic_wand_active.svg"
import SvgMagnifying from "@/assets/icons/magnifying_glass_default.svg"
import ImgLightbulb from "@/assets/images/teams/img-lightbulb.png"
import { INDEX_ChatAI } from "@/components/chat_ai"
import { CardProps } from "@/components/chat_ai/card"
import { INDEX_D_AIChatWrapper } from "./styles/index-d-aichat-wrapper"

const cardsData: CardProps[] = [
  {
    svg: SvgMagicWand,
    title: "Create",
    listOfOptions: ["Create a care plan for my child"],
  },
  {
    svg: ImgLightbulb,
    title: "Understand",
    listOfOptions: [
      "What is a speech therapist?",
      "List the steps to get an IEP",
    ],
  },
  {
    svg: SvgMagnifying,
    title: "Discover",
    listOfOptions: ["Find a yoga class", "Accessible stores near me"],
  },
]

export const INDEX_D_AIChat = () => {
  return (
    <INDEX_D_AIChatWrapper>
      <INDEX_ChatAI
        svgOrImage={SVGChatAIDefault}
        alt={"two bubble icon, two emails icons and one picture"}
        whatUserWantToday={"resources"}
        cardsDataProps={cardsData}
      />
    </INDEX_D_AIChatWrapper>
  )
}
