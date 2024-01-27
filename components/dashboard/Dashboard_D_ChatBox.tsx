import { ButtonSmall } from "../ui/buttons/general"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../ui/heading_body_text/HeaderFonts"
import { Dashboard_D_ChatBotWrapper } from "./styles/Dashboard_D_ChatBotWrapper"

export const Dashboard_D_ChatBot = () => {
  return (
    <Dashboard_D_ChatBotWrapper>
      <div>
        <H4>
          Have a question about Inclusive? Ask our AI <br /> Chat Bot.
        </H4>
        <span>
          <input type="text" placeholder="Ask me anything..." />
          <ButtonSmall>Ask</ButtonSmall>
        </span>
      </div>
    </Dashboard_D_ChatBotWrapper>
  )
}
