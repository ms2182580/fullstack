import SVGAIChatActive from "@/assets/icons/ai_chat_active.svg"
import SVGAIChatDefault from "@/assets/icons/ai_chat_default.svg"
import SVGDocumentsActive from "@/assets/icons/documents_active.svg"
import SVGDocumentsDefault from "@/assets/icons/documents_default.svg"
import SVGMagicWand2 from "@/assets/icons/home/home_magic_wand.svg"
import SVGHomeDefault from "@/assets/icons/home_default.svg"
import SVGHomeActive from "@/assets/icons/home_fill.svg"
import SVGMagicWand from "@/assets/icons/magic_wand_active.svg"
import SVGMagnifyingGlassActive from "@/assets/icons/magnifying_glass_active.svg"
import SVGMagnifyingGlassDefault from "@/assets/icons/magnifying_glass_default.svg"
import SVGStarActive from "@/assets/icons/star_active.svg"
import SVGStarDefault from "@/assets/icons/star_default.svg"
import { ALL_ROUTES, ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import { FC, SVGProps } from "react"

type AllRouteKeys =
  | keyof typeof ALL_ROUTES.DASHBOARD_SECTIONS
  | keyof typeof ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS
  | string

type IconEntry =
  | {
      default: FC<SVGProps<SVGSVGElement>>
      active: FC<SVGProps<SVGSVGElement>>
    }
  | undefined

export type DashboardAsideIconsReturn =
  | {
      [K in AllRouteKeys]: IconEntry
    }
  | {
      _get: (keyToSearch: string) => IconEntry
    }

export const dashboardAsideIcons: DashboardAsideIconsReturn = {
  "home dashboard": {
    default: SVGHomeDefault,
    active: SVGHomeActive,
  },

  "documents categories": {
    default: SVGDocumentsDefault,
    active: SVGDocumentsActive,
  },
  "ai_chat aiChat": {
    default: SVGAIChatDefault,
    active: SVGAIChatActive,
  },
  "org resource_directory resources": {
    default: SVGMagnifyingGlassDefault,
    active: SVGMagnifyingGlassActive,
  },
  saved: {
    default: SVGStarDefault,
    active: SVGStarActive,
  },
  write_content: {
    default: SVGMagicWand,
    active: SVGMagicWand2,
  },
  _get: function (keyToSearch: string) {
    return getDataWithAliases(keyToSearch, this)
  },
}

function getDataWithAliases(alias: string, thisObj): IconEntry {
  const getAllKeys = Object.entries(thisObj)
    .filter((x) => typeof x[1] !== "function" && x)
    .map((x) => x[0])

  const findKey = getAllKeys.find((x) => {
    const allKeysSplitted = x.split(" ")

    return allKeysSplitted.find((x2) => (x2 === alias ? alias : undefined))
  })

  return findKey && thisObj[findKey]
}
