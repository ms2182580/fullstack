import { INDEX_D_DisabilityAttorney_Results } from "../../../../components/ORG/pages/attorney-advocates/second-page/aa-disability-attorney/desktop/INDEX_D_DisabilityAttorney_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_AA_DisabilityAttorney_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_DisabilityAttorney_Results />

        </>
      ) : (
        <>{/* // Nothing code yet */}</>
      )}
    </>
  )
}