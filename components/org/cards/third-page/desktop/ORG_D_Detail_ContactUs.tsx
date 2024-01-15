import Send_Message_UsableSvg from "@/assets/icons/send_message.svg"
import {
  ArraySection_KEYS,
  InnerNavBar_InnerData,
} from "@/utils/org/third-page/InnerNavBar"
import { useRouter } from "next/router.js"
import { Fragment, useState } from "react"
import { SendMessageSvg } from "../../../../../assets/icons/index.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_ContactUsWrapper } from "./styles/ORG_D_Detail_ContactUsWrapper"

let maxCharacterTextarea = 2000

const defaultSelectTags = [
  "Conversation",
  "Enunciation",
  "Swallowing",
  "Expressive Speech",
  "Receptive Speech",
  "AAC Device",
  "Other",
]

export const enum ContactUsCustomProperties_KEY {
  ContactUsCustomProperties_KEY = "ContactUsCustomProperties_KEY",
  TITLE = "TITLE",
  DATA = "DATA",
}

export type SelectTags_Types = {
  [ContactUsCustomProperties_KEY.TITLE]: string
  [ContactUsCustomProperties_KEY.DATA]: string[]
}

export const enum SEND_MESSAGE_BUTTON {
  IS_USABLE = "IS_USABLE",
}

export const enum TEXT_BESIDE_BUTTON {
  KEY = "KEY",
  IS_LIKE_BUTTON = "IS_LIKE_BUTTON",
}

type Props = {
  [ArraySection_KEYS.ALL_DATA]: {
    theIdForComponent: string
    arrayInnerNavBar: InnerNavBar_InnerData | null
    [ContactUsCustomProperties_KEY.ContactUsCustomProperties_KEY]:
      | SelectTags_Types
      | null
      | "no_display_UI"
    idInnerbar: string
    [TEXT_BESIDE_BUTTON.KEY]: string | null
    [TEXT_BESIDE_BUTTON.IS_LIKE_BUTTON]: boolean
    [SEND_MESSAGE_BUTTON.IS_USABLE]: boolean
  }
}

export const ORG_D_Detail_ContactUs = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}: Props) => {
  const {
    theIdForComponent = "#",
    [ContactUsCustomProperties_KEY.ContactUsCustomProperties_KEY]:
      customContactUs = null,
    [TEXT_BESIDE_BUTTON.KEY]: textBesideButton = null,
    [TEXT_BESIDE_BUTTON.IS_LIKE_BUTTON]: textBesideButton_isLikeButton = false,
    [SEND_MESSAGE_BUTTON.IS_USABLE]: sendMessageButton = false,
  } = allProps || {}

  const [textareaValueState, setTextareaValueState] = useState("")

  let handleTextareaValueState = (e: any) => {
    if (e.target.value.length <= maxCharacterTextarea) {
      setTextareaValueState(e.target.value)
    }
  }

  const { push } = useRouter()
  let handlePushTo404 = (e: any) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      push("/404")
    }
  }

  return (
    <ORG_D_Detail_ContactUsWrapper
      id={theIdForComponent}
      contactUsCustomValue={customContactUs === "no_display_UI"}
      textBesideButton_isLikeButton={textBesideButton_isLikeButton}
      sendMessageButton={sendMessageButton}
    >
      <header>
        <H3>Contact Us</H3>
      </header>

      <p>Ready to work together? Let’s connect. </p>

      <span>
        <div>
          <H4>First name</H4>
          <input type="text" placeholder="Ex: John" />
        </div>

        <div>
          <H4>Last name</H4>
          <input type="text" placeholder="Ex: Stout" />
        </div>
      </span>

      <span>
        <div>
          <H4>Diagnosis</H4>
          <input type="text" placeholder="Ex: ADHD, Spina Bifida" />
        </div>
        <div>
          <H4>
            Email Address <span>(for replies only)</span>
          </H4>
          <input type="text" placeholder="Ex: Message@sample.com" />
        </div>
      </span>

      {typeof customContactUs === "object" && customContactUs !== null ? (
        <>
          <div>
            <header>
              <H3>{customContactUs?.[ContactUsCustomProperties_KEY.TITLE]}</H3>
            </header>
            <ul>
              {customContactUs?.[ContactUsCustomProperties_KEY.DATA].map(
                (x, index) => {
                  return (
                    <Fragment key={`${x}_${index}`}>
                      <li tabIndex={0}>{x}</li>
                    </Fragment>
                  )
                }
              )}
            </ul>
          </div>
        </>
      ) : !customContactUs ? (
        <>
          <div>
            <header>
              <H3>I’m interested in improving</H3>
            </header>
            <ul>
              {defaultSelectTags.map((x, index) => {
                return (
                  <Fragment key={`${x}_${index}`}>
                    <li tabIndex={0}>{x}</li>
                  </Fragment>
                )
              })}
            </ul>
          </div>
        </>
      ) : (
        customContactUs === "no_display_UI" && <div></div>
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
        <button tabIndex={sendMessageButton ? 0 : -1}>
          {sendMessageButton ? <Send_Message_UsableSvg /> : <SendMessageSvg />}

          <p>Send Message</p>
        </button>
        <span
          // onClick={handlePushTo404}
          // onKeyDown={handlePushTo404}
          tabIndex={0}
        >
          {textBesideButton ? textBesideButton : "Is this product a good fit?"}
        </span>
      </div>
    </ORG_D_Detail_ContactUsWrapper>
  )
}
