import { Children, cloneElement, isValidElement } from "react"

export const childrenWithPropsFn = ({ children, ...propsToChildren }) => {
  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      const theProps: any = { ...propsToChildren }

      return cloneElement(child, theProps)
    }
    return child
  })
}
