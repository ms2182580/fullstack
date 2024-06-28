import { LeftArrowLongSvg } from "@/assets/icons"
import SVG_Copy from "@/assets/icons/org/third-page/copy-ellipse.svg"
import SVG_Email from "@/assets/icons/org/third-page/email-ellipse.svg"
import IMG_Facebook from "@/assets/icons/org/third-page/facebook-ellipse.png"
import IMG_Mesagges from "@/assets/icons/org/third-page/mesagges-ellipse.png"
import IMG_Messenger from "@/assets/icons/org/third-page/messenger-ellipse.png"
import SVG_PDF from "@/assets/icons/org/third-page/pdf-ellipse.svg"
import SVG_QR from "@/assets/icons/org/third-page/qr-ellipse.svg"
import IMG_VerifiedCheck from "@/assets/icons/org/third-page/verified_check.png"
import IMG_Whatsapp from "@/assets/icons/org/third-page/whatsapp-ellipse.png"
import QR_Big from "@/assets/images/Dashboard/qr.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  ORG_D_Detail_ShareModalButton,
  ORG_D_Detail_ShareModalButton_Type,
} from "./ORG_D_Detail_ShareModalButton"
import { ORG_D_Detail_ShareModalWrapper } from "./styles/ORG_D_Detail_ShareModalWrapper"

const timeShowLinkCopied = 2200
const howLongAnimation = 700

type DataToDisplay_Type = ORG_D_Detail_ShareModalButton_Type[]

export const ORG_D_Detail_ShareModal = ({ picture, name, lastName }) => {
  const [showQRCode, setShowQRCode] = useState(false)
  const [shouldShowCopyLink, setShouldShowCopyLink] = useState(
    "shouldShowCopyLinkDefault"
  )

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

  const dataToDisplay: DataToDisplay_Type = [
    {
      SVG: SVG_Copy,
      text: "Copy Link",
      width: 21,
      shouldChange: true,
      setShouldShowCopyLink: setShouldShowCopyLink,
    },
    {
      SVG: SVG_Email,
      text: "Email",
      height: 18,
      shouldChange: true,
    },
    {
      SVG: SVG_QR,
      text: "QR Code",
      shouldChange: true,
      setShowQRCode: setShowQRCode,
    },
    {
      SVG: SVG_PDF,
      text: "Export PDF",
      height: 23,
      shouldChange: true,
    },
    {
      IMG: IMG_Facebook,
      text: "Facebook",
    },
    {
      IMG: IMG_Messenger,
      text: "Messenger",
    },
    {
      IMG: IMG_Mesagges,
      text: "Messages",
    },
    {
      IMG: IMG_Whatsapp,
      text: "Whatsapp",
    },
  ]

  return (
    <ORG_D_Detail_ShareModalWrapper
      showQRCode={showQRCode}
      shouldShowCopyLink={shouldShowCopyLink}
    >
      <div>
        <H3>Share this provider:</H3>
        <Image src={picture} alt="image" />
        <H3>
          {name} {lastName} CCC-SLP
        </H3>
      </div>

      <div>
        {showQRCode === false ? (
          <div>
            <ul>
              {dataToDisplay.map((data, index) => {
                return (
                  <li key={`${data.text}_${index}`}>
                    <ORG_D_Detail_ShareModalButton
                      SVG={data?.SVG}
                      IMG={data?.IMG}
                      text={data.text}
                      width={data?.width}
                      height={data?.height}
                      shouldChange={data?.shouldChange}
                      setShouldShowCopyLink={data?.setShouldShowCopyLink}
                      setShowQRCode={data?.setShowQRCode}
                    />
                  </li>
                )
              })}
            </ul>
            <button>Add to Care Plan</button>
          </div>
        ) : (
          <div>
            <div
              onClick={() => setShowQRCode(false)}
              onKeyDown={(e) => e.key === "Enter" && setShowQRCode(false)}
              tabIndex={0}
            >
              <LeftArrowLongSvg />
              <span>Back</span>
            </div>

            <Image
              src={QR_Big}
              layout="fixed"
              width={196}
              height={196}
              alt="QR icon"
            />
            <P>
              Friends can scan this QR code with their <br /> smartphone’s
              camera to see this provider
            </P>
          </div>
        )}
      </div>

      <div
        className={
          shouldShowCopyLink === "shouldShowCopyLinkTrue"
            ? "shouldShowCopyLinkTrue shouldShowCopyLinkDefault"
            : shouldShowCopyLink === "shouldShowCopyLinkFalse"
            ? "shouldShowCopyLinkFalse shouldShowCopyLinkDefault"
            : "shouldShowCopyLinkDefault"
        }
      >
        <Image
          src={IMG_VerifiedCheck}
          layout="fixed"
          width={22}
          height={22}
          alt="Link copied image"
        />
        <H4> Link copied to clipboard</H4>
      </div>
    </ORG_D_Detail_ShareModalWrapper>
  )
}
