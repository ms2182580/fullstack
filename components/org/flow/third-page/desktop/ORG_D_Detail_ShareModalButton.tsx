import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image, { StaticImageData } from "next/image.js"
import { FunctionComponent, SVGProps } from "react"
import { ORG_D_Detail_ShareModalButtonWrapper } from "./styles/ORG_D_Detail_ShareModalButtonWrapper"

export type ORG_D_Detail_ShareModalButton_Type = {
  SVG?: FunctionComponent<SVGProps<SVGSVGElement>>
  IMG?: StaticImageData
  text: string
  width?: number
  height?: number
  shouldChange?: boolean
  setShouldShowCopyLink?: (someValue: string) => void
  setShowQRCode?: (someValue: boolean) => void
}

export const ORG_D_Detail_ShareModalButton = ({
  SVG,
  IMG,
  text,
  width = 80,
  height = 80,
  setShouldShowCopyLink,
  setShowQRCode,
}: ORG_D_Detail_ShareModalButton_Type) => {
  // const [isHover, setIsHover] = useState(false)

  // const handleOnMouseEnter = (e) => {
  //   setIsHover(true)
  // }

  // const handleOnMouseLeave = () => {
  //   setIsHover(false)
  // }

  const handleOnClick = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      if (
        setShouldShowCopyLink &&
        text.toLocaleLowerCase().includes("copy link")
      ) {
        setShouldShowCopyLink("shouldShowCopyLinkTrue")
      }
      if (setShowQRCode && text.toLocaleLowerCase().includes("qr")) {
        setShowQRCode(true)
      }
    }
  }

  return (
    <ORG_D_Detail_ShareModalButtonWrapper
      // onMouseEnter={handleOnMouseEnter}
      // onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
      tabIndex={0}
    >
      {SVG ? (
        <SVG />
      ) : IMG ? (
        <Image src={IMG?.src} width={width} height={height} alt="icon" />
      ) : null}

      <H4>{text}</H4>
    </ORG_D_Detail_ShareModalButtonWrapper>
  )
}
