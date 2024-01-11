import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { ORG_D_Results_Main_BottomButtons } from "./ORG_D_Results_Main_BottomButtons"
import { ORG_D_Results_Main_Left } from "./ORG_D_Results_Main_Left"
import { ORG_D_Results_Main_Right } from "./ORG_D_Results_Main_Right"
import { ORG_D_Results_CardWrapper } from "./styles/ORG_D_Results_CardWrapper"

export const ORG_D_Results_CardNoFilters = () => {
  const { setThirdpageDataORG }: any =
    useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  const { secondpageDataORG }: any =
    useORG_Ctx_D_SecondpageData()

  const { query } = useRouter()

  const {
    secondpageDataORG: secondpageDataORG_Backend,
  }: any = useORG_Ctx_D_SecondpageData_Backend()

  if (query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) {
    return (
      <>
        {secondpageDataORG_Backend[
          DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
        ].map((x, index) => {
          let theKey = `${x.recordSubtype}_${x.recordName}_${index}`

          return (
            <ORG_D_Results_CardWrapper key={theKey}>
              <ORG_D_Results_Main_Left backendData={x} />
              <ORG_D_Results_Main_Right backendData={x} />
              <ORG_D_Results_Main_BottomButtons
                backendData={x}
              />
            </ORG_D_Results_CardWrapper>
          )
        })}
      </>
    )
  }

  console.log("secondpageDataORG:", secondpageDataORG)
  if (secondpageDataORG !== undefined) {
    return (
      <>
        {Array(10)
          .fill(0)
          .map((x, i) => {
            let renderThisCard =
              i % secondpageDataORG.right.length
            let renderThisFilter =
              i % secondpageDataORG.right.length
            let renderThisContact =
              i % secondpageDataORG.left.length

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
                  renderThisContact={renderThisContact}
                />
              </ORG_D_Results_CardWrapper>
            )
          })}
      </>
    )
  }

  return null
}
