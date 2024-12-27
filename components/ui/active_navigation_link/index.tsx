import Link from "next/link"
import { ReactNode } from "react"
import {
  ActiveNavigationLinkWrapper,
  ActiveNavigationLinkWrapperProps,
} from "./styles/index-wrapper"

type Props = {
  toURL: string
  children: ReactNode
} & ActiveNavigationLinkWrapperProps

export const ActiveNavigationLink = ({ toURL, children, isActive }: Props) => {
  return (
    <ActiveNavigationLinkWrapper isActive={isActive}>
      <Link href={toURL}>{children}</Link>
    </ActiveNavigationLinkWrapper>
  )
}
