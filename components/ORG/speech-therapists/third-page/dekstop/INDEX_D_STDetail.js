import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { BackArrow } from "../../../../../assets/Icons"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { useORG_Ctx_STDataThirdpage_D } from "../../../../../context/ORG_Ctx_STDataThirdpageDesktop_Provider"
import { useWidthWindow1024 } from "../../../../../utils/useWidthWindow1024"
import { InFrontModal_D_Wrapper } from "../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { ST_D_Results_CardEmail } from "../../second-page/desktop/ST_D_Results_CardEmail"
import { ST_D_Results_CardInfo } from "../../second-page/desktop/ST_D_Results_CardInfo"
import { ST_D_Results_CardLocation } from "../../second-page/desktop/ST_D_Results_CardLocation"
import { ST_D_Results_CardPhone } from "../../second-page/desktop/ST_D_Results_CardPhone"
import { ST_HeaderMobileWrapper } from "../../styles/ST_HeaderMobileWrapper.js"
import { STDetail_Reviews } from "../STDetail_Reviews"
import { STDetail_Mobile } from "../mobile/STDetail_Mobile"
import { STDetail_Mobile_StickyNavbar } from "../mobile/STDetail_Mobile_StickyNavbar"
import { STDetail_Separator } from "../mobile/STDetail_Separator"
import { STDetail_STDetails_ThirdPageWrapper } from "../mobile/styles/STDetail_STDetails_ThirdPageWrapper"
import { STDetail_FAQS } from "./STDetail_FAQS"
import { STDetail_PageLastUpdated } from "./STDetail_PageLastUpdated"
import { ST_D_Detail_About } from "./ST_D_Detail_About"
import { ST_D_Detail_Appointments } from "./ST_D_Detail_Appointments"
import { ST_D_Detail_Header } from "./ST_D_Detail_Header"
import { ST_D_Detail_MainCard } from "./ST_D_Detail_MainCard"
import { ST_D_Detail_TwoButtons } from "./ST_D_Detail_TwoButtons"
import { INDEX_D_STDetailWrapper } from "./styles/INDEX_D_STDetailWrapper"

export const INDEX_D_STDetail = () => {
  const route = useRouter()
  const { STDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()

  if (STDataThirdpage_D === "") {
    route.push("/ORG/SpeechTherapists")
    return
  }

  // const { STDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()

  // const route = useRouter()

  // if (STDataThirdpage_D === "") {
  //   route.push("/ORG/SpeechTherapists")
  //   return
  // }

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
      setLanguages(STDataThirdpage_D.filters[0].language.map((x) => x[0].toUpperCase() + x.slice(1)))

      setServiceSettings(STDataThirdpage_D.filters[0].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1)))

      setMeetingFormat(STDataThirdpage_D.filters[0].meetingFormat.map((x) => x[0].toUpperCase() + x.slice(1)))

      setInsurance(STDataThirdpage_D.filters[0].insurance.map((x) => x[0].toUpperCase() + x.slice(1)))

      setAgesServed(
        STDataThirdpage_D.filters[0].agesServed.map((x) => {
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
      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />

      <INDEX_D_STDetailWrapper
        isMobile={isMobile}
        modalShowedCtx={modalShowedCtx}>
        {isMobile === false ? (
          <>
            <ST_D_Detail_Header STData={STDataThirdpage_D} />
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
              <ST_D_Detail_MainCard STData={STDataThirdpage_D} />
            </>
          ) : (
            <>
              <STDetail_Mobile STData={STDataThirdpage_D} />
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
              <ST_D_Detail_Appointments
                picture={STDataThirdpage_D.data[0].picture.large}
                name={STDataThirdpage_D.data[0].name.first}
                lastName={STDataThirdpage_D.data[0].name.last}
              />
            </>
          ) : null}
          {isMobile === false ? (
            <span
              className="toDisappear"
              ref={aboutRef}></span>
          ) : (
            <>
              <ST_D_Detail_About
                name={STDataThirdpage_D.data[0].name.first}
                lastName={STDataThirdpage_D.data[0].name.last}
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
                <ST_D_Results_CardInfo
                  title="Languages"
                  dataToShow={languages}
                  isMobile={true}
                  isThirdPage={true}
                />
                <ST_D_Results_CardInfo
                  title="Practice Setting"
                  dataToShow={serviceSettings}
                  isMobile={true}
                  isThirdPage={true}
                />
                <ST_D_Results_CardInfo
                  title="Meeting Format"
                  dataToShow={meetingFormat}
                  isMobile={true}
                  isThirdPage={true}
                />
                <ST_D_Results_CardInfo
                  title="Insurance"
                  dataToShow={insurance}
                  isMobile={true}
                  isThirdPage={true}
                />
                <ST_D_Results_CardInfo
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
                <ST_D_Results_CardInfo
                  title="Qualifications"
                  dataToShow={qualifications}
                  isMobile={true}
                  isThirdPage={true}
                  withoutComa={true}
                />
                <ST_D_Results_CardInfo
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
                <ST_D_Results_CardLocation
                  locationCity={STDataThirdpage_D.data[0].location.city}
                  locationStreetNumber={STDataThirdpage_D.data[0].location.street.number}
                  locationStreetName={STDataThirdpage_D.data[0].location.street.name}
                  locationState={STDataThirdpage_D.data[0].location.state}
                  isMobile={true}
                  isThirdPageMobile={true}
                />
                <ST_D_Results_CardPhone
                  phoneNumber={STDataThirdpage_D.data[0].cell}
                  isMobile={true}
                  isThirdPageMobile={true}
                />
                <ST_D_Results_CardEmail
                  email={STDataThirdpage_D.data[0].email}
                  isMobile={true}
                  isThirdPageMobile={true}
                />
                <ST_D_Detail_TwoButtons />
              </div>

              {isMobile === false ? null : (
                <>
                  <STDetail_Separator />
                </>
              )}
            </STDetail_STDetails_ThirdPageWrapper>
          )}

          <STDetail_Reviews
            name={STDataThirdpage_D.data[0].name.first}
            lastName={STDataThirdpage_D.data[0].name.last}
            reviewsRef={reviewsRef}
            rating={STDataThirdpage_D.filters[0].rating}
            reviews={STDataThirdpage_D.filters[0].reviews}
          />
          {isMobile === false ? null : (
            <>
              <STDetail_Separator isLastOne={true} />
            </>
          )}
          {isMobile === false ? (
            <>
              <STDetail_FAQS
                name={STDataThirdpage_D.data[0].name.first}
                lastName={STDataThirdpage_D.data[0].name.last}
                locationCity={STDataThirdpage_D.data[0].location.city}
                locationStreetNumber={STDataThirdpage_D.data[0].location.street.number}
                locationStreetName={STDataThirdpage_D.data[0].location.street.name}
                locationState={STDataThirdpage_D.data[0].location.state}
              />
            </>
          ) : null}

          {isMobile === false ? (
            <>
              <STDetail_PageLastUpdated
                name={STDataThirdpage_D.data[0].name.first}
                lastName={STDataThirdpage_D.data[0].name.last}
              />
            </>
          ) : null}
        </div>
      </INDEX_D_STDetailWrapper>
    </>
  )
}
