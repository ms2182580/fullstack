import { DATA_CardLeft_PAA, DATA_CardRight_PAA } from "@/utils/ORG/paa/cr/DATA_CR_D_Card"
import { DATA_CardLeft_PAT, DATA_CardRight_PAT } from "@/utils/ORG/pat/wcmd/DATA_AT_D_Card"
import { DATA_CardLeft_PCC, DATA_CardRight_PCC } from "@/utils/ORG/pcc/cc/DATA_CC_D_Card"
import { DATA_CardLeft_PCMPS, DATA_CardRight_PCMPS } from "@/utils/ORG/pcmps/day/DATA_DAY_D_Card"
import { DATA_CardLeft_PDCTR, DATA_CardRight_PDCTR } from "@/utils/ORG/pdctr/psyt/DATA_PSYT_D_Card"
import { DATA_CardLeft_PMHSS, DATA_CardRight_PMHSS } from "@/utils/ORG/pmhss/mh/DATA_MH_D_Card"
import { DATA_CardLeft_PPPAS, DATA_CardRight_PPPAS } from "@/utils/ORG/pppas/a/DATA_A_D_Card"
import { DATA_CardLeft_PRP, DATA_CardRight_PRP } from "@/utils/ORG/prp/lt/DATA_LT_D_Card"
import { DATA_CardLeft_PSES, DATA_CardRight_PSES } from "@/utils/ORG/pses/ses/DATA_SES_D_Card"
import { DATA_CardLeft_PST, DATA_CardRight_PST } from "@/utils/ORG/pst/slp/DATA_SLP_D_Card"
import { DATA_CardLeft_PVES, DATA_CardRight_PVES } from "@/utils/ORG/pves/op/DATA_OP_D_Card"
import { SUBCATEGORY_KEYS } from "../../DATA_ORG_CheckPaths_Results_D"
import { DATA_SDAT_D_CardLeft, DATA_SDAT_D_CardRight } from "../../pat/sdat/DATA_SDAT_D_Card"
import { DATA_TFS_D_CardLeft, DATA_TFS_D_CardRight } from "../../pat/tfs/DATA_TFS_D_CARD"
import { DATA_HR_D_CardLeft, DATA_HR_D_CardRight } from "../../pves/hr/DATA_HR_D_Card"

export * as paa_cards from "@/utils/ORG/paa/cr/DATA_CR_D_Card"
export * as pat_cards from "@/utils/ORG/pat/wcmd/DATA_AT_D_Card"
export * as pcc_cards from "@/utils/ORG/pcc/cc/DATA_CC_D_Card"
export * as pcmps_cards from "@/utils/ORG/pcmps/day/DATA_DAY_D_Card"
export * as pdctr_cards from "@/utils/ORG/pdctr/psyt/DATA_PSYT_D_Card"
export * as pmhss_cards from "@/utils/ORG/pmhss/mh/DATA_MH_D_Card"
export * as pppas_cards from "@/utils/ORG/pppas/a/DATA_A_D_Card"
export * as prp_cards from "@/utils/ORG/prp/lt/DATA_LT_D_Card"
export * as pses_cards from "@/utils/ORG/pses/ses/DATA_SES_D_Card"
export * as pst_cards from "@/utils/ORG/pst/slp/DATA_SLP_D_Card"
export * as pves_cards from "@/utils/ORG/pves/op/DATA_OP_D_Card"

type TYPE_CARD_STRUCTURE = {
  [key in SUBCATEGORY_KEYS]: {
    right: object[]
    left: object[]
  }
}

export const cardsObj: TYPE_CARD_STRUCTURE = {
  /* PAT subcategories */
  wcmd: {
    right: DATA_CardRight_PAT,
    left: DATA_CardLeft_PAT,
  },
  tfs: {
    right: DATA_TFS_D_CardRight,
    left: DATA_TFS_D_CardLeft,
  },
  acs: {
    right: DATA_TFS_D_CardRight,
    left: DATA_TFS_D_CardLeft,
  },
  sdat: {
    right: DATA_SDAT_D_CardRight,
    left: DATA_SDAT_D_CardLeft,
  },
  ihtat: {
    right: DATA_TFS_D_CardRight,
    left: DATA_TFS_D_CardLeft,
  },

  /* PAA Subcategories */
  cr: {
    right: DATA_CardRight_PAA,
    left: DATA_CardLeft_PAA,
  },
  se: {
    right: DATA_CardRight_PAA,
    left: DATA_CardLeft_PAA,
  },
  elmp: {
    right: DATA_CardRight_PAA,
    left: DATA_CardLeft_PAA,
  },
  disa: {
    right: DATA_CardRight_PAA,
    left: DATA_CardLeft_PAA,
  },
  idd: {
    right: DATA_CardRight_PAA,
    left: DATA_CardLeft_PAA,
  },

  /* PCMPS subcategories */
  day: {
    right: DATA_CardRight_PCMPS,
    left: DATA_CardLeft_PCMPS,
  },
  ovn: {
    right: DATA_CardRight_PCMPS,
    left: DATA_CardLeft_PCMPS,
  },
  dayt: {
    right: DATA_CardRight_PCMPS,
    left: DATA_CardLeft_PCMPS,
  },

  /* PCC subcategories */
  cc: {
    right: DATA_CardRight_PCC,
    left: DATA_CardLeft_PCC,
  },
  fc: {
    right: DATA_CardRight_PCC,
    left: DATA_CardLeft_PCC,
  },
  ac: {
    right: DATA_CardRight_PCC,
    left: DATA_CardLeft_PCC,
  },

  /* PDCTR subcategories */
  psyt: {
    right: DATA_CardRight_PDCTR,
    left: DATA_CardLeft_PDCTR,
  },
  fm: {
    right: DATA_CardRight_PDCTR,
    left: DATA_CardLeft_PDCTR,
  },
  no: {
    right: DATA_CardRight_PDCTR,
    left: DATA_CardLeft_PDCTR,
  },

  /* PMHSS subcategories */
  mh: {
    right: DATA_CardRight_PMHSS,
    left: DATA_CardLeft_PMHSS,
  },
  fs: {
    right: DATA_CardRight_PMHSS,
    left: DATA_CardLeft_PMHSS,
  },

  /* PPPAS subcategories */
  a: {
    right: DATA_CardRight_PPPAS,
    left: DATA_CardLeft_PPPAS,
  },
  pnfpo: {
    right: DATA_CardRight_PPPAS,
    left: DATA_CardLeft_PPPAS,
  },
  so: {
    right: DATA_CardRight_PPPAS,
    left: DATA_CardLeft_PPPAS,
  },

  /* PSES subcategories */
  ses: {
    right: DATA_CardRight_PSES,
    left: DATA_CardLeft_PSES,
  },
  pre: {
    right: DATA_CardRight_PSES,
    left: DATA_CardLeft_PSES,
  },
  pv: {
    right: DATA_CardRight_PSES,
    left: DATA_CardLeft_PSES,
  },

  /* PST subcategories */
  slp: {
    right: DATA_CardRight_PST,
    left: DATA_CardLeft_PST,
  },
  ot: {
    right: DATA_CardRight_PST,
    left: DATA_CardLeft_PST,
  },

  /* PRP subcategories */
  lt: {
    right: DATA_CardRight_PRP,
    left: DATA_CardLeft_PRP,
  },
  st: {
    right: DATA_CardRight_PRP,
    left: DATA_CardLeft_PRP,
  },

  /* PVES subcategories */
  op: {
    right: DATA_CardRight_PVES,
    left: DATA_CardLeft_PVES,
  },
  hr: {
    right: DATA_HR_D_CardRight,
    left: DATA_HR_D_CardLeft,
  },
  sep: {
    right: DATA_HR_D_CardRight,
    left: DATA_HR_D_CardLeft,
  },
  ai: {
    right: DATA_HR_D_CardRight,
    left: DATA_HR_D_CardLeft,
  },
  jtc: {
    right: DATA_HR_D_CardRight,
    left: DATA_HR_D_CardLeft,
  },
}
