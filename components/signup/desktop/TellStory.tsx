import {
  Signup_FileSvg,
  Signup_MicSvg,
  Signup_PlusSvg,
  Signup_StartsSvg,
  Signup_UserSvg,
} from "@/assets/icons"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { InputWrapper, TellStoryWrapper } from "./styles/TellStoryWrapper"

export const TellStory = () => {
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
  return (
    <TellStoryWrapper>
      <div>
        <div>
          <H3>Tell us what helps Kahlil thrive!</H3>
          <span>
            Please review each section. Write your answers for the person
            identified in the profile. To add to a section, you can <br />{" "}
            either type or record audio. Drag and drop boxes to reorganize.
          </span>
        </div>
        <ButtonSmall secondary>
          <span>Share</span>
        </ButtonSmall>
      </div>
      <div>
        <div>
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
                  <input type="range" className="slider" />
                </span>
              )
            })}
          </span>
        </div>
        <div>
          <div>
            <Input text="My Situation" placeholder="I need help with . . . " />
          </div>
          <div>
            <Input text="Care needs" placeholder="My care needs are . . ." />
            <Input
              text="Cultural considerations"
              placeholder="In my culture, it is important . . . "
            />
            <Input text="Skills" placeholder="I am skilled at . . ." />
            <Input
              text="Likes and dislikes"
              placeholder="I like . . .  I don’t like . . ."
            />
            <Input
              text="Health and medications"
              placeholder="I take _ and _ twice per day . . . "
            />
            <Input
              text="Aspirations"
              placeholder="In the future I want to . . ."
            />
          </div>
        </div>
      </div>
    </TellStoryWrapper>
  )
}

const Input = (props) => {
  return (
    <InputWrapper>
      <label>{props.text}</label>
      <textarea placeholder={props.placeholder} rows={4} className="textarea" />

      <span>
        <Signup_MicSvg />
        <Signup_FileSvg />
        <Signup_StartsSvg />
      </span>
    </InputWrapper>
  )
}
