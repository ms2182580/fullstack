import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { BackArrow } from "../../../../assets/Icons"
import { useCtx_ShowModal } from "../../../../context/Ctx_ShowModal"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { InFrontModalWrapper } from "../../../inFront/styles/InFrontModalWrapper"
import { Caption } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../ui/hyperlink/HyperlinkNoStyles"
import { ST_CardEmail } from "../ST_CardEmail.js"
import { ST_CardLocation } from "../ST_CardLocation.js"
import { ST_CardPhone } from "../ST_CardPhone"
import { STDetail_TwoButtons } from "../ST_TwoButtons"
import { ST_CardInfo } from "../second-page/ST_CardInfo"
import { ST_HeaderMobileWrapper } from "../styles/ST_HeaderMobileWrapper.js"
import { STDetail_About } from "./STDetail_About"
import { STDetail_Appointments } from "./STDetail_Appointments"
import { STDetail_Reviews } from "./STDetail_Reviews"
import { STDetail_FAQS } from "./dekstop/STDetail_FAQS"
import { STDetail_Header } from "./dekstop/STDetail_Header"
import { STDetail_PageLastUpdated } from "./dekstop/STDetail_PageLastUpdated"
import { STDetail_STDetails } from "./dekstop/STDetail_STDetails"
import { STDetail_Mobile } from "./mobile/STDetail_Mobile"
import { STDetail_Mobile_StickyNavbar } from "./mobile/STDetail_Mobile_StickyNavbar"
import { STDetail_Separator } from "./mobile/STDetail_Separator"
import { STDetail_STDetails_ThirdPageWrapper } from "./mobile/styles/STDetail_STDetails_ThirdPageWrapper"
import { STDetail_MainWrapper } from "./styles/STDetail_MainWrapper"

export const STDetail_Main = () => {
  const { speechtherapist } = useORG_Ctx_IndividualSpeechtherapist()

  const route = useRouter()

  if (speechtherapist === "") {
    route.push("/ORG/SpeechTherapists")
    return
  }

  const [languages, setLanguages] = useState()
  const [serviceSettings, setServiceSettings] = useState()
  const [meetingFormat, setMeetingFormat] = useState()
  const [insurance, setInsurance] = useState()
  const [agesServed, setAgesServed] = useState()

  const [qualifications, setQualifications] = useState()
  const [additionalCredentials, setAdditionalCredentials] = useState()

  const { isMobile } = useWidthWindow1024()

  useEffect(() => {
    if (isMobile) {
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
    }
  }, [isMobile])

  // useEffect(() => {
  //   /*_codeHere_*/
  //   console.log("isMobile:", isMobile)
  // }, [isMobile])

  const [highlight, setHighlight] = useState("about")
  const aboutRef = useRef(null)
  const detailsRef = useRef(null)
  const contactRef = useRef(null)
  const reviewsRef = useRef(null)

  const refHandler = (el) => {
    detailsRef.current = el
    contactRef.current = el
  }

  useEffect(() => {
    if (
      aboutRef.current !== null &&
      detailsRef.current !== null &&
      contactRef.current !== null &&
      reviewsRef.current !== null &&
      isMobile
    ) {
      const handleScroll = () => {
        if (aboutRef.current && isMobile) {
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

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <InFrontModalWrapper modalShowedCtx={modalShowedCtx} />

      <STDetail_MainWrapper
        isMobile={isMobile}
        modalShowedCtx={modalShowedCtx}>
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
          {isMobile === false ? (
            <>
              <STDetail_Appointments
                picture={speechtherapist.data[0].picture.large}
                name={speechtherapist.data[0].name.first}
                lastName={speechtherapist.data[0].name.last}
              />
            </>
          ) : null}
          {isMobile === false ? (
            <span
              className="toDisappear"
              ref={aboutRef}></span>
          ) : (
            <>
              <STDetail_About
                name={speechtherapist.data[0].name.first}
                lastName={speechtherapist.data[0].name.last}
                aboutRef={aboutRef}
              />
            </>
          )}
          {isMobile === false ? null : (
            <>
              <STDetail_Separator />
            </>
          )}
          {isMobile === false ? (
            <span
              className="toDisappear"
              ref={refHandler}></span>
          ) : (
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
              {/* 
              !FH
              Check this things: is already inside a isMobile === true, so what's the point of check it again?
              
              */}
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
                <STDetail_TwoButtons />
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
            rating={speechtherapist.filters[0].rating}
            reviews={speechtherapist.filters[0].reviews}
          />
          {isMobile === false ? null : (
            <>
              <STDetail_Separator isLastOne={true} />
            </>
          )}
          {isMobile === false ? (
            <>
              <STDetail_FAQS
                name={speechtherapist.data[0].name.first}
                lastName={speechtherapist.data[0].name.last}
                locationCity={speechtherapist.data[0].location.city}
                locationStreetNumber={speechtherapist.data[0].location.street.number}
                locationStreetName={speechtherapist.data[0].location.street.name}
                locationState={speechtherapist.data[0].location.state}
              />
            </>
          ) : null}

          {isMobile === false ? (
            <>
              <STDetail_PageLastUpdated
                name={speechtherapist.data[0].name.first}
                lastName={speechtherapist.data[0].name.last}
              />
            </>
          ) : null}
        </div>
      </STDetail_MainWrapper>
    </>
  )
}
