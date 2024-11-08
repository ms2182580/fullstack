"use client"
import { Marker, Popup, TileLayer } from "react-leaflet"
import { ORG_D_MapWrapper } from "./styles/ORG_D_MapWrapper"
import leaflet from "leaflet"
export const ORG_D_Map = () => {
  const icon = leaflet.icon({
    iconUrl: "/svg/pin.svg",
  })
  return (
    <ORG_D_MapWrapper>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={icon}>
        <Popup maxWidth={200}>Data</Popup>
      </Marker>
    </ORG_D_MapWrapper>
  )
}
