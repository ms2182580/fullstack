import { INDEX_D_Dashboard } from "@/components/dashboard/INDEX_D_Dashboard"
import { INDEX_D_TourIndividual } from "@/components/dashboard/tour/INDEX_D_TourIndividual"
import { TourProvider } from "@reactour/tour"
import { useEffect, useState } from "react"
export default function Dashboard() {
  const [isWindow, setIsWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") setIsWindow(true)
  }, [])

  const steps = [
    {
      selector: "#first",
      content: "Welcome to care plan Editor",
    },
    {
      selector: "#upload",
      content: "This is my second Step",
    },
    {
      selector: "#saved",
      content: "This is my second Step",
    },
    {
      selector: "#chat",
      content: "This is my second Step",
    },
    {
      selector: "#optimize",
      content: "This is my second Step",
    },
  ]

  if (!isWindow) return <></>

  return (
    <TourProvider
      ContentComponent={(props) => <INDEX_D_TourIndividual {...props} />}
      steps={steps}
      // position={"center"}
      showDots={false}
      styles={{
        popover: (base) => ({
          ...base,
          "--reactour-accent": "#ef5a3d",
          borderRadius: 8,
          maxWidth: "100%",
          background: "transparent",
          boxShadow: "none",
        }),
        maskArea: (base) => ({ ...base, rx: 10 }),
        badge: (base) => ({ ...base, display: "none" }),
        controls: (base) => ({ ...base, marginTop: 100 }),
        close: (base) => ({ ...base, left: "auto", right: 8, top: 8 }),
      }}
    >
      <INDEX_D_Dashboard />
    </TourProvider>
  )
}
