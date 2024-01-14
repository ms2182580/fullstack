import {
  ORG_M_Detail_ScheduleModalCalenderSvg,
  ORG_M_Detail_ScheduleModalCrossSvg,
} from "@/assets/icons"
import { ORG_M_Detail_ScheduleModalWrapper } from "./styles/ORG_M_Detail_ScheduleModalWrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Image from "next/image"
import { ButtonSmall } from "@/components/ui/buttons/general"
import Link from "next/link"
type Props = {
  thirdpageDataORG: any
  handleCloseModal: () => void
}
export const ORG_M_Detail_ScheduleModal = ({
  thirdpageDataORG,
  handleCloseModal,
}: Props) => {
  return (
    <ORG_M_Detail_ScheduleModalWrapper>
      <div>
        <span onClick={handleCloseModal}>
          <ORG_M_Detail_ScheduleModalCrossSvg />
        </span>
        <P>Please sign up to confirm your appointment with:</P>
        <div>
          <Image
            src={thirdpageDataORG.card.leftPart.photo.src}
            // layout="responsive"
            objectFit="cover"
            width={84}
            height={84}
            alt={`Image of ${thirdpageDataORG.card.leftPart.title}`}
          />
          <P>
            {thirdpageDataORG.fullName.first} {thirdpageDataORG.fullName.last}
          </P>
        </div>
        <div>
          <ORG_M_Detail_ScheduleModalCalenderSvg />
          <div>
            <P>Thursday</P>
            <P>Jan 27, 2023</P>
            <P>11:00 am</P>
          </div>
        </div>
        <ButtonSmall>Sign Up</ButtonSmall>
        <div>
          <P>Already have an account</P>
          <Link href={"#"}>Log in</Link>
        </div>
      </div>
    </ORG_M_Detail_ScheduleModalWrapper>
  )
}
