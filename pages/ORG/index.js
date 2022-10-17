// import { useEffect, useState } from "react"
// import ORGFirstTime from "./[ORGUpdateGeolocation]"
import ORGWrapperFather from "./styles/ORGWrapperFather"
import { H1 } from "../../components/ui/heading_body_text/HeaderFonts"
import SearchComponent from "./SearchComponent"
import Image from "next/image"
import ORG_Landing_Page from "../../assets/images/ORG_Landing_Page.png"

const ORG = () => {
  // const [geolocationLocalStorage, setGeolocationLocalStorage] = useState(null)

  // useEffect(() => {
  //   if (localStorage.getItem("INCLUSIVE_GEOLOCATION") !== null) {
  //     setGeolocationLocalStorage("Have geolocation")
  //   } else {
  //     setGeolocationLocalStorage(null)
  //   }
  // }, [geolocationLocalStorage])
  
  const imgStyles = {
    border:"7px crimson solid",
  }
  

  return (
    <ORGWrapperFather >
      
      
      <div>
        <Image
          src={ORG_Landing_Page}
          alt=""
          // className={styles.Img}
          // style={imgStyles}
        />
      </div>

      <H1>
        Find Healthcare Providers and <br /> Activities for your Child in NYC
      </H1>

      <SearchComponent />
      
      

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
    </ORGWrapperFather>
  )
}

export default ORG
