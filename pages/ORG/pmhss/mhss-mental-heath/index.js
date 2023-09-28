import { INDEX_D_MentalHealth_Results } from "../../../../components/ORG/pages/mental-health/second-page/mhss-mental-health/desktop/INDEX_D_MentalHealth_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

/*
R
*/
export default function ORG_INDEX_MHSS_MentalHealth_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_MentalHealth_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}