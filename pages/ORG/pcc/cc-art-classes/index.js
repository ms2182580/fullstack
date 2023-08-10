import { INDEX_D_ArtClasses_Results } from "../../../../components/ORG/pages/community-classes/second-page/cc-art-classes/desktop/INDEX_D_ArtClasses_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_CC_ArtClasses_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ArtClasses_Results />
        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}