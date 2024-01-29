import { LoadingComponent } from "@/components/loading/LoadingComponent"
import { INDEX_D_MoreRecommendation } from "@/components/more-recommendation/desktop/INDEX_D_MoreRecommendation"
import { NamesCategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import { trpc } from "@/utils/trpc"

export default function MoreRecommendation() {
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
      <INDEX_D_MoreRecommendation
        allBackendData={{
          [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]:
            mentalHealthData.data,
        }}
      />
    </>
  )
}
