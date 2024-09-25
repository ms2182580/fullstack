import UnderConstructionImagePurple from "@/assets/images/UnderConstructionImagePurple.png"
import Image from "next/image"
import { SBSG_2Wrapper } from "./styles/SBSG_2Wrapper"

export const SBSG_2 = () => {
  return (
    <SBSG_2Wrapper>
      <Image
        src={UnderConstructionImagePurple}
        alt="under construction image"
      />
    </SBSG_2Wrapper>
  )
}
