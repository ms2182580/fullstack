import { INDEX_D_CC_Karate_Detail } from "../../../../../components/ORG/pages/community-classes/third-page/cc-community-classes/karate/desktop/INDEX_D_CC_Karate_Detail"
import { useCheckUserWidth } from "../../../../../context/CheckUserWidth"

export default function ORG_INDEX_CC_Karate_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CC_Karate_Detail />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
