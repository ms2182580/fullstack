import Link from "next/link"
import { AIChat_Conversation_IndividualMapWrapper } from "./styles/AIChat_Conversation_IndividualMapWrapper"

export const AIChat_Conversation_IndividualMap = () => {
  return (
    <AIChat_Conversation_IndividualMapWrapper>
      <Link href="#">
        Child’s Therapy Center 123 Water Crest Road New York, NY 10012
      </Link>
      <div>Map</div>
    </AIChat_Conversation_IndividualMapWrapper>
  )
}
