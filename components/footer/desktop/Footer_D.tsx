import { INDEX_Logo } from "@/components/logo/INDEX_Logo"
import { H1, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link.js"
import {
  Facebook3Svg,
  Instagram2Svg,
  LanguageIconSvg,
  LinkedinSvg,
  Twitter2Svg,
} from "../../../assets/icons/index"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { Footer_DWrapper } from "./styles/Footer_DWrapper"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { PRIMARY } from "@/assets/Colors"
import No_Messages from "../../../assets/images/home/no_messages.png"
import No_Email from "../../../assets/images/home/no-email.png"
import Image from "next/image"

export const Footer_D = () => {
  return (
    <Footer_DWrapper>
      {/* <header>
        <H4>Join today and get started with your free forever account!</H4>
        <Link href={`${ALL_ROUTES.SIGNUP}`}>Sign Up</Link>
      </header> */}
      
      {/* <div>
        <div>
          <div>
            <H1>Let's join forces. We're here to help.</H1>
            <H1>Ask Oddy. Search Oddy. Try Oddy</H1>
            <H1>Connect with Oddy</H1>
            <H1>
              Tweet / Follow/ Like / Share <span>Oddy</span>
            </H1>
          </div>
          <div>
            <P dark_gray={true}>
              Partner with us, invest in us or just let us help you.
            </P>
            <P dark_gray={true}>Were always happy to connect!</P>
          </div>
        </div>
        <div>
          <form>
            <div>
              <P>Name</P>
              <input
                type="text"
                name="name"
                placeholder="Ex: jsmith123@gmail.com"
                required
              />
            </div>
            <div>
              <P>Email</P>
              <input
                type="email"
                name="email"
                placeholder="Example@website.com"
                required
              />
            </div>
            <div>
              <P>Message</P>
              <textarea placeholder="placeholder" rows={9} />
            </div>

            <ButtonSmall>Send Message</ButtonSmall>
          </form>
          <div>
            <div>
              <H4>Office Address</H4>
              <P>New York, NY</P>
            </div>
            <div>
              <H4>Our Email</H4>
              <P>Hello@example.com</P>
            </div>
            <div>
              <H4>Social Media</H4>
              <ul>
                <li>
                  <Twitter2Svg color={PRIMARY.PRIMARY_CTA} />
                </li>

                <li>
                  <Facebook3Svg tabIndex={0} color={PRIMARY.PRIMARY_CTA} />
                </li>

                <li>
                  <Instagram2Svg tabIndex={0} color={PRIMARY.PRIMARY_CTA} />
                </li>

                <li>
                  <LinkedinSvg tabIndex={0} color={PRIMARY.PRIMARY_CTA} />
                </li>
              </ul>
            </div>
          </div>
          <Image
            src={No_Messages}
            alt="No message in email box."
            width={257}
            height={257}
          />
        </div>
      </div> */}

      <div>
        <div>
          <div>
            <INDEX_Logo />
            <P>BETA</P>
          </div>
          <Caption>
            The public benefit company connecting parents with the I/DD
            community.
          </Caption>
        </div>

        <div>
          <ul>
            {/* <h6>About us</h6> */}
            {/* <li>Inclusive’s story</li> */}
            {/* <li>Contact us</li> */}
            <h6>Find a resource</h6>
          </ul>
          <ul>
            {/* <h6>Tools</h6>
            <li>Oddy Resource Directory</li>
            <li>AI Chat</li>
            <li>Service Plan Generator</li>
            <li>Oddy Employ</li> */}
            <h6>Help a family</h6>
          </ul>
          <ul>
            <h6>Support us</h6>
            <li>Donate</li>
            {/* <li>Repeat contributions</li> */}
            <li>Give feedback</li>
            <ButtonSmall secondary>Sign up</ButtonSmall>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <Caption>© 2024 The INCLUSIVE Group, All rights reserved.</Caption>
          <ul>
            <li tabIndex={0}>
              <LanguageIconSvg /> <Caption>English (US)</Caption>
            </li>
            <li>
              <ul>
                <li>
                  <Twitter2Svg tabIndex={0} />
                </li>

                <li>
                  <Facebook3Svg tabIndex={0} />
                </li>

                <li>
                  <Instagram2Svg tabIndex={0} />
                </li>

                <li>
                  <LinkedinSvg tabIndex={0} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Footer_DWrapper>
  )
}
