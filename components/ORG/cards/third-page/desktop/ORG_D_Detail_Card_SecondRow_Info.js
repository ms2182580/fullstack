import { ORG_D_Detail_Card_SecondRow_InfoWrapper } from "./styles/ORG_D_Detail_Card_SecondRow_InfoWrapper.js"

import { Fragment, useEffect, useState } from "react"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts"

export const ORG_D_Detail_Card_SecondRow_Info = ({ title, dataToShow, withBackground = false, debug = false }) => {
  if (debug) {
    console.log("dataToShow:", dataToShow)
  }

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
    <ORG_D_Detail_Card_SecondRow_InfoWrapper className={withBackground && "withBackground"}>
      <H4 primary_hover>{title}:</H4>

      {howToRender === "array" ? (
        <>
          {dataToShow.map((x, i) => {
            if (dataToShow.length - 1 === i) {
              return (
                <Fragment key={x}>
                  <P> {x}</P>
                </Fragment>
              )
            }

            return (
              <Fragment key={x}>
                <P> {x}</P>
              </Fragment>
            )
          })}
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
