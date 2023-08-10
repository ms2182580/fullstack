import { INDEX_D_SpecialEducation_Results } from "../../../../components/ORG/pages/attorney-advocates/second-page/aa-special-education/desktop/INDEX_D_SpecialEducation_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_AA_SpecialEducation_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_SpecialEducation_Results />

        </>
      ) : (
        <>{/* // Nothing code yet */}</>
      )}
    </>
  )
}