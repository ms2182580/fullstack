import { INDEX_D_IDD_Results } from "../../../../components/ORG/pages/attorney-advocates/second-page/aa-idd/desktop/INDEX_D_IDD_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_AA_IDD_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_IDD_Results />

        </>
      ) : (
        <>{/* // Nothing code yet */}</>
      )}
    </>
  )
}