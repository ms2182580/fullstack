import UnderConstructionImagePurple from "@/assets/images/UnderConstructionImagePurple.png"
import Image from "next/image"
import { SBSG_5Wrapper } from "./styles/SBSG_5Wrapper"

export const SBSG_5 = () => {
  return (
    <SBSG_5Wrapper>
      <Image
        src={UnderConstructionImagePurple}
        alt="under construction image"
      />
    </SBSG_5Wrapper>
  )
}
