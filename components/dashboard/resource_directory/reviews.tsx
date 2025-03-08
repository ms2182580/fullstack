import {
  BorderWrapper,
  MostRelevantWrapper,
  PositiveWrapper,
  ReviewMentionWrapper,
  ReviewWrappers,
  StarGorupWrapper,
  StarWrapper,
  ViewAllWrapper,
} from "./styles/review-wrapper"

import Write from "@/assets/icons/saved/Write.svg"
import Star from "@/assets/icons/saved/Star.svg"
import Ok from "@/assets/icons/saved/Ok.svg"
import Calender from "@/assets/icons/saved/Calender.svg"
import Smiley from "@/assets/icons/saved/Smiley.svg"
import Clock from "@/assets/icons/saved/Clock.svg"
import Hand from "@/assets/icons/saved/Hand.svg"
import Subtract from "@/assets/icons/saved/Subtract.svg"
import ChevronDown from "@/assets/icons/saved/ChevronDown.svg"
import { useState } from "react"
import Link from "next/link"
const reviews = () => {
  const [value, setValue] = useState("Most Relevant")
  return (
    <>
      <ReviewWrappers>
        <div>
          {/* 1 */}
          <div>
            <div>
              <p>Reviews</p>
            </div>
            <div>
              <button>
                {" "}
                <Write /> Write a review
              </button>
            </div>
          </div>
          {/* 2 */}
          <div>
            <p>
              Your trust is our top concern, so providers can’t pay to alter or
              remove reviews. We also don’t publish reviews that contain any
              private patient health information.
              <span> Learn more here. </span>
            </p>
          </div>
          {/* star wrapper */}
          <StarWrapper>
            <div>
              <span>5.0</span>
              <span>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <span>47 reviews</span>
            </div>

            <div>
              <div>
                <p>Overall rating</p>
                <div>
                  <span>5</span> <div></div>{" "}
                </div>
                <div>
                  <span>4</span> <div></div>{" "}
                </div>
                <div>
                  <span>3</span> <div></div>{" "}
                </div>
                <div>
                  <span>2</span> <div></div>{" "}
                </div>
                <div>
                  <span>1</span> <div></div>{" "}
                </div>
              </div>
              <div>
                <span>Scheduling</span>
                <span>5.0</span>
                <Calender />
              </div>
              <div>
                <span>Customer Service</span>
                <span>5.0</span>
                <Smiley />
              </div>
              <div>
                <span>Wait times</span>
                <span>5.0</span>
                <Clock />
              </div>
              <div>
                {" "}
                <span>Feedback</span>
                <span>5.0</span>
                <Hand />
              </div>
            </div>
          </StarWrapper>

          <ReviewMentionWrapper>
            <p>Reviews Mention</p>
            <div>
              <div>
                <span>
                  <Ok />
                </span>
                <p>Service quality</p>
              </div>
              <div>
                <span>
                  <Subtract />
                </span>
                <p>Wait times</p>
              </div>
              <div>
                <p>Negative Tag</p>
              </div>
              <div>
                <p>Negative Tag</p>
              </div>
            </div>
          </ReviewMentionWrapper>
          <PositiveWrapper>
            <div>
              <span>
                <Ok />
              </span>
              <p>Positive </p>
            </div>
            <div>
              <span>
                <Subtract />
              </span>
              <p>Negative </p>
            </div>
            <div>
              <p>Neutral </p>
            </div>
            <div>
              <p>Quality 1</p>
            </div>
          </PositiveWrapper>
          <BorderWrapper />
          <MostRelevantWrapper>
            <div>
              {value} <ChevronDown />
            </div>
          </MostRelevantWrapper>
          <StarGorupWrapper>
            <div>
              <div>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>“Kristie is kind, perceptive, and patient with my son.”</p>
                <div>
                  <p>
                    <span>-Ava J.</span><span>July 2022</span>
                  </p>
                  <p>Sourced from Yelp</p>
                </div>
              </div>
              {/* second card */}
              <div>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>“Kristie is kind, perceptive, and patient with my son.”</p>
                <div>
                  <p>
                    <span>-Ava J.</span><span>July 2022</span>
                  </p>
                  <p>Sourced from Yelp</p>
                </div>
              </div>
            </div>
            {/* second group */}
            <div>
              <div>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>“Kristie is kind, perceptive, and patient with my son.”</p>
                <div>
                  <p>
                    <span>-Ava J.</span><span>July 2022</span>
                  </p>
                  <p>Sourced from Yelp</p>
                </div>
              </div>
              {/* second parent */}
              <div>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>“Kristie is kind, perceptive, and patient with my son.”</p>
                <div>
                  <p>
                    <span>-Ava J.</span><span>July 2022</span>
                  </p>
                  <p>Sourced from Yelp</p>
                </div>
              </div>
            </div>
            {/* third group */}
            <div>
              <div>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>“Kristie is kind, perceptive, and patient with my son.”</p>
                <div>
                  <p>
                    <span>-Ava J.</span><span>July 2022</span>
                  </p>
                  <p>Sourced from Yelp</p>
                </div>
              </div>

              {/* second parent */}
              <div>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>“Kristie is kind, perceptive, and patient with my son.”</p>
                <div>
                  <p>
                    <span>-Ava J.</span><span>July 2022</span>
                  </p>
                  <p>Sourced from Yelp</p>
                </div>
              </div>
            </div>
          </StarGorupWrapper>
          <ViewAllWrapper>
            {" "}
            <Link href="#">View All</Link>
          </ViewAllWrapper>
        </div>
      </ReviewWrappers>
    </>
  )
}

export default reviews
// < SecOneWrapper >
//         <div>
//           <ArrowTop />
//           <p>9 </p>
//           <p>votes </p>
//           <ArrowBottom />
//         </div>
//         <div>
//           <div>
//             <p>Q: </p>
//             <p>How can I schedule a consult call with Mary Jane?</p>
//           </div>
//           <div>
//             <p>A: </p>
//             <p>No Response yet. What’s your answer ?.</p>
//           </div>
//         </div>
//       </ >

//       <ThirdQueWrapper>
//         <div>
//           <ArrowTop />
//           <p>3 </p>
//           <p>votes </p>
//           <ArrowBottom />
//         </div>

//         <div>
//           <div>
//             <p>Q: </p>
//             <p>Does Mary Jane offer weekend visits?</p>
//           </div>
//           <div>
//             <p>A: </p>
//             <p>
//               To make an appointment you can call the number listed or fill
//               out the contact form and someone will reach out to get you
//               scheduled. You do NOT need a referral to book an appointment
//               with Mary Jane.
//             </p>
//           </div>
//           <div>
//             <p>
//               By Leslie S.<span>January 2023</span>
//             </p>
//           </div>
//         </div>
//       </ThirdQueWrapper>
//       <FourthQueWrapper>
//         <div>
//           <ArrowTop />
//           <p>10 </p>
//           <p>votes </p>
//           <ArrowBottom />
//         </div>

//         <div>
//           <div>
//             <p>Q: </p>
//             <p>Is Mary Jane accepting new patients?</p>
//           </div>
//           <div>
//             <p>A: </p>
//             <p>
//               Mary Jane generally accepts new patients. You can fill out the
//               contact form or call to schedule an appointment.
//             </p>
//           </div>
//           <div>
//             <p>
//               By Leslie S.<span>January 2023</span>
//             </p>
//           </div>
//         </div>
//       </FourthQueWrapper>
//       <FifthQueWrapper>
//         <div>
//           <ArrowTop />
//           <p>5</p>
//           <p>votes </p>
//           <ArrowBottom />
//         </div>

//         <div>
//           <div>
//             <p>Q: </p>
//             <p>Where is Mary Jane’s office located?</p>
//           </div>
//           <div>
//             <p>A: </p>
//             <p>
//               Mary Jane’s office is located In NY. Brooklyn Speech Therapy 307
//               President St Brooklyn, NY
//             </p>
//           </div>
//           <div>
//             <p>
//               By Leslie S.<span>January 2023</span>
//             </p>
//           </div>
//         </div>

//       </FifthQueWrapper>