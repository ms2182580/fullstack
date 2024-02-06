import React from "react"
import { Profile_Card, Text_Card, ViewPlan_Wrapper } from "./view-plan.style"
import Stepper from "../common/stepper/steper"
import { FirstStep } from "../carePlan/components/stepper-part/first-step.component"
import { Add_Icon_SVG, Help_Icon_SVG, ProfileIconSvg } from "@/assets/icons"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { BtnSmall } from "../ui/buttons/general/styles/ButtonStyled"
import { Footer_Wrapper } from "../common/stepper/stepper.style"

interface Step {
  title: string
  content: React.ReactNode
}

const steps: Step[] = [
  { title: "Step 1", content: <FirstStep /> },
  { title: "Step 2", content: <FirstStep /> },
  { title: "Step 3", content: <FirstStep /> },
]
export const ViewPlan = () => {
  return (
    <ViewPlan_Wrapper>
      <div className="chat_card">
        <div className="card_header">
          <div>
            <div className="card_header_title">Create care plan</div>
            <div className="card_header_subtitle">Success! </div>
          </div>
          <BtnSmall secondary>Ask</BtnSmall>
        </div>
        <div className="card_body">
          <div className="body_heading">Your plan has been created!</div>
          <div className="body_des">
            Try out our chat tool to ask questions about ID/D Life, or add
            additional context to your plan.
          </div>
          <div>
            <img src="/images/undraw_winners.png" alt="undraw_winners" />
          </div>
        </div>
        <div className="card_footer">
          <BtnSmall width="100%">Open chat</BtnSmall>
          <Footer_Wrapper>
            <div>Close</div>
          </Footer_Wrapper>
        </div>
      </div>

      <div className="content_tabs">
        <div className="inner_content">
          <div className="profile">
            <Profile_Card>
              <div className="inner_card">
                <div className="img_sec">
                  <ProfileIconSvg />
                  <div className="add_icon">
                    <Add_Icon_SVG />
                  </div>
                </div>
                <div className="text_sec">
                  <div className="title">Kahlil</div>
                  <div className="inner_wrapper">
                    <div className="sec_row">
                      <div className="first_col">Location:</div>
                      <div className="second_col">19130</div>
                    </div>
                    <div className="sec_row">
                      <div className="first_col">Language:</div>
                      <div className="second_col">English, Tagalog</div>
                    </div>
                    <div className="sec_row">
                      <div className="first_col">I have:</div>
                      <div className="second_col">ASD, ADHD</div>
                    </div>
                  </div>
                </div>
              </div>
            </Profile_Card>
            <Text_Card height="201px">
              <div className="tex_card_header">
                <div className="title">My story</div>
                <Help_Icon_SVG />
              </div>
              <div className="desc">
                <p>
                  Kahlil, born on [Date of Birth], embraces life in a loving
                  home with his mother and two sisters. Diagnosed with ASD and
                  ADHD, his journey is shaped by resilience, curiosity, and the
                  unwavering support of his family.
                </p>
              </div>
            </Text_Card>
          </div>
          <div className="card_container">
            <Text_Card>
              <div className="tex_card_header">
                <div className="title">My needs</div>
                <Help_Icon_SVG />
              </div>
              <div className="desc">
                <p>
                  Kahlil's unique needs, shaped by ADHD and ASD, require a
                  structured routine and tailored support. Our plan aims to
                  provide a positive environment, addressing attention and
                  sensory considerations.
                </p>
              </div>
            </Text_Card>
            <Text_Card>
              <div className="tex_card_header">
                <div className="title">Aspirations</div>
                <Help_Icon_SVG />
              </div>
              <div className="desc">
                <p>
                  “I really, really, wanna be a superhero firefighter when I
                  grow up! You know, with a big truck and a super cool hat.“
                </p>
              </div>
            </Text_Card>
            <Text_Card>
              <div className="tex_card_header">
                <div className="title">Cultural considerations</div>
                <Help_Icon_SVG />
              </div>
              <div className="desc">
                <p>
                  Embracing Kahlil's Filipino background, daily activities
                  incorporate that is inclusive of his family and cultural
                  elements, fostering a sense of community and belonging.
                </p>
              </div>
            </Text_Card>
          </div>
          <div className="card_container">
            <Text_Card>
              <div className="tex_card_header">
                <div className="title">Interests and skills</div>
                <Help_Icon_SVG />
              </div>
              <div className="desc">
                <p>
                  Family involvement in nurturing shared interests, including
                  firefighting-related activities, contributes to Kahlil's
                  development.
                </p>
              </div>
            </Text_Card>
            <Text_Card>
              <div className="tex_card_header">
                <div className="title">Likes and dislikes</div>
                <Help_Icon_SVG />
              </div>
              <div className="desc">
                <p>
                  Tailored activities aligning with Kahlil's firefighting
                  interest will be explored, ensuring a sensory-friendly
                  environment while respecting family preferences.
                </p>
              </div>
            </Text_Card>
            <Text_Card>
              <div className="tex_card_header">
                <div className="title">Care and medications</div>
                <Help_Icon_SVG />
              </div>
              <div className="desc">
                <p>
                  Kahlil receives compassionate care with daily [ADHD
                  medication], supporting his unique needs. Regular check-ups
                  ensure adjustments for his well-being.
                </p>
              </div>
            </Text_Card>
          </div>
        </div>
      </div>
    </ViewPlan_Wrapper>
  )
}
