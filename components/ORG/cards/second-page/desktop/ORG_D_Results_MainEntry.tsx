import { MapComponent } from "@/components/map/map"
import { useRouter } from "next/router"
import { useState } from "react"
import { ORG_D_Results_Breadcrumbs } from "./ORG_D_Results_Breadcrumbs"
import { ORG_D_Results_Choisepath } from "./ORG_D_Results_Choisepath"
import { ORG_D_Results_FilterSortbyHeader } from "./ORG_D_Results_FilterSortbyHeader.js"
import { ORG_D_Results_FinalButton } from "./ORG_D_Results_FinalButton.js"
import { ORG_D_Results_MainEntryWrapper } from "./styles/ORG_D_Results_MainEntryWrapper"

export type ORG_D_Results_MainEntry_PROPS = {
  isTypedFlow?: boolean
  titleToFormat?: string
}

export const enum ORG_D_Results_MainEntry_ID {
  TOP_OF_ORG_ID = "topOfORG",
}

export const ORG_D_Results_MainEntry = ({ titleToFormat = "nothing", isTypedFlow = false }: ORG_D_Results_MainEntry_PROPS) => {
  const [showFullMap, setShowFullMap] = useState(false)

  const { pathname } = useRouter()

  const [isFullMap, setIsFullMap] = useState(false)

  const handleIsFullMap = (e) => {
    if (e.type === "click" || (e.key === "Enter" && e.type === "keydown")) {
      setIsFullMap((prevState) => !prevState)
    }
  }

  return (
    <ORG_D_Results_MainEntryWrapper
      id={ORG_D_Results_MainEntry_ID.TOP_OF_ORG_ID}
      isFullMap={isFullMap}>
      <ORG_D_Results_FilterSortbyHeader />

      <div>
        <ORG_D_Results_Choisepath isTypedFlow={isTypedFlow} />

        <MapComponent
          isFullMap={isFullMap}
          handleIsFullMap={handleIsFullMap}
        />
      </div>

      {pathname === "/org/typed-flow" ? null : (
        <>
          <ORG_D_Results_FinalButton />
        </>
      )}

      <ORG_D_Results_Breadcrumbs
        isTypedFlow={isTypedFlow}
        titleToFormat={titleToFormat}
      />
    </ORG_D_Results_MainEntryWrapper>
  )
}
