import Image from "next/image.js"
import { useEffect, useRef, useState } from "react"
import { XSvg } from "../../../../../../assets/Icons"
import ORG_STDetail_Share_Modal_CopyLinkAltIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_CopyLinkAltIcon.png"
import ORG_STDetail_Share_Modal_CopyLinkIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_CopyLinkIcon.png"
import ORG_STDetail_Share_Modal_FacebookIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_FacebookIcon.jpg"
import ORG_STDetail_Share_Modal_LinkCopiedIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_LinkCopiedIcon.png"
import ORG_STDetail_Share_Modal_MailAltIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_MailAltIcon.png"
import ORG_STDetail_Share_Modal_MailIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_MailIcon.png"
import ORG_STDetail_Share_Modal_MessagesIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_MessagesIcon.png"
import ORG_STDetail_Share_Modal_MessengerIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_MessengerIcon.png"
import ORG_STDetail_Share_Modal_PDFAltIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_PDFAltIcon.png"
import ORG_STDetail_Share_Modal_PDFIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_PDFIcon.png"
import ORG_STDetail_Share_Modal_QRAltIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_QRAltIcon.png"
import ORG_STDetail_Share_Modal_QRCodeIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_QRCodeIcon.png"
import ORG_STDetail_Share_Modal_QRIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_QRIcon.png"
import ORG_STDetail_Share_Modal_WhatsappIcon from "../../../../../../assets/Icons/ORG_STDetail_Share_Modal_WhatsappIcon.png"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts"
import { ST_D_Detail_ShareModalButton } from "./ST_D_Detail_ShareModalButton.js"
import { ST_D_Detail_ShareModalWrapper } from "./styles/ST_D_Detail_ShareModalWrapper.js"

export const ST_D_Detail_ShareModal = ({
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

  const [shouldShowCopyLink, setShouldShowCopyLink] = useState("shouldShowCopyLinkDefault")

  useEffect(() => {
    if (shouldShowCopyLink === "shouldShowCopyLinkTrue") {
      const timeoutId = setTimeout(() => {
        setShouldShowCopyLink("shouldShowCopyLinkFalse")
      }, 2200)
      return () => clearTimeout(timeoutId)
    }
  }, [shouldShowCopyLink])

  return (
    <ST_D_Detail_ShareModalWrapper
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
          <ST_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_CopyLinkIcon}
            text="Copy Link"
            width={21}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_CopyLinkAltIcon}
            setShouldShowCopyLink={setShouldShowCopyLink}
          />
          <ST_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_MailIcon}
            text="Email"
            height={18}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_MailAltIcon}
          />

          <ST_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_QRIcon}
            text="QR Code"
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_QRAltIcon}
            setShowQRCode={setShowQRCode}
          />
          <ST_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_PDFIcon}
            text="Export to PDF"
            height={23}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_PDFAltIcon}
          />

          <ST_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_FacebookIcon}
            text="Facebook"
          />
          <ST_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_MessagesIcon}
            text="Messages"
          />
          <ST_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_MessengerIcon}
            text="Messenger"
          />

          <ST_D_Detail_ShareModalButton
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

      <div
        className={
          shouldShowCopyLink === "shouldShowCopyLinkTrue"
            ? "shouldShowCopyLinkTrue shouldShowCopyLinkDefault"
            : shouldShowCopyLink === "shouldShowCopyLinkFalse"
              ? "shouldShowCopyLinkFalse shouldShowCopyLinkDefault"
              : "shouldShowCopyLinkDefault"
        }>
        <Image
          src={ORG_STDetail_Share_Modal_LinkCopiedIcon}
          layout="fixed"
          width={22}
          height={22}
        />
        <H4> Linked copied to clipboard</H4>
      </div>
    </ST_D_Detail_ShareModalWrapper>
  )
}
