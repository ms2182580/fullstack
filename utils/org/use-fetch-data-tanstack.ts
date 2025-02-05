import { useQuery } from "@tanstack/react-query"

type Mongo = {
  "Accounting Expenses": string
  Address: string
  "Advertising  Expenses": string
  "Affiliated Records": number
  City: string
  "Company Name": string
  "Computer Expenses": string
  "Contract Labor Expenses": string
  "Corporate Employee Size Actual": number
  "Corporate Sales Volume Actual": string
  County: string
  "Credit Score Alpha": string
  Facebook: string
  "Firm or Individual": number
  "Fortune 1000 Ranking": number
  "Government Office": number
  "Home Business": string
  "IUSA Number": string
  "Insurance Expenses": string
  "Last Updated On": number
  Latitude: number
  "Legal Expenses": string
  "Location Centerpoint": string
  "Location Employee Size Actual": number
  "Location Employee Size Range": string
  "Location Sales Volume Actual": string
  "Location Sales Volume Range": string
  "Location Type": string
  Longitude: number
  "Management/Administration Expenses": string
  "Metro Area": string
  "NAICS 1": number
  "NAICS 1 Description": string
  "NAICS 2": number
  "NAICS 2 Description": string
  "Office Supplies Expense": string
  "Package Container Expense": string
  "Parent IUSA Number": number
  "Payroll and Benefits Expenses": string
  "Phone Number Combined": string
  "Primary NAICS": number
  "Primary NAICS Description": string
  "Primary SIC Code": number
  "Primary SIC Description": string
  "Primary SIC Year Appeared": number
  "Purchase Print Expenses": string
  "Rent Expenses": string
  "SIC Code 1": number
  "SIC Code 1 Description": string
  "SIC Code 2": number
  "SIC Code 2 Description": string
  "Square Footage": string
  State: string
  "Subsidiary IUSA Number": number
  "Telcom Expenses": string
  "Type of Business": string
  "Utilities Expenses": string
  "Year Established": number
  "Years In Database": number
  "ZIP Code": number
}

export type RecordReturnType = {
  distance: number
  mongo: Mongo
  node_id: string
  rank: number
  record: string
}

export type CategoryReturnType = {
  category: string
  distance: number
  node_id: string
}

export const fetchPosts = async ({
  recordOrCategory,
}: {
  recordOrCategory?: UsePostsType["recordOrCategory"]
}): Promise<RecordReturnType | CategoryReturnType> => {
  const endpoint = `/api/mongo_data?type=${recordOrCategory}`

  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }

  const data = await response.json()
  return data
}

type UsePostsType = {
  internalKey?: string
  recordOrCategory?: "record" | "category"
}

export const usePosts = ({
  internalKey = "getMongoData",
  recordOrCategory = "record",
}: UsePostsType = {}) => {
  return useQuery({
    queryKey: [internalKey],
    queryFn: () => fetchPosts({ recordOrCategory }),
    enabled: false,
    refetchOnWindowFocus: false,
  })
}
