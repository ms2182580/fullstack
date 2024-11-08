import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
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
  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  const { query } = useRouter()

  const { secondpageDataORG: secondpageDataORG_Backend }: any =
    useORG_Ctx_D_SecondpageData_Backend()

  if (query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) {
    return (
      <>
        {secondpageDataORG_Backend[
          DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
        ].map((x, index) => {
          let theKey = `${x.recordSubtype}_${x.recordName}_${index}`

          return (
            <ORG_D_Results_CardWrapper key={theKey}>
              <ORG_D_Results_Main_Left backendData={x} theIndex={index} />
              <ORG_D_Results_Main_Right backendData={x} theIndex={index} />
              <ORG_D_Results_Main_BottomButtons
                backendData={x}
                indexBackendToDisplayDummyImage={index}
              />
            </ORG_D_Results_CardWrapper>
          )
        })}
      </>
    )
  }

  return null
}
