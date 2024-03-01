import {
  Signup_ComingSoonDots,
  Signup_ComingSoonFileSvg,
  Signup_ComingSoonHeartSvg,
  Signup_D_UploadSvg,
  Signup_ProfileSvg,
} from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import Link from "next/link"
import { CreateProfileWrapper } from "./styles/CreateProfileWrapper"

let data = [
  {
    name: "Connect MyChart app",
    content: "Coming soon!",
    icon: Signup_ComingSoonFileSvg,
  },
  {
    name: "Connect Apple Health",
    content: "Coming soon!",
    icon: Signup_ComingSoonHeartSvg,
  },
  {
    name: "Connect a different application",
    content: "Coming soon!",
    icon: Signup_ComingSoonDots,
  },
]

export const CreateProfile = () => {
  return (
    <>
      <CreateProfileWrapper>
        <header>
          <H2>Connect your e-health records</H2>
          <P>
            Speed up profile creation by uploading your loved one’s health data.
            Don’t have data to add?
            <Link href="#">Build profile manually</Link>
          </P>
        </header>
        <div>
          <div>
            <article>
              <Signup_D_UploadSvg />
              <span>Import a file</span>
              <span>Supported file types: .pdf, .docx (15 MB Max)</span>
            </article>

            {data.map(({ icon: SVG, name, content }, index) => (
              <article key={name}>
                <div>
                  <SVG />
                  <span>{name}</span>
                </div>
                <P>{content}</P>
              </article>
            ))}
          </div>

          <article>
            <Signup_ProfileSvg />
            <P>
              Inclusive only works with non-identifying information apart from
              zip code.<Link href="#"> Learn more about HIPAA Compliance</Link>
            </P>
          </article>
        </div>
      </CreateProfileWrapper>
    </>
  )
}
