import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BackArrow } from "../../../assets/Icons"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { useWidthWindow } from "../../../utils/useWidthWindow"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { STDetail_About } from "./STDetail_About"
import { STDetail_Header } from "./STDetail_Header"
import { STDetail_PageLastUpdated } from "./STDetail_PageLastUpdated"
import { STDetail_Reviews } from "./STDetail_Reviews"
import { STDetail_STDetails } from "./STDetail_STDetails"
import { STDetail_HeaderMobileWrapper } from "./styles/STDetail_HeaderMobileWrapper.js"
import { STDetail_MainWrapper } from "./styles/STDetail_MainWrapper"
import { STDetailMobile } from "./third-page/SpeechTherapistCardMobile/STDetailMobile"
import { STDetailMobile_StickyNavbar } from "./third-page/SpeechTherapistCardMobile/STDetailMobile_StickyNavbar"

export const SpeechtherapistDetail = () => {
  const { speechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  const route = useRouter()

  const { isMobile } = useWidthWindow()
  
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 456) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

  if (speechtherapist === "") {
    route.push("/ORG/SpeechTherapists")
    return
  }
  
  

  return (
    <STDetail_MainWrapper isMobile={isMobile}>
      {isMobile === false ? (
        <>
          <STDetail_Header STData={speechtherapist} />
        </>
      ) : (
        <>
          <STDetail_HeaderMobileWrapper>
            <LinkNoStyle href="/ORG/SpeechTherapists">
              <BackArrow />
              <Caption bolder>Back to Results</Caption>
            </LinkNoStyle>
          </STDetail_HeaderMobileWrapper>
        </>
      )}

      <div>
        {isMobile === false ? (
          <>
            <STDetail_STDetails STData={speechtherapist} />
          </>
        ) : (
          <>
            <STDetailMobile STData={speechtherapist}  />
          </>
        )}

        {isMobile === false ? null : (
          <>
            <STDetailMobile_StickyNavbar sticky={sticky}/>
              
            
          </>
        )}

        <STDetail_About
          isMobile={isMobile}
          name={speechtherapist.data[0].name.first}
          lastName={speechtherapist.data[0].name.last}
          sticky={sticky}
        />

        {isMobile === false ? null : (
          <>
            <p>Language card</p>
            <p>Qualifications card</p>
            <p>
              <i>Tip: this cards have the same organization as the second card</i>
            </p>

            <br />

            <p>
              Contact card with <strong>email</strong> and <strong>getDirection</strong> buttons
            </p>
            <p>
              <i>Tip: The contact is very similar, not equal but very similar</i>
            </p>
          </>
        )}

        <STDetail_Reviews
          isMobile={isMobile}
          name={speechtherapist.data[0].name.first}
          lastName={speechtherapist.data[0].name.last}
        />

        {isMobile === false ? (
          <>
            <STDetail_PageLastUpdated />
          </>
        ) : null}
      </div>
    </STDetail_MainWrapper>
  )
}
