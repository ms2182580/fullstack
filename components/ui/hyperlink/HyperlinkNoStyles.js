import Link from "next/link"
import styled from "styled-components"

const DefaultLink = styled.a`
  cursor: pointer;
`

export const LinkNoStyle = ({ href, children, replace, query = undefined, as, tabIndex = 0 }) => {
  if (query !== undefined) {
    return (
      <Link
        as={href}
        href={{
          pathname: href,
          query: { data: query },
        }}
        replace={replace}>
        <DefaultLink tabIndex={tabIndex}>{children}</DefaultLink>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      replace={replace}
      as={as}
      tabIndex={tabIndex}
    >
      <DefaultLink tabIndex={tabIndex}>{children}</DefaultLink>
    </Link>
  )
}

export const NavLinkNoStyle = styled(Link)`
  all: unset;
`
