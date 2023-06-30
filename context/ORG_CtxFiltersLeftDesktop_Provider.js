import { createContext, useContext, useState } from "react"
import { ORG_INITIAL_VALUES_FILTERS_D } from "../utils/ORG_initialValuesFilters"

const ORG_Ctx_filtersLeftDesktop = createContext(null)


/* 
!FH0
Change this name. This arre not at the left anymore
*/

export const ORG_CtxFiltersLeftDesktop_Provider = ({ children }) => {
  const [filtersLeftContext, setFiltersLeftContext] = useState(ORG_INITIAL_VALUES_FILTERS_D)
  return (
    <ORG_Ctx_filtersLeftDesktop.Provider value={{ filtersLeftContext, setFiltersLeftContext }}>
      {children}
    </ORG_Ctx_filtersLeftDesktop.Provider>
  )
}

export const useORG_Ctx_filtersLeftDesktop = () => {
  return useContext(ORG_Ctx_filtersLeftDesktop)
}
