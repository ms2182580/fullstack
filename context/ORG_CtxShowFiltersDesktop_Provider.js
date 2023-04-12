import { createContext, useContext, useState } from "react"

const ORG_CtxShowFiltersDesktop = createContext(null)

export const ORG_CtxShowFiltersDesktop_Provider = ({ children }) => {
  const [showFullMapButton, setShowFullMapButton] = useState(false)
  const [ORGShowFullMapFilter, setORGShowFullMapFilter] = useState(false)
  // console.log('💖ORGShowFullMapFilter:', ORGShowFullMapFilter)

  return (
    <ORG_CtxShowFiltersDesktop.Provider
      value={{ showFullMapButton, setShowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapFilter }}>
      {children}
    </ORG_CtxShowFiltersDesktop.Provider>
  )
}

export const useORG_CtxShowFiltersDesktop = () => {
  return useContext(ORG_CtxShowFiltersDesktop)
}
