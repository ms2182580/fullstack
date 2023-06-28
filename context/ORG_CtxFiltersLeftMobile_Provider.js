import { createContext, useContext, useState } from "react"
import { ORG_INITIAL_VALUES_FILTERS_M } from "../utils/ORG_initialValuesFilters"

const ORG_Ctx_filtersLeftMobile = createContext(null)

export const ORG_CtxFiltersLeftMobile_Provider = ({ children }) => {
  const [filtersLeftContext, setFiltersLeftContext] = useState(ORG_INITIAL_VALUES_FILTERS_M)
  return (
    <ORG_Ctx_filtersLeftMobile.Provider value={{ filtersLeftContext, setFiltersLeftContext }}>
      {children}
    </ORG_Ctx_filtersLeftMobile.Provider>
  )
}

export const useORG_Ctx_filtersLeftMobile = () => {
  return useContext(ORG_Ctx_filtersLeftMobile)
}
