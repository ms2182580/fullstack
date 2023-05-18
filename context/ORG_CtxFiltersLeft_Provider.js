import { createContext, useContext, useState } from "react"
import { ORG_INITIAL_LEFT_FILTERS } from "../utils/ORG_initialLeftFilters"

const ORG_Ctx_filtersLeft = createContext(null)

export const ORG_CtxFiltersLeft_Provider = ({ children }) => {
  const [filtersLeftContext, setFiltersLeftContext] = useState(ORG_INITIAL_LEFT_FILTERS)
  return (
    <ORG_Ctx_filtersLeft.Provider value={{ filtersLeftContext, setFiltersLeftContext }}>
      {children}
    </ORG_Ctx_filtersLeft.Provider>
  )
}

export const useORG_Ctx_filtersLeft = () => {
  return useContext(ORG_Ctx_filtersLeft)
}
