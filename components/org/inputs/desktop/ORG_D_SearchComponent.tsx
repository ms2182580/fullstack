import { SearchSVG } from "@/assets/icons"
import GlobeHemisphereEast from "@/assets/icons/org/search-input/GlobeHemisphereEast.svg"
import IdentificationCard from "@/assets/icons/org/search-input/IdentificationCard.svg"
import { Fragment, ReactElement } from "react"
import {
  ORG_D_SearchComponent_LabelInput,
  ORG_D_SearchComponent_LabelInput_Type,
} from "./ORG_D_SearchComponent_LabelInput"
import { ORG_D_SearchComponentWrapper } from "./styles/ORG_D_SearchComponentWrapper"

type Type_Data = ORG_D_SearchComponent_LabelInput_Type[]

const searchComponentData: Type_Data = [
  {
    label: "Keyword",
    placeholder: "ADHD, speech therapy, music classes, etc",
    dropdown: ["from arr 1", "from arr 2"],
    icon: SearchSVG,
  },
  {
    label: "Diagnosis",
    placeholder: "autism, cerebral pa...",
    dropdown: ["from arr 1", "from arr 2"],
    icon: IdentificationCard,
  },
  {
    label: "location",
    placeholder: "City or zip code",
    dropdown: ["from arr 1", "from arr 2"],
    icon: GlobeHemisphereEast,
  },
]

export const ORG_D_SearchComponent = (): ReactElement => {
  /* 
  !FH
  Create all the Typed Flow
  */

  return (
    <>
      <ORG_D_SearchComponentWrapper>
        {searchComponentData.map((x) => {
          return (
            <Fragment key={x.label}>
              <ORG_D_SearchComponent_LabelInput
                label={x.label}
                dropdown={x.dropdown}
                placeholder={x.placeholder}
                icon={x.icon}
              />
            </Fragment>
          )
        })}

        <button>
          <SearchSVG />
        </button>
      </ORG_D_SearchComponentWrapper>
    </>
  )
}
