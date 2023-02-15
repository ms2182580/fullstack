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
          }}
          
          isMobile={true}>
          {children}
        </OptionsMobileWrapper>
      )}
    </>
  )
}

/* 
!FH1
Visual bug here!
*/
