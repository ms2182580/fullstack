import * as leaflet from "leaflet"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import { ORG_D_Map2Wrapper } from "./styles/ORG_D_Map2Wrapper"

export const ORG_D_Map2 = () => {
  const icon = leaflet.icon({
    iconUrl: "/svg/pin.svg",
  })

  return (
    <ORG_D_Map2Wrapper>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={icon} />
      </MapContainer>
    </ORG_D_Map2Wrapper>
  )
}
