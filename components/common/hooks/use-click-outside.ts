import { useEffect, RefObject, Dispatch, SetStateAction } from "react"

const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  setStates: Dispatch<SetStateAction<boolean>>[]
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      refs.forEach((ref, index) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setStates[index](false)
        }
      })
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [refs, setStates])
}

export default useClickOutside
