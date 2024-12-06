import LottieLoading from "@/assets/icons/LottieLoading.json"
import { Player } from "@lottiefiles/react-lottie-player"

export const LoadingLottieComponent = () => {
  return <Player src={LottieLoading} loop autoplay />
}
