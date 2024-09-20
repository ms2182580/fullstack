import UnderConstructionImagePurple from "@/assets/images/UnderConstructionImagePurple.png"
import Image from "next/image"
import { SBSG_3Wrapper } from "./styles/SBSG_3Wrapper"

export const SBSG_3 = () => {
  return (
    <SBSG_3Wrapper>
      <Image
        src={UnderConstructionImagePurple}
        alt="under construction image"
      />
    </SBSG_3Wrapper>
  )
}
