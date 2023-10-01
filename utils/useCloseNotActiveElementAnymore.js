import { useEffect } from "react"

export const useCloseNotActiveElementAnymore = (focusedElement, setStateToClose, tagsToFocus = [], classNameToFocusLogic = "") => {
  useEffect(() => {
    const isFocusOnTagElements = tagsToFocus.map((x) => x.toUpperCase()).includes(focusedElement.tagName)

    const currentClassName = isFocusOnTagElements ? focusedElement.className?.includes(classNameToFocusLogic) : false

    const currentClassNameParent = isFocusOnTagElements ? focusedElement.offsetParent?.className.includes(classNameToFocusLogic) : false

    if (!isFocusOnTagElements && !currentClassName && !currentClassNameParent) {
      setStateToClose(false)
    }
  }, [focusedElement])
}
