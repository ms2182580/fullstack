import { useState } from "react"
import { Facebook2Svg, InstagramSvg, Linkedin2Svg, TwitterSvg } from "../../../assets/icons2/index.js"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2 } from "../../ui/heading_body_text/HeaderFonts.js"
import { Home_Survey_DWrapper } from "./styles/Home_Survey_DWrapper.js"

let maxCharacterTextarea = 2000

export const Home_Survey_D = () => {
  const [inputZipCode, setInputZipCode] = useState("")

  let handleInputZipCode = (e) => {
    const theValue = e.target.value
    const regexToTest = /^[0-9\b]+$/ // Regular expression to match only numbers
    const regTested = regexToTest.test(theValue)

    if (theValue === "" || regTested) {
      setInputZipCode(theValue)
    }
  }

  const [textareaValueState, setTextareaValueState] = useState("")

  let handleTextareaValueState = (e) => {
    if (e.target.value.length <= maxCharacterTextarea) {
      setTextareaValueState(e.target.value)
    }
  }

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
        <fieldset>
          <label htmlFor="firstAndLastName">First & Last Name</label>
          <input
            type="text"
            name="firstAndLastName"
            placeholder="Ex: John Stout"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="companyName">Company name (if applicable)</label>
          <input
            type="text"
            name="companyName"
            placeholder="NYS Department of Education"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email Address (for replies)</label>
          <input
            type="email"
            name="email"
            placeholder="Hello@nyc.gov"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            inputMode="numeric"
            name="zipCode"
            value={inputZipCode}
            onChange={handleInputZipCode}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="additionalNote">Additional Note</label>
          <textarea
            type="text"
            name="additionalNote"
            placeholder="Ex: Additional information, assistance etc. (2,000 character max)"
            value={textareaValueState}
            onChange={handleTextareaValueState}
            required
          />
          <p>{`(${textareaValueState.length} of ${maxCharacterTextarea} used)`}</p>
        </fieldset>
        <input
          type="submit"
          value="Contact us now"
        />
      </div>
    </Home_Survey_DWrapper>
  )
}
