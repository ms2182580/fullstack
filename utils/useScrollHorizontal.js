import { useEffect, useState } from "react"

export const useScrollHorizontal = () => {
  const [listRef, setListRef] = useState(null)
  const [currentScrollState, setCurrentScrollState] = useState(null)
  const [isFinalScrollState, setIsFinalScrollState] = useState(null)

  const [stateToCss, setStateToCss] = useState({
    scrollRight: false,
    reachFinal: false,
  })

  useEffect(() => {
    if (currentScrollState === 0 || currentScrollState === null) {
      setStateToCss((prevState) => ({
        ...prevState,
        scrollRight: false,
        reachFinal: false,
      }))
    }

    if (currentScrollState > 100) {
      setStateToCss((prevState) => ({
        ...prevState,
        scrollRight: true,
        reachFinal: false,
      }))
    }

    if (currentScrollState === isFinalScrollState) {
      setStateToCss((prevState) => ({
        ...prevState,
        scrollRight: true,
        reachFinal: true,
      }))
    }
  }, [currentScrollState, isFinalScrollState])

  useEffect(() => {
    setStateToCss((prevState) => ({
      ...prevState,
      scrollRight: false,
      reachFinal: false,
    }))
  }, [])

  useEffect(() => {
    if (listRef) {
      let startTouch = 0

      const handleTouchStart = (event) => {
        startTouch = event.touches[0].clientX
      }

      const handleScroll = (event) => {
        event.preventDefault()
        if (event.type === "wheel") {
          listRef.scrollLeft += event.deltaY
        }

        if (event.type === "touchmove") {
          const change = startTouch - event.touches[0].clientX
          startTouch = event.touches[0].clientX
          listRef.scrollLeft += change
        }

        const currentScroll = listRef.scrollLeft
        if (currentScrollState === null) {
          setCurrentScrollState(currentScroll)
        }

        const finalScroll = listRef.scrollLeftMax
        if (isFinalScrollState === null) {
          setIsFinalScrollState(finalScroll)
        }
      }

      listRef.addEventListener("wheel", handleScroll)
      listRef.addEventListener("touchstart", handleTouchStart)
      listRef.addEventListener("touchmove", handleScroll)

      return () => {
        listRef.removeEventListener("wheel", handleScroll)
        listRef.addEventListener("touchstart", handleTouchStart)
        listRef.removeEventListener("touchmove", handleScroll)
      }
    }
  }, [listRef])

  const handleMoveNavBarToLeftByClick = (e) => {
    if (listRef) {
      if (e.type === "click" || e.key === "Enter") {
        let toRest = listRef.scrollLeft > 200 ? 200 : listRef.scrollLeft

        setCurrentScrollState((prevState) => prevState - toRest)

        listRef.scrollLeft -= 200
      }
    }
  }

  const handleMoveNavBarToRightByClick = (e) => {
    if (listRef) {
      if (e.type === "click" || e.key === "Enter") {
        listRef.scrollLeft += 200

        const currentScroll = listRef.scrollLeft
        if (currentScrollState === null) {
          setCurrentScrollState(currentScroll)
        } else {
          setCurrentScrollState(currentScroll)
        }

        const finalScroll = listRef.scrollLeftMax
        if (isFinalScrollState === null) {
          setIsFinalScrollState(finalScroll)
        }
      }
    }
  }

  return {
    moveToLeft: handleMoveNavBarToLeftByClick,
    moveToRight: handleMoveNavBarToRightByClick,
    stateToCss,
    setListRef,
  }
}
