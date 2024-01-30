import Recommended from "@/assets/images/recommended/recommended.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1, H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Image from "next/image"
import Link from "next/link"
import { Recommended_D_Individual } from "./Recommended_D_Individual"
import { INDEX_D_RecommendedWrapped } from "./styles/INDEX_D_RecommendedWrapper"

type Props = {
  allBackendData: object[] | any
}
export const INDEX_D_Recommended = ({ allBackendData }: Props) => {
  return (
    <INDEX_D_RecommendedWrapped>
      <H1>Recommended for you</H1>
      <P>
        Based on your profile, here are some resources from our directory to get
        you started as you create a new care plan. Want to save a resource for
        later? Join our platform to save resources, providers, and generate a
        care plan that you can save and update anytime.
      </P>
      <Recommended_D_Individual
        category={"CATEGORY"}
        allSubcategories={[]}
        allBackendData={allBackendData}
      />

      {/* 
      //!FH0
      Make changes here
      Source: https://www.figma.com/file/mo5tAwQH5Yxt4ajX62Pcl8/AAPD-Cohort-6-Hi-fi-Designs?type=design&node-id=1654-79522&mode=dev
      */}

      <div>
        <Image
          src={Recommended}
          alt="and image showing you can make search with a magnifying glass"
        />

        <div>
          <H2>Want to explore more suggestions?</H2>
          <P>
            With over 250,000 resources in our database, the options are endless
            and always catered to you.
          </P>

          <Link
            href={`${ALL_ROUTES.RECOMMENDED}/${ALL_ROUTES["MORE-RECOMMENDATION"]}`}
          >
            view more
          </Link>
        </div>
      </div>
    </INDEX_D_RecommendedWrapped>
  )
}
