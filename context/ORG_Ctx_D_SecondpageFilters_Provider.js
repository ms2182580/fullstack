import { createContext, useContext, useState } from "react"

const ORG_Ctx_D_SecondpageFilters = createContext(null)

export const ORG_Ctx_D_SecondpageFilters_Provider = ({ children }) => {
  const [secondpageFiltersORG, setSecondpageFiltersORG] = useState("")

  return (
    <ORG_Ctx_D_SecondpageFilters.Provider
      value={{
        secondpageFiltersORG,
        setSecondpageFiltersORG,
      }}>
      {children}
    </ORG_Ctx_D_SecondpageFilters.Provider>
  )
}

export const useORG_Ctx_D_SecondpageFilters = () => {
  return useContext(ORG_Ctx_D_SecondpageFilters)
}
