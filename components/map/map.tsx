import { LeftArrowTinySvg, RightArrowTinySvg } from "@/assets/icons";
import { Map, Marker } from "pigeon-maps";
import { useEffect, useRef } from "react";
import { MapComponentWrapper } from "./styles/MapComponentWrapper";

type Default_data_map_type = {
    coordinates: {
        lat: number;
        lon: number;
    };
    zoom: number;
    marker: {
        defaultSize: number;
    };
};

const default_data_map: Default_data_map_type = {
    coordinates: {
        lat: 40.6712062,
        lon: -73.9662055,
    },
    zoom: 14,
    marker: {
        defaultSize: 50,
    },
};

type Props = {
    isFullMap: boolean;
    handleIsFullMap: (e: any) => void;
    isMobile?: boolean;
};

// let dataToCards = Array(10).fill({})
// console.log("dataToCards:", dataToCards)

export const MapComponent = ({
    isFullMap,
    handleIsFullMap,
    isMobile = false,
}: Props) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current && isFullMap) {
            mapRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [mapRef, isFullMap]);

    // const { pathname } = useRouter()
    let mapProps = {
        ref: mapRef,
        widthFull: "false",
    };
    if (isMobile) {
        mapProps.widthFull = "true";
    }
    return (
        <>
            <MapComponentWrapper {...mapProps}>
                <Map
                    defaultCenter={[
                        default_data_map.coordinates.lat,
                        default_data_map.coordinates.lon,
                    ]}
                    defaultZoom={default_data_map.zoom}>
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

                <button
                    onClick={handleIsFullMap}
                    tabIndex={0}>
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
    );
};
