import Link from "next/link"
import { ReactNode } from "react"
import {
  Active_Navigation_LinkWrapper,
  Active_Navigation_LinkWrapper_Props,
} from "./styles/Active_Navigation_LinkWrapper"

type Props = {
  toURL: string
  children: ReactNode
} & Active_Navigation_LinkWrapper_Props

export const Active_Navigation_Link = ({
  toURL,
  children,
  stylesForActive,
  isActive,
}: Props) => {
  return (
    <Active_Navigation_LinkWrapper
      isActive={isActive}
      stylesForActive={stylesForActive}
    >
      <Link href={toURL}>{children}</Link>
    </Active_Navigation_LinkWrapper>
  )
}
