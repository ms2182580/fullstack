import CheckedCircle from "@/assets/icons/master-home/CheckedCircle.svg"
import GrayCircle from "@/assets/icons/master-home/GrayCircle.svg"
import { ButtonMedium } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import step1_icon from "../../../assets/icons/master-home/master_home_flash.svg"
import Step1 from "../../../assets/images/masterHome/MasterHome_Step1.png"
import Step2 from "../../../assets/images/masterHome/MasterHome_Step2.png"
import Step3 from "../../../assets/images/masterHome/MasterHome_Step3.png"
import { StepsWrapper } from "./styles/steps-wrapper"

const Card = ({
  title,
  step_number,
  caption_title,
  description,
  icon,
  cta_text,
  button_text,
}: any) => {
  return (
    <div>
      <P>{step_number}</P>
      <div>
        <P>{caption_title}</P>
        <P>{title}</P>
        <P>{description}</P>
        <ButtonMedium>
          {button_text}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99973 6C4.99973 5.80109 5.07875 5.61032 5.2194 5.46967C5.36006 5.32902 5.55082 5.25 5.74973 5.25H7.24973V3.75C7.24973 3.55109 7.32875 3.36032 7.4694 3.21967C7.61006 3.07902 7.80082 3 7.99973 3C8.19865 3 8.38941 3.07902 8.53006 3.21967C8.67072 3.36032 8.74973 3.55109 8.74973 3.75V5.25H10.2497C10.4486 5.25 10.6394 5.32902 10.7801 5.46967C10.9207 5.61032 10.9997 5.80109 10.9997 6C10.9997 6.19891 10.9207 6.38968 10.7801 6.53033C10.6394 6.67098 10.4486 6.75 10.2497 6.75H8.74973V8.25C8.74973 8.44891 8.67072 8.63968 8.53006 8.78033C8.38941 8.92098 8.19865 9 7.99973 9C7.80082 9 7.61006 8.92098 7.4694 8.78033C7.32875 8.63968 7.24973 8.44891 7.24973 8.25V6.75H5.74973C5.55082 6.75 5.36006 6.67098 5.2194 6.53033C5.07875 6.38968 4.99973 6.19891 4.99973 6ZM17.7497 18H16.9997V17.25C16.9997 17.0511 16.9207 16.8603 16.7801 16.7197C16.6394 16.579 16.4486 16.5 16.2497 16.5C16.0508 16.5 15.8601 16.579 15.7194 16.7197C15.5788 16.8603 15.4997 17.0511 15.4997 17.25V18H14.7497C14.5508 18 14.3601 18.079 14.2194 18.2197C14.0788 18.3603 13.9997 18.5511 13.9997 18.75C13.9997 18.9489 14.0788 19.1397 14.2194 19.2803C14.3601 19.421 14.5508 19.5 14.7497 19.5H15.4997V20.25C15.4997 20.4489 15.5788 20.6397 15.7194 20.7803C15.8601 20.921 16.0508 21 16.2497 21C16.4486 21 16.6394 20.921 16.7801 20.7803C16.9207 20.6397 16.9997 20.4489 16.9997 20.25V19.5H17.7497C17.9486 19.5 18.1394 19.421 18.2801 19.2803C18.4207 19.1397 18.4997 18.9489 18.4997 18.75C18.4997 18.5511 18.4207 18.3603 18.2801 18.2197C18.1394 18.079 17.9486 18 17.7497 18ZM22.9997 13.5H21.4997V12C21.4997 11.8011 21.4207 11.6103 21.2801 11.4697C21.1394 11.329 20.9486 11.25 20.7497 11.25C20.5508 11.25 20.3601 11.329 20.2194 11.4697C20.0788 11.6103 19.9997 11.8011 19.9997 12V13.5H18.4997C18.3008 13.5 18.1101 13.579 17.9694 13.7197C17.8288 13.8603 17.7497 14.0511 17.7497 14.25C17.7497 14.4489 17.8288 14.6397 17.9694 14.7803C18.1101 14.921 18.3008 15 18.4997 15H19.9997V16.5C19.9997 16.6989 20.0788 16.8897 20.2194 17.0303C20.3601 17.171 20.5508 17.25 20.7497 17.25C20.9486 17.25 21.1394 17.171 21.2801 17.0303C21.4207 16.8897 21.4997 16.6989 21.4997 16.5V15H22.9997C23.1986 15 23.3894 14.921 23.5301 14.7803C23.6707 14.6397 23.7497 14.4489 23.7497 14.25C23.7497 14.0511 23.6707 13.8603 23.5301 13.7197C23.3894 13.579 23.1986 13.5 22.9997 13.5ZM21.06 7.5L7.99973 20.5603C7.71846 20.8414 7.33708 20.9993 6.93942 20.9993C6.54177 20.9993 6.16039 20.8414 5.87911 20.5603L3.93848 18.6216C3.79916 18.4823 3.68864 18.3169 3.61324 18.1349C3.53783 17.9529 3.49902 17.7578 3.49902 17.5608C3.49902 17.3638 3.53783 17.1687 3.61324 16.9867C3.68864 16.8047 3.79916 16.6393 3.93848 16.5L16.9997 3.43969C17.139 3.30036 17.3044 3.18984 17.4864 3.11444C17.6684 3.03904 17.8635 3.00023 18.0605 3.00023C18.2575 3.00023 18.4526 3.03904 18.6346 3.11444C18.8166 3.18984 18.982 3.30036 19.1213 3.43969L21.06 5.37844C21.1994 5.51773 21.3099 5.6831 21.3853 5.86511C21.4607 6.04713 21.4995 6.24221 21.4995 6.43922C21.4995 6.63623 21.4607 6.83131 21.3853 7.01332C21.3099 7.19533 21.1994 7.36071 21.06 7.5ZM15.9385 10.5L13.9997 8.56031L4.99973 17.5603L6.93848 19.5L15.9385 10.5ZM19.9997 6.43969L18.06 4.5L15.06 7.5L16.9997 9.43969L19.9997 6.43969Z"
              fill="#6E3A82"
            />
          </svg>
        </ButtonMedium>
        <P>
          {cta_text}
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7075 11.2076L14.7075 20.2076C14.5199 20.3952 14.2654 20.5006 14 20.5006C13.7346 20.5006 13.4801 20.3952 13.2925 20.2076C13.1049 20.0199 12.9994 19.7654 12.9994 19.5001C12.9994 19.2347 13.1049 18.9802 13.2925 18.7926L20.5863 11.5001H1C0.734784 11.5001 0.48043 11.3947 0.292893 11.2072C0.105357 11.0196 0 10.7653 0 10.5001C0 10.2349 0.105357 9.9805 0.292893 9.79296C0.48043 9.60542 0.734784 9.50007 1 9.50007H20.5863L13.2925 2.20757C13.1049 2.01993 12.9994 1.76543 12.9994 1.50007C12.9994 1.2347 13.1049 0.980208 13.2925 0.792568C13.4801 0.604927 13.7346 0.499512 14 0.499512C14.2654 0.499512 14.5199 0.604927 14.7075 0.792568L23.7075 9.79257C23.8005 9.88544 23.8742 9.99573 23.9246 10.1171C23.9749 10.2385 24.0008 10.3687 24.0008 10.5001C24.0008 10.6315 23.9749 10.7616 23.9246 10.883C23.8742 11.0044 23.8005 11.1147 23.7075 11.2076Z"
              fill="#6E3A82"
            />
          </svg>
        </P>
      </div>
    </div>
  )
}

export const Steps = () => {
  const step1Ref = useRef<HTMLDivElement | null>(null)
  const step2Ref = useRef<HTMLDivElement | null>(null)
  const step3Ref = useRef<HTMLDivElement | null>(null)

  const [currentStep, setCurrentStep] = useState<string | null>(null)

  useEffect(() => {
    const stepRefs = [
      { ref: step1Ref, name: "Step1" },
      { ref: step2Ref, name: "Step2" },
      { ref: step3Ref, name: "Step3" },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = stepRefs.find(
              (step) => step.ref.current === entry.target
            )
            if (step) {
              setCurrentStep(step.name)
            }
          }
        })
      },
      { threshold: 1 } // Adjust this threshold based on when you want the event to trigger (0.5 means 50% of the element must be visible)
    )

    stepRefs.forEach((step) => {
      if (step.ref.current) {
        observer.observe(step.ref.current)
      }
    })

    return () => {
      stepRefs.forEach((step) => {
        if (step.ref.current) {
          observer.unobserve(step.ref.current)
        }
      })
    }
  }, [])

  return (
    <StepsWrapper>
      <div>
        <div>
          <P primary_cta={true} semibold={true}>
            How Oddy works for families
          </P>
          <H3>Get resources, services, supports and plans: </H3>
        </div>
        <div>
          <div>
            <Image src={Step1} alt="Park." />
            <Image src={Step2} alt="Park." />
            <Image src={Step3} alt="Park." />
          </div>
          <div>
            {/* Progress Bar */}
            <svg
              width="3"
              height="1415"
              viewBox="0 0 3 1415"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="1414.8"
                height="1.8"
                transform="matrix(0 -1 1 0 0.5 1414.8)"
                fill="#6E3A82"
                fill-opacity="0.7"
              />
              <rect
                width="353.7"
                height="1.8"
                transform="matrix(0 -1 1 0 0.5 1414.8)"
                fill="#6E3A82"
              />
              <rect
                width="353.7"
                height="1.8"
                transform="matrix(0 -1 1 0 0.5 1061.1)"
                fill="#6E3A82"
              />
              <rect
                width="353.7"
                height="1.8"
                transform="matrix(0 -1 1 0 0.5 707.401)"
                fill="#6E3A82"
              />
              <rect
                width="353.7"
                height="1.8"
                transform="matrix(0 -1 1 0 0.5 353.701)"
                fill="#6E3A82"
              />
            </svg>
            {/* Step 1 */}
            {currentStep === "Step1" ? <CheckedCircle /> : <GrayCircle />}
            {/* Step2 */}
            {currentStep === "Step2" ? <CheckedCircle /> : <GrayCircle />}
            {/* Step 3 */}
            {currentStep === "Step3" ? <CheckedCircle /> : <GrayCircle />}
          </div>
          <div>
            <div ref={step1Ref}>
              <Card
                title="Upload (drag and drop) an evaluation or service plan, telling us about your needs"
                step_number="1"
                caption_title="Share details"
                description="The more you share, the more Oddy works."
                icon={step1_icon}
                cta_text="Share your details through text or voice memo"
                button_text="Upload"
              />
            </div>
            <div ref={step2Ref}>
              <Card
                title="Discover and choose the best services and supports for you"
                step_number="2"
                caption_title="Explore your options"
                description="Browse millions of our resources and find the  therapists, jobs or  housing  and save them."
                icon={step1_icon}
                cta_text="Create a collection of saved resources"
                button_text="Search resources"
              />
            </div>
            <div ref={step3Ref}>
              <Card
                title="Get guidance to services, and treatment and so much more."
                step_number="3"
                caption_title="Get your plan"
                description="Let the system revise your plan based on your goals, future plans and the life you want to live."
                icon={step1_icon}
                cta_text="Get  a complete care plan instantly "
                button_text="Customize a document"
              />
            </div>
          </div>
        </div>
      </div>
    </StepsWrapper>
  )
}
