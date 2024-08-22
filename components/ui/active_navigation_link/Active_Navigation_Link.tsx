import Link from "next/link"
import { Active_Navigation_LinkWrapper } from "./styles/Active_Navigation_LinkWrapper"

export const Active_Navigation_Link = ({
  toURL,
  children,
  stylesForActive,
  isActive,
}) => {
  return (
    <Active_Navigation_LinkWrapper
      isActive={isActive}
      stylesForActive={stylesForActive}
    >
      <Link href={toURL}>{children}</Link>
    </Active_Navigation_LinkWrapper>
  )
}
