import PVES_RelatedJob1 from "@/assets/images/org/vocational-employment/PVES_RelatedJob1.png"
import PVES_RelatedJob2 from "@/assets/images/org/vocational-employment/PVES_RelatedJob2.png"
import PVES_RelatedJob3 from "@/assets/images/org/vocational-employment/PVES_RelatedJob3.png"
import { Caption, P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { InnerNavBar_InnerData_KEYS } from "@/utils/org/third-page/InnerNavBar"
import Image, { StaticImageData } from "next/image"
import { PVES_General_D_RelatedJobsWrapper } from "./styles/PVES_General_D_RelatedJobsWrapper"
import { PVES_General_D_RelatedJobs_CardWrapper } from "./styles/PVES_General_D_RelatedJobs_CardWrapper"

const dataCards: PVES_General_D_RelatedJobs_Card_Props[] = [
  {
    image: PVES_RelatedJob1,
    workplaceType: "hybrid",
    title: "Operations Analyst",
    city: "Burbank, CA",
  },
  {
    image: PVES_RelatedJob2,
    workplaceType: "hybrid",
    title: "Engineer II - Systems",
    city: "Seattle, WA",
  },
  {
    image: PVES_RelatedJob2,
    workplaceType: "hybrid",
    title: "Data Science Manager",
    city: "New York, NY",
  },
  {
    image: PVES_RelatedJob3,
    workplaceType: "On-site",
    title: "Quality Inspector",
    city: "Minneapolis, MN",
  },
]

export const PVES_General_D_RelatedJobs = ({ [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_ID]: theID = "#" }) => {
  return (
    <PVES_General_D_RelatedJobsWrapper id={theID}>
      <header>
        <H3>Related jobs:</H3>
      </header>

      <ul>
        {dataCards.map((x) => {
          return (
            <li key={`${x.title}_${x.city}_${x.workplaceType}`}>
              <PVES_General_D_RelatedJobs_Card
                title={x.title}
                image={x.image}
                city={x.city}
                workplaceType={x.workplaceType}
              />
            </li>
          )
        })}
      </ul>
    </PVES_General_D_RelatedJobsWrapper>
  )
}

type PVES_General_D_RelatedJobs_Card_Props = {
  image: StaticImageData
  workplaceType: string[] | string
  title: string
  city: string
}

const PVES_General_D_RelatedJobs_Card = ({ image, workplaceType, title, city }: PVES_General_D_RelatedJobs_Card_Props) => {
  return (
    <PVES_General_D_RelatedJobs_CardWrapper>
      <span>
        <Image
          src={image}
          alt={`Image for ${title} on city: ${city}`}
        />
      </span>
      <Caption>{workplaceType}</Caption>
      <H4>{title}</H4>
      <P>{city}</P>
      <button>view job</button>
    </PVES_General_D_RelatedJobs_CardWrapper>
  )
}
