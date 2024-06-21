import { LoadingComponent } from "@/components/loading/LoadingComponent"
// import { INDEX_D_MoreRecommendation } from "@/components/more-recommendation/desktop/INDEX_D_MoreRecommendation"
import { useFetchData } from "@/utils/org/useFetchData"
import dynamic from "next/dynamic"
const INDEX_D_MoreRecommendation = dynamic(
  () =>
    import(
      "@/components/more-recommendation/desktop/INDEX_D_MoreRecommendation"
    ).then((mod) => mod.INDEX_D_MoreRecommendation),
  { ssr: false }
)
export default function MoreRecommendation() {
  // const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })

  // if (!mentalHealthData.data) {
  //   return (
  //     <>
  //       <LoadingComponent />
  //     </>
  //   )
  // }

  const theData = useFetchData()

  if (theData === null) {
    return <LoadingComponent />
  }

  return (
    <>
      <INDEX_D_MoreRecommendation allBackendData={theData} />
    </>
  )
}
