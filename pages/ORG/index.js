import Image from "next/image"
import ORG_Landing_Page from "../../assets/images/ORG_Landing_Page.png"
import SearchComponent from "../../components/ORG/inputs/SearchComponent"
import { CardsLanding } from "../../components/ORG/speech-therapists/first-page/dekstop/CardsLanding.js"
import { H1, H3 } from "../../components/ui/heading_body_text/HeaderFonts"
import { useWidthWindow1024 } from "../../utils/useWidthWindow1024"
import ORGLandingWrapper from "./styles/ORGLandingWrapper"

const ORGIndex = () => {
  const { isMobile } = useWidthWindow1024()

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
  There is a problem here, in the console, nextjs said: 
  
  «
Ignoring unsupported entryTypes: largest-contentful-paint. ORG.js:331:23

Warning: Prop `className` did not match. Server: "ORGWrapperLanding-sc-1h874ev-0 iItxVj" Client: "ORGWrapperLanding-sc-1h874ev-0 kDndTo"
  »


  */

  return (
    <>
      <ORGLandingWrapper windowSize={isMobile}>
        <div>
          <div>
            <Image
              src={ORG_Landing_Page}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          {isMobile === false ? (
            <H1>
              Find your I/DD <br /> community
              <br /> and resources
            </H1>
          ) : (
            <H3>
              Find your I/DD <br /> community
              <br /> and resources
            </H3>
          )}
        </div>

        <SearchComponent
          toWhere="SpeechTherapists"
          landingHere="true"
        />
        {isMobile === false ? <CardsLanding/> : null}

        {/* 
        //? Achieve conditional rendering for geolocation with, i think, bad practices
        {geolocationLocalStorage === null ? (
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
      </ORGLandingWrapper>
    </>
  )
}

export default ORGIndex
