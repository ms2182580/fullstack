import { ST_Mobile_Search_OptionDropdown1LevelWrapper } from "./styles/ST_Mobile_Search_OptionDropdown1LevelWrapper"

export const ST_Mobile_Search_OptionDropdown1Level = ({
  isFocus = true,
  setIsHover,
  children,
  setIsFocusKeyword,
  theRef
}) => {
  return (
    <>
      {isFocus && (
        <ST_Mobile_Search_OptionDropdown1LevelWrapper
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
          ref={theRef}
          isMobile={true}>
          {children}
        </ST_Mobile_Search_OptionDropdown1LevelWrapper>
      )}
    </>
  )
}
