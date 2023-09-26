import { Facebook2Svg, InstagramSvg, Linkedin2Svg, TwitterSvg } from "../../../assets/Icons/index.js"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2 } from "../../ui/heading_body_text/HeaderFonts.js"
import { Home_Survey_DWrapper } from "./styles/Home_Survey_DWrapper.js"

export const Home_Survey_D = () => {
  return (
    <Home_Survey_DWrapper>
      <div className="LEFT">
        <H2>Want to know more?</H2>
        <P>Send us a message with your questions.</P>

        <div>
          <P>Contact Information</P>
          <P>Phone: (518) 554-0530</P>
          <P>Email: Hello@Inclusive.group</P>
        </div>

        <div>
          <P>Follow us:</P>
          <div>
            <TwitterSvg tabIndex={0} />
            <Facebook2Svg tabIndex={0} />
            <InstagramSvg tabIndex={0} />
            <Linkedin2Svg tabIndex={0} />
          </div>
        </div>
      </div>

      <div className="RIGHT">
        <label for="firstAndLastName">First & Last Name</label>
        <input
          type="text"
          name="firstAndLastName"
          placeholder="Ex: John Stout"
          required
        />
        <label for="companyName">Company name (if applicable)</label>
        <input
          type="text"
          name="companyName"
          placeholder="NYS Department of Education"
        />
        <label for="email">Email Address (for replies)</label>
        <input
          type="email"
          name="email"
          placeholder="Hello@nyc.gov"
          required
        />
        <label for="zipCode">Zip Code</label>
        <input
          type="number"
          name="zipCode"
          required
        />
        <label for="additionalNote">Additional Note</label>
        <input
          type="text"
          name="additionalNote"
          placeholder="Ex: Additional information, assistance etc. (2,000 character max)"
          required
        />
        <input
          type="submit"
          value="Submit"
        />
      </div>
    </Home_Survey_DWrapper>
  )
}
