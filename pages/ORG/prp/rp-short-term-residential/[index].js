import { INDEX_D_RP_ST_Detail } from "../../../../components/ORG/pages/residential-programs/third-page/rp-short-term-residential/desktop/INDEX_D_RP_ST_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_RP_ShortTerm_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_RP_ST_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
