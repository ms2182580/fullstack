import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import { ORG_D_Results_FilterListMain } from "./ORG_D_Results_FilterListMain"
import { ORG_D_Results_HowMuchShowing } from "./ORG_D_Results_HowMuchShowing"
import { ORG_D_Results_Sortby } from "./ORG_D_Results_Sortby"
import { ORG_D_Results_FilterSortbyHeaderWrapper } from "./styles/ORG_D_Results_FilterSortbyHeaderWrapper"

export const ORG_D_Results_FilterSortbyHeader = () => {
  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData_Backend()
  const { reachTypedFlow }: any = useSessionStorage_typedFlow()

  return (
    <ORG_D_Results_FilterSortbyHeaderWrapper>
      <ORG_D_Results_HowMuchShowing dataComesFromParent={secondpageDataORG} />

      <div>
        <ORG_D_Results_FilterListMain
          dataComesFromParent={secondpageDataORG}
          reachTypedFlow={reachTypedFlow}
        />
        <ORG_D_Results_Sortby />
      </div>
    </ORG_D_Results_FilterSortbyHeaderWrapper>
  )
}
