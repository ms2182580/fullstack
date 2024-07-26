import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import LottieLoading from "@/assets/icons/LottieLoading.json"
import RobotLoading from "@/assets/icons/RobotLoading.png"
import { Player } from "@lottiefiles/react-lottie-player"
import Image from "next/legacy/image"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "../ui/heading_body_text/HeaderFonts"
import { LoadingComponentWrapper } from "./styles/LoadingComponentWrapper"

export const LoadingComponent = () => {
  return (
    <LoadingComponentWrapper data-testid={KEYS_DATA_TESTID.LOADING_COMPONENT}>
      <H1 cta>Loading ...</H1>
      <P semibold dark_gray>
        Please wait, our machines are working hard to provide your results!
      </P>
      <Player src={LottieLoading} loop autoplay />
      <div>
        <Image src={RobotLoading} layout="intrinsic" alt="" />
      </div>
    </LoadingComponentWrapper>
  )
}
