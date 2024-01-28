import {
  Dashboard_AIChatBubbeSvg,
  Dashboard_AIChatDiscoverSvg,
  Dashboard_AIChatUnderstandSvg,
  Dashnboard_AIChatCreateSvg,
} from "@/assets/icons"
import { AIChat_SuggestionsWrapper } from "./styles/AIChat_SuggestionsWrapper"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"

export const AIChat_Suggestions = () => {
  const boxes = [
    {
      icon: <Dashnboard_AIChatCreateSvg />,
      name: "Create",
      desc: "Create a new care plan for my child",
    },
    {
      icon: <Dashboard_AIChatUnderstandSvg />,
      name: "Understand",
      desc: "List the steps I need to take to get an IEP for my child",
    },
    {
      icon: <Dashboard_AIChatDiscoverSvg />,
      name: "Discover",
      desc: "Find healthcare providers, classes, and equipment that meet your specific needs",
    },
  ]
  return (
    <AIChat_SuggestionsWrapper>
      <Dashboard_AIChatBubbeSvg />
      <H3>How can I help you today?</H3>
      <div>
        {boxes.map((box) => (
          <div key={box.name}>
            {box.icon}
            <span>{box.name}</span>
            <span>{box.desc}</span>
          </div>
        ))}
      </div>
    </AIChat_SuggestionsWrapper>
  )
}
