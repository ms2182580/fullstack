import LoadingSpeechTherapistsWrapper from "./styles/LoadingSpeechTherapistsWrapper"
import { H1 } from "../../ui/heading_body_text/HeaderFonts"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { Player } from "@lottiefiles/react-lottie-player"
import LottieLoading from "../../../assets/Icons/LottieLoading.json"
import { RobotSvg } from "../../../assets/Icons"

const LoadingSpeechTherapists = () => {
  return (
    <LoadingSpeechTherapistsWrapper>
      <H1 cta>Loading ...</H1>
      <P semibold dark_gray>
        Please wait, our machines are working hard to provide your results!
      </P>
      <Player src={LottieLoading} loop autoplay  />
      <RobotSvg/>
    </LoadingSpeechTherapistsWrapper>
  )
}

export default LoadingSpeechTherapists
