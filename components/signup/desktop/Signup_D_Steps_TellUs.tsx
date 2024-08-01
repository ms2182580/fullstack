import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { ShareSvg, Signup_PlusSvg, Signup_UserSvg } from "@/assets/icons"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Fragment } from "react"
import {
  Signup_D_Steps_TellUs_Input,
  Signup_D_Steps_TellUs_Input_Props,
} from "./Signup_D_Steps_TellUs_Cards"
import { Signup_D_Steps_TellUs_Dialog } from "./Signup_D_Steps_TellUs_Dialog"
import { Signup_D_Steps_TellUsWrapper } from "./styles/Signup_D_Steps_TellUsWrapper"

const leftCardPersonalityData: { left: string; right: string }[] = [
  {
    left: "Introvert",
    right: "Extrovert",
  },
  {
    left: "Creative",
    right: "Logical",
  },
  {
    left: "Sedentary",
    right: "Active",
  },
  {
    left: "Cautions",
    right: "Adventurous",
  },
  {
    left: "Calm",
    right: "Anxious",
  },
  {
    left: "Disorganized",
    right: "Organized",
  },
  {
    left: "Reserved",
    right: "Open book",
  },
]

export const Signup_D_Steps_TellUs_Input_Data: Signup_D_Steps_TellUs_Input_Props[] =
  [
    {
      titleText: "My Situation",
      placeholder: "I need help with . . .",
    },
    {
      titleText: "Care needs",
      placeholder: "My care needs are . . .",
    },
    {
      titleText: "Cultural considerations",
      placeholder: "In my culture, it is important . . . ",
    },
    {
      titleText: "Skills",
      placeholder: "I am skilled at . . .",
    },
    {
      titleText: "Likes and dislikes",
      placeholder: "I like . . .  I don’t like . . .",
    },
    {
      titleText: "Health and medications",
      placeholder: "I take _ and _ twice per day . . . ",
    },
    {
      titleText: "Aspirations",
      placeholder: "In the future I want to . . .",
    },
  ]

export const Signup_D_Steps_TellUs = () => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <Signup_D_Steps_TellUsWrapper
      checkModalIsOpen={checkModalIsOpen}
      data-testid={KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_TELL_US_YOUR_STORY}
    >
      <div>
        <header>
          <H3>Tell us what helps Kahlil thrive!</H3>
          <P>
            Please review each section. Write your answers for the person
            identified in the profile. To add to a section, you can <br />{" "}
            either type or record audio. Drag and drop boxes to reorganize.
          </P>
        </header>
        <button>
          <ShareSvg />
          Share
        </button>
      </div>

      <div data-testid="card-section">
        <article>
          <div>
            <div>
              <Signup_UserSvg />
              <span
                onClick={(e) => openDialog({ event: e })}
                onKeyDown={(e) => openDialog({ event: e })}
                tabIndex={0}
              >
                <Signup_PlusSvg />
              </span>

              <Dialog_D
                theRef={dialogRef}
                handleCloseDialog={(e) => closeDialog({ event: e })}
                refToCloseDialogClickingOutside={
                  refToCloseDialogClickingOutside
                }
                useHide={useHide}
              >
                <Signup_D_Steps_TellUs_Dialog />
              </Dialog_D>
            </div>

            <span>
              <span>Kahlil</span>
              <span>
                Location: <span>19130</span>
              </span>
              <span>
                Language: <span>English, Tagalog</span>
              </span>
              <span>
                I have: <span>ASD, ADHD</span>
              </span>
            </span>
          </div>

          <H4>Personality</H4>
          <div>
            {leftCardPersonalityData.map(({ left, right }) => {
              return (
                <div key={`${left}_${right}`}>
                  <span>
                    <span>{left}</span>
                    <span>{right}</span>
                  </span>
                  <input tabIndex={0} type="range" className="slider" />
                </div>
              )
            })}
          </div>
        </article>

        {Signup_D_Steps_TellUs_Input_Data.map(
          ({ titleText, placeholder }, index) => {
            return (
              <Fragment key={`${titleText}_${index}`}>
                <Signup_D_Steps_TellUs_Input
                  titleText={titleText}
                  placeholder={placeholder}
                />
              </Fragment>
            )
          }
        )}
      </div>
    </Signup_D_Steps_TellUsWrapper>
  )
}
