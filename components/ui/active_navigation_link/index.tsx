import Link from "next/link"
import { ReactNode } from "react"
import {
  ActiveNavigationLinkWrapper,
  ActiveNavigationLinkWrapperProps,
} from "./styles/index-wrapper"

type Props = {
  toURL: string
  children: ReactNode
  isDisabledRoute?: boolean
} & Pick<ActiveNavigationLinkWrapperProps, "isActive">

export const ActiveNavigationLink = ({
  toURL,
  children,
  isDisabledRoute = false,
  isActive,
}: Props) => {
  return (
    <ActiveNavigationLinkWrapper isActive={isActive}>
      {isDisabledRoute ? (
        <a href="#" tabIndex={0}>
          {children}
        </a>
      ) : (
        <Link href={toURL}>{children}</Link>
      )}
    </ActiveNavigationLinkWrapper>
  )
}
