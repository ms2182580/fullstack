import { INDEX_D_PreSchools_Results } from "../../../../components/ORG/pages/special-education-schools/second-page/ses-preschools/desktop/INDEX_D_PreSchools_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_SES_PreSchools_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_PreSchools_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}