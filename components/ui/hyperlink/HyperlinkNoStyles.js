import styled from "styled-components"
import Link from "next/link"

const DefaultLink = styled.a`
  all: unset;
  cursor: pointer;
`

export const LinkNoStyle = ({ href, children, replace }) => (
  <Link href={href} replace={replace} >
    <DefaultLink>{children}</DefaultLink>
  </Link>
)

export const NavLinkNoStyle = styled(Link)`
  all: unset;
`
