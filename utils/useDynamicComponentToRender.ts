import { useRouter } from "next/router"
import { ReactElement, useMemo } from "react"

type Component_Type = ReactElement

export type ComponentsToRenderAvailable_Type = {
  route: string
  component: Component_Type
}[]

type UseDynamicComponentToRender_Props = {
  componentsToRenderAvailable: ComponentsToRenderAvailable_Type
}

type UseDynamicComponentToRender_Return = Component_Type | null

export const useDynamicComponentToRender = ({
  componentsToRenderAvailable,
}: UseDynamicComponentToRender_Props): {
  componentToRender: UseDynamicComponentToRender_Return
  propsToComponent?: any
} => {
  const { asPath } = useRouter()

  const actualStepFormatted = useMemo(() => {
    return asPath.split("/").at(-1)
  }, [asPath])

  const componentToRender = useMemo(() => {
    const foundComponent = componentsToRenderAvailable.find(
      (x) => x.route === actualStepFormatted
    )
    return foundComponent ? foundComponent.component : null
  }, [actualStepFormatted])

  /* Do here some validation to get the props for the component. Maybe it should be done on the variable componentToRender, returning an object with the component and the props. The props itself should be come from outisde, where the array "componentsToRenderAvailable" was declared in the first place */
  const propsToComponent = { a: ["..."] }

  return { componentToRender, propsToComponent }
}
