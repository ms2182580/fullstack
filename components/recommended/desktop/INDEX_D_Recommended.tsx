import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { INDEX_D_RecommendedWrapped } from "./styles/INDEX_D_RecommendedWrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { Hero_D_Banner } from "@/components/home/desktop/Hero_D_Banner"
import { Fragment } from "react"
import { Recommended_D_Individual } from "./Recommended_D_Individual"
import { useRouter } from "next/router"
type Props = {
  allBackendData: object[] | any
}
export const INDEX_D_Recommended = ({ allBackendData }: Props) => {
  const router = useRouter()

  const handleNavigateMoreSuggestion = (e: MouseEvent | KeyboardEvent) => {
    if (e.type === "click" || (e as KeyboardEvent).key === "Enter") {
      router.push("recommended/more-recommendation")
    }
  }

  return (
    <INDEX_D_RecommendedWrapped>
      <H1>Recommended for you</H1>
      <P>
        Based on your selected needs, we’ve chosen a few resources from our
        services and providers directory to get your started on your care plan
        journey that works for you and your children.
      </P>
      <P>
        Want to save a resource for later? Join our platform to get your
        questions answered, generate a curated care plan, and create the roadmap
        to success to your child’s best life!
      </P>
      <div>
        <Fragment>
          <Recommended_D_Individual
            category={"CATEGORY"}
            allSubcategories={[]}
            allBackendData={allBackendData}
          />
        </Fragment>
      </div>
      <ButtonSmall goToDynamic={handleNavigateMoreSuggestion} secondary>
        Show more suggestions
      </ButtonSmall>
      <Hero_D_Banner />
    </INDEX_D_RecommendedWrapped>
  )
}
