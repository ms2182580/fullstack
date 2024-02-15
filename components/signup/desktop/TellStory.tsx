import { ButtonSmall } from "@/components/ui/buttons/general"
import { SignupLayout } from "./Layout"
import { HeaderProgress } from "./Progress"
import { TellStoryWrapper } from "./styles/TellStoryWrapper"
import { ShareSvg } from "@/assets/icons"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"

export const TellStory = () => {
  return (
    <SignupLayout>
      <TellStoryWrapper>
        <div>
          <div>
            <H3>Tell us what helps Kahlil thrive!</H3>
            <span>
              Please review each section. Write your answers for the person
              identified in the profile. To add to a section, you can <br />{" "}
              either type or record audio. Drag and drop boxes to reorganize.
            </span>
          </div>
          <ButtonSmall secondary>
            <span>Share</span>
          </ButtonSmall>
        </div>
      </TellStoryWrapper>
    </SignupLayout>
  )
}
