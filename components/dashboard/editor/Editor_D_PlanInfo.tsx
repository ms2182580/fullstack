import {
  Dashboard_AIChat_InfoSvg,
  Dashboard_AiChat_UserSvg,
} from "@/assets/icons"
import { Editor_D_PlanInfoWrapper } from "./styles/Editor_D_PlanInfoWrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"

export const Editor_D_PlanInfo = () => {
  let data = [
    {
      name: "My needs",
      content:
        "Kahlil's unique needs, shaped by ADHD and ASD, require a structured routine and tailored support. Our plan aims to provide a positive environment, addressing attention and sensory considerations.",
    },
    {
      name: "Aspirations",
      content:
        "I really, really wanna be a superhero firefighter when I grow up! You know, with a big truck and a super cool hat. ",
    },
    {
      name: "Cultural considerations",
      content:
        "Embracing Kahlil's Filipino background, daily activities incorporate that is inclusive of his family and cultural elements, fostering a sense of community and belonging.",
    },
    {
      name: "Interest and skills",
      content:
        "Family involvement in nurturing shared interests, including firefighting-related activities, contributes to Kahlil's development.",
    },
    {
      name: "Likes and dislikes",
      content:
        "Tailored activities aligning with Kahlil's firefighting interest will be explored, ensuring a sensory-friendly environment while respecting family preferences.",
    },
    {
      name: "Care and medications",
      content:
        "Kahlil receives compassionate care with daily [ADHD medication], supporting his unique needs. Regular check-ups ensure adjustments for his well-being.",
    },
  ]
  return (
    <Editor_D_PlanInfoWrapper>
      <div>
        <div>
          <div>
            <span>
              <Dashboard_AiChat_UserSvg />
            </span>
            <div>
              <span>John</span>
              <span>
                Location: <span>75001</span>
              </span>
              <span>
                Language: <span>English, Tagalog</span>
              </span>
              <span>
                I have: <span>ASD, ADHD</span>
              </span>
            </div>
          </div>
          <div>
            <div>
              <span>My story</span>
              <Dashboard_AIChat_InfoSvg />
            </div>
            <P>
              Kahlil, born on [Date of Birth], embraces life in a loving home
              with his mother and two sisters. Diagnosed with ASD and ADHD, his
              journey is shaped by resilience, curiosity, and the unwavering
              support of his family.
            </P>
          </div>
        </div>
        <div>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <span>{item.name}</span>
                  <Dashboard_AIChat_InfoSvg />
                </div>
                <P>{item.content}</P>
              </div>
            )
          })}
        </div>
      </div>
    </Editor_D_PlanInfoWrapper>
  )
}
