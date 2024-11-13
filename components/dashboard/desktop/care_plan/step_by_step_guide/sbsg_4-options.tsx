import SBSG4_0 from "@/assets/images/Dashboard/care-plan/sbsg/SBSG4_0.png"
import SBSG4_1 from "@/assets/images/Dashboard/care-plan/sbsg/SBSG4_1.png"
import SBSG4_2 from "@/assets/images/Dashboard/care-plan/sbsg/SBSG4_2.png"
import Image from "next/image"
import { SBSG_4OptionsDropdown } from "./sbsg_4-options-dropdown"
import { SBSG_4OptionsWrapper } from "./styles/SBSG_4OptionsWrapper"

/* 
!FH0
https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-8660&t=mQ2YRV9aybHYcx6i-4

- Create the logic of "Search the directory instead" → 1° page of ORG

- Create the logic of "View Profile" → 3° page of ORG
- Create the logic of "Remove suggestion"
- Create the logic of "Regenerate results"

- Create a new logic that's not in the figma file "Regenerate results" but now for the whole results

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

export const SBSG_4Options = () => {
  return (
    <SBSG_4OptionsWrapper>
      {listOfResources.map(({ image, title, subtitle, location }, index) => {
        return (
          <li key={`${title}_${index}`} tabIndex={0}>
            <Image src={image} alt={title} />
            <p title={title}>{title}</p>
            <p title={subtitle}>{subtitle}</p>
            <p title={location}>{location}</p>
            <SBSG_4OptionsDropdown />
          </li>
        )
      })}
    </SBSG_4OptionsWrapper>
  )
}
