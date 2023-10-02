import { INDEX_D_FamilySupports_Results } from "../../../../components/ORG/pages/mental-health/second-page/mhss-family-support/desktop/INDEX_D_FamilySupports_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_MHSS_FamilySupport_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_FamilySupports_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}

