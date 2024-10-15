import UnderConstructionImagePurple from "@/assets/images/UnderConstructionImagePurple.png"
import Image from "next/image"
import { SBSG_4Wrapper } from "./styles/SBSG_4Wrapper"

/* 
!FH0
https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-8354&t=uxkQcuqhgTnPrbHv-4
*/

export const SBSG_4 = () => {
  return (
    <SBSG_4Wrapper>
      <Image
        src={UnderConstructionImagePurple}
        alt="under construction image"
      />
    </SBSG_4Wrapper>
  )
}
