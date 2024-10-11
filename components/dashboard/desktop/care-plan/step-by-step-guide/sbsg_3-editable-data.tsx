import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-data-create-plan"
import { FunctionComponent, SVGProps, useRef } from "react"
import { SBSG3_EditableDataWrapper } from "./styles/SBSG3_EditableDataWrapper"

export type SBSG3_EditableData_Type = {
  label: string
  defaultValue: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const SBSG3_EditableData = ({
  label,
  defaultValue,
  icon: SVG,
}: SBSG3_EditableData_Type) => {
  const { handleChangeEditableDataSBSG3 } = useCtxDataCreatePlan()

  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e) => {
    handleChangeEditableDataSBSG3({ label, defaultValue: e.target.value })
  }

  const handleFocusOnInput = (e) => {
    if (e.type === "click" && inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <SBSG3_EditableDataWrapper>
      <span>{label}:</span>
      <input
        ref={inputRef}
        value={defaultValue}
        onChange={handleInputChange}
        placeholder={`Enter your ${label} here...`}
      />
      <span onClick={handleFocusOnInput}>
        <SVG />
      </span>
    </SBSG3_EditableDataWrapper>
  )
}
