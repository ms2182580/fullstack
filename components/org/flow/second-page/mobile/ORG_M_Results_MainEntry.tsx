import dynamic from "next/dynamic.js"
import { useRouter } from "next/router"
import { useState } from "react"
import { ORG_D_Results_FinalButton } from "../desktop/ORG_D_Results_FinalButton.js"
import { ORG_M_Result_Pagination } from "./ORG_M_Result_Pagination.jsx"
import { ORG_M_Results_Choisepath } from "./ORG_M_Results_Choisepath.jsx"
import { ORG_M_Results_FilterSortbyHeader } from "./ORG_M_Results_FilterSortbyHeader.js"
import { ORG_M_Results_MainEntryWrapper } from "./styles/ORG_M_Results_MainEntryWrapper.js"
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

export const ORG_M_Results_MainEntry = ({
  titleToFormat = "nothing",
  isTypedFlow = false,
}: ORG_D_Results_MainEntry_PROPS) => {
  const [showFullMap, setShowFullMap] = useState(false)

  const { pathname } = useRouter()

  const [isFullMap, setIsFullMap] = useState(false)

  const handleIsFullMap = (e: any) => {
    if (e.type === "click" || (e.key === "Enter" && e.type === "keydown")) {
      setIsFullMap((prevState) => !prevState)
    }
  }

  return (
    <ORG_M_Results_MainEntryWrapper
      id={ORG_D_Results_MainEntry_ID.TOP_OF_ORG_ID}
      isFullMap={isFullMap}
    >
      <ORG_M_Results_FilterSortbyHeader />
      <div>
        <MapComponent
          isFullMap={isFullMap}
          handleIsFullMap={handleIsFullMap}
          isMobile
        />
      </div>
      <div>
        <ORG_M_Results_Choisepath isTypedFlow={isTypedFlow} />
      </div>

      {pathname === "/org/typed-flow" ? null : (
        <>
          <ORG_D_Results_FinalButton />
        </>
      )}
      <ORG_M_Result_Pagination />
      {/* <ORG_D_Results_Breadcrumbs
                isTypedFlow={isTypedFlow}
                titleToFormat={titleToFormat}
            /> */}
    </ORG_M_Results_MainEntryWrapper>
  )
}
