import { INDEX_D_MH_MHSS_Detail } from "../../../../components/ORG/pages/mental-health/third-page/mhss-family-support/desktop/INDEX_D_MH_MHSS_Detail"
import { INDEX_D_A_PPAS_Detail } from "../../../../components/ORG/pages/private-public-agencies/third-page/ppas-associations/desktop/INDEX_D_A_PPAS_Detail"
import { INDEX_D_PPA_PPAS_Detail } from "../../../../components/ORG/pages/private-public-agencies/third-page/ppas-not-for-profit-organization/desktop/INDEX_D_PPA_PPAS_Detail"
import { INDEX_D_SES_PSES_Detail } from "../../../../components/ORG/pages/special-education-schools/third-page/ses-preschools/desktop/INDEX_D_P_PSES_Detail"

import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function INDEX_SSES_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          {/* 
        It need to solve the problem of where is the data if the user pass from certain ammount of width to other, this is from mobile (max 1024px) to desktop (min 1025px)
         */}
          <INDEX_D_SES_PSES_Detail/>
        </>
      ) : (
        <>
          {/* 
        !FH
        Activate Detail in mobile version
        */}
          {/* <INDEX_M_STDetail /> */}
        </>
      )}
    </>
  )
}
