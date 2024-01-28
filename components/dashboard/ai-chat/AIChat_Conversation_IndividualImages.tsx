import { AIChat_Conversation_IndividualImagesWrapper } from "./styles/AIChat_Conversation_IndividualImagesWrapper"

export const AIChat_Conversation_IndividualImages = () => {
  return (
    <AIChat_Conversation_IndividualImagesWrapper>
      <span>Insert any text here (this is the multi image sample)</span>
      <div>
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div>Image Preview</div>
        ))}
      </div>
    </AIChat_Conversation_IndividualImagesWrapper>
  )
}
