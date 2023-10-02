import { INDEX_D_MHSS_MH_Detail } from "../../../../components/ORG/pages/mental-health/third-page/mhss-mental-health/desktop/INDEX_D_MHSS_MH_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function INDEX_MHSS_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          {/* 
        It need to solve the problem of where is the data if the user pass from certain ammount of width to other, this is from mobile (max 1024px) to desktop (min 1025px)
         */}
          <INDEX_D_MHSS_MH_Detail />
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
