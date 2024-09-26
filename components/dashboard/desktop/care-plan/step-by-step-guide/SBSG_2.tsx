import { InputTags } from "@/components/ui/input/input-tags"
import { NameProfileSelected_Type } from "."
import { SBSG_2Wrapper } from "./styles/SBSG_2Wrapper"

/* 
!FH0
Create this next component
https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-8087&t=HT2B1YrJM4dLVKOW-4

*/

type Props = {
  nameProfileSelected?: NameProfileSelected_Type
}

export const SBSG_2 = ({ nameProfileSelected }: Props) => {
  return (
    <SBSG_2Wrapper>
      <header>
        <h5>Goals</h5>
      </header>
      <p>
        I’d like to <span>{nameProfileSelected}</span> to work on these goals:
      </p>
      {/* 
      //!FH0
      AI_1 component work. Next steps:
      - Pass all the flow to styled-components
      - disable the focus-visible of the input here and put the focus-visible on the container instead
      - Make it a re usable component
      
      - Compare the logic with «TagInput.tsx»
      
      */}
      {/* <AI_1 /> */}
      <InputTags />

      <div>Options here</div>
    </SBSG_2Wrapper>
  )
}
