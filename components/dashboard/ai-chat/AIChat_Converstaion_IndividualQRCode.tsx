import Image from "next/image"
import { AIChat_Converstaion_IndividualQRCodeWrapper } from "./styles/AIChat_Converstaion_IndividualQRCodeWrapper"
import QRCode from "@/assets/images/Dashboard/qr.png"
export const AIChat_Converstaion_IndividualQRCode = () => {
  return (
    <AIChat_Converstaion_IndividualQRCodeWrapper>
      <span>Scan QR code to pay</span>
      <Image src={QRCode} alt="QR Code" width={138} height={141} />
    </AIChat_Converstaion_IndividualQRCodeWrapper>
  )
}
