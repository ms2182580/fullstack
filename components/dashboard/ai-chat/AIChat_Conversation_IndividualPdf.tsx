import Image from "next/image"
import { AIChat_Conversation_IndividualPdfWrapper } from "./styles/AIChat_Conversation_IndividualPdfWrapper"
import PDF from "@/assets/images/Dashboard/pdf.png"
import Link from "next/link"

type Props = {
  isSender: boolean
}
export const AIChat_Conversation_IndividualPdf = ({ isSender }: Props) => {
  return (
    <AIChat_Conversation_IndividualPdfWrapper isSender={isSender}>
      <span>Download your care plan below</span>
      <div>
        <Image src={PDF} alt="pdf" width={55} height={61} />
        <Link href="#">Download</Link>
      </div>
    </AIChat_Conversation_IndividualPdfWrapper>
  )
}
