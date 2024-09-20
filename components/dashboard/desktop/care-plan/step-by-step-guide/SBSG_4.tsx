import UnderConstructionImagePurple from "@/assets/images/UnderConstructionImagePurple.png"
import Image from "next/image"
import { SBSG_4Wrapper } from "./styles/SBSG_4Wrapper"

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
