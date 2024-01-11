import { LoadingComponent } from "@/components/loading/LoadingComponent"
import { trpc } from "@/utils/trpc"
import dynamic from "next/dynamic"
import { useCheckUserWidth } from "../../context/CheckUserWidth"

const INDEX_D_ORG_Search = dynamic(
  () =>
    import("../../components/org/home/desktop/INDEX_D_ORG").then(
      (mod) => mod.INDEX_D_ORG
    ),
  { ssr: false }
)
const INDEX_M_STSearch_Component = dynamic(
  () =>
    import(
      "@/components/org/_DEPRECATED/speech-therapists/first-page/mobile/INDEX_M_STSearch"
    ).then((mod) => mod.INDEX_M_STSearch),
  {
    ssr: false,
  }
)

const ORG_INDEX = () => {
  const { isMobile }: any = useCheckUserWidth()

  const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 50 })

  if (!mentalHealthData.data) {
    return (
      <>
        <LoadingComponent />
      </>
    )
  }
  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ORG_Search
            allBackendData={{
              mentalHealth: mentalHealthData.data,
              // mentalHealth2: mentalHealthData.data,
            }}
            /* allBackendFetched={{
              mentalHealthFetched: mentalHealthData.isFetched,
            }} */
          />
        </>
      ) : (
        <>
          <INDEX_M_STSearch_Component />
        </>
      )}
    </>
  )
}

export default ORG_INDEX
