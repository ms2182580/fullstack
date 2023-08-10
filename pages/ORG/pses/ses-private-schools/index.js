import { INDEX_D_PrivateSchools_Results } from "../../../../components/ORG/pages/special-education-schools/second-page/ses-private-schools/desktop/INDEX_D_PrivateSchools_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_SES_PrivateSchools_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_PrivateSchools_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}