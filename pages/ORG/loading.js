import LoadingSpeechTherapistsWrapper from "./styles/LoadingSpeechTherapistsWrapper"
import { Player } from "@lottiefiles/react-lottie-player"
import { H1 } from "../../components/ui/heading_body_text/HeaderFonts"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { RobotSvg } from "../../assets/Icons"
import LottieLoading from "../../assets/Icons/LottieLoading.json"

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
