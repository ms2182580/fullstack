import ORGWrapperLanding from "./styles/ORGWrapperLanding"
import { H1, H3 } from "../../components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import ORG_Landing_Page from "../../assets/images/ORG_Landing_Page.png"
import CustomInput from "../../components/ORG/inputs/CustomInput"
import Customdropdown from "../../components/ORG/dropdown/CustomDropdown"
import { useORG_InputCtx } from "../../context/ORG_Input"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { OptionsWrapper } from "../../components/ORG/dropdown/styles/Customdropdown"
import ORG_LANDING_CC from "../../assets/Icons/ORG_Landing_CC.png"
import ORG_LANDING_SSA from "../../assets/Icons/ORG_Landing_SSA.png"
import ORG_LANDING_TP from "../../assets/Icons/ORG_Landing_TP.png"
import { useState } from "react"

const ORGLanding = () => {
  const [windowSize, setWindowSize] = useState()
  const { setKeywordsContext, setCitiesContext, keywordsContext, citiesContext } = useORG_InputCtx()
  const router = useRouter()
  const formatRouter = router.pathname
  useEffect(() => {
    setKeywordsContext("")
    setCitiesContext("")
  }, [])

  useEffect(() => {
    window.onresize = () => {
      setWindowSize(window.innerWidth)
    }
  }, [])

  const suggestionDropdownTP = [
    "Speech Therapist",
    "Behavioral Therapist",
    "Physical Therapist",
    "Occupational Therapist"
  ]
  const suggestionDropdownSSA = []
  const suggestionDropdownCC = []

  // const [geolocationLocalStorage, setGeolocationLocalStorage] = useState(null)

  // useEffect(() => {
  //   if (localStorage.getItem("INCLUSIVE_GEOLOCATION") !== null) {
  //     setGeolocationLocalStorage("Have geolocation")
  //   } else {
  //     setGeolocationLocalStorage(null)
  //   }
  // }, [geolocationLocalStorage])
  
  /* 
  !FH
  
  Make this responsive!
  */

  return (
    <ORGWrapperLanding>
      <div>
        <Image
          src={ORG_Landing_Page}
          alt=""
        />
      </div>

      {windowSize > "768" ? (
        <H1>
          Find Healthcare Providers and <br /> Activities for your Child in NYC
        </H1>
      ) : (
        <H3>
          Find Healthcare Providers <br /> and Activities for your Child
        </H3>
      )}

      <CustomInput
        setKeywordsContext={setKeywordsContext}
        setCitiesContext={setCitiesContext}
        keywordValueContext={keywordsContext}
        citiesValueContext={citiesContext}
        toWhere="SpeechTherapists"
        windowWidth={windowSize}
        landingHere="true"
      />

      <OptionsWrapper landingHere="true">
        <Customdropdown
          icon={ORG_LANDING_TP}
          title="Therapeutic Providers"
          suggestions={suggestionDropdownTP}
          landingHere={true}
          actualRoute={formatRouter}
          toWhere="SpeechTherapists"
        />
        <Customdropdown
          icon={ORG_LANDING_SSA}
          title="Social Service Agencies"
          suggestions={suggestionDropdownSSA}
          landingHere={true}
          toWhere="SpeechTherapists"
        />
        <Customdropdown
          icon={ORG_LANDING_CC}
          title="Community Classes"
          suggestions={suggestionDropdownCC}
          landingHere={true}
          toWhere="SpeechTherapists"
        />
      </OptionsWrapper>

      {/* //? Achieve conditional rendering for geolocation with, i think, bad practices*/}
      {/* {geolocationLocalStorage === null ? (
        <HyperlinkM
          href={"/ORG/UpdateGeolocation"}
          name="To next phase (not have geolocation)"
        />
      ) : (
        <button>
          <HyperlinkM
            href={"/ORGSpeechTherapiests"}
            name="To next phase (have geolocation)"
          />
        </button>
      )} */}
    </ORGWrapperLanding>
  )
}

export default ORGLanding
