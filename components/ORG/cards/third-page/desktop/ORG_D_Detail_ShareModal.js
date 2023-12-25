import Image from "next/image.js"
import { useEffect, useRef, useState } from "react"
import { XSvg } from "../../../../../assets/Icons"
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
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_ShareModalButton } from "./ORG_D_Detail_ShareModalButton"
import { ORG_D_Detail_ShareModalWrapper } from "./styles/ORG_D_Detail_ShareModalWrapper.js"

const timeShowLinkCopied = 2200
const howLongAnimation = 700

export const ORG_D_Detail_ShareModal = ({ showModal, handleHideModal, picture, name, lastName, showQRCode, setShowQRCode }) => {
  const componentRef = useRef(null)

  // useOutsideHide(componentRef, setShow)

  useEffect(() => {
    function handleClickOutside(event) {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        handleHideModal()
      }
    }

    function handleKeydown(e) {
      if (componentRef.current && e.code === "Escape") {
        handleHideModal()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [componentRef])

  const [shouldShowCopyLink, setShouldShowCopyLink] = useState("shouldShowCopyLinkDefault")

  useEffect(() => {
    if (shouldShowCopyLink === "shouldShowCopyLinkTrue") {
      const timeoutId = setTimeout(() => {
        setShouldShowCopyLink("shouldShowCopyLinkFalse")
      }, timeShowLinkCopied)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [shouldShowCopyLink])

  useEffect(() => {
    if (shouldShowCopyLink === "shouldShowCopyLinkFalse") {
      const timeoutId = setTimeout(() => {
        setShouldShowCopyLink("shouldShowCopyLinkDefault")
      }, howLongAnimation + 1)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [shouldShowCopyLink])

  return (
    <ORG_D_Detail_ShareModalWrapper
      ref={componentRef}
      showModal={showModal}
      showQRCode={showQRCode}
      shouldShowCopyLink={shouldShowCopyLink}>
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
          <ORG_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_CopyLinkIcon}
            text="Copy Link"
            width={21}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_CopyLinkAltIcon}
            setShouldShowCopyLink={setShouldShowCopyLink}
          />
          <ORG_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_MailIcon}
            text="Email"
            height={18}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_MailAltIcon}
          />

          <ORG_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_QRIcon}
            text="QR Code"
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_QRAltIcon}
            setShowQRCode={setShowQRCode}
          />
          <ORG_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_PDFIcon}
            text="Export to PDF"
            height={23}
            shouldChange={true}
            altIcon={ORG_STDetail_Share_Modal_PDFAltIcon}
          />

          <ORG_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_FacebookIcon}
            text="Facebook"
          />
          <ORG_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_MessagesIcon}
            text="Messages"
          />
          <ORG_D_Detail_ShareModalButton
            icon={ORG_STDetail_Share_Modal_MessengerIcon}
            text="Messenger"
          />

          <ORG_D_Detail_ShareModalButton
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
    </ORG_D_Detail_ShareModalWrapper>
  )
}
