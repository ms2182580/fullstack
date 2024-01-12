import { createContext, useContext, useState } from "react"

const ORG_Ctx_D_ThirdpageData = createContext(null)

export const ORG_Ctx_D_ThirdpageData_Backend_Provider = ({ children }) => {
  const [thirdpageDataORG, setThirdpageDataORG] = useState("")

  return (
    <ORG_Ctx_D_ThirdpageData.Provider
      value={{
        thirdpageDataORG,
        setThirdpageDataORG,
      }}
    >
      {children}
    </ORG_Ctx_D_ThirdpageData.Provider>
  )
}

export const useORG_Ctx_D_ThirdpageData_Backend = () => {
  return useContext(ORG_Ctx_D_ThirdpageData)
}
