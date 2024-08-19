import {
  ChatAILogo_M,
  Dashboard_D_AIChatSvg,
  Dashboard_D_CreateNewSvg,
  Dashboard_D_HomeSvg,
  Dashboard_D_Resource,
  Dashboard_D_SavedSvg,
  Dashboard_DocumentsSvg,
  Dashboard_UpgradePremiumArrowSvg,
} from "@/assets/icons"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useDashboardAIChat_Ctx } from "@/context/Ctx_Dashboard_AIChat"
import { useRouter } from "next/router"
import { CreatePlan_D_Sidebar } from "./CreatePlan_D_Sidebar"
import { Dashboard_Sidebar_D_ActiveLink } from "./Dashboard_Sidebar_D_ActiveLink"
import { INDEX_D_SidebarWrapper } from "./styles/INDEX_D_SidebarWrapper"

export const INDEX_D_Sidebar = () => {
  const { isPlan } = useDashboardAIChat_Ctx()
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
      path: "/dashboard/save-resources",
      icon: <Dashboard_D_SavedSvg />,
    },
  ]

  return (
    <INDEX_D_SidebarWrapper>
      {!isPlan ? (
        <>
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
              {navigations.map((li) => {
                const isActive = li.path === pathname

                return (
                  <Dashboard_Sidebar_D_ActiveLink
                    path={li.path}
                    icon={li.icon}
                    name={li.name}
                    isActive={isActive}
                  />
                )
              })}
            </ul>
          </div>
          <span>
            Upgrade to Premium <Dashboard_UpgradePremiumArrowSvg />
          </span>
        </>
      ) : (
        <CreatePlan_D_Sidebar />
      )}
    </INDEX_D_SidebarWrapper>
  )
}
