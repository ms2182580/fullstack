import Link from "next/link"
import { useEffect, useState } from "react"
import { H2 } from "../../../components/ui/heading_body_text/HeaderFonts"
import { useNavbarHomeHeight } from "../../../context/NavbarHome_Ctx_Height.js"
import { Home_Hero_DWrapper } from "./styles/Home_Hero_DWrapper.js"

const WORDS = ["states", "families", "life", "insurance"]
const FADE_OUT_TIME = 2000
const fadeOutVariables = {
  start: FADE_OUT_TIME,
  finish: FADE_OUT_TIME + 510,
}

export const Home_Hero_D = () => {
  let { height } = useNavbarHomeHeight()

  const [currentWord, setCurrentWord] = useState("insurance")
  const [fadeOut, setFadeOut] = useState(false)

  /* 
  !FH
  Make this active only if the user have his sight here. Maybe use IntersectionObserver
  */

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true) // Start fading out the previous word
    }, fadeOutVariables.start) // Add a delay of 2 seconds before starting the transition
    return () => clearTimeout(timer)
  }, [currentWord])

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = WORDS.indexOf(currentWord)
      const nextIndex = (currentIndex + 1) % WORDS.length
      setCurrentWord(WORDS[nextIndex])
      setFadeOut(false) // Start fading in the new word
    }, fadeOutVariables.finish) // Add a delay of 2.5 seconds (equal to the transition duration + some buffer time)
    return () => clearTimeout(timer)
  }, [currentWord])

  return (
    <Home_Hero_DWrapper paddingTop={height.height}>
      <div>
        <h1>
          <span>Our AI service plans</span>
          <span>save time and money</span>
          <span className="CHANGE_WORD">
            <span>
              for
              <span className={`word-transition ${fadeOut ? "fade-out" : "fade-in"}`}>{currentWord}</span>
            </span>
          </span>
        </h1>
        <H2>
          <span>
            Inclusive <span>uses AI to</span> <span>simplify care coordination</span> for families with
          </span>
          <span>Intellectual and developmental disabilities.</span>
        </H2>

        <span>
          <Link href="#">View product demo now!</Link>
        </span>
      </div>

      <p>No sign up required</p>
    </Home_Hero_DWrapper>
  )
}
