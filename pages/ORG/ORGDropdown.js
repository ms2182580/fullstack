import Image from "next/image.js"
import ORGDropdownWrapper from "./styles/ORGDropdownWrapper.js"
import ArrowDown from "../../assets/Icons/ArrowDown.png"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts.js"

const ORGDropdown = ({
  icon = "not found",
  title = "no title",
  options = "Coming Soon!"
}) => {
  // console.log("icon, title:", icon, title)
  return (
    <ORGDropdownWrapper>
      <div>
        <Image src={icon} alt="" />
      </div>
      <span tabIndex={0}>
        <P bold>{title}</P>

        <Image src={ArrowDown} alt="" />
      </span>
    </ORGDropdownWrapper>
  )
}

export default ORGDropdown
