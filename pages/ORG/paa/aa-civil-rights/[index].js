import { INDEX_D_AA_CR_Detail } from "../../../../components/ORG/pages/attorney-advocates/third-page/aa-civil-rights/desktop/INDEX_D_AA_CR_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AA_CivilRights_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AA_CR_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
