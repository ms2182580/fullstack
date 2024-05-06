import { trpc } from "@/utils/trpc"
import { createContext } from "react"

export const Data_Context = createContext<any>({})

export const useData = () => {
  const agency = trpc.agency.getAll.useQuery({ limit: 3 })
  const camp = trpc.camp.getAll.useQuery({ limit: 3 })
  const classGet = trpc.class.getAll.useQuery({ limit: 3 })
  const doctor = trpc.doctor.getAll.useQuery({ limit: 3 })
  const education = trpc.education.getAll.useQuery({ limit: 3 })
  const hardware = trpc.hardware.getAll.useQuery({ limit: 3 })
  const legal = trpc.legal.getAll.useQuery({ limit: 3 })
  const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })
  const organization = trpc.organization.getAll.useQuery({ limit: 3 })
  const other = trpc.other.getAll.useQuery({ limit: 3 })
  const residency = trpc.residency.getAll.useQuery({ limit: 3 })
  const software = trpc.software.getAll.useQuery({ limit: 3 })
  const therapy = trpc.therapy.getAll.useQuery({ limit: 3 })
  const vocation = trpc.vocation.getAll.useQuery({ limit: 3 })

  return {
    agency,
    camp,
    classGet,
    doctor,
    education,
    hardware,
    vocation,
    therapy,
    residency,
    software,
    organization,
    other,
    mentalHealthData,
    legal,
  }
}

export const DataProvider = ({ children }: any) => {
  const data = useData()
  return <Data_Context.Provider value={data}>{children}</Data_Context.Provider>
}
