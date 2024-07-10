import { SearchSVG } from "@/assets/icons"
import GlobeHemisphereEastSVG from "@/assets/icons/org/search-input/GlobeHemisphereEast.svg"
import IdentificationCardSVG from "@/assets/icons/org/search-input/IdentificationCard.svg"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/navigation"
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
    icon: IdentificationCardSVG,
  },
  {
    label: "location",
    placeholder: "City or zip code",
    dropdown: ["from arr 1", "from arr 2"],
    icon: GlobeHemisphereEastSVG,
  },
]

export const ORG_D_SearchComponent = (): ReactElement => {
  /* 
  !FH
  Create all the Typed Flow
  
  - Collect here all the data from all the inputs
  - Pass the data to some context after the user click on search icon or press Enter
  
  */

  const { push } = useRouter()

  const pushToTypedFlow = () => {
    push(`${ALL_ROUTES.ORG}/${ALL_ROUTES["TYPED-FLOW"]}`)
  }

  const {
    setDiagnosisChoosed,
    setInputTypesByUser,
    diagnosisChoosed,
    inputTypesByUser,
  }: any = useSessionStorage_typedFlow()

  const handleMoveToTypedFlow = (e) => {
    if (
      (e.type === "keydown" || e.type === "click") &&
      diagnosisChoosed !== "" &&
      inputTypesByUser !== ""
    ) {
      pushToTypedFlow()
    }
  }

  return (
    <ORG_D_SearchComponentWrapper
      isPointerButton={diagnosisChoosed !== "" && inputTypesByUser !== ""}
    >
      {searchComponentData.map(
        ({ label, dropdown, placeholder, icon }, index) => {
          const displayDropdown = index === 1

          return (
            <Fragment key={label}>
              <ORG_D_SearchComponent_LabelInput
                label={label}
                dropdown={dropdown}
                placeholder={placeholder}
                icon={icon}
                shouldDisplayDropdown={displayDropdown}
                setDiagnosisChoosed={setDiagnosisChoosed}
                setInputTypesByUser={setInputTypesByUser}
                pushToTypedFlow={pushToTypedFlow}
              />
            </Fragment>
          )
        }
      )}

      <button onClick={handleMoveToTypedFlow} onKeyDown={handleMoveToTypedFlow}>
        <SearchSVG />
      </button>
    </ORG_D_SearchComponentWrapper>
  )
}
