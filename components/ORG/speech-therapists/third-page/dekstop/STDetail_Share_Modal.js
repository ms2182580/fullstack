import Image from "next/image.js"
import { useEffect, useRef, useState } from "react"
import ORG_STDetail_Share_Modal_CopyLinkAltIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_CopyLinkAltIcon.png"
import ORG_STDetail_Share_Modal_CopyLinkIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_CopyLinkIcon.png"
import ORG_STDetail_Share_Modal_FacebookIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_FacebookIcon.jpg"
import ORG_STDetail_Share_Modal_LinkCopiedIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_LinkCopiedIcon.png"
import ORG_STDetail_Share_Modal_MailAltIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_MailAltIcon.png"
import ORG_STDetail_Share_Modal_MailIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_MailIcon.png"
import ORG_STDetail_Share_Modal_MessagesIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_MessagesIcon.png"
import ORG_STDetail_Share_Modal_MessengerIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_MessengerIcon.png"
import ORG_STDetail_Share_Modal_PDFAltIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_PDFAltIcon.png"
import ORG_STDetail_Share_Modal_PDFIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_PDFIcon.png"
import ORG_STDetail_Share_Modal_QRAltIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_QRAltIcon.png"
import ORG_STDetail_Share_Modal_QRCodeIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_QRCodeIcon.png"
import ORG_STDetail_Share_Modal_QRIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_QRIcon.png"
import ORG_STDetail_Share_Modal_WhatsappIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_WhatsappIcon.png"

import { XSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { STDetail_Share_Modal_Button } from "./STDetail_Share_Modal_Button.js"
import { STDetail_Share_ModalWrapper } from "./styles/STDetail_Share_ModalWrapper.js"

export const STDetail_Share_Modal = ({
  showModal,
  handleHideModal,
  picture,
  name,
  lastName,
  showQRCode,
  setShowQRCode
}) => {
  const componentRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        handleHideModal()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [componentRef])

  const [shouldShowCopyLink, setShouldShowCopyLink] = useState(false)

  useEffect(() => {
    if (shouldShowCopyLink) {
      const timeoutId = setTimeout(() => {
        setShouldShowCopyLink(false)
      }, 2200)
      return () => clearTimeout(timeoutId)
    }
  }, [shouldShowCopyLink])

  return (
    <STDetail_Share_ModalWrapper
      ref={componentRef}
      showModal={showModal}
      showQRCode={showQRCode}>
      <span onClick={handleHideModal}>
        <XSvg />
      </span>
      <H3 bold>Share this provider:</H3>
      <div>
        <Image
          src={picture}
          layout="fixed"
          width="115"
          height="86"
        />
        <H3>
          {name} {lastName} CCC-SLP
        </H3>
      </div>
      {showQRCode === false ? (
        <div>
          <STDetail_Share_Modal_Button
            icon={ORG_STDetail_Share_Modal_CopyLinkIcon}
            text="Copy Link"
            width={21}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_CopyLinkAltIcon}
            setShouldShowCopyLink={setShouldShowCopyLink}
          />
          <STDetail_Share_Modal_Button
            icon={ORG_STDetail_Share_Modal_MailIcon}
            text="Email"
            height={18}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_MailAltIcon}
          />

          <STDetail_Share_Modal_Button
            icon={ORG_STDetail_Share_Modal_QRIcon}
            text="QR Code"
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_QRAltIcon}
            setShowQRCode={setShowQRCode}
          />
          <STDetail_Share_Modal_Button
            icon={ORG_STDetail_Share_Modal_PDFIcon}
            text="Export to PDF"
            height={23}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_PDFAltIcon}
          />

          <STDetail_Share_Modal_Button
            icon={ORG_STDetail_Share_Modal_FacebookIcon}
            text="Facebook"
          />
          <STDetail_Share_Modal_Button
            icon={ORG_STDetail_Share_Modal_MessagesIcon}
            text="Messages"
          />
          <STDetail_Share_Modal_Button
            icon={ORG_STDetail_Share_Modal_MessengerIcon}
            text="Messenger"
          />

          <STDetail_Share_Modal_Button
            icon={ORG_STDetail_Share_Modal_WhatsappIcon}
            text="WhatsApp"
          />
        </div>
      ) : (
        <div>
          <Image
            src={ORG_STDetail_Share_Modal_QRCodeIcon}
            layout="fixed"
            width={196}
            height={196}
          />
          <P semibold>Friends can scan this QR code with their smartphone’s camera to see this provider</P>
        </div>
      )}

      <div className={shouldShowCopyLink ? "showCopyLink linkCopied" : "hideCopyLink linkCopied"}>
        <Image
          src={ORG_STDetail_Share_Modal_LinkCopiedIcon}
          layout="fixed"
          width={22}
          height={22}
        />
        <H4> Linked copied to clipboard</H4>
      </div>
    </STDetail_Share_ModalWrapper>
  )
}
