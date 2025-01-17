import Link from "next/link"
import { ReactNode } from "react"
import {
  ActiveNavigationLinkWrapper,
  ActiveNavigationLinkWrapperProps,
} from "./styles/index-wrapper"

export type Props = {
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
    <ActiveNavigationLinkWrapper
      isActive={isActive}
      isDisabledRoute={isDisabledRoute}
    >
      {isDisabledRoute ? (
        <a href="#" tabIndex={0} data-content="Coming soon!">
          {children}
        </a>
      ) : (
        <Link href={toURL}>{children}</Link>
      )}
    </ActiveNavigationLinkWrapper>
  )
}
