import Image from "next/image.js"
import ORGDropdownWrapper, {
  DropdownComingSoon
} from "./styles/ORGDropdownWrapper.js"
import ArrowDown from "../../assets/Icons/ArrowDown.png"
import ArrowUp from "../../assets/Icons/ArrowUp.png"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts.js"
import { useState, Fragment } from "react"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
import { useRouter } from "next/router.js"

const ORGDropdown = ({
  icon = "not found",
  title = "no title",
  suggestions
}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  const handleDropdownClick = () => {
    setShowDropdown((prevstate) => !prevstate)
  }
  
  const handleDropdownKey = (e) => {
    if(e.key === "Enter"){
      setShowDropdown((prevstate) => !prevstate)
    }
  }
  const suggestionsValidated =
    suggestions.length === 0 ? "Coming soon" : suggestions

  return (
    <>
      <ORGDropdownWrapper className="ORGDropdownWrapper">
        <div>
          <Image src={icon} alt="" />
        </div>
        <span onClick={handleDropdownClick} onKeyDown={handleDropdownKey} tabIndex={0}>
          <P bold>{title}</P>
          <span>
            {showDropdown ? (
              <Image src={ArrowUp} alt="" />
            ) : (
              <Image src={ArrowDown} alt="" />
            )}
          </span>
        </span>
        <div className="ORGDropdownSuggestion">
          {showDropdown && suggestions.length !== 0 && (
            <>
              <div></div>
              {suggestionsValidated.map((x) => {
                const isSpeechTherapist = x.toLowerCase() === "speech therapist"

                return (
                  <Fragment key={x}>
                    {isSpeechTherapist ? (
                      <LinkNoStyle href={`${router.pathname}/SpeechTherapists`}>
                        <p>{x}</p>
                      </LinkNoStyle>
                    ) : (
                      <LinkNoStyle href="/404">
                        <p>{x}</p>
                      </LinkNoStyle>
                    )}
                  </Fragment>
                )
              })}
              <div></div>
            </>
          )}
        </div>

        <div className="ORGDropdownComingSoon">
          {showDropdown && typeof suggestionsValidated === "string" && (
            <div onClick={handleDropdownClick}>
              <div></div>
              <p>Coming Soon!</p>
            </div>
          )}
        </div>
      </ORGDropdownWrapper>
    </>
  )
}

export default ORGDropdown
