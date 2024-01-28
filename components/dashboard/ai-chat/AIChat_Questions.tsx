import { useState } from "react"
import {
  AIChat_QuestionsWrapper,
  AIChat_QuestionsWrapper_Title,
} from "./styles/AIChat_QuestionsWrapper"

export const AIChat_Questions = () => {
  const [selected, setSelected] = useState(["Diagnosed as ASD"])
  let data = [
    "Diagnosed as ASD",
    "is ENL",
    "Repeats words",
    "Has SET",
    "can talk to friends",
    "Uses Assistive Technology (AT)",
  ]
  const handleSelected = (item: string) => {
    setSelected((prev) =>
      prev.find((i) => i === item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    )
  }
  return (
    <AIChat_QuestionsWrapper>
      <span>Select all that apply to the individual:</span>
      <div>
        {data.map((item) => {
          const isSelected = selected.includes(item)
          return (
            <AIChat_QuestionsWrapper_Title
              onClick={() => handleSelected(item)}
              isSelected={isSelected}
              key={item}
            >
              {item}
            </AIChat_QuestionsWrapper_Title>
          )
        })}
      </div>
    </AIChat_QuestionsWrapper>
  )
}
