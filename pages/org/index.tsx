import { LoadingComponent } from "@/components/loading/LoadingComponent"
import dynamic from "next/dynamic"
import { NamesCategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import { getMentalHealth } from "@/utils/org/tRPC-fetch/getMentalHealth"
import { trpc } from "@/utils/trpc"
import { useCheckUserWidth } from "../../context/CheckUserWidth"
const INDEX_D_ORG = dynamic(
  () =>
    import("@/components/org/home/desktop/INDEX_D_ORG").then(
      (mod) => mod.INDEX_D_ORG
    ),
  { ssr: false }
)
// const INDEX_D_ORG_Search = dynamic(
//   () =>
//     import("../../components/org/home/desktop/INDEX_D_ORG").then(
//       (mod) => mod.INDEX_D_ORG
//     ),
//   { ssr: false }
// )

const ORG_INDEX = () => {
  const { isMobile }: any = useCheckUserWidth()

  const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })
  // const filteredData = trpc.mentalHealth.getAll.useQuery({
  //   limit: 3,
  //   filter: { recordSubtype: "Speech Therapy" },
  // })
  // console.log("filteredData:", filteredData)
  // const filteredData2 = trpc.mentalHealth.getAll.useQuery({
  //   limit: 3,
  //   filter: { recordSubtype: "Equine therapy" },
  // })
  // // console.log("filteredData2:", filteredData2)
  // const filteredData3 = trpc.mentalHealth.getAll.useQuery({
  //   limit: 3,
  //   filter: { recordSubtype: "Occupational Therapy" },
  // })
  // // console.log("filteredData3:", filteredData3)
  const legal = trpc.legal.getAll.useQuery({ limit: 3 })

  let someMentalHealth = getMentalHealth({})
  // console.log("🟫someMentalHealth:", someMentalHealth)

  // const mentalHealthData99 = trpc.mentalHealth.getAll.useQuery({ limit: 99 })

  // if (
  //   filteredData.data ||
  //   filteredData2.data ||
  //   filteredData3.data ||
  //   mentalHealthData99.data
  // ) {
  //   console.log(
  //     "withFilters",
  //     filteredData.data,
  //     filteredData2.data,
  //     filteredData3.data,
  //     mentalHealthData99.data
  //   )
  // }

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
          <INDEX_D_ORG
            allBackendData={{
              [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]:
                mentalHealthData.data,
              [NamesCategories_KEY["LEGAL RESOURCES"]]: legal.data,
            }}
          />
        </>
      ) : (
        <>
          <h1>1° page ORG on Mobile</h1>
        </>
      )}
    </>
  )
}

export default ORG_INDEX
