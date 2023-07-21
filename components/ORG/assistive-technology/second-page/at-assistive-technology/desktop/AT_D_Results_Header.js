import { useEffect, useState } from "react"
import { DATA_ORG_D } from "../../../../../../utils/DATA_ORG_D.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { AT_D_Results_HeaderWrapper } from "./styles/AT_D_Results_HeaderWrapper.js"

export const AT_D_Results_Header = ({ currentORG }) => {
  console.log('currentORG:', currentORG)
  const [showCurrentORG, setShowCurrentORG] = useState(null)
  useEffect(() => {
    if (typeof currentORG === "string") {
      let nameToSearch = currentORG.split("/")[3]
      console.log("nameToSearch:", nameToSearch)

      let getIndex = DATA_ORG_D.findIndex((x) => x.folderName === nameToSearch)
      console.log('getIndex:', getIndex)

      // let nameToState = DATA_ORG_D[getIndex].nameJSX
      // setShowCurrentORG(nameToState)
    }

    if (typeof currentORG === "object" && currentORG !== null) {
      let getIndex = Number(currentORG["positionInArray"])

      let nameToState = DATA_ORG_D[getIndex].nameJSX
      setShowCurrentORG(nameToState)
    }
  }, [currentORG])

  return (
    <AT_D_Results_HeaderWrapper>
      <P>Search for {showCurrentORG || "Nothing here"}</P>
    </AT_D_Results_HeaderWrapper>
  )
}

/* 
!FH

Finish header and everything else
*/
