import { INDEX_D_MH_MHSS_Detail } from "../../../../components/ORG/pages/mental-health/third-page/mhss-family-support/desktop/INDEX_D_MH_MHSS_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function INDEX_PMHSS_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          {/* 
        It need to solve the problem of where is the data if the user pass from certain ammount of width to other, this is from mobile (max 1024px) to desktop (min 1025px)
         */}
          <INDEX_D_MH_MHSS_Detail />
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
