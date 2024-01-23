import { LoadingComponent } from "@/components/loading/LoadingComponent"
import { INDEX_D_Recommended } from "@/components/recommended/desktop/INDEX_D_Recommended"
import { trpc } from "@/utils/trpc"

export default function INDEX_Recommmended() {
  const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })

  if (!mentalHealthData.data) {
    return (
      <>
        <LoadingComponent />
      </>
    )
  }
  return (
    <>
      <INDEX_D_Recommended
        allBackendData={{
          mentalHealth: mentalHealthData.data,
        }}
      />
    </>
  )
}
