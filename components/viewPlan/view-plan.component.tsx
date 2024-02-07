import {
  Add_Icon_SVG,
  Divider_Line_SVG,
  DoubleAction_Icon_SVG,
  Help_Icon_SVG,
  Plus_Outline_Icon_SVG,
  ProfileIconSvg,
  VerifiedTicket2Svg,
} from "@/assets/icons"
import React from "react"
import { FirstStep } from "../carePlan/components/stepper-part/first-step.component"
import { Footer_Wrapper } from "../common/stepper/stepper.style"
import { BtnSmall } from "../ui/buttons/general/styles/ButtonStyled"
import {
  Action_Card,
  Item_Card,
  Profile_Card,
  Ride_Card,
  Support_Sec,
  Text_Card,
  ViewPlan_Wrapper,
} from "./view-plan.style"
import { Checkbox } from "../common/checkbox"

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
        <div className="ar_divider">
          {" "}
          <Divider_Line_SVG />
        </div>
        <div className="inner_content">
          <div className="sec_header">
            <div className="sec_title">Goals</div>
            <div>
              <DoubleAction_Icon_SVG />
            </div>
          </div>
          <div className="ride_sec">
            <Ride_Card>
              <div className="card_header">
                <div className="title">Ride a bike</div>
                <div className="des_wrapper">
                  <div className="desc">Timeline: length of time</div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="card_body">
                <div className="features">
                  <div>
                    <div className="ft_title">Desired outcome</div>
                    <div className="ft_desc">
                      Learn to ride a bike with training wheels.
                    </div>
                  </div>
                  <div>
                    <div className="ft_title">Support</div>
                    <div className="ft_desc">
                      Physical support, adapted bike with training wheels.
                    </div>
                  </div>
                </div>
                <div className="action_steps">
                  <div className="as_header">
                    <div className="as_title">Action steps</div>
                    <Plus_Outline_Icon_SVG />
                  </div>
                  <ul className="as_list">
                    <li className="as_item">
                      Gradually introduce the concept of pedaling and balance.{" "}
                    </li>
                    <li className="as_item">
                      Practice in a safe and open space with family support.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Ride_Card>
            <Ride_Card>
              <div className="card_header">
                <div className="title">Ride a bike</div>
                <div className="des_wrapper">
                  <div className="desc">Timeline: length of time</div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="card_body">
                <div className="features">
                  <div>
                    <div className="ft_title">Desired outcome</div>
                    <div className="ft_desc">
                      Learn to ride a bike with training wheels.
                    </div>
                  </div>
                  <div>
                    <div className="ft_title">Support</div>
                    <div className="ft_desc">
                      Physical support, adapted bike with training wheels.
                    </div>
                  </div>
                </div>
                <div className="action_steps">
                  <div className="as_header">
                    <div className="as_title">Action steps</div>
                    <Plus_Outline_Icon_SVG />
                  </div>
                  <ul className="as_list">
                    <li className="as_item">
                      Gradually introduce the concept of pedaling and balance.{" "}
                    </li>
                    <li className="as_item">
                      Practice in a safe and open space with family support.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Ride_Card>
            <Ride_Card>
              <div className="card_header">
                <div className="title">Ride a bike</div>
                <div className="des_wrapper">
                  <div className="desc">Timeline: length of time</div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="card_body">
                <div className="features">
                  <div>
                    <div className="ft_title">Desired outcome</div>
                    <div className="ft_desc">
                      Learn to ride a bike with training wheels.
                    </div>
                  </div>
                  <div>
                    <div className="ft_title">Support</div>
                    <div className="ft_desc">
                      Physical support, adapted bike with training wheels.
                    </div>
                  </div>
                </div>
                <div className="action_steps">
                  <div className="as_header">
                    <div className="as_title">Action steps</div>
                    <Plus_Outline_Icon_SVG />
                  </div>
                  <ul className="as_list">
                    <li className="as_item">
                      Gradually introduce the concept of pedaling and balance.{" "}
                    </li>
                    <li className="as_item">
                      Practice in a safe and open space with family support.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Ride_Card>
          </div>
        </div>
        <div className="ar_divider">
          {" "}
          <Divider_Line_SVG />
        </div>
        <div className="inner_content">
          <div className="sec_header">
            <div className="sec_title">Action plan</div>
            <div>
              <DoubleAction_Icon_SVG />
            </div>
          </div>
          <div className="ride_sec">
            <Action_Card>
              <div className="card_header">
                <div className="title">General</div>
                <div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="card_body">
                <div className="inner_card">
                  <Checkbox />
                  <div>
                    <div className="in_title">Action item</div>
                    <div className="in_desc">Write something...</div>
                  </div>
                </div>
                <div className="inner_card">
                  <Checkbox />
                  <div>
                    <div className="in_title">Action item</div>
                    <div className="in_desc">Write something...</div>
                  </div>
                </div>
              </div>
            </Action_Card>
            <Action_Card>
              <div className="card_header">
                <div className="title">General</div>
                <div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="card_body">
                <div className="inner_card">
                  <Checkbox />
                  <div>
                    <div className="in_title">Action item</div>
                    <div className="in_desc">Write something...</div>
                  </div>
                </div>
                <div className="inner_card">
                  <Checkbox />
                  <div>
                    <div className="in_title">Action item</div>
                    <div className="in_desc">Write something...</div>
                  </div>
                </div>
              </div>
            </Action_Card>
          </div>
        </div>
        <div className="ar_divider">
          {" "}
          <Divider_Line_SVG />
        </div>
        <div className="inner_content">
          <div className="sec_header">
            <div className="sec_title">Circle of Support</div>
            <div>
              <DoubleAction_Icon_SVG />
            </div>
          </div>
          <div className="ride_sec">
            <Support_Sec>
              <div className="card_header">
                <div className="title">Care team</div>
                <div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="card_body">
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                    <div className="header-label">
                      <div>
                        <VerifiedTicket2Svg />
                      </div>
                      <div className="label-text">Verified</div>
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                    <div className="header-label">
                      <div>
                        <VerifiedTicket2Svg />
                      </div>
                      <div className="label-text">Verified</div>
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                    <div className="header-label">
                      <div>
                        <VerifiedTicket2Svg />
                      </div>
                      <div className="label-text">Verified</div>
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
              </div>
            </Support_Sec>
            <Support_Sec>
              <div className="card_header">
                <div className="title">Legal resources</div>
                <div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="card_body">
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                    <div className="header-label">
                      <div>
                        <VerifiedTicket2Svg />
                      </div>
                      <div className="label-text">Verified</div>
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                    <div className="header-label">
                      <div>
                        <VerifiedTicket2Svg />
                      </div>
                      <div className="label-text">Verified</div>
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                    <div className="header-label">
                      <div>
                        <VerifiedTicket2Svg />
                      </div>
                      <div className="label-text">Verified</div>
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
              </div>
            </Support_Sec>
            <Support_Sec>
              <div className="card_header">
                <div className="title">Assistive technology</div>
                <div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="card_body">
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
                <Item_Card>
                  <div className="card-header">
                    <div>
                      <img src="/images/checker.png" alt="karate" />
                    </div>
                  </div>
                  <div className="item_card_body">
                    <div className="title">Listing Title</div>
                    <div className="desc">
                      <div>Listing type</div>
                      <div>Name of Work Place</div>
                      <div>Address</div>
                      <div>City, State</div>
                      <div>(000) 123-1234</div>
                    </div>
                  </div>
                </Item_Card>
              </div>
            </Support_Sec>
            <Support_Sec>
              <div className="card_header">
                <div className="title">Emergency contact</div>
                <div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="emr_card_body">
                <div>
                  <div className="bd_label">Name:</div>
                  <div className="bd_desc">Write something...</div>
                </div>
                <div>
                  <div className="bd_label">Relationship:</div>
                  <div className="bd_desc">Write something...</div>
                </div>
                <div>
                  <div className="bd_label">Contact:</div>
                  <div className="bd_desc">Write something...</div>
                </div>
              </div>
            </Support_Sec>
          </div>
        </div>
        <div className="ar_divider">
          {" "}
          <Divider_Line_SVG />
        </div>
        <div className="inner_content">
          <div className="sec_header">
            <div className="sec_title">Miscellaneous</div>
            <div>
              <DoubleAction_Icon_SVG />
            </div>
          </div>
          <div className="ride_sec">
            <Support_Sec>
              <div className="card_header">
                <div className="title">Chat explorations</div>
                <div>
                  <DoubleAction_Icon_SVG />
                </div>
              </div>
              <div className="meisc_body">
                <div className="meisc_color_card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="pdf_view">
                  <div className="file_name">PDFfilename.pdf</div>
                  <div className="pdf_content">
                    <div>
                      You don’t need to have a full time ecommerce business to
                      earn a little extra money through your website. You don’t
                      even need to be there all the time. All you need to do is
                      wait for the day your advertisers will pay you.
                    </div>
                    <div>
                      However, this is not as easy as it seems. You can’t expect
                      to just make a website and watch the money roll in. You
                      have to exert first the effort to make the site popular
                      and produce a huge traffic flow. Advertisers would only
                      post their banners and ads on sites where they know there
                      are many people who will see them. The more traffic and
                      visitors you have the likely the chance that advertisers
                      will want their ads on your site. You can also have
                      pay-per-click advertising in your site. As each visitor
                      clicks on an ad, the advertiser will pay you for those
                      redirects. Google’s Adsense and Yahoo’s Search marketing
                      are some of those that offer this performance based
                      marketing strategies.
                    </div>
                    <div>
                      They can provide a way to make money online by simply
                      placing ads on your site. These ads are also links to the
                      sites of the advertisers. The advertisers pay Google and
                      Yahoo for every clicks done to their ...
                    </div>
                  </div>
                </div>
                <div className="meisc_color_card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="meisc_simple_card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </Support_Sec>
          </div>
        </div>
      </div>
    </ViewPlan_Wrapper>
  )
}
