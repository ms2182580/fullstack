import MHSS_SameClinic_1 from "@/assets/images/org/mental-health/MHSS_SameClinic_1.png"
import MHSS_SameClinic_2 from "@/assets/images/org/mental-health/MHSS_SameClinic_2.png"
import MHSS_SameClinic_3 from "@/assets/images/org/mental-health/MHSS_SameClinic_3.png"
import MHSS_SameClinic_4 from "@/assets/images/org/mental-health/MHSS_SameClinic_4.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import Image from "next/image"
import { useRouter } from "next/router"
import { ORG_D_Detail_AtTheSameClinicWrapper } from "./styles/ORG_D_Detail_AtTheSameClinicWrapper"

export const enum PROPS_KEY {
  KEY = "PROPS_KEY",
  TITLE = "TITLE",
  THE_DATA = "THE_DATA",
}

type Props = {
  [ArraySection_KEYS.ALL_DATA]: {
    theIdForComponent: string
  }
}

type DataToDisplay_Type = {
  image: any
  title: string
  moveTheView: string
}[]

const dataToDisplay: DataToDisplay_Type = [
  {
    image: MHSS_SameClinic_1,
    title: "Tamantha Faye, LMHC",
    moveTheView: "#",
  },
  {
    image: MHSS_SameClinic_2,
    title: "Danny Gonzales, LMHC",
    moveTheView: "#",
  },
  {
    image: MHSS_SameClinic_3,
    title: "Fae Hutchinson, LMHC",
    moveTheView: "#",
  },
  {
    image: MHSS_SameClinic_4,
    title: "Jill Davis, LMHC",
    moveTheView: "#",
  },
]

export const ORG_D_Detail_AtTheSameClinic = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}: Props) => {
  const { theIdForComponent = "#" } = allProps || {}

  const { query } = useRouter()

  return (
    <ORG_D_Detail_AtTheSameClinicWrapper
      id={theIdForComponent}
      isBackend={Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])}
    >
      <header>
        <H3>At the same clinic</H3>
      </header>

      <ul>
        {dataToDisplay.map((x) => {
          return (
            <li key={x.title}>
              <Image src={x.image} alt={x.title} />
              <P>{x.title}</P>
              <button>View Profile</button>
            </li>
          )
        })}
      </ul>
    </ORG_D_Detail_AtTheSameClinicWrapper>
  )
}
