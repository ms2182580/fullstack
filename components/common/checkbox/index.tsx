import React, { useState } from "react"
import styled from "styled-components"
import {
  CheckboxInput,
  CheckboxWrapper,
  Checkmark,
} from "./styles/checkbox.style"

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Checkmark></Checkmark>
    </CheckboxWrapper>
  )
}

export default Checkbox
