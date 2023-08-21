import { useMemo } from "react"

export const useCheckBreadcrumbs = (titleToFormat = " no format name here") => {
  const titleFormatted = useMemo(() => {
    return titleToFormat.split(" ").slice(1).join(" ")
  }, [])

  return { titleFormatted }
}
