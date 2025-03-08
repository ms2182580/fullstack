import React from "react";
import questions from "./faqsQuestion"; // Importing questions
import {
  AskQuestionWrapper,
  FaqsWrapper,
  LessWrapper,
  QueOneWrapper
} from "./styles/faqs-wrapper";
import Search from "@/assets/icons/saved/Search.svg";
import ArrowTop from "@/assets/icons/saved/ArrowTop.svg";
import ArrowBottom from "@/assets/icons/saved/ArrowBottom.svg";

const Faqs: React.FC = () => {
  return (
    <FaqsWrapper>
      <div>
        <Search />
        <input type="text" placeholder="Search in Q&A..." />
      </div>

      <AskQuestionWrapper>
        <p>Common Questions and Answers</p>
        <button>Ask a Question</button>
      </AskQuestionWrapper>

      {questions.map((value) => (
        <QueOneWrapper key={value.number}>
          <div>
            <ArrowTop />
            <p>{value.number} </p>
            <p>votes</p>
            <ArrowBottom />
          </div>

          <div>
            <div>
              <p>Q: </p>
              <p>{value.question}</p>
            </div>
            <div>
              <p>A: </p>
              <p>{value.answer}</p>
            </div>
            <div>
              <p>
                {value.name} <span>{value.date}</span>
              </p>
            </div>
          </div>
        </QueOneWrapper>
      ))}

      <LessWrapper>
        <p>See Less</p>
      </LessWrapper>
    </FaqsWrapper>
  );
};

export default Faqs;
