import { createContext, useContext, useState } from "react"
import { ORG_Sortby_Mobile } from "../utils/ORG_SortByData"

const ORG_Ctx_FiltersApplyMobile = createContext(null)

export const ORG_CtxFiltersApplyMobile_Provider = ({ children }) => {
  const [filterAreApply, setFilterAreApply] = useState(false)
  const [filtersAppliedNewFilters, setFiltersAppliedNewFilters] = useState(false)
  const [defaultWord, setDefaultWord] = useState(ORG_Sortby_Mobile.default)

  return (
    <ORG_Ctx_FiltersApplyMobile.Provider
      value={{
        filterAreApply,
        setFilterAreApply,
        filtersAppliedNewFilters,
        setFiltersAppliedNewFilters,
        defaultWord,
        setDefaultWord
      }}>
      {children}
    </ORG_Ctx_FiltersApplyMobile.Provider>
  )
}

export const useORG_Ctx_FiltersApplyMobile = () => {
  return useContext(ORG_Ctx_FiltersApplyMobile)
}
