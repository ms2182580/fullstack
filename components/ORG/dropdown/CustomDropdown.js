import Image from "next/image.js"
import { Fragment, useState } from "react"
import ArrowDown from "../../../assets/Icons/ArrowDown.png"
import ArrowUp from "../../../assets/Icons/ArrowUp.png"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { useCheckMobile } from "../../../utils/useCheckMobile"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { SingleDropdownWrapper } from "./styles/Singledropdown"

const Customdropdown = ({
  icon = "no icon found",
  title = "no title",
  suggestions = [],
  landingHere = false,
  actualRoute,
  toWhere = "undefined",
  noIcon = false,
  isMobile = false,
  isHover = undefined,
  setIsFocusKeyword = undefined,
  theRef
}) => {
  const { setKeywordsContext } = useORG_InputCtx()
  const { isTouchScreen } = useCheckMobile()

  const [showDropdown, setShowDropdown] = useState(false)

  const handleDropdownClick = () => {
    setShowDropdown((prevstate) => !prevstate)
  }

  const handleDropdownKey = (e) => {
    if (e.key === "Enter") {
      setShowDropdown((prevstate) => !prevstate)
    }
  }

  const suggestionsValidated = suggestions.length === 0 ? "Coming soon" : suggestions

  /* 
  
  !FH
  
  Add tabIndex to sub items, maybe it can be used with tab key or arrow key. When the user leave the current focus, should hide the dropdown options
  */

  // console.log("isHover:", isHover)

  return (
    <>
      <SingleDropdownWrapper
        noIcon={noIcon}
        landingHere={landingHere}
        isMobile={isMobile}
        ref={theRef}

        onBlur={
          !isTouchScreen
            ? () => {
                if (isHover === false) {
                  setIsFocusKeyword(false)
                }
              }
            : undefined
        }

        // onTouchEnd={() => {
        //   setIsFocusKeyword(false)
        // }}
      >
        {icon !== "no icon found" ? (
          <div>
            <Image
              src={icon}
              alt=""
            />
          </div>
        ) : (
          <div></div>
        )}

        <span
          onClick={handleDropdownClick}
          onKeyDown={handleDropdownKey}
          tabIndex={0}>
          <P bold>{title}</P>
          <span>
            {showDropdown ? (
              <Image
                src={ArrowUp}
                alt=""
              />
            ) : (
              <Image
                src={ArrowDown}
                alt=""
              />
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
                    {isSpeechTherapist && landingHere ? (
                      <LinkNoStyle href={`${actualRoute}/${toWhere}`}>
                        <p
                          // onClick={() => setKeywordsContext("Speech Therapist")}
                          onTouchStart={() => setKeywordsContext("Speech Therapist")}>
                          {x}
                        </p>
                      </LinkNoStyle>
                    ) : (
                      landingHere && (
                        <LinkNoStyle href="/404">
                          <p>{x}</p>
                        </LinkNoStyle>
                      )
                    )}

                    {landingHere === false && (
                      <Fragment>
                        <p
                          // onClick={(e) => {
                          //   setKeywordsContext(e.target.textContent)
                          // }}
                          onTouchStart={(e) => {
                            setKeywordsContext(e.target.textContent)
                          }}>
                          {x}
                        </p>
                      </Fragment>
                    )}
                  </Fragment>
                )
              })}
              <div></div>
            </>
          )}
        </div>

        {showDropdown && typeof suggestionsValidated === "string" && (
          <div
            className="ORGDropdownComingSoon"
            // onClick={handleDropdownClick}
            onTouchStart={handleDropdownClick}>
            <div>
              <div></div>
              <p>Coming Soon!</p>
            </div>
          </div>
        )}
      </SingleDropdownWrapper>
    </>
  )
}

export default Customdropdown
