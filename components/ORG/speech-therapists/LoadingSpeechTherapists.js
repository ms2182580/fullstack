import { Player } from "@lottiefiles/react-lottie-player"
import Image from "next/image"
import { useEffect } from "react"
import LottieLoading from "../../../assets/Icons/LottieLoading.json"
import RobotLoading from "../../../assets/Icons/RobotLoading.png"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "../../ui/heading_body_text/HeaderFonts"
import LoadingSpeechTherapistsWrapper from "./styles/LoadingSpeechTherapistsWrapper"

const LoadingSpeechTherapists = () => {
  const { setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFilters()

  useEffect(() => {
    setShouldFetchDesktopNoFilters(true)
  }, [])

  return (
    <LoadingSpeechTherapistsWrapper>
      <H1 cta>Loading ...</H1>
      <P
        semibold
        dark_gray>
        Please wait, our machines are working hard to provide your results!
      </P>
      <Player
        src={LottieLoading}
        loop
        autoplay
      />
      <div>
        <Image
          src={RobotLoading}
          layout="intrinsic"
          alt=""
        />
      </div>
    </LoadingSpeechTherapistsWrapper>
  )
}

export default LoadingSpeechTherapists
