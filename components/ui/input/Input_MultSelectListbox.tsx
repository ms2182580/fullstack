import { useOutsideHide } from "@/utils/useOutsideHide"
import { useRef, useState } from "react"
import { Editable_5 } from "./Editable_5"
import { List_Example } from "./example"
import { Input_MultSelectListboxWrapper } from "./styles/Input_MultSelectListboxWrapper"

export type Input_MultSelectListbox_Props = {
  label?: string
  listToShow: string[]
}

export const Input_MultSelectListbox = ({
  label,
  listToShow,
}: Input_MultSelectListbox_Props) => {
  const [inputIsFocus, setInputIsFocus] = useState(false)
  const handleInputIsFocus = () => {
    setInputIsFocus(true)
  }
  const inputRef = useRef(null)
  useOutsideHide(inputRef, setInputIsFocus)

  const [namesState, setNames] = useState<string[]>([])

  const handleNameChange = (e) => {
    let whichDataShouldUpdate =
      e?.target?.value !== undefined ? e.target.value.split(" ") : e

    console.log("whichDataShouldUpdate:", whichDataShouldUpdate)

    // setNames((prevState) => [...prevState, whichDataShouldUpdate])
    setNames(whichDataShouldUpdate)
  }

  const [dataOnInput, setDataOnInput] = useState<string[]>([])
  const handleAddSomeDataOnInput = (e) => {
    // console.log("e:", e)
    if ((e.key === "Enter" || e.code === "Space") && e.type === "keydown") {
      setDataOnInput((prevState) => [...prevState, e.target.value])
    }
  }

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.textContent)
  }

  return (
    <Input_MultSelectListboxWrapper inputIsFocus={inputIsFocus} ref={inputRef}>
      {!label || label}
      {/* <input
        type="text"
        onFocus={handleInputIsFocus}
        value={namesState}
        onChange={handleNameChange}
        onKeyDown={handleAddSomeDataOnInput}
      /> */}

      {/* <InputWithInnerLabel /> */}

      <Editable_5 isFocus={handleInputIsFocus} />

      <List_Example
        listToDisplay={listToShow}
        handleNameChange={handleAddSomeDataOnInput}
      />
    </Input_MultSelectListboxWrapper>
  )
}
