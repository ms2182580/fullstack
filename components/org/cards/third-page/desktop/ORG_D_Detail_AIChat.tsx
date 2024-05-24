import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_AIChatWrapper } from "./styles/ORG_D_Detail_AIChatWrapper"

import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"

export const ORG_D_Detail_AIChat = () => {
  return (
    <ORG_D_Detail_AIChatWrapper>
      <H2>AI Chat</H2>
      <div>
        <P>Have questions about community classes?</P>
        <textarea placeholder="Ask me anything about services." />
        <button>Ask</button>
      </div>
    </ORG_D_Detail_AIChatWrapper>
  )
}
