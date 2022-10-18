import { DropdownSuggestionsWrapper } from "./DropdownSuggestionsStyles"

const DropdownSuggestions = ({
  isFocus,
  setIsFocus,
  suggestions,
  keywordClickByUser,
  setKeywordClickByUser,
  inputRefFocus
}) => {
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
                {isMatch && (
                  <div
                    onClick={() => {
                      setKeywordClickByUser(suggestion)
                      inputRefFocus.current.focus()
                    }}
                  >
                    {suggestion}
                  </div>
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

export default DropdownSuggestions
