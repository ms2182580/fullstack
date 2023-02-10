import { SeparatorWrapper } from "./styles/SeparatorWrapper.js"

export const Separator = ({ sticky, isFirst, isLastOne }) => {
  return (
    <SeparatorWrapper
      sticky={sticky}
      isFirst={isFirst}
      isLastOne={isLastOne}
    />
  )
}
