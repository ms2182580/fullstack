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

const ORG_INDEX = () => {
  const { isMobile }: any = useCheckUserWidth()

  const mentalHealthData = trpc.camp.getAll.useQuery({ limit: 3 })

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

/* 
? Possible custom hook to get all data


let allListingTypes = ["agency", "camp", "class"]

let theMethods = {
  addMany: "addMany",
  addOne: "addOne",
  getAll: "getAll",
  getOne: "getOne",
}

export const ALL_DATA = [
  {
    category: "agency",
    subcategories: [
      "Government Contracted Office",
      "Governmental Office",
      "Non-Governmental Office",
    ],
  },
  {
    category: "camp",
    subcategories: [
      "Afterschool Camp",
      "Day Camp",
      "Holiday Camp",
      "Sleep-away Camp",
    ],
  },
]

export const useGetAllDataFromTRPC = ({ theData = ALL_DATA }) => {
  const [allData, setAllData] = useState(null)

  useEffect(() => {
    let all_tRPC: any = []

    for (const inside_ALL_Data of theData) {
      let theCategory = inside_ALL_Data.category

      for (const subcategories of inside_ALL_Data.subcategories) {
        let getEveryDataFromtRPC = trpc[theCategory][theMethods.getAll].useQuery({ limite: 3, filter: { listingType: subcategories } })

        all_tRPC.push(getEveryDataFromtRPC)
      }
    }

    setAllData(all_tRPC)
  }, [])

  return allData
}


*/
