import { createContext, useContext, useState } from "react"
import { ORG_SortBy_Default } from "../utils/ORG_SortByOrder"

const ORG_Ctx_FiltersApply = createContext(null)

export const ORG_CtxFiltersApply_Provider = ({ children }) => {
  const [filterAreApply, setFilterAreApply] = useState(false)
  const [filtersAppliedNewFilters, setFiltersAppliedNewFilters] = useState(false)
  const [defaultWord, setDefaultWord] = useState(ORG_SortBy_Default)

  return (
    <ORG_Ctx_FiltersApply.Provider
      value={{
        filterAreApply,
        setFilterAreApply,
        filtersAppliedNewFilters,
        setFiltersAppliedNewFilters,
        defaultWord,
        setDefaultWord
      }}>
      {children}
    </ORG_Ctx_FiltersApply.Provider>
  )
}

export const useORG_Ctx_FiltersApply = () => {
  return useContext(ORG_Ctx_FiltersApply)
}
