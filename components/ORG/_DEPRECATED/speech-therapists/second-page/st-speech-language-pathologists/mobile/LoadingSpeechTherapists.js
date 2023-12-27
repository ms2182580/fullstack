import { Player } from "@lottiefiles/react-lottie-player"
import Image from "next/legacy/image"
import { useEffect } from "react"
import RobotLoading from "../../../../../../../assets/icons/RobotLoading.png"
import LottieLoading from "../../../../../../../assets/icons2/LottieLoading.json"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "../../../../../../ui/heading_body_text/HeaderFonts"
import { LoadingSpeechTherapistsWrapper } from "./styles/LoadingSpeechTherapistsWrapper"

export const LoadingSpeechTherapists = () => {
  const { setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFiltersDesktop()

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
