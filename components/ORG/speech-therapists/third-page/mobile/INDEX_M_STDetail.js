import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { BackArrow } from "../../../../../assets/Icons"
import { useORG_Ctx_STDataThirdpage_M } from "../../../../../context/ORG_Ctx_STDataThirdpageMobile_Provider"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
// import { ST_D_Results_CardEmail } from "../../second-page/desktop/ST_D_Results_CardEmail"
// import { ST_D_Results_CardInfo } from "../../second-page/desktop/ST_D_Results_CardInfo"
// import { ST_D_Results_CardLocation } from "../../second-page/desktop/ST_D_Results_CardLocation"
// import { ST_D_Results_CardPhone } from "../../second-page/desktop/ST_D_Results_CardPhone"
import { STDetail_Mobile_StickyNavbar } from "./STDetail_Mobile_StickyNavbar"
import { STDetail_Separator } from "./STDetail_Separator"
// import { ST_D_Detail_About } from "./ST_D_Detail_About"
// import { ST_D_Detail_TwoButtons } from "./ST_D_Detail_TwoButtons"
import { ST_D_Results_CardInfo } from "../../second-page/desktop/ST_D_Results_CardInfo"
import { ST_D_Detail_TwoButtons } from "../dekstop/ST_D_Detail_TwoButtons"
import { ST_M_Detail_Card } from "./ST_M_Detail_Card"
import { INDEX_M_STDetailWrapper } from "./styles/INDEX_M_STDetailWrapper.js"
import { STDetail_STDetails_ThirdPageWrapper } from "./styles/STDetail_STDetails_ThirdPageWrapper"
import { ST_M_HeaderWrapper } from "./styles/ST_M_HeaderWrapper.js"

export const INDEX_M_STDetail = () => {
  const route = useRouter()
  const { STDataThirdpage_M } = useORG_Ctx_STDataThirdpage_M()


  if (STDataThirdpage_M === "") {
    if (route.isReady) route.push("/ORG/SpeechTherapists")
    return
  }

  const [languages, setLanguages] = useState()
  const [serviceSettings, setServiceSettings] = useState()
  const [meetingFormat, setMeetingFormat] = useState()
  const [insurance, setInsurance] = useState()
  const [agesServed, setAgesServed] = useState()

  const [qualifications, setQualifications] = useState()
  const [additionalCredentials, setAdditionalCredentials] = useState()


  useEffect(() => {
    setLanguages(STDataThirdpage_M.filters[0].language.map((x) => x[0].toUpperCase() + x.slice(1)))

    setServiceSettings(STDataThirdpage_M.filters[0].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1)))

    setMeetingFormat(STDataThirdpage_M.filters[0].meetingFormat.map((x) => x[0].toUpperCase() + x.slice(1)))

    setInsurance(STDataThirdpage_M.filters[0].insurance.map((x) => x[0].toUpperCase() + x.slice(1)))

    setAgesServed(
      STDataThirdpage_M.filters[0].agesServed.map((x) => {
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
  }, [])

  const [highlight, setHighlight] = useState("about")
  const aboutRef = useRef(null)
  const detailsRef = useRef(null)
  const contactRef = useRef(null)
  const reviewsRef = useRef(null)

  // const refHandler = (el) => {
  //   detailsRef.current = el
  //   contactRef.current = el
  // }

  useEffect(() => {
    if (
      aboutRef.current !== null &&
      detailsRef.current !== null &&
      contactRef.current !== null &&
      reviewsRef.current !== null
      // isMobile
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

  // const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      {/* <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} /> */}

      <INDEX_M_STDetailWrapper
      // isMobile={isMobile}
      // modalShowedCtx={modalShowedCtx}
      >
        {/* {isMobile === false ? (
          <>
            <ST_D_Detail_Header STData={STDataThirdpage_M} />
          </>
        ) : (
          <>
            <ST_M_HeaderWrapper>
              <LinkNoStyle href="/ORG/SpeechTherapists">
                <BackArrow />
                <Caption bolder>Back to Results</Caption>
              </LinkNoStyle>
            </ST_M_HeaderWrapper>
          </>
        )} */}

        <ST_M_HeaderWrapper>
          <LinkNoStyle href="/ORG/SpeechTherapists">
            <BackArrow />
            <Caption bolder>Back to Results</Caption>
          </LinkNoStyle>
        </ST_M_HeaderWrapper>

        <div>
          {/* {isMobile === false ? (
            <>
              <ST_D_Detail_MainCard STData={STDataThirdpage_M} />
            </>
          ) : (
            <>
              <STDetail_Mobile STData={STDataThirdpage_M} />
            </>
          )} */}

          <ST_M_Detail_Card STData={STDataThirdpage_M} />

          {/* {isMobile === false ? null : (
            <>
              <STDetail_Mobile_StickyNavbar highlight={highlight} />
            </>
          )} */}

          <STDetail_Mobile_StickyNavbar highlight={highlight} />

          {/* {isMobile === false ? null : (
            <>
              <STDetail_Separator />
            </>
          )} */}

          <>
            <STDetail_Separator />
          </>

          {/* {isMobile === false ? (
            <>
              <ST_D_Detail_Appointments
                picture={STDataThirdpage_M.data[0].picture.large}
                name={STDataThirdpage_M.data[0].name.first}
                lastName={STDataThirdpage_M.data[0].name.last}
              />
            </>
          ) : null} */}

          {/* {isMobile === false ? (
            <span
              className="toDisappear"
              ref={aboutRef}></span>
          ) : (
            <>
              <ST_D_Detail_About
                name={STDataThirdpage_M.data[0].name.first}
                lastName={STDataThirdpage_M.data[0].name.last}
                aboutRef={aboutRef}
              />
            </>
          )} */}

          {/* <>
            <ST_D_Detail_About
              name={STDataThirdpage_M.data[0].name.first}
              lastName={STDataThirdpage_M.data[0].name.last}
              aboutRef={aboutRef}
            />
          </> */}

          {/* {isMobile === false ? null : (
            <>
              <STDetail_Separator />
            </>
          )} */}

          <>
            <STDetail_Separator />
          </>

          {/* {isMobile === false ? (
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
                  locationCity={STDataThirdpage_M.data[0].location.city}
                  locationStreetNumber={STDataThirdpage_M.data[0].location.street.number}
                  locationStreetName={STDataThirdpage_M.data[0].location.street.name}
                  locationState={STDataThirdpage_M.data[0].location.state}
                  isMobile={true}
                  isThirdPageMobile={true}
                />
                <ST_D_Results_CardPhone
                  phoneNumber={STDataThirdpage_M.data[0].cell}
                  isMobile={true}
                  isThirdPageMobile={true}
                />
                <ST_D_Results_CardEmail
                  email={STDataThirdpage_M.data[0].email}
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
          )} */}

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
            {/* {isMobile === false ? null : (
                <>
                  <STDetail_Separator />
                </>
            )} */}

            <>
              <STDetail_Separator />
            </>
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
            {/* {isMobile === false ? null : (
                <>
                  <STDetail_Separator />
                </>
              )} */}

            <STDetail_Separator />
            <div
              id="Contact"
              ref={contactRef}>
              {/* <ST_D_Results_CardLocation
                locationCity={STDataThirdpage_M.data[0].location.city}
                locationStreetNumber={STDataThirdpage_M.data[0].location.street.number}
                locationStreetName={STDataThirdpage_M.data[0].location.street.name}
                locationState={STDataThirdpage_M.data[0].location.state}
                isMobile={true}
                isThirdPageMobile={true}
              /> */}
              {/* <ST_D_Results_CardPhone
                phoneNumber={STDataThirdpage_M.data[0].cell}
                isMobile={true}
                isThirdPageMobile={true}
              /> */}
              {/* <ST_D_Results_CardEmail
                email={STDataThirdpage_M.data[0].email}
                isMobile={true}
                isThirdPageMobile={true}
              /> */}
              <ST_D_Detail_TwoButtons />
            </div>

            {/* {isMobile === false ? null : (
                <>
                  <STDetail_Separator />
                </>
              )} */}

            <>
              <STDetail_Separator />
            </>
          </STDetail_STDetails_ThirdPageWrapper>

          {/* <STDetail_Reviews
            name={STDataThirdpage_M.data[0].name.first}
            lastName={STDataThirdpage_M.data[0].name.last}
            reviewsRef={reviewsRef}
            rating={STDataThirdpage_M.filters[0].rating}
            reviews={STDataThirdpage_M.filters[0].reviews}
          /> */}

          {/* {isMobile === false ? null : (
            <>
              <STDetail_Separator isLastOne={true} />
            </>
          )} */}

          <>
            <STDetail_Separator isLastOne={true} />
          </>

          {/* {isMobile === false ? (
            <>
              <STDetail_FAQS
                name={STDataThirdpage_M.data[0].name.first}
                lastName={STDataThirdpage_M.data[0].name.last}
                locationCity={STDataThirdpage_M.data[0].location.city}
                locationStreetNumber={STDataThirdpage_M.data[0].location.street.number}
                locationStreetName={STDataThirdpage_M.data[0].location.street.name}
                locationState={STDataThirdpage_M.data[0].location.state}
              />
            </>
          ) : null} */}

          {/* {isMobile === false ? (
            <>
              <STDetail_PageLastUpdated
                name={STDataThirdpage_M.data[0].name.first}
                lastName={STDataThirdpage_M.data[0].name.last}
              />
            </>
          ) : null} */}
        </div>
      </INDEX_M_STDetailWrapper>
    </>
  )
}
