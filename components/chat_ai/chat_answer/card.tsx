import IMGPlaceholderResponseChatai from "@/assets/images/placeholder-response-chatai.png"
import Image from "next/image.js"
import { CardWrapper } from "./styles/card-wrapper"

export const Card = ({ naicsDesc1, naicsNumber1 }) => {
  return (
    <CardWrapper>
      <input type="checkbox" />
      <Image
        src={IMGPlaceholderResponseChatai}
        alt="placeholder-response-chatai"
      />
      <div>
        <p>{naicsDesc1}</p>
        <p>NAICS: {naicsNumber1}</p>
      </div>
    </CardWrapper>
  )
}
