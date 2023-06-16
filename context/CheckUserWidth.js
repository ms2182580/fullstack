import { createContext, useContext } from "react"
import { useWidthSize } from "../utils/useWidthSize"

const CheckUserWidth = createContext(null)

export const CheckUserWidth_Provider = ({ children }) => {
  const { isMobile } = useWidthSize()

  return (
    <CheckUserWidth.Provider
      value={{
        isMobile
      }}>
      {children}
    </CheckUserWidth.Provider>
  )
}

export const useCheckUserWidth = () => {
  return useContext(CheckUserWidth)
}
