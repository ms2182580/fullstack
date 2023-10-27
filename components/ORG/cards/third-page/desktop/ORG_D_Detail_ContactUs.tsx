import { InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/SectionToRender"
import { useRouter } from "next/router.js"
import { useState } from "react"
import { SendMessageSvg } from "../../../../../assets/Icons/index.js"
import { capitalizeWords } from "../../../../../utils/capitalizeWords.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_ContactUsWrapper } from "./styles/ORG_D_Detail_ContactUsWrapper.js"

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

export const ORG_D_Detail_ContactUs = ({ defaultId = "contactus", arrayInnerNavBar }) => {
  console.log("arrayInnerNavBar:", arrayInnerNavBar)
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
    <ORG_D_Detail_ContactUsWrapper id={Boolean(arrayInnerNavBar) ? arrayInnerNavBar[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY] : defaultId}>
      <header>
        <H3> Contact Us</H3>
      </header>
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
        <H4>Additional Note</H4>
        <textarea
          value={textareaValueState}
          onChange={handleTextareaValueState}
          placeholder="Ex: Additional class assistance etc. (2,000 character max)"
        />
        <p>{`(${textareaValueState.length} of ${maxCharacterTextarea} used)`}</p>
      </div>

      <div>
        <button tabIndex={-1}>
          <SendMessageSvg />
          <p>Send Message</p>
        </button>
        <span
          onClick={handlePushTo404}
          onKeyDown={handlePushTo404}
          tabIndex={0}>
          Is this product a good fit?
        </span>
      </div>
    </ORG_D_Detail_ContactUsWrapper>
  )
}
