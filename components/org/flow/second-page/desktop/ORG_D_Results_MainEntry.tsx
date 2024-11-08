import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useState } from "react"
import { ORG_D_Results_Breadcrumbs } from "./ORG_D_Results_Breadcrumbs"
import { ORG_D_Results_Choisepath } from "./ORG_D_Results_Choisepath"
import { ORG_D_Results_FilterSortbyHeader } from "./ORG_D_Results_FilterSortbyHeader"
import { ORG_D_Results_FinalButton } from "./ORG_D_Results_FinalButton"
import { ORG_D_Results_MainEntryWrapper } from "./styles/ORG_D_Results_MainEntryWrapper"
const MapComponent = dynamic(
  () => import("@/components/map/map").then((mod) => mod.MapComponent),
  {
    ssr: false,
  }
)

export type ORG_D_Results_MainEntry_PROPS = {
  isTypedFlow?: boolean
  titleToFormat?: string
}

export const enum ORG_D_Results_MainEntry_ID {
  TOP_OF_ORG_ID = "topOfORG",
}

export const ORG_D_Results_MainEntry = () => {
  const { pathname } = useRouter()

  const [isFullMap, setIsFullMap] = useState(false)

  const handleIsFullMap = (e: any) => {
    if (e.type === "click" || (e.key === "Enter" && e.type === "keydown")) {
      setIsFullMap((prevState) => !prevState)
    }
  }

  return (
    <ORG_D_Results_MainEntryWrapper
      id={ORG_D_Results_MainEntry_ID.TOP_OF_ORG_ID}
      isFullMap={isFullMap}
    >
      <ORG_D_Results_FilterSortbyHeader />

      <div>
        <ORG_D_Results_Choisepath />

        <MapComponent isFullMap={isFullMap} handleIsFullMap={handleIsFullMap} />
      </div>

      {pathname === `/${ALL_ROUTES.ORG}/${ALL_ROUTES["TYPED-FLOW"]}` ? null : (
        <ORG_D_Results_FinalButton />
      )}

      <ORG_D_Results_Breadcrumbs />
    </ORG_D_Results_MainEntryWrapper>
  )
}
