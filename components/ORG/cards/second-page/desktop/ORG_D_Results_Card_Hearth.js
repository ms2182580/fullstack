import { useState } from "react"
import { ORG_D_Results_HearthSvg } from "../../../../../assets/Icons/index.js"
import { ORG_D_Results_Card_HearthWrapper } from "./styles/ORG_D_Results_Card_HearthWrapper.js"

export const ORG_D_Results_Card_Hearth = () => {
  const [clickOnHearth, setClickOnHearth] = useState(false)

  const handleClickOnHearth = () => {
    setClickOnHearth((prevState) => !prevState)
  }

  return (
    <ORG_D_Results_Card_HearthWrapper
      onClick={handleClickOnHearth}
      clickOnHearth={clickOnHearth}>
      <ORG_D_Results_HearthSvg />
    </ORG_D_Results_Card_HearthWrapper>
  )
}
