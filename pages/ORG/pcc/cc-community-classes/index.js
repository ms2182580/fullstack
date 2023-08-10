import { INDEX_D_CommunityClasses_Results } from "../../../../components/ORG/pages/community-classes/second-page/cc-community-classes/desktop/INDEX_D_CommunityClasses_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_CC_CommunityClasses_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CommunityClasses_Results />
        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}