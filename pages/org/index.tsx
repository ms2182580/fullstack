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
  /*
  const agency = trpc.agency.getAll.useQuery({ limit: 3 })
  const camp = trpc.camp.getAll.useQuery({ limit: 3 })
  const classGet = trpc.class.getAll.useQuery({ limit: 3 })
  const doctor = trpc.doctor.getAll.useQuery({ limit: 3 })
  const education = trpc.education.getAll.useQuery({ limit: 3 })
  const hardware = trpc.hardware.getAll.useQuery({ limit: 3 })
  const legal = trpc.legal.getAll.useQuery({ limit: 3 })
  */
  const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })
  /*
  const organization = trpc.organization.getAll.useQuery({ limit: 3 })
  const other = trpc.other.getAll.useQuery({ limit: 3 })
  const residency = trpc.residency.getAll.useQuery({ limit: 3 })
  const software = trpc.software.getAll.useQuery({ limit: 3 })
  const therapy = trpc.therapy.getAll.useQuery({ limit: 3 })
  const vocation = trpc.vocation.getAll.useQuery({ limit: 3 })
  */

  // Put all data togheter
  let allData = {
    /*
    [NamesCategories_KEY["AGENCIES"]]: agency.data,
    [NamesCategories_KEY["CAMPS"]]: camp.data,
    [NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"]]: classGet.data,
    [NamesCategories_KEY["PHYSICIANS"]]: doctor.data,
    [NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"]]: education.data,
    [NamesCategories_KEY["ASSISTIVE TECHNOLOGY HARDWARE"]]: hardware.data,
    [NamesCategories_KEY["LEGAL RESOURCES"]]: legal.data,
    */
    [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]:
      mentalHealthData.data,
    /*
    [NamesCategories_KEY["FOUNDATIONS"]]: organization.data,
    [NamesCategories_KEY["OTHER"]]: other.data,
    [NamesCategories_KEY["RESIDENTIAL RESOURCES"]]: residency.data,
    [NamesCategories_KEY["ASSISTIVE SOFTWARE"]]: software.data,
    [NamesCategories_KEY["THERAPEUTIC SERVICES"]]: therapy.data,
    [NamesCategories_KEY["VOCATIONAL RESOURCES"]]: vocation.data,
    */
  }

  /* Check that at least one source is not undefined to put it in the UI */
  let atLeastOneIsNotUndefined = Object.values(allData).some(
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
        <>
          <INDEX_D_ORG allBackendData={allData} />
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
