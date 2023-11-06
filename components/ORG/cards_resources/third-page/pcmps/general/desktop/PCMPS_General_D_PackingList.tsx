import { ShareSvg } from "@/assets/Icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { PCMPS_General_D_PackingListWrapper } from "./styles/PCMPS_General_D_PackingListWrapper"

const packingListData = {
  clothing: {
    title: "clothing",
    data: ["Ha", "Swimsui", "Flip flops/sandal", "Swim Goggle", "UV Protection clothing (if worn normally)"],
  },
  toiletries: {
    title: "toiletries",
    data: ["Sunscreen (at least 30 SPF, preferably waterproof)", "Insect repellant", "Large towel", "Shampoo", "Bodywash"],
  },
  medications: {
    title: "medications",
    data: ["All prescription bottles with camper’s name labeled", "Allergy medications (if used)", "Inhalers (if used)", "Vitamins (if used)"],
  },
  misc: {
    title: "misc.",
    data: ["Reusable water bottle"],
  },
}

export const PCMPS_General_D_PackingList = ({ idInnerbar = "#" }) => {
  return (
    <PCMPS_General_D_PackingListWrapper id={idInnerbar}>
      <header>
        <div>
          <H3>Camper Packing List</H3>
          <P>Kind reminder: please label all belongings with the camper’s first and last name. </P>
        </div>
        <div tabIndex={0}>
          <ShareSvg />
          <P>Share</P>
        </div>
      </header>

      <div>
        <span>
          <H4>{packingListData.clothing.title}:</H4>
          <ul>
            {packingListData.clothing.data.map((x) => {
              return <li key={x}>{x}</li>
            })}
          </ul>
        </span>

        <span>
          <H4>{packingListData.toiletries.title}:</H4>
          <ul>
            {packingListData.toiletries.data.map((x) => {
              return <li key={x}>{x}</li>
            })}
          </ul>
        </span>
      </div>

      <div>
        <span>
          <H4>{packingListData.medications.title}:</H4>
          <ul>
            {packingListData.medications.data.map((x) => {
              return <li key={x}>{x}</li>
            })}
          </ul>
        </span>

        <span>
          <H4>{packingListData.misc.title}:</H4>
          <ul>
            {packingListData.misc.data.map((x) => {
              return <li key={x}>{x}</li>
            })}
          </ul>
        </span>
      </div>

      <P>All medications should be placed in a Ziplock baglabeled with the camper’s name to be handed to on-site nurse responsible for medication management.</P>

      <button>Print Packing List</button>
    </PCMPS_General_D_PackingListWrapper>
  )
}
