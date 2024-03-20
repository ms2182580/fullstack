import { useRef } from "react"

import Select from "react-select"

const IndicatorsContainer = () => {
  return <div></div>
}

type Props = {
  label: string
  listToShow: { value: string; label: string }[]
  placeholderText: string
}

export const Input_MultSelectListbox = ({
  label,
  listToShow,
  placeholderText,
}: Props) => {
  const theRef = useRef<any>(null)

  let handleIsClicked = (e) => {
    if (theRef && e.type === "click") {
      theRef?.current?.focus()
    }
  }

  return (
    <div>
      <label onClick={handleIsClicked}>{!label || label}</label>
      <Select
        ref={theRef}
        closeMenuOnSelect={false}
        components={{ IndicatorsContainer }}
        isMulti
        options={listToShow}
        placeholder={placeholderText}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,

            height: "48px",
            paddingInline: "8px",

            borderRadius: "8px",
            border: " 1px solid #908395",
            background: " white",
            fontSize: "12px",
          }),

          placeholder: (baseStyles, state) => ({
            ...baseStyles,

            paddingBottom: "12px",
          }),

          multiValueLabel: (baseStyles, state) => ({
            ...baseStyles,
          }),
          multiValue: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#FFE7DB",
            borderRadius: "12px",

            padding: "4px 8px",
            marginBottom: "16px",

            textTransform: "capitalize",
            fontSize: "12px",
          }),
          multiValueRemove: (baseStyles, state) => ({
            ...baseStyles,

            backgroundColor: "#FFE7DB",
            borderRadius: "12px",

            color: "black",
            ":hover": {
              backgroundColor: "hsla(20, 100%, 82.9%)",
              color: "black",
            },
          }),
        }}
      />
    </div>
  )
}
