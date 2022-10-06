import { useEffect, useState } from "react"
import { HyperlinkM } from "../../components/ui/hyperlink/HyperlinkFonts"
import ORGFirstTime from "./[ORGUpdateGeolocation]"
import {useORG_KeywordsCtx} from "../../context/ORG_Keywords"

const ORG = () => {
  const [geolocationLocalStorage, setGeolocationLocalStorage] = useState(null)
  const {setKeywordsToSearch} = useORG_KeywordsCtx()

  useEffect(() => {
    if(localStorage.getItem("INCLUSIVE_GEOLOCATION") !== null){
      setGeolocationLocalStorage("Have geolocation")
    } else {
      setGeolocationLocalStorage(null)
    }
  },[geolocationLocalStorage])
  
  const handleKeywords = (e) => {
    setKeywordsToSearch(e.target.value)
  }
  

  return (
    <>
      <h1>ORG Father component</h1>
      
      
      
      <input type="text" onChange={handleKeywords}/>

      {geolocationLocalStorage === null ? (
        <HyperlinkM href={"/ORG/UpdateGeolocation"} name="To next phase (not have geolocation)" />
      ) : (
        <button>
          <HyperlinkM href={"/ORGSpeechTherapiests"} name="To next phase (have geolocation)" />
          
        </button>
      )}
    </>
  )
}

export default ORG
