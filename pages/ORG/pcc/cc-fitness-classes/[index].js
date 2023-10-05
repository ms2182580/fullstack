import { INDEX_D_CC_FC_Detail } from "../../../../components/ORG/pages/community-classes/third-page/cc-fitness-classes/desktop/INDEX_D_AT_SAT_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_CC_FitnessClasses_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CC_FC_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
