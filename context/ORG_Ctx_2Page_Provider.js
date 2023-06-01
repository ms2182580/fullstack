import { createContext, useContext, useState } from "react"

const UserView_Ctx = createContext(null)

export const ORG_Ctx_2Page_Provider = ({ children }) => {
  const [windowY2Page, setWindowY2Page] = useState(0)

  return <UserView_Ctx.Provider value={{ windowY2Page, setWindowY2Page }}>{children}</UserView_Ctx.Provider>
}

export const useUserView2Page_Ctx = () => {
  return useContext(UserView_Ctx)
}


/* 

!FH
Make this be possible: when the user change to the third page and return to the second page, the height of the view should be the one before the user move to the third page
*/