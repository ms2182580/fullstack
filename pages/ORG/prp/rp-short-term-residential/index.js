import { INDEX_D_ShortTermResidential_Results } from "../../../../components/ORG/pages/residential-programs/second-page/rp-short-term-residential/desktop/INDEX_D_ShortTermResidential_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_RP_ShortTermResidential_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ShortTermResidential_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}