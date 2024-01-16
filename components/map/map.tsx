import { LeftArrowTinySvg, RightArrowTinySvg } from "@/assets/icons"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { useRouter } from "next/router"
import { Map, Marker } from "pigeon-maps"
import { useEffect, useRef } from "react"
import { MapComponentWrapper } from "./styles/MapComponentWrapper"

type Default_data_map_type = {
  coordinates: {
    lat: number
    lon: number
  }
  zoom: number
  marker: {
    defaultSize: number
  }
}

const default_data_map: Default_data_map_type = {
  coordinates: {
    lat: 40.6712062,
    lon: -73.9662055,
  },
  zoom: 14,
  marker: {
    defaultSize: 50,
  },
}

type Props = {
  isFullMap: boolean
  handleIsFullMap: (e: any) => void
  isMobile?: boolean
}

export const MapComponent = ({
  isFullMap,
  handleIsFullMap,
  isMobile = false,
}: Props) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapRef.current && isFullMap) {
      mapRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [mapRef, isFullMap])

  let mapProps = {
    ref: mapRef,
    widthFull: false,
    isFullMap: false,
  }
  if (isMobile) {
    mapProps.widthFull = true
    mapProps.isFullMap = isFullMap
  }

  const { query } = useRouter()

  return (
    <>
      <MapComponentWrapper
        {...mapProps}
        isBackend={Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])}
      >
        <Map
          defaultCenter={[
            default_data_map.coordinates.lat,
            default_data_map.coordinates.lon,
          ]}
          defaultZoom={default_data_map.zoom}
        >
          <Marker
            width={default_data_map.marker.defaultSize}
            anchor={[40.6712062, -73.9662055]}
          />

          <Marker
            width={default_data_map.marker.defaultSize}
            anchor={[40.678844, -73.9557919]}
          />

          <Marker
            width={default_data_map.marker.defaultSize}
            anchor={[40.666828, -73.9506389]}
          />

          <Marker
            width={default_data_map.marker.defaultSize}
            anchor={[40.6804528, -73.9682071]}
          />
        </Map>

        <button onClick={handleIsFullMap} tabIndex={0}>
          {isFullMap ? (
            <>
              Collapse map
              <RightArrowTinySvg />
            </>
          ) : (
            <>
              <LeftArrowTinySvg />
              Show map
            </>
          )}
        </button>
      </MapComponentWrapper>
    </>
  )
}
