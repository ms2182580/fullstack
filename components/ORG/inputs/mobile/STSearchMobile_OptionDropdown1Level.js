import { STSearchMobile_OptionDropdown1LevelWrapper } from "./styles/STSearchMobile_OptionDropdown1LevelWrapper"

export const STSearchMobile_OptionDropdown1Level = ({
  isFocus = true,
  setIsHover,
  children,
  setIsFocusKeyword,
  theRef
}) => {
  return (
    <>
      {isFocus && (
        <STSearchMobile_OptionDropdown1LevelWrapper
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
        </STSearchMobile_OptionDropdown1LevelWrapper>
      )}
    </>
  )
}
