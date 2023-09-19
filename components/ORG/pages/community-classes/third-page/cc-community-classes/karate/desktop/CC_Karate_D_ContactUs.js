import { useRouter } from "next/router.js"
import { Fragment, useState } from "react"
import { SendMessageSvg } from "../../../../../../../../assets/Icons/index.js"
import { capitalizeWords } from "../../../../../../../../utils/capitalizeWords.js"
import { ButtonSmall } from "../../../../../../../ui/buttons/general/index.js"
import { H4 } from "../../../../../../../ui/heading_body_text/HeaderFonts.js"
import { CC_Karate_D_ContactUsWrapper } from "./styles/CC_Karate_D_ContactUsWrapper.js"

const arrTags = [
  "coordination",
  "strength",
  "endurance",
  "Weigh Management",
  "flexibility",
  "improved posture",
  "socialization",
  "independence",
  "self steem",
  "behavioral improvemet",
  "verbal skills",
  "other",
].map((x) => capitalizeWords(x))

let maxCharacterTextarea = 2000

export const CC_Karate_D_ContactUs = () => {
  const [textareaValueState, setTextareaValueState] = useState("")

  let handleTextareaValueState = (e) => {
    if (e.target.value.length <= maxCharacterTextarea) {
      setTextareaValueState(e.target.value)
    }
  }

  const { push } = useRouter()
  let handlePushTo404 = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      push("/404")
    }
  }

  return (
    <CC_Karate_D_ContactUsWrapper>
      <H4 semibold> Contact Us</H4>
      <p>Ready to work together? Let’s connect. </p>
      <div>
        <div>
          <p>First name</p>
          <input
            type="text"
            placeholder="Ex: John"
          />
        </div>

        <div>
          <p>Last name</p>
          <input
            type="text"
            placeholder="Ex: Stout"
          />
        </div>
      </div>

      <div>
        <div>
          <p>Diagnosis</p>
          <input
            type="text"
            placeholder="Ex: ADHD, Spina Bifida"
          />
        </div>
        <div>
          <p>
            Email Address <span>(for replies only)</span>
          </p>
          <input
            type="text"
            placeholder="Ex: Message@sample.com"
          />
        </div>
      </div>

      <div>
        <p>I’m interested in improving</p>
        <div>
          {arrTags.map((xElement, index) => (
            <Fragment key={`${xElement}_${index}`}>
              <div>{xElement}</div>
            </Fragment>
          ))}
        </div>
      </div>

      <div>
        <p>Additional Note</p>
        <textarea
          value={textareaValueState}
          onChange={handleTextareaValueState}
          placeholder="Ex: Additional class assistance etc. (2,000 character max)"
        />
        <p>{`(${textareaValueState.length} of ${maxCharacterTextarea} used)`}</p>
      </div>

      <div>
        <button tabIndex={-1}>
          <p>Send Message</p> <SendMessageSvg />
        </button>
        <span onClick={handlePushTo404}
          onKeyDown={handlePushTo404}
          tabIndex={0}>
          <ButtonSmall>Find out if we’re a good fit for you</ButtonSmall>
        </span>
      </div>
    </CC_Karate_D_ContactUsWrapper>
  )
}
