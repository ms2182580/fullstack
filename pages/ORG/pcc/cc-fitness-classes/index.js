import { INDEX_D_FitnessClasses_Results } from "../../../../components/ORG/pages/community-classes/second-page/cc-fitness-classes/desktop/INDEX_D_FitnessClasses_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_CC_FitnessClasses_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_FitnessClasses_Results />
        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}