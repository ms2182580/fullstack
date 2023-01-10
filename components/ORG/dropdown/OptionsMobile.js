import { OptionsMobileWrapper } from "./styles/OptionsMobileWrapper"

export const OptionsMobile = ({ isFocus = true, setIsFocus, children }) => {
  return (
    <>
      {isFocus && (
        <OptionsMobileWrapper
          onMouseEnter={() => {
            setIsFocus(true)
          }}
          onMouseLeave={() => {
            setIsFocus(false)
          }}>
          {children}
        </OptionsMobileWrapper>
      )}
    </>
  )
}

