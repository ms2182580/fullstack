import { KeywordCitiesWrapper, ST_D_DropdownSuggestionComponentWrapper } from "./styles/ST_D_DropdownSuggestionComponentWrapper.js"


export const ST_D_DropdownSuggestionComponent = ({
  isFocus,
  setIsHover,
  suggestions,
  keywordClickByUser,
  setKeywordClickByUser,
  setKeywordClickByUserContext,
  inputRefFocus,
  haveIcon = false,
  whichIcon,
  theRef,
  isFirstOrSecondDropdown = false
}) => {
  let IconSvg = whichIcon

  return (
    <ST_D_DropdownSuggestionComponentWrapper
      ref={theRef}
      isFirstOrSecondDropdown={isFirstOrSecondDropdown}>
      {isFocus && (
        <div
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
          onClick={() => inputRefFocus.current.focus()}>
          {haveIcon === false && <span>Popular Searches</span>}

          {suggestions.map((suggestion, index) => {
            const isMatch = suggestion.toLowerCase().indexOf(keywordClickByUser.toLowerCase()) > -1
            return (
              <div key={index}>
                {isMatch && haveIcon && index === 0 ? (
                  <KeywordCitiesWrapper>
                    <IconSvg />
                    <div
                      onClick={() => {
                        setKeywordClickByUser(suggestion)
                        setKeywordClickByUserContext(suggestion)
                        inputRefFocus.current.focus()
                      }}>
                      <span>{suggestion}</span>
                    </div>
                  </KeywordCitiesWrapper>
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
    </ST_D_DropdownSuggestionComponentWrapper>
  )
}
