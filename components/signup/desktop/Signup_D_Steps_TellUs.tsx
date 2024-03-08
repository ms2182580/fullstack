import {
  ShareSvg,
  Signup_FileSvg,
  Signup_MicSvg,
  Signup_PlusSvg,
  Signup_StartsSvg,
  Signup_UserSvg,
} from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import {
  Signup_D_Steps_TellUsWrapper,
  TellUs_CardsWrapper,
} from "./styles/Signup_D_Steps_TellUsWrapper"

let data = [
  {
    first: "Introvert",
    second: "Extrovert",
  },
  {
    first: "Creative",
    second: "Logical",
  },
  {
    first: "Sedentary",
    second: "Active",
  },
  {
    first: "Cautions",
    second: "Adventurous",
  },
  {
    first: "Calm",
    second: "Anxious",
  },
  {
    first: "Disorganized",
    second: "Organized",
  },
  {
    first: "Reserved",
    second: "Open book",
  },
]

export const Signup_D_Steps_TellUs = () => {
  return (
    <Signup_D_Steps_TellUsWrapper>
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

      <div>
        <article>
          <div>
            <span>
              <Signup_UserSvg />
              <span>
                <Signup_PlusSvg />
              </span>
            </span>
            <span>
              <span>Kahlil</span>
              <span>
                Location: <span>19130</span>
              </span>
              <span>
                Language:<span>English, Tagalog</span>
              </span>
              <span>
                I have: <span>ASD, ADHD</span>
              </span>
            </span>
          </div>

          <H4>Personality</H4>
          <span>
            {data.map((item) => {
              return (
                <span>
                  <span>
                    <span>{item.first}</span>
                    <span>{item.second}</span>
                  </span>
                  <input tabIndex={0} type="range" className="slider" />
                </span>
              )
            })}
          </span>
        </article>

        <TellUs_Cards
          text="My Situation"
          placeholder="I need help with . . . "
        />

        <TellUs_Cards text="Care needs" placeholder="My care needs are . . ." />
        <TellUs_Cards
          text="Cultural considerations"
          placeholder="In my culture, it is important . . . "
        />
        <TellUs_Cards text="Skills" placeholder="I am skilled at . . ." />
        <TellUs_Cards
          text="Likes and dislikes"
          placeholder="I like . . .  I don’t like . . ."
        />
        <TellUs_Cards
          text="Health and medications"
          placeholder="I take _ and _ twice per day . . . "
        />
        <TellUs_Cards
          text="Aspirations"
          placeholder="In the future I want to . . ."
        />
      </div>
    </Signup_D_Steps_TellUsWrapper>
  )
}

const TellUs_Cards = (props) => {
  return (
    <TellUs_CardsWrapper>
      <P>{props.text}</P>
      <div>
        <textarea placeholder={props.placeholder} />
        <ul>
          <li>
            <Signup_MicSvg />
          </li>
          <li>
            <Signup_FileSvg />
          </li>
          <li>
            <Signup_StartsSvg />
          </li>
        </ul>
      </div>
    </TellUs_CardsWrapper>
  )
}
