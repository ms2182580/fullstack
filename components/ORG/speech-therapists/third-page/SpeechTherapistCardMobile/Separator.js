import { SeparatorWrapper } from "./styles/SeparatorWrapper.js"

export const Separator = ({ sticky, isFirst, isLastOne }) => {
  return (
    <SeparatorWrapper
      isLastOne={isLastOne}
    />
  )
}
