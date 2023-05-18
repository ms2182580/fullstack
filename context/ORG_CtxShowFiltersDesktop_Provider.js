import { createContext, useContext, useState } from "react"

const ORG_CtxShowFiltersDesktop = createContext(null)

export const ORG_CtxShowFiltersDesktop_Provider = ({ children }) => {
  const [ORGshowFullMapButton, setORGShowFullMapButton] = useState(false)
  const [ORGShowFullMapFilter, setORGShowFullMapFilter] = useState(false)

  return (
    <ORG_CtxShowFiltersDesktop.Provider
      value={{ ORGshowFullMapButton, setORGShowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapFilter }}>
      {children}
    </ORG_CtxShowFiltersDesktop.Provider>
  )
}

export const useORG_CtxShowFiltersDesktop = () => {
  return useContext(ORG_CtxShowFiltersDesktop)
}
