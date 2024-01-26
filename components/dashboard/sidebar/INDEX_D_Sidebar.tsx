import {
  ChatAILogo_M,
  Dashboard_D_CreateNewSvg,
  Dashboard_D_HomeSvg,
  Dashboard_DocumentsSvg,
  Dashboard_UpgradePremiumArrowSvg,
  Dashboard_D_Resource,
  Dashboard_D_SavedSvg,
  Dashboard_D_AIChatSvg,
} from "@/assets/icons"
import { INDEX_D_SidebarWrapper } from "./styles/INDEX_D_SidebarWrapper"
import { useRouter } from "next/router"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import Link from "next/link"

export const INDEX_D_Sidebar = () => {
  const route = useRouter()
  const pathname = route.pathname
  const handleNavigateHome = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      route.push("/")
    }
  }
  const navigations = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <Dashboard_D_HomeSvg />,
    },
    {
      name: "Documents",
      path: "/dashboard/documents",
      icon: <Dashboard_DocumentsSvg />,
    },
    {
      name: "AI Chat",
      path: "/dashboard/ai-chat",
      icon: <Dashboard_D_AIChatSvg />,
    },
    {
      name: "Resource Directory",
      path: "/dashboard/resource-directory",
      icon: <Dashboard_D_Resource />,
    },
    {
      name: "Saved",
      path: "/dashboard/saved",
      icon: <Dashboard_D_SavedSvg />,
    },
  ]
  let currentDashboardIndex =
    navigations.findIndex((i) => i.path.includes(pathname)) + 1
  return (
    <INDEX_D_SidebarWrapper currentDashboardPath={currentDashboardIndex}>
      <div>
        <span
          tabIndex={0}
          onKeyDown={handleNavigateHome}
          onClick={handleNavigateHome}
        >
          <H2 bold>Inclusive</H2>
          <ChatAILogo_M />
        </span>
        <ButtonSmall>
          <Dashboard_D_CreateNewSvg />
          <span>Create New</span>
        </ButtonSmall>
        <ul>
          {navigations.map((li) => (
            <li key={li.name}>
              <Link href={li.path}>
                <span>{li.icon}</span>
                <span>{li.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <span>
        Upgrade to Premium <Dashboard_UpgradePremiumArrowSvg />
      </span>
    </INDEX_D_SidebarWrapper>
  )
}
