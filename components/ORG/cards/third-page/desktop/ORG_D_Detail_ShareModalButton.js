import Image from "next/image.js"
import { useState } from "react"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_ShareModalButtonWrapper } from "./styles/ORG_D_Detail_ShareModalButtonWrapper.js"

export const ORG_D_Detail_ShareModalButton = ({ icon, altIcon, text, width = 24, height = 24, shouldChange = false, setShouldShowCopyLink, setShowQRCode }) => {
  const [isHover, setIsHover] = useState(false)

  const handleOnMouseEnter = (e) => {
    setIsHover(true)
  }

  const handleOnMouseLeave = () => {
    setIsHover(false)
  }

  const handleOnClick = (e) => {
    if (e.target.textContent === "Copy Link") {
      setShouldShowCopyLink("shouldShowCopyLinkTrue")
    }
    if (e.target.textContent === "QR Code") {
      setShowQRCode(true)
    }
  }

  return (
    <ORG_D_Detail_ShareModalButtonWrapper
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}>
      {shouldChange ? (
        <>
          {isHover === false ? (
            <>
              <Image
                src={icon}
                layout="fixed"
                width={width}
                height={height}
              />
            </>
          ) : (
            <>
              <Image
                src={altIcon}
                layout="fixed"
                width={width}
                height={height}
              />
            </>
          )}
        </>
      ) : (
        <Image
          src={icon}
          layout="fixed"
          width={width}
          height={height}
        />
      )}

      <H4 hover>{text}</H4>
    </ORG_D_Detail_ShareModalButtonWrapper>
  )
}
