import Home_progressBar from "@/assets/images/home/home_progress-bar.png"

import Image from "next/image"
import { Home_NewPath_D_ProgressBarWrapper } from "./styles/Home_NewPath_D_ProgressBarWrapper"

export const Home_NewPath_D_ProgressBar = () => {
  return (
    <Home_NewPath_D_ProgressBarWrapper>
      <Image src={Home_progressBar} alt="A progress bar" />
    </Home_NewPath_D_ProgressBarWrapper>
  )
}
