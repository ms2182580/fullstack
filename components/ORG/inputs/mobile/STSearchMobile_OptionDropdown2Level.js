import Image from "next/image.js"
import { Fragment, useState } from "react"
import ArrowDown from "../../../../assets/Icons/ArrowDown.png"
import ArrowUp from "../../../../assets/Icons/ArrowUp.png"
import { useORG_InputCtx } from "../../../../context/ORG_Input"
import { useCheckMobile } from "../../../../utils/useCheckMobile"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../ui/hyperlink/HyperlinkNoStyles"
import { STSearchMobile_OptionDropdown2LevelWrapper } from "./styles/STSearchMobile_OptionDropdown2LevelWrapper"

export const STSearchMobile_OptionDropdown2Level = ({
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
  theRef,
  shouldShowImmediately = false
}) => {
  const { setKeywordsContext } = useORG_InputCtx()
  const { isTouchScreen } = useCheckMobile()

  const [showDropdown, setShowDropdown] = useState(shouldShowImmediately)

  const handleDropdownClick = () => {
    setShowDropdown((prevstate) => !prevstate)
  }

  const handleDropdownKey = (e) => {
    if (e.key === "Enter") {
      setShowDropdown((prevstate) => !prevstate)
    }
  }

  const suggestionsValidated = suggestions.length === 0 ? "Coming soon" : suggestions

  return (
    <STSearchMobile_OptionDropdown2LevelWrapper
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
      }>
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
                      <p onTouchStart={() => setKeywordsContext("Speech Therapist")}>{x}</p>
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
          onTouchStart={handleDropdownClick}>
          <div>
            <div></div>
            <p>Coming Soon!</p>
          </div>
        </div>
      )}
    </STSearchMobile_OptionDropdown2LevelWrapper>
  )
}
