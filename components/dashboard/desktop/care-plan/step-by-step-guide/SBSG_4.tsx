import Breadcrumbs_CaretRight from "@/assets/icons/Breadcrumbs_CaretRight.svg"
import SBSG4_0 from "@/assets/images/Dashboard/care-plan/sbsg/SBSG4_0.png"
import SBSG4_1 from "@/assets/images/Dashboard/care-plan/sbsg/SBSG4_1.png"
import SBSG4_2 from "@/assets/images/Dashboard/care-plan/sbsg/SBSG4_2.png"
import { SBSG_4Options } from "./sbsg_4-options"
import { SBSG_4Wrapper } from "./styles/SBSG_4Wrapper"

/* 
!FH0
https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-8354&t=uxkQcuqhgTnPrbHv-4
*/

const listOfResources = [
  {
    image: SBSG4_0,
    title: "STEM Camp",
    subtitle: "Day camp",
    location: "Dallas, TX 75001",
  },
  {
    image: SBSG4_1,
    title: "Rehasense ICON 60",
    subtitle: "Active rigid wheelchair",
    location: "Online",
  },
  {
    image: SBSG4_2,
    title: "Permobil F5 Corpus VS",
    subtitle: "Power wheelchair with standing",
    location: "Online",
  },
]

export const SBSG_4 = () => {
  return (
    <SBSG_4Wrapper>
      <header>
        <h5>Services</h5>
      </header>

      <p>Here are the services that best fit your needs:</p>

      <SBSG_4Options />

      <p tabIndex={0}>
        Search the directory instead <Breadcrumbs_CaretRight />
      </p>
    </SBSG_4Wrapper>
  )
}
