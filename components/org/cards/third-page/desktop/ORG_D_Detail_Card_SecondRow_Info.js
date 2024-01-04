import { ORG_D_Detail_Card_SecondRow_InfoWrapper } from "./styles/ORG_D_Detail_Card_SecondRow_InfoWrapper.js"

import { Fragment, useEffect, useState } from "react"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts"

export const ORG_D_Detail_Card_SecondRow_Info = ({ title, dataToShow, withBackground = false, displayBlock = false }) => {
  const [dataObj, setDataObj] = useState(null)

  const [howToRender, setHowToRender] = useState(() => {
    if (typeof dataToShow === "object" && dataToShow !== null) {
      if (Array.isArray(dataToShow)) return "array"
      if (!Array.isArray(dataToShow)) return "object"
    }

    if (typeof dataToShow === "string") return "string"

    return "not_array_object_string__"
  })

  useEffect(() => {
    if (howToRender === "object") {
      let formatted = []
      for (const key in dataToShow) {
        formatted.push(dataToShow[key])
      }
      setDataObj(formatted)
    }
  }, [howToRender])

  return (
    <ORG_D_Detail_Card_SecondRow_InfoWrapper className={`${withBackground ? "withBackground" : ""} ${displayBlock ? "DISPLAY_BLOCK" : ""}`}>
      <H4 primary_hover>{title}:</H4>

      {howToRender === "array" && !displayBlock ? (
        <>
          <span>{new Intl.ListFormat("en").format(dataToShow)}</span>
        </>
      ) : howToRender === "array" && displayBlock ? (
        <>
          {dataToShow.map((x) => (
            <Fragment key={x}>
              <p>{x}</p>
            </Fragment>
          ))}
        </>
      ) : howToRender === "string" ? (
        <>
          <P> {dataToShow}</P>
        </>
      ) : dataObj !== null && howToRender === "object" ? (
        <>
          {dataObj.map((xDataObj, index) => (
            <Fragment key={`${xDataObj.title}_${xDataObj.value}`}>
              <div className="dataObj">
                <p>{xDataObj.title}</p>
                <p>{xDataObj.value}</p>
              </div>
            </Fragment>
          ))}
        </>
      ) : (
        <>
          <P>❌{howToRender}❌</P>
        </>
      )}
    </ORG_D_Detail_Card_SecondRow_InfoWrapper>
  )
}
