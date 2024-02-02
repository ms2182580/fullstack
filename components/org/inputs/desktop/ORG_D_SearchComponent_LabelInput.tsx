import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_SearchComponent_LabelInputWrapper } from "./styles/ORG_D_SearchComponent_LabelInputWrapper"

export type ORG_D_SearchComponent_LabelInput_Type = {
  label: string
  placeholder: string
  icon: any
  dropdown: string[]
}

export const ORG_D_SearchComponent_LabelInput = ({
  label = "label title",
  placeholder = "placeholder text",
  icon,
  dropdown = ["first", "second"],
}: ORG_D_SearchComponent_LabelInput_Type) => {
  let TheIcon = icon
  return (
    <ORG_D_SearchComponent_LabelInputWrapper>
      <P>{label}</P>

      <div>
        <TheIcon />
        <input type="text" placeholder={placeholder} />
      </div>
    </ORG_D_SearchComponent_LabelInputWrapper>
  )
}
