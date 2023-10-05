import { INDEX_D_SpecialEducationSchools_Results } from "../../../../components/ORG/pages/special-education-schools/second-page/ses-special-education-schools/desktop/INDEX_D_SpecialEducationSchools_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_SES_SpecialEducationSchools_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_SpecialEducationSchools_Results />
          
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}