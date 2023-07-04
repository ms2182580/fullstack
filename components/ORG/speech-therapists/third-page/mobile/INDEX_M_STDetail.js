import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { BackArrow } from "../../../../../assets/Icons"
import { useORG_Ctx_STDataThirdpage_M } from "../../../../../context/ORG_Ctx_STDataThirdpageMobile_Provider"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { ST_M_Detail_Contact } from "./ST_M_Detail_Contact.js"
import { ST_M_Detail_Details } from "./ST_M_Detail_Details.js"
// import { ST_D_Results_CardEmail } from "../../second-page/desktop/ST_D_Results_CardEmail"
// import { ST_D_Results_CardInfo } from "../../second-page/desktop/ST_D_Results_CardInfo"
// import { ST_D_Results_CardLocation } from "../../second-page/desktop/ST_D_Results_CardLocation"
// import { ST_D_Results_CardPhone } from "../../second-page/desktop/ST_D_Results_CardPhone"
import { ST_M_Detail_Separator } from "./ST_M_Detail_Separator"
import { ST_M_Detail_StickyNavbar } from "./ST_M_Detail_StickyNavbar"
// import { ST_D_Detail_About } from "./ST_D_Detail_About"
// import { ST_D_Detail_TwoButtons } from "./ST_D_Detail_TwoButtons"
import { ST_M_Detail_Reviews } from "../ST_M_Detail_Reviews"
import { ST_M_Detail_About } from "./ST_M_Detail_About"
import { ST_M_Detail_Card } from "./ST_M_Detail_Card"
import { INDEX_M_STDetailWrapper } from "./styles/INDEX_M_STDetailWrapper.js"
import { ST_M_HeaderWrapper } from "./styles/ST_M_HeaderWrapper.js"

/* 
!FH0
Check every part where the hover can be used
*/

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

  const [scrollMarginTopState, setScrollMarginTopState] = useState("50px")

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

  useEffect(() => {
    if (
      aboutRef.current !== null &&
      detailsRef.current !== null &&
      contactRef.current !== null &&
      reviewsRef.current !== null
    ) {
      const handleScroll = () => {

        const aboutPosition = aboutRef.current.offsetTop - Number(scrollMarginTopState.replace("px", "")) - 1
        const detailsPosition = detailsRef.current.offsetTop - Number(scrollMarginTopState.replace("px", "")) - 1
        const contactPosition = contactRef.current.offsetTop - Number(scrollMarginTopState.replace("px", "")) - 1
        const reviewsPosition = reviewsRef.current.offsetTop - Number(scrollMarginTopState.replace("px", "")) - 1

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

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <>
      <INDEX_M_STDetailWrapper>
        <ST_M_HeaderWrapper>
          <LinkNoStyle href="/ORG/SpeechTherapists">
            <BackArrow />
            <Caption bolder>Back to Results</Caption>
          </LinkNoStyle>
        </ST_M_HeaderWrapper>

        <ST_M_Detail_Card STData={STDataThirdpage_M} />

        <ST_M_Detail_StickyNavbar highlight={highlight} />

        <>
          <ST_M_Detail_Separator />
        </>

        <ST_M_Detail_About
          name={STDataThirdpage_M.data[0].name.first}
          lastName={STDataThirdpage_M.data[0].name.last}
          theRef={aboutRef}
          scrollMarginTopState={scrollMarginTopState}
        />

        <>
          <ST_M_Detail_Separator />
        </>

        <ST_M_Detail_Details
          theRef={detailsRef}
          languages={languages}
          serviceSettings={serviceSettings}
          meetingFormat={meetingFormat}
          insurance={insurance}
          agesServed={agesServed}
          qualifications={qualifications}
          additionalCredentials={additionalCredentials}
          scrollMarginTopState={scrollMarginTopState}
        />

        <>
          <ST_M_Detail_Separator />
        </>

        <ST_M_Detail_Contact
          theRef={contactRef}
          phoneNumber={STDataThirdpage_M.data[0].cell}
          email={STDataThirdpage_M.data[0].email}
          locationCity={STDataThirdpage_M.data[0].location.city}
          locationStreetNumber={STDataThirdpage_M.data[0].location.street.number}
          locationStreetName={STDataThirdpage_M.data[0].location.street.name}
          locationState={STDataThirdpage_M.data[0].location.state}
          scrollMarginTopState={scrollMarginTopState}
        />

        <>
          <ST_M_Detail_Separator />
        </>

        <ST_M_Detail_Reviews
          name={STDataThirdpage_M.data[0].name.first}
          lastName={STDataThirdpage_M.data[0].name.last}
          theRef={reviewsRef}
          rating={STDataThirdpage_M.filters[0].rating}
          reviews={STDataThirdpage_M.filters[0].reviews}
          scrollMarginTopState={scrollMarginTopState}
        />

        <>
          <ST_M_Detail_Separator isLastOne={true} />
        </>
      </INDEX_M_STDetailWrapper>
    </>
  )
}
