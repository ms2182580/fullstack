import { ST_M_Search_OptionDropdown1LevelWrapper } from "./styles/ST_M_Search_OptionDropdown1LevelWrapper"

export const ST_M_Search_OptionDropdown1Level = ({ isFocus = true, setIsHover, children, setIsFocusKeyword, theRef }) => {
  return (
    <>
      {isFocus && (
        <ST_M_Search_OptionDropdown1LevelWrapper
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
          onTouchStart={(e) => {
            e.stopPropagation()
            setIsFocusKeyword(true)
          }}
          ref={theRef}>
          {children}
        </ST_M_Search_OptionDropdown1LevelWrapper>
      )}
    </>
  )
}
