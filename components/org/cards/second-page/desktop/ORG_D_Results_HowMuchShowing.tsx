import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider.js"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { useRouter } from "next/router.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Results_HowMuchShowingWrapper } from "./styles/ORG_D_Results_HowMuchShowingWrapper"

export const ORG_D_Results_HowMuchShowing = () => {
  const { query } = useRouter()

  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData_Backend()

  return (
    <ORG_D_Results_HowMuchShowingWrapper>
      <P>
        {query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
          ? `Showing ${
              secondpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
                .length
            } results`
          : "Showing 10 of 50 results"}
      </P>
    </ORG_D_Results_HowMuchShowingWrapper>
  )
}
