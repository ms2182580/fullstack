import styled from "styled-components"
import Link from "next/link"

const DefaultLink = styled.a`
  all: unset;
  cursor: pointer;
`

export const LinkNoStyle = ({ href, children, replace, query = undefined }) => {
  if (query !== undefined) {
    return (
      <Link
        as={href}
        href={{
          pathname: href,
          query: {data: query}
        }}
        replace={replace}>
        <DefaultLink>{children}</DefaultLink>
      </Link>
    )
  }
  return (
    <Link
      href={href}
      replace={replace}>
      <DefaultLink>{children}</DefaultLink>
    </Link>
  )
}

export const NavLinkNoStyle = styled(Link)`
  all: unset;
`
