import { useCheckMobile } from "../../../utils/useCheckMobile"
import { DropdownSuggestionsWrapper, KeywordCities } from "./styles/DropdownSuggestions"

const DropdownSuggestionsInput = ({
  isFocus,
  setIsHover,
  setIsFocus,
  suggestions,
  keywordClickByUser,
  setKeywordClickByUser,
  setKeywordClickByUserContext,
  inputRefFocus,
  haveIcon = false,
  whichIcon,
  theRef
}) => {
  let IconSvg = whichIcon

  const { isTouchScreen } = useCheckMobile()

  return (
    <DropdownSuggestionsWrapper ref={theRef}>
      {isFocus && (
        <div
          onMouseEnter={
            !isTouchScreen
              ? () => {
                  setIsHover(true)
                }
              : undefined
          }
          onMouseLeave={
            !isTouchScreen
              ? () => {
                  setIsHover(false)
                }
              : undefined
          }
          onTouchStart={
            isTouchScreen
              ? (e) => {
                  e.stopPropagation()
                  setIsFocus(true)
                }
              : undefined
          }>
          {suggestions.map((suggestion, index) => {
            const isMatch = suggestion.toLowerCase().indexOf(keywordClickByUser.toLowerCase()) > -1
            return (
              <div key={index}>
                {isMatch && haveIcon && index === 0 ? (
                  <KeywordCities>
                    <IconSvg />
                    <div
                      onClick={() => {
                        setKeywordClickByUser(suggestion)
                        setKeywordClickByUserContext(suggestion)
                        inputRefFocus.current.focus()
                      }}>
                      <span>{suggestion}</span>
                    </div>
                  </KeywordCities>
                ) : isMatch && index === 0 ? (
                  <>
                    <div
                      onClick={() => {
                        setKeywordClickByUser(suggestion)
                        setKeywordClickByUserContext(suggestion)
                        inputRefFocus.current.focus()
                      }}>
                      <span>{suggestion}</span>
                    </div>
                  </>
                ) : (
                  isMatch && (
                    <>
                      <div
                        onClick={() => {
                          setKeywordClickByUser(suggestion)
                          setKeywordClickByUserContext(suggestion)
                          inputRefFocus.current.focus()
                        }}>
                        <span>{suggestion}</span>
                      </div>
                    </>
                  )
                )}
              </div>
            )
          })}
          <div></div>
        </div>
      )}
    </DropdownSuggestionsWrapper>
  )
}

export default DropdownSuggestionsInput
