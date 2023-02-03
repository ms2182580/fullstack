import { useEffect, useState } from "react"
import { STDetailMobile_StickyNavbarWrapper } from "./styles/STDetailMobile_StickyNavbarWrapper"

export const STDetailMobile_StickyNavbar = (parameters) => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // useEffect(() => {
  //   console.log("window.scrollY:", window.scrollY)
  // })
  
  

  return (
    <STDetailMobile_StickyNavbarWrapper
      sticky={sticky}

      // className={`navbar ${sticky ? "sticky" : ""}`}
    >
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Details</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
      </ul>
    </STDetailMobile_StickyNavbarWrapper>
  )
}


/* 

!FH0
Make this keep it working
*/