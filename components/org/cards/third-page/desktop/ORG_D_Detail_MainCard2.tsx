import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { useMemo } from "react"
import { ORG_D_Detail_MainCard2Wrapper } from "./styles/ORG_D_Detail_MainCard2Wrapper"

/* 
!FH0
Create the new main card
*/
export const ORG_D_Detail_MainCard2 = () => {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData_Backend()

  const theID = useMemo(() => {
    const dataThirdPage =
      thirdpageDataORG?.[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE] ?? null

    return (
      dataThirdPage?.[DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS][0].toNavbar
        .id ?? "#"
    )
  }, [thirdpageDataORG])

  return (
    <ORG_D_Detail_MainCard2Wrapper id={theID}>
      <H2>Overview</H2>
      <div>More content</div>
    </ORG_D_Detail_MainCard2Wrapper>
  )
}
