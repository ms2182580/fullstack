import styled from "styled-components"
import Link from "next/link"

const DefaultLink = styled.a`
  all: unset;
`

export const LinkNoStyle = ({ href, children }) => (
  <Link href={href}>
    <DefaultLink>{children}</DefaultLink>
  </Link>
)

export const NavLinkNoStyle = styled(Link)`
  all: unset;
`
