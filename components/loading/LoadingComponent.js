import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import RobotLoading from "@/assets/icons/RobotLoading.png"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useEffect, useState } from "react"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "../ui/heading_body_text/HeaderFonts"
import { LoadingComponentWrapper } from "./styles/LoadingComponentWrapper"

/* 
!FH0
- Fix this
- Put the provider of context org flow closer to dashboard components, maybe in the layout
*/

const LoadingLottieComponentWithNoSSR = dynamic(
  () => import("./loading-lottie-component"),
  { ssr: false }
)

export const LoadingComponent = () => {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    setShouldShow(true)
  }, [])

  if (shouldShow === false) {
    return null
  }

  return (
    <LoadingComponentWrapper data-testid={KEYS_DATA_TESTID.LOADING_COMPONENT}>
      <H1 cta>Loading ...</H1>
      <P semibold dark_gray>
        Please wait, our machines are working hard to provide your results!
      </P>
      <LoadingLottieComponentWithNoSSR />
      <div>
        <Image src={RobotLoading} layout="intrinsic" alt="" />
      </div>
    </LoadingComponentWrapper>
  )
}
