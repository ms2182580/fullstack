import {
  Dashboard_AIChatHistor,
  Dashboard_AIChatHistory_DeleteSvg,
  Dashboard_AIChatHistory_EditSvg,
} from "@/assets/icons"
import { AIChat_HistoryWrapper } from "./styles/AIChat_HistoryWrapper"
import { Fragment } from "react"

export const AIChat_History = () => {
  let data = [
    {
      month: "December",
      children: [
        {
          name: "Care plan versus IEP",
        },
        {
          name: "Janices Care Plan",
        },
      ],
    },
    {
      month: "October",
      children: [
        {
          name: "Care plan versus IEP",
        },
      ],
    },
    {
      month: "July",
      children: [
        {
          name: "What is a speech therapist?",
        },
        {
          name: "Tell me about the different insurance providers in my state",
        },
      ],
    },
  ]
  return (
    <AIChat_HistoryWrapper>
      <div>
        <input type="text" placeholder="Search chat history" />
        <Dashboard_AIChatHistor />
      </div>
      <div>
        {data.map((item) => {
          return (
            <Fragment>
              <span>{item.month}</span>
              {item.children.map((child) => {
                return (
                  <div>
                    <span>{child.name}</span>
                    <section>
                      <Dashboard_AIChatHistory_EditSvg />
                      <Dashboard_AIChatHistory_DeleteSvg />
                    </section>
                  </div>
                )
              })}
            </Fragment>
          )
        })}
      </div>
    </AIChat_HistoryWrapper>
  )
}
