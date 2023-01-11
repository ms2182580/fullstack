import { OptionsMobileWrapper } from "./styles/OptionsMobileWrapper"

export const OptionsMobile = ({ isFocus = true, setIsHover, children }) => {
  return (
    <>
      {isFocus && (
        <OptionsMobileWrapper
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}>
          {children}
        </OptionsMobileWrapper>
      )}
    </>
  )
}
