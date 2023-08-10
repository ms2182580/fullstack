import { INDEX_D_LongTermResidential_Results } from "../../../../components/ORG/pages/residential-programs/second-page/rp-long-term-residential/desktop/INDEX_D_LongTermResidential_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_RP_LongTermResidential_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_LongTermResidential_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}