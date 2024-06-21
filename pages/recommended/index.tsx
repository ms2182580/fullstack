import { LoadingComponent } from "@/components/loading/LoadingComponent"
// import { INDEX_D_Recommended } from "@/components/recommended/desktop/INDEX_D_Recommended"
import { useFetchData } from "@/utils/org/useFetchData"
import dynamic from "next/dynamic"
const INDEX_D_Recommended = dynamic(
  () =>
    import("@/components/recommended/desktop/INDEX_D_Recommended").then(
      (mod) => mod.INDEX_D_Recommended
    ),
  {
    ssr: false,
  }
)
export default function INDEX_Recommmended() {
  // const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })

  const theData = useFetchData()

  if (theData === null) {
    return <LoadingComponent />
  }

  return (
    <>
      <INDEX_D_Recommended allBackendData={theData} />
    </>
  )
}
