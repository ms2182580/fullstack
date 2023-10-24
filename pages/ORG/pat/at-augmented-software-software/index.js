import { INDEX_D_ASS_Results } from "../../../../components/ORG/pages/assistive-technology/second-page/at-augmented-software-software/desktop/INDEX_D_ASS_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_ASS_Results() {
  const { isMobile } = useCheckUserWidth()

  // const { pathname, query, route, ...allProps } = useRouter()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ASS_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
