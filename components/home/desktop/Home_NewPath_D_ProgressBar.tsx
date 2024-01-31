import Home_progressBar from "@/assets/images/home/home_progress-bar.png"

import Image from "next/image"
import { Home_NewPath_D_ProgressBarWrapper } from "./styles/Home_NewPath_D_ProgressBarWrapper"

/* 
!FH0

https://www.figma.com/file/mo5tAwQH5Yxt4ajX62Pcl8/AAPD-Cohort-6-Hi-fi-Designs?type=design&node-id=1654-79366&mode=dev
*/
export const Home_NewPath_D_ProgressBar = () => {
  return (
    <Home_NewPath_D_ProgressBarWrapper>
      <Image src={Home_progressBar} alt="A progress bar" />
    </Home_NewPath_D_ProgressBarWrapper>
  )
}
