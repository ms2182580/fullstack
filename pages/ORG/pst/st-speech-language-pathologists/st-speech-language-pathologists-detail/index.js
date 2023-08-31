import { INDEX_D_STDetail } from "../../../../../components/ORG/pages/speech-therapists/third-page/dekstop/INDEX_D_STDetail"
import { INDEX_M_STDetail } from "../../../../../components/ORG/pages/speech-therapists/third-page/mobile/INDEX_M_STDetail"
import { useCheckUserWidth } from "../../../../../context/CheckUserWidth"

export default function INDEX_PST_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          {/* 
        It need to solve the problem of where is the data if the user pass from certain ammount of width to other, this is from mobile (max 1024px) to desktop (min 1025px)
         */}
          <INDEX_D_STDetail />
        </>
      ) : (
        <>
          <INDEX_M_STDetail />
        </>
      )}
    </>
  )
}
