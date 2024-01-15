import ORG_Map_231 from "@/assets/icons/ORG_Map_231.png"
import ORG_Map_2_231_A from "@/assets/icons/ORG_Map_2_231_A.png"
import ORG_Map_2_231_B from "@/assets/icons/ORG_Map_2_231_B.png"
import ORG_Map_450 from "@/assets/icons/ORG_Map_450.jpg"
import Image from "next/legacy/image"
import { useMemo } from "react"
import { ORG_D_Detail_CardLocation } from "./ORG_D_Detail_CardLocation"
import {
  ORG_D_Detail_MapComponentWrapper,
  ORG_D_Detail_MapComponent_CLASSES,
} from "./styles/ORG_D_Detail_MapComponentWrapper"

export const enum MapProperties_KEYS {
  HEIGHT = "HEIGHT",
  HOW_MANY = "HOW_MANY",
}

export type MapProperties = {
  [MapProperties_KEYS.HEIGHT]?: 231 | 450
  [MapProperties_KEYS.HOW_MANY]: null | 1 | 2
}

export const ORG_D_Detail_MapComponent = ({
  howIsMap,
}: any): JSX.Element | null => {
  if (howIsMap === null) {
    return null
  }

  const heighOfMap = useMemo(() => {
    if (howIsMap[MapProperties_KEYS.HEIGHT] === undefined) {
      return 231
    }

    return howIsMap[MapProperties_KEYS.HEIGHT]
  }, [])

  if (howIsMap[MapProperties_KEYS.HOW_MANY] === 1) {
    return (
      <ORG_D_Detail_MapComponentWrapper howIsMap={howIsMap}>
        {howIsMap[MapProperties_KEYS.HEIGHT] !== undefined ? (
          <span
            className={ORG_D_Detail_MapComponent_CLASSES.FIRST_MAP}
            tabIndex={0}
          >
            <Image
              src={ORG_Map_450}
              alt={"Map image"}
              height={heighOfMap}
              layout={"responsive"}
              objectFit={"cover"}
            />
          </span>
        ) : (
          <span
            className={ORG_D_Detail_MapComponent_CLASSES.FIRST_MAP}
            tabIndex={0}
          >
            <Image
              src={ORG_Map_231}
              alt={"Map image"}
              height={heighOfMap}
              layout={"responsive"}
            />
          </span>
        )}
      </ORG_D_Detail_MapComponentWrapper>
    )
  }

  if (howIsMap[MapProperties_KEYS.HOW_MANY] === 2) {
    return (
      <ORG_D_Detail_MapComponentWrapper
        howIsMap={howIsMap}
        className={ORG_D_Detail_MapComponent_CLASSES.AS_TWO_MAPS}
      >
        <span
          className={ORG_D_Detail_MapComponent_CLASSES.FIRST_MAP}
          tabIndex={0}
        >
          <Image
            src={ORG_Map_2_231_A}
            alt={"Map image"}
            height={heighOfMap}
            layout={"responsive"}
            objectFit={"cover"}
          />
        </span>

        <ORG_D_Detail_CardLocation
          locationCity="Bellevue Mental Health"
          locationState="Queens, NY "
          locationStreetName="Bellevue Mental Health"
          locationStreetNumber="25-12 30th Ave, Fl 2"
          howFar={"15"}
        />

        <span
          className={ORG_D_Detail_MapComponent_CLASSES.SECOND_MAP}
          tabIndex={0}
        >
          <Image
            src={ORG_Map_2_231_B}
            alt={"Map image"}
            height={heighOfMap}
            layout={"responsive"}
            objectFit={"cover"}
          />
        </span>
      </ORG_D_Detail_MapComponentWrapper>
    )
  }

  return null
}
