import React from "react"
import { First_Step_Wrapper } from "./first-step.style"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { BtnSmall } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { Action_Icon_SVG, GreaterThan_Icon_SVG } from "@/assets/icons"
import Link from "next/link"

export const FirstStep = () => {
  return (
    <First_Step_Wrapper>
      <div className="step_header">
        <div>
          <div className="step_header_title">Create care plan</div>
          <div className="step_header_subtitle">Services </div>
        </div>
        <BtnSmall secondary id="chat">
          Ask
        </BtnSmall>
      </div>
      <div className="step_body">
        <div className="step_description">
          Here are the services that best fit your needs:{" "}
        </div>
        <div className="body_content">
          <div className="step_card">
            <div className="card_content">
              <div className="card_img">
                <img src="/images/child.png" alt="stem" />
              </div>
              <div className="card_text">
                <div>
                  <div className="card_title">STEM Camp</div>
                  <div className="card_subtitle">Day Camp</div>
                </div>
                <div className="card_des">Dallas, TX 75001</div>
              </div>
            </div>
            <div className="card_action">
              <Action_Icon_SVG />
            </div>
          </div>
          <div className="step_card">
            <div className="card_content">
              <div className="card_img">
                <img src="/images/wheelchair.png" alt="wheelchair" />
              </div>
              <div className="card_text">
                <div>
                  <div className="card_title">Rehasense ICON 60</div>
                  <div className="card_subtitle">Active Rigid Wheelchair</div>
                </div>
                <div className="card_des">Online</div>
              </div>
            </div>
            <div className="card_action">
              <Action_Icon_SVG />
            </div>
          </div>
          <div className="end_link">
            <Link href={""}>
              Search the directory instead <GreaterThan_Icon_SVG />
            </Link>
          </div>
        </div>
      </div>
    </First_Step_Wrapper>
  )
}
