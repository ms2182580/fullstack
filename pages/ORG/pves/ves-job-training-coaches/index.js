import { INDEX_D_JobTrainingCoaches_Results } from "@/components/ORG/pages/vocational-employment/second-page/ves-job-training-coaches/desktop/INDEX_D_JobTrainingCoaches_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_VES_JobTrainingCoaches_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_JobTrainingCoaches_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
