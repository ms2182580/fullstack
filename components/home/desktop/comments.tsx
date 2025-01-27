import Quotation from "@/assets/icons/master-home/master_home_quotation.svg"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { CommentsWrapper } from "./styles/comments-wrapper"

const Card = () => {
  return (
    <div>
      <div>
        <Quotation />
        <P>
          ...Oddy's online resource guide helped us find a replacement Speech
          therapist as soon as our daughter's SLP left the network.
        </P>
        <Quotation />
      </div>
      <div>
        <P semibold={true}>Jermaine S. DiCaprio</P>
        <P>Parent</P>
      </div>
    </div>
  )
}

export const Comments = () => {
  return (
    <CommentsWrapper>
      <div>
        <div>
          <div>
            <P primary_cta={true}>Stories from our families</P>
            <P>Hear from Oddy families.</P>
          </div>
          <div>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div>
          <ButtonSmall secondary>Read More</ButtonSmall>
        </div>
      </div>
    </CommentsWrapper>
  )
}
