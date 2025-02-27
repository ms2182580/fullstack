import React from "react"
import {
  AskQuestionWrapper,
  FaqsWrapper,
  FifthQueWrapper,
  FourthQueWrapper,
  LessWrapper,
  QueOneWrapper,
  SecOneWrapper,
  ThirdQueWrapper,
} from "./styles/faqs-wrapper"
import Search from "@/assets/icons/saved/Search.svg"
import ArrowTop from "@/assets/icons/saved/ArrowTop.svg"
import ArrowBottom from "@/assets/icons/saved/ArrowBottom.svg"

const faqs = () => {
  return (
    <>
      <FaqsWrapper>
        <div>
          <Search />
          <input type="text" placeholder="Search in Q&A..." />
        </div>
        <AskQuestionWrapper>
          <p>Common Questions and Answers</p>
          <button>Ask a Question</button>
        </AskQuestionWrapper>
        <QueOneWrapper>
          <div>
            <ArrowTop />
            <p>10 </p>
            <p>votes </p>
            <ArrowBottom />
          </div>

          <div>
            <div>
              <p>Q: </p>
              <p>Can I book an appointment with Mary Jane online?</p>
            </div>
            <div>
              <p>A: </p>
              <p>
                To make an appointment you can call the number listed or fill
                out the contact form and someone will reach out to get you
                scheduled. You do NOT need a referral to book an appointment
                with Mary Jane.
              </p>
            </div>
            <div>
              <p>
                By Leslie S.<span>January 2023</span>
              </p>
            </div>
          </div>
        </QueOneWrapper>
        <SecOneWrapper>
          <div>
            <ArrowTop />
            <p>9 </p>
            <p>votes </p>
            <ArrowBottom />
          </div>
          <div>
            <div>
              <p>Q: </p>
              <p>How can I schedule a consult call with Mary Jane?</p>
            </div>
            <div>
              <p>A: </p>
              <p>No Response yet. What’s your answer ?.</p>
            </div>
          </div>
        </SecOneWrapper>

        <ThirdQueWrapper>
          <div>
            <ArrowTop />
            <p>10 </p>
            <p>votes </p>
            <ArrowBottom />
          </div>

          <div>
            <div>
              <p>Q: </p>
              <p>Does Mary Jane offer weekend visits?</p>
            </div>
            <div>
              <p>A: </p>
              <p>
                To make an appointment you can call the number listed or fill
                out the contact form and someone will reach out to get you
                scheduled. You do NOT need a referral to book an appointment
                with Mary Jane.
              </p>
            </div>
            <div>
              <p>
                By Leslie S.<span>January 2023</span>
              </p>
            </div>
          </div>
        </ThirdQueWrapper>
        <FourthQueWrapper>
          <div>
            <ArrowTop />
            <p>10 </p>
            <p>votes </p>
            <ArrowBottom />
          </div>

          <div>
            <div>
              <p>Q: </p>
              <p>Is Mary Jane accepting new patients?</p>
            </div>
            <div>
              <p>A: </p>
              <p>
                Mary Jane generally accepts new patients. You can fill out the
                contact form or call to schedule an appointment.
              </p>
            </div>
            <div>
              <p>
                By Leslie S.<span>January 2023</span>
              </p>
            </div>
          </div>
        </FourthQueWrapper>
        <FifthQueWrapper>
          <div>
            <ArrowTop />
            <p>10 </p>
            <p>votes </p>
            <ArrowBottom />
          </div>

          <div>
            <div>
              <p>Q: </p>
              <p>Where is Mary Jane’s office located?</p>
            </div>
            <div>
              <p>A: </p>
              <p>
                Mary Jane’s office is located In NY. Brooklyn Speech Therapy 307
                President St Brooklyn, NY
              </p>
            </div>
            <div>
              <p>
                By Leslie S.<span>January 2023</span>
              </p>
            </div>
          </div>

        </FifthQueWrapper>
        <LessWrapper>
          <p>See Less</p>
        </LessWrapper>

      </FaqsWrapper>
    </>
  )
}

export default faqs
