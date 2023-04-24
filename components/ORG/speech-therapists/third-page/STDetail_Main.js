import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { BackArrow } from "../../../../assets/Icons"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { Caption } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../ui/hyperlink/HyperlinkNoStyles"
import { ST_CardEmail } from "../ST_CardEmail.js"
import { ST_CardLocation } from "../ST_CardLocation.js"
import { ST_CardPhone } from "../ST_CardPhone"
import { ST_PageLastUpdated } from "../ST_PageLastUpdated"
import { ST_TwoButtons } from "../ST_TwoButtons"
import { ST_CardInfo } from "../second-page/ST_CardInfo"
import { ST_HeaderMobileWrapper } from "../styles/ST_HeaderMobileWrapper.js"
import { STDetail_About } from "./STDetail_About"
import { STDetail_Reviews } from "./STDetail_Reviews"
import { STDetail_Header } from "./dekstop/STDetail_Header"
import { STDetail_STDetails } from "./dekstop/STDetail_STDetails"
import { STDetail_Mobile } from "./mobile/STDetail_Mobile"
import { STDetail_Mobile_StickyNavbar } from "./mobile/STDetail_Mobile_StickyNavbar"
import { STDetail_Separator } from "./mobile/STDetail_Separator"
import { STDetail_STDetails_ThirdPageWrapper } from "./mobile/styles/STDetail_STDetails_ThirdPageWrapper"
import { STDetail_MainWrapper } from "./styles/STDetail_MainWrapper"

export const STDetail_Main = () => {
  const { speechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  // console.log('speechtherapist:', speechtherapist)
  const [languages, setLanguages] = useState()
  const [serviceSettings, setServiceSettings] = useState()
  const [meetingFormat, setMeetingFormat] = useState()
  const [insurance, setInsurance] = useState()
  const [agesServed, setAgesServed] = useState()

  const [qualifications, setQualifications] = useState()
  const [additionalCredentials, setAdditionalCredentials] = useState()

  const route = useRouter()

  const { isMobile } = useWidthWindow1024()

  useEffect(() => {
    setLanguages(speechtherapist.filters[0].language.map((x) => x[0].toUpperCase() + x.slice(1)))

    setServiceSettings(speechtherapist.filters[0].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1)))

    setMeetingFormat(speechtherapist.filters[0].meetingFormat.map((x) => x[0].toUpperCase() + x.slice(1)))

    setInsurance(speechtherapist.filters[0].insurance.map((x) => x[0].toUpperCase() + x.slice(1)))

    setAgesServed(
      speechtherapist.filters[0].agesServed.map((x) => {
        if (x.split(" ")[1] === "months") {
          return x[0].toUpperCase() + x.slice(1)
        } else {
          return `${x[0].toUpperCase()} ${x.slice(1)} old`
        }
      })
    )

    setQualifications([
      ["Education Level: Master's"],
      ["Years in Practice: 5 years"],
      ["License Number: 1239082"],
      ["State of License: New York"]
    ])

    setAdditionalCredentials([
      ["Lee Silverman Voice Treatment"],
      ["Certification"],
      ["SLP, Board Certified Behavior "],
      ["Analyst (BCBA)"]
    ])
  }, [isMobile])

  const [highlight, setHighlight] = useState("about")
  const aboutRef = useRef(null)
  const detailsRef = useRef(null)
  const contactRef = useRef(null)
  const reviewsRef = useRef(null)

  useEffect(() => {
    if (
      aboutRef.current !== null &&
      detailsRef.current !== null &&
      contactRef.current !== null &&
      reviewsRef.current !== null
    ) {
      const handleScroll = () => {
        if (aboutRef.current) {
          const aboutPosition = aboutRef.current.offsetTop
          const detailsPosition = detailsRef.current.offsetTop
          const contactPosition = contactRef.current.offsetTop
          const reviewsPosition = reviewsRef.current.offsetTop

          if (window.scrollY >= aboutPosition && window.scrollY < detailsPosition) {
            setHighlight("about")
          } else if (window.scrollY >= detailsPosition && window.scrollY < contactPosition) {
            setHighlight("details")
          } else if (window.scrollY >= contactPosition && window.scrollY < reviewsPosition) {
            setHighlight("contact")
          } else if (window.scrollY >= reviewsPosition) {
            setHighlight("reviews")
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
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
          <ST_HeaderMobileWrapper>
            <LinkNoStyle href="/ORG/SpeechTherapists">
              <BackArrow />
              <Caption bolder>Back to Results</Caption>
            </LinkNoStyle>
          </ST_HeaderMobileWrapper>
        </>
      )}

      {/* 
      //? Here I think here should be this part of the designs with this type of styles
      
      Design: https://www.figma.com/file/I7oVy5wUDMzI2L65ySeutA/Winternship-2023?node-id=3321-178507&t=TK2z2U9sOpQ7MTyL-0
      
      Component: FriendlyDiagnoses.js
      
      */}

      <div>
        {isMobile === false ? (
          <>
            <STDetail_STDetails STData={speechtherapist} />
          </>
        ) : (
          <>
            <STDetail_Mobile STData={speechtherapist} />
          </>
        )}

        {isMobile === false ? null : (
          <>
            <STDetail_Mobile_StickyNavbar highlight={highlight} />
          </>
        )}

        {isMobile === false ? null : (
          <>
            <STDetail_Separator />
          </>
        )}

        <STDetail_About
          name={speechtherapist.data[0].name.first}
          lastName={speechtherapist.data[0].name.last}
          aboutRef={aboutRef}
        />

        {isMobile === false ? null : (
          <>
            <STDetail_Separator />
          </>
        )}

        {isMobile === false ? null : (
          <STDetail_STDetails_ThirdPageWrapper
            id="Details"
            ref={detailsRef}>
            <div>
              <ST_CardInfo
                title="Languages"
                dataToShow={languages}
                isMobile={true}
                isThirdPage={true}
              />
              <ST_CardInfo
                title="Practice Setting"
                dataToShow={serviceSettings}
                isMobile={true}
                isThirdPage={true}
              />
              <ST_CardInfo
                title="Meeting Format"
                dataToShow={meetingFormat}
                isMobile={true}
                isThirdPage={true}
              />
              <ST_CardInfo
                title="Insurance"
                dataToShow={insurance}
                isMobile={true}
                isThirdPage={true}
              />
              <ST_CardInfo
                title="Ages Served"
                dataToShow={agesServed}
                isMobile={true}
                isThirdPage={true}
              />
            </div>

            {isMobile === false ? null : (
              <>
                <STDetail_Separator />
              </>
            )}

            <div>
              <ST_CardInfo
                title="Qualifications"
                dataToShow={qualifications}
                isMobile={true}
                isThirdPage={true}
                withoutComa={true}
              />
              <ST_CardInfo
                title="Additional Credentials"
                dataToShow={additionalCredentials}
                isMobile={true}
                isThirdPage={true}
                withoutComa={true}
              />
            </div>

            {isMobile === false ? null : (
              <>
                <STDetail_Separator />
              </>
            )}

            <div
              id="Contact"
              ref={contactRef}>
              <ST_CardLocation
                locationCity={speechtherapist.data[0].location.city}
                locationStreetNumber={speechtherapist.data[0].location.street.number}
                locationStreetName={speechtherapist.data[0].location.street.name}
                locationState={speechtherapist.data[0].location.state}
                isMobile={true}
                isThirdPageMobile={true}
              />

              <ST_CardPhone
                phoneNumber={speechtherapist.data[0].cell}
                isMobile={true}
                isThirdPageMobile={true}
              />
              <ST_CardEmail
                email={speechtherapist.data[0].email}
                isMobile={true}
                isThirdPageMobile={true}
              />
              <ST_TwoButtons />
            </div>

            {isMobile === false ? null : (
              <>
                <STDetail_Separator />
              </>
            )}
          </STDetail_STDetails_ThirdPageWrapper>
        )}

        <STDetail_Reviews
          name={speechtherapist.data[0].name.first}
          lastName={speechtherapist.data[0].name.last}
          reviewsRef={reviewsRef}
        />

        {isMobile === false ? null : (
          <>
            <STDetail_Separator isLastOne={true} />
          </>
        )}

        {isMobile === false ? (
          <>
            <ST_PageLastUpdated />
          </>
        ) : null}
      </div>
    </STDetail_MainWrapper>
  )
}
