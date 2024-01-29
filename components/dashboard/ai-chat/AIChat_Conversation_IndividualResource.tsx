import Image from "next/image"
import { AIChat_Conversation_IndividualResourceWrapper } from "./styles/AIChat_Conversation_IndividualResourceWrapper"
import Link from "next/link"
import { Dashboard_AIChatDots } from "@/assets/icons"

export const AIChat_Conversation_IndividualResource = () => {
  return (
    <AIChat_Conversation_IndividualResourceWrapper>
      <span>We think this psychiatrist could be a great fit:</span>
      <div>
        <Image src={"/images/avatar.png"} alt="" width={60} height={60} />
        <div>
          <div>
            <span>Record Name</span>
            <span>Record Subtitle</span>
          </div>
          <Dashboard_AIChatDots />
        </div>
      </div>
      <Link href="#">Search for more in resource directory</Link>
    </AIChat_Conversation_IndividualResourceWrapper>
  )
}
