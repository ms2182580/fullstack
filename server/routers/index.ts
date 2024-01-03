import { router } from "../trpc"
import { agencyRouter } from "./agency"
import { campRouter } from "./camp"
import { classRouter } from "./class"
import { doctorRouter } from "./doctor"
import { educationRouter } from "./education"
import { hardwareRouter } from "./hardware"
import { legalRouter } from "./legal"
import { mentalHealthRouter } from "./mentalHealth"
import { organizationRouter } from "./organization"
import { otherRouter } from "./other"
import { residencyRouter } from "./residency"
import { softwareRouter } from "./software"
import { therapyRouter } from "./therapy"
import { vocationRouter } from "./vocation"

export const appRouter = router({
  agency: agencyRouter /* 🟥 Error → trpc.agency.getAll.useQuery() */,
  camp: campRouter /* 🟩 OK */,
  class: classRouter /* 🟩 OK */,
  doctor: doctorRouter /* 🟥 Error → trpc.agency.getAll.useQuery()*/,
  education: educationRouter /* 🟩 OK */,
  hardware: hardwareRouter /* 🟩 OK */,
  legal: legalRouter /* 🟩 OK */,
  mentalHealth: mentalHealthRouter /* 🟩 OK */,
  organization: organizationRouter /* 🟩 OK */,
  other: otherRouter /* 🟩 OK */,
  residency: residencyRouter /* 🟩 OK */,
  software: softwareRouter /* 🟩 OK */,
  therapy: therapyRouter /* 🟩 OK */,
  vocation: vocationRouter /* 🟩 OK */,
})

export type AppRouter = typeof appRouter
