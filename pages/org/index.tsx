import { LoadingComponent } from "@/components/loading/LoadingComponent"
import { NamesCategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import { trpc } from "@/utils/trpc"
import { useWidthSize } from "@/utils/useWidthSize"
import dynamic from "next/dynamic"

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
  const { isMobile } = useWidthSize()

  // Get all data
  // const data = useContext(Data_Context)
  // console.log("get all data", { data })

  // Put all data togheter
  // const allData = {
  //   [NamesCategories_KEY["AGENCIES"]]: data.agency.data,
  //   [NamesCategories_KEY["CAMPS"]]: data.camp.data,
  //   [NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"]]: data.classGet.data,
  //   [NamesCategories_KEY["PHYSICIANS"]]: data.doctor.data,
  //   [NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"]]:
  //     data.education.data,
  //   [NamesCategories_KEY["ASSISTIVE TECHNOLOGY HARDWARE"]]: data.hardware.data,
  //   [NamesCategories_KEY["LEGAL RESOURCES"]]: data.legal.data,
  //   [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]:
  //     data.mentalHealthData.data,
  //   [NamesCategories_KEY["FOUNDATIONS"]]: data.organization.data,
  //   [NamesCategories_KEY["OTHER"]]: data.other.data,
  //   [NamesCategories_KEY["RESIDENTIAL RESOURCES"]]: data.residency.data,
  //   [NamesCategories_KEY["ASSISTIVE SOFTWARE"]]: data.software.data,
  //   [NamesCategories_KEY["THERAPEUTIC SERVICES"]]: data.therapy.data,
  //   [NamesCategories_KEY["VOCATIONAL RESOURCES"]]: data.vocation.data,
  // }

  const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })

  const allData = {
    [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]:
      mentalHealthData.data,
  }

  /* Check that at least one source is not undefined to put it in the UI */
  const atLeastOneIsNotUndefined = Object.values(allData).some(
    (x) => x !== undefined
  )

  /* Wait for all data be fetched */
  if (!atLeastOneIsNotUndefined || isMobile === undefined) {
    return <LoadingComponent />
  }

  /* Render on the UI everything */
  return (
    <>
      {isMobile === false ? (
        <INDEX_D_ORG allBackendData={allData} />
      ) : (
        <h1>1° page ORG on Mobile</h1>
      )}
    </>
  )
}

export default ORG_INDEX
