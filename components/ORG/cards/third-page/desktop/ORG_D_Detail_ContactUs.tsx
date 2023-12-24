import { InnerNavBar_InnerData } from "@/utils/org/third-page/InnerNavBar"
import { useRouter } from "next/router.js"
import { Fragment, useState } from "react"
import { SendMessageSvg } from "../../../../../assets/Icons/index.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_ContactUsWrapper } from "./styles/ORG_D_Detail_ContactUsWrapper.js"

let maxCharacterTextarea = 2000

const defaultSelectTags = ["Conversation", "Enunciation", "Swallowing", "Expressive Speech", "Receptive Speech", "AAC Device", "Other"]

export type SelectTags_Types = { title: string; data: string[] }

type Props = {
  defaultId: string
  arrayInnerNavBar: InnerNavBar_InnerData | null
  contactUsCustomProperties: SelectTags_Types | null
  idInnerbar: string
}

export const ORG_D_Detail_ContactUs = ({ defaultId = "contactus", arrayInnerNavBar = null, contactUsCustomProperties = null, idInnerbar = "#" }: Props) => {
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
    <ORG_D_Detail_ContactUsWrapper id={idInnerbar}>
      <header>
        <H3>Contact Us</H3>
      </header>
      <p>Ready to work together? Let’s connect. </p>
      <span>
        <div>
          <H4>First name</H4>
          <input
            type="text"
            placeholder="Ex: John"
          />
        </div>

        <div>
          <H4>Last name</H4>
          <input
            type="text"
            placeholder="Ex: Stout"
          />
        </div>
      </span>

      <span>
        <div>
          <H4>Diagnosis</H4>
          <input
            type="text"
            placeholder="Ex: ADHD, Spina Bifida"
          />
        </div>
        <div>
          <H4>
            Email Address <span>(for replies only)</span>
          </H4>
          <input
            type="text"
            placeholder="Ex: Message@sample.com"
          />
        </div>
      </span>

      {contactUsCustomProperties ? (
        <>
          <div>
            <header>
              <H3>{contactUsCustomProperties.title}</H3>
            </header>
            <ul>
              {contactUsCustomProperties.data.map((x, index) => {
                return (
                  <Fragment key={`${x}_${index}`}>
                    <li>{x}</li>
                  </Fragment>
                )
              })}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div>
            <header>
              <H3>I’m interested in improving</H3>
            </header>
            <ul>
              {defaultSelectTags.map((x, index) => {
                return (
                  <Fragment key={`${x}_${index}`}>
                    <li>{x}</li>
                  </Fragment>
                )
              })}
            </ul>
          </div>
        </>
      )}

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
