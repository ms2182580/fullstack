import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BackArrow } from "../../../assets/Icons"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { useWidthWindow } from "../../../utils/useWidthWindow"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { EmailGetDirectionComponent } from "./EmailGetFirectionWrapper"
import {
  EverySingleSpeechTherapist_Email,
  EverySingleSpeechTherapist_Location,
  EverySingleSpeechTherapist_Phone
} from "./SingleSpeechtherapistComponents_Left"
import { STDetail_About } from "./STDetail_About"
import { STDetail_Header } from "./STDetail_Header"
import { STDetail_PageLastUpdated } from "./STDetail_PageLastUpdated"
import { STDetail_Reviews } from "./STDetail_Reviews"
import { STDetail_STDetails } from "./STDetail_STDetails"
import { STDetail_HeaderMobileWrapper } from "./styles/STDetail_HeaderMobileWrapper.js"
import { STDetail_MainWrapper } from "./styles/STDetail_MainWrapper"
import TherapistInfoSecondPage from "./TherapistInfoSecondPage"
import { STDetailMobile } from "./third-page/SpeechTherapistCardMobile/STDetailMobile"
import { STDetailMobile_StickyNavbar } from "./third-page/SpeechTherapistCardMobile/STDetailMobile_StickyNavbar"
import { STDetail_STDetails_ThirdPageWrapper } from "./third-page/SpeechTherapistCardMobile/styles/STDetail_STDetails_ThirdPageWrapper"

export const SpeechtherapistDetail = () => {
  const { speechtherapist } = useORG_Ctx_IndividualSpeechtherapist()

  console.log("speechtherapist:", speechtherapist)

  const [languages, setLanguages] = useState()
  const [serviceSettings, setServiceSettings] = useState()
  const [meetingFormat, setMeetingFormat] = useState()
  const [insurance, setInsurance] = useState()
  const [agesServed, setAgesServed] = useState()

  const [qualifications, setQualifications] = useState()
  const [additionalCredentials, setAdditionalCredentials] = useState()

  const route = useRouter()

  const { isMobile } = useWidthWindow()

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 454) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  useEffect(() => {
    setLanguages(speechtherapist.filters[0].languages.map((x) => x[0].toUpperCase() + x.slice(1)))

    setServiceSettings(speechtherapist.filters[0].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1)))

    setMeetingFormat(speechtherapist.filters[0].meetingFormat.map((x) => x[0].toUpperCase() + x.slice(1)))

    setInsurance(speechtherapist.filters[0].accepts.map((x) => x[0].toUpperCase() + x.slice(1)))

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
            <STDetailMobile STData={speechtherapist} />
          </>
        )}

        {isMobile === false ? null : (
          <>
            <STDetailMobile_StickyNavbar sticky={sticky} />
          </>
        )}

        <STDetail_About
          isMobile={isMobile}
          name={speechtherapist.data[0].name.first}
          lastName={speechtherapist.data[0].name.last}
          sticky={sticky}
        />

        {isMobile === false ? null : (
          <STDetail_STDetails_ThirdPageWrapper>
            <div>
              <TherapistInfoSecondPage
                title="Languages"
                dataToShow={languages}
                isMobile={true}
                isThirdPage={true}
              />
              <TherapistInfoSecondPage
                title="Practice Setting"
                dataToShow={serviceSettings}
                isMobile={true}
                isThirdPage={true}
              />
              <TherapistInfoSecondPage
                title="Meeting Format"
                dataToShow={meetingFormat}
                isMobile={true}
                isThirdPage={true}
              />
              <TherapistInfoSecondPage
                title="Insurance"
                dataToShow={insurance}
                isMobile={true}
                isThirdPage={true}
              />
              <TherapistInfoSecondPage
                title="Ages Served"
                dataToShow={agesServed}
                isMobile={true}
                isThirdPage={true}
              />
            </div>

            <div>
              <TherapistInfoSecondPage
                title="Qualifications"
                dataToShow={qualifications}
                isMobile={true}
                isThirdPage={true}
                withoutComa={true}
              />
              <TherapistInfoSecondPage
                title="Additional Credentials"
                dataToShow={additionalCredentials}
                isMobile={true}
                isThirdPage={true}
                withoutComa={true}
              />
            </div>

            {/* 
            
            //!FH0
            ✅°) Make contact card!
            👀°) Make reviews
            °) Create the spaces between cards
            °) After that, make the behavior of the sticky bar activate when the user view is on that height: maybe use useIntersection Hook (https://www.freecodecamp.org/news/react-hooks-every-project-should-use/)
            
            */}

            <div>
              <EverySingleSpeechTherapist_Location
                locationCity={speechtherapist.data[0].location.city}
                locationStreetNumber={speechtherapist.data[0].location.street.number}
                locationStreetName={speechtherapist.data[0].location.street.name}
                locationState={speechtherapist.data[0].location.state}
                isMobile={true}
                isThirdPageMobile={true}
              />

              <EverySingleSpeechTherapist_Phone
                phoneNumber={speechtherapist.data[0].cell}
                isMobile={true}
                isThirdPageMobile={true}
              />
              <EverySingleSpeechTherapist_Email
                email={speechtherapist.data[0].email}
                isMobile={true}
                isThirdPageMobile={true}
              />
              <EmailGetDirectionComponent />
            </div>
          </STDetail_STDetails_ThirdPageWrapper>
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
