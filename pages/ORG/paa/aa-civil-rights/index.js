import { INDEX_D_CivilRights_Results } from "../../../../components/ORG/pages/attorney-advocates/second-page/aa-civil-rights/desktop/INDEX_D_CivilRights_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AA_AttorneyAdvocates_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CivilRights_Results />
        </>
      ) : (
        <>{/* // Nothing code yet */}</>
      )}
    </>
  )
}
