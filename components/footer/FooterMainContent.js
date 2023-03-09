import { useRouter } from "next/router"
import { Fragment } from "react"
import { H4 } from "../ui/heading_body_text/HeaderFonts"
import { HyperlinkS } from "../ui/hyperlink/HyperlinkFonts"
import { LinkNoStyle } from "../ui/hyperlink/HyperlinkNoStyles"
import { FooterMainContentWrapper, Link_Footer_NFNYC } from "./styles/FooterMainContentWrapper.js"

export let FooterMainContent = ({ title, dataToShow = [], dataLink }) => {
  
  
  const router = useRouter()
  
  const navigate = (key, theRoute) => {
    if(key.key==="Enter"){
      router.push(theRoute)
    }
  }

  return (
    <FooterMainContentWrapper>
      <H4>{title}</H4>
      {dataToShow.map((x, i) => {
        if (x.title === "Not from NYC?") {
          return (
            <Link_Footer_NFNYC key={x.title}>
              <HyperlinkS href={x.route} name={x.title}/>
            </Link_Footer_NFNYC>
          )
        }

        return (
          <Fragment key={x.title} >
              <span tabIndex={0} onKeyDown={(e)=> navigate(e, x.route)}>
                <LinkNoStyle href={x.route}>{x.title}</LinkNoStyle>
              </span>
          </Fragment>
        )
      })}
    </FooterMainContentWrapper>
  )
}
