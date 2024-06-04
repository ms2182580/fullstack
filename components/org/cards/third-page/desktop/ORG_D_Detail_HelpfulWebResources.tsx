import { ORG_Detail_SearchUsefulResource } from "@/assets/icons/index"
import ExternalLink_SVG from "@/assets/icons/org/externalLink.svg"
import ArrowUp from "@/assets/images/arrow_up.png"
import image1 from "@/assets/images/org/attorney-advocates/ORG_AA19.png"
import image2 from "@/assets/images/org/attorney-advocates/ORG_AA20.png"
import image3 from "@/assets/images/org/attorney-advocates/ORG_AA21.png"

import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image, { StaticImageData } from "next/image"
import { SVGProps } from "react"
import { ORG_D_Detail_HelpfulWebResourcesWrapper } from "./styles/ORG_D_Detail_HelpfulWebResourcesWrapper"

type Data_Type = {
  image: {
    src: StaticImageData
  }
  text: {
    hyperlink: {
      text: string
      href: string
    }
    description: string
  }

  button: {
    svg: (props: SVGProps<SVGSVGElement>) => JSX.Element
    description: string
  }
}[]

const data: Data_Type = [
  {
    image: {
      src: image1,
    },
    text: {
      hyperlink: {
        text: "ABLE National Resource Center",
        href: "https://www.ablenrc.org/",
      },
      description:
        "Special Needs Alliance and ABLE National Resource Center collaborate on efforts to educate individuals with disabilities, their families and other stakeholders on how ABLE accounts and special needs trusts (SNTs) can contribute to improved quality of life",
    },
    button: {
      svg: ExternalLink_SVG,
      description: "Visit site",
    },
  },
  {
    image: {
      src: image2,
    },
    text: {
      hyperlink: {
        text: "Affordable Colleges Online",
        href: "https://www.affordablecollegesonline.org/college-resource-center/resources-for-students-with-disabilities",
      },
      description: "College resources for students with disabilities",
    },
    button: {
      svg: ExternalLink_SVG,
      description: "Visit site",
    },
  },
  {
    image: {
      src: image3,
    },
    text: {
      hyperlink: {
        text: "The American Association of Settlement Consultants (AASC)",
        href: "https://americanasc.org/",
      },
      description:
        "The American Association of Settlement Consultants (AASC) The American Association of Settlement Consultants (AASC) is an industry advocacy group committed to a vibrant, strong, and modern settlement planning industry. We promote collaboration within the structured settlement industry, actively encourage balanced settlement planning on behalf of our clients, and believe in integrated",
    },
    button: {
      svg: ExternalLink_SVG,
      description: "Visit site",
    },
  },
]

export const ORG_D_Detail_HelpfulWebResources = () => {
  return (
    <ORG_D_Detail_HelpfulWebResourcesWrapper>
      <details open>
        <summary tabIndex={0}>
          <H3>Helpful web resources </H3>
          <span>
            <Image src={ArrowUp} alt="arrow to open or close the text" />
          </span>
        </summary>
        <div>
          <div>
            <ORG_Detail_SearchUsefulResource />

            <input type="text" placeholder="Search the web" />
            <button>Bookmark resources</button>
          </div>

          <div>
            {data.map(({ image, text, button }) => {
              const TheSVG = button.svg

              return (
                <div>
                  <Image
                    src={image.src}
                    alt={`Logo of ${text.hyperlink.text}`}
                  />

                  <ul>
                    <li>
                      <a href={text.hyperlink.href} target="_blank">
                        {text.hyperlink.text}
                      </a>
                    </li>
                    <P>{text.description}</P>
                    <a href={text.hyperlink.href} target="_blank">
                      <TheSVG /> {button.description}
                    </a>
                  </ul>
                </div>
              )
            })}
          </div>
          <P tabIndex={0}>View All</P>
        </div>
      </details>
    </ORG_D_Detail_HelpfulWebResourcesWrapper>
  )
}
