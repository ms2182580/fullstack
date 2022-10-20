import { DropdownSuggestionsWrapper, KeywordCities } from "./DropdownSuggestionsStyles"
// import { CurrentLocationSvg } from "../../assets/Icons"
// console.log('CurrentLocationSvg:', CurrentLocationSvg)

const DropdownSuggestions = ({
  isFocus,
  setIsFocus,
  suggestions,
  keywordClickByUser,
  setKeywordClickByUser,
  inputRefFocus,
  haveIcon = false,
  whichIcon
}) => {
  // console.log("haveIcon:", haveIcon)
  // console.log('whichIcon:', whichIcon)
  let IconSvg = whichIcon
  // console.log("IconSvg:", IconSvg)
  return (
    <DropdownSuggestionsWrapper>
      {isFocus && (
        <div
          onMouseEnter={() => {
            setIsFocus(true)
          }}
          onMouseLeave={() => {
            setIsFocus(false)
          }}
        >
          {suggestions.map((suggestion, index) => {
            const isMatch =
              suggestion
                .toLowerCase()
                .indexOf(keywordClickByUser.toLowerCase()) > -1
            return (
              <div key={index}>
                {isMatch && haveIcon && index === 0 ? (
                  <KeywordCities>
                    <IconSvg />
                    <div
                      onClick={() => {
                        setKeywordClickByUser(suggestion)
                        inputRefFocus.current.focus()
                      }}
                    >
                      <span>{suggestion}</span>
                    </div>
                  </KeywordCities>
                ) : isMatch && index === 0 ? (
                  <>
                    <div
                      onClick={() => {
                        setKeywordClickByUser(suggestion)
                        inputRefFocus.current.focus()
                      }}
                    >
                      <span>{suggestion}</span>
                    </div>
                  </>
                ) : isMatch && (
                  <>
                    <div
                      onClick={() => {
                        setKeywordClickByUser(suggestion)
                        inputRefFocus.current.focus()
                      }}
                    >
                      <span>{suggestion}</span>
                    </div>
                  </>
                )
                }
              </div>
            )
          })}
          <div></div>
        </div>
      )}
    </DropdownSuggestionsWrapper>
  )
}

export default DropdownSuggestions
