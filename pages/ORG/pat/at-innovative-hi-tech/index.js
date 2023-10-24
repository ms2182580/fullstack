import { INDEX_D_IHT_Results } from "../../../../components/ORG/pages/assistive-technology/second-page/at-innovative-hi-tech/desktop/INDEX_D_IHT_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_WCMD_Results() {
  const { isMobile } = useCheckUserWidth()

  // const { pathname, query, route, ...allProps } = useRouter()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_IHT_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
