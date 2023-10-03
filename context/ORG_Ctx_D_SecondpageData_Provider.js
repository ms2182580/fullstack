import { createContext, useContext, useState } from "react"

const ORG_Ctx_D_SecondpageData = createContext(null)

export const ORG_Ctx_D_SecondpageData_Provider = ({ children }) => {
  const [secondpageDataORG, setSecondpageDataORG] = useState("")

  return (
    <ORG_Ctx_D_SecondpageData.Provider
      value={{
        secondpageDataORG,
        setSecondpageDataORG,
      }}>
      {children}
    </ORG_Ctx_D_SecondpageData.Provider>
  )
}

export const useORG_Ctx_D_SecondpageData = () => {
  return useContext(ORG_Ctx_D_SecondpageData)
}
