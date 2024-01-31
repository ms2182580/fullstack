import React, { useState } from "react"
import styled from "styled-components"

const CheckboxWrapper = styled.label`
  display: inline-block;
  position: relative;
  height: 32px;
  width: 32px;
`

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + span {
    background-color: #6e3a82;
  }
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 32px;
  width: 32px;
  background-color: #fff;
  border: 2px solid #3a343c;
  border-radius: 3px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${CheckboxInput}:checked + &:after {
    display: block;
  }

  &:after {
    left: 8px;
    top: 2px;
    width: 10px;
    height: 20px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

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
