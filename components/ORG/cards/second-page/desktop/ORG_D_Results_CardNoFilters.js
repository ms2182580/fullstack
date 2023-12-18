import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useEffect } from "react"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { ORG_D_Results_Main_BottomButtons } from "./ORG_D_Results_Main_BottomButtons"
import { ORG_D_Results_Main_Left } from "./ORG_D_Results_Main_Left"
import { ORG_D_Results_Main_Right } from "./ORG_D_Results_Main_Right"
import { ORG_D_Results_CardWrapper } from "./styles/ORG_D_Results_CardWrapper"

export const ORG_D_Results_CardNoFilters = () => {
  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()
  // console.log("secondpageDataORG:", secondpageDataORG)

  return (
    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % secondpageDataORG.right.length
          let renderThisContact = i % secondpageDataORG.left.length

          let thisKey = `${secondpageDataORG.cardData[renderThisCard].title}_${i}`

          return (
            <ORG_D_Results_CardWrapper key={thisKey}>
              <ORG_D_Results_Main_Left
                renderThisCard={renderThisCard}
                renderThisContact={renderThisContact}
              />

              <ORG_D_Results_Main_Right
                renderThisFilter={renderThisFilter}
                renderThisCard={renderThisCard}
              />

              <ORG_D_Results_Main_BottomButtons
                renderThisFilter={renderThisFilter}
                renderThisCard={renderThisCard}
                renderThisContact={renderThisContact}
              />
            </ORG_D_Results_CardWrapper>
          )
        })}
    </>
  )
}
