import Home_1 from "@/assets/images/home/home_1.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Image from "next/image"
import Link from "next/link"
import { Home_D_Hero_NWrapper } from "./styles/Home_D_Hero_NWrapper"

export const Home_Hero_D = () => {
  return (
    <Home_D_Hero_NWrapper>
      <div>
        <H1>Create a care plan to best meet the needs of your loved one</H1>
        <P>
          <span>
            Inclusive uses AI to simplify care coordination for families with
            Intellectual and Developmental Disabilities (I/DDs). Our online
            resource guide and AI search features will help you create and save
            a custom plan to help your loved one reach their goals.
          </span>
          Our platform will always remain free for caregivers - no hidden fees,
          no hidden agenda.
        </P>

        <div>
          <button>Demo Product</button>
          <Link href={ALL_ROUTES.ORG}>Expore Resources</Link>
        </div>
      </div>

      <Image
        src={Home_1}
        alt="Two people shaking hands smiling. In the image there are pieces shaped like rectangles, cylinders and squares that form a balanced construction."
      />
    </Home_D_Hero_NWrapper>
  )
}
