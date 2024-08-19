import Link from "next/link"
import { Dashboard_Sidebar_D_ActiveLinkWrapper } from "./styles/Dashboard_Sidebar_D_ActiveLinkWrapper"

export const Dashboard_Sidebar_D_ActiveLink = ({
  isActive,
  path,
  icon,
  name,
}) => {
  return (
    <Dashboard_Sidebar_D_ActiveLinkWrapper isActive={isActive}>
      <Link href={path}>
        <span>{icon}</span>
        <span>{name}</span>
      </Link>
    </Dashboard_Sidebar_D_ActiveLinkWrapper>
  )
}
