import { SUBCATEGORY_KEYS } from "../../DATA_ORG_CheckPaths_Results_D"

export * as paa_filters from "@/utils/org/paa/cr/DATA_CR_D_Filters"
export * as pat_filters from "@/utils/org/pat/wcmd/DATA_AT_D_Filters"
export * as pcc_filters from "@/utils/org/pcc/cc/DATA_CC_D_Filters"
export * as pcmps_filters from "@/utils/org/pcmps/day/DATA_DAY_D_Filters"
export * as pdctr_filters from "@/utils/org/pdctr/psyt/DATA_PSYT_D_Filters"
export * as pmhss_filters from "@/utils/org/pmhss/mh/DATA_MH_D_Filters"
export * as pppas_filters from "@/utils/org/pppas/a/DATA_A_D_Filters"
export * as prp_filters from "@/utils/org/prp/lt/DATA_LT_D_Filters"

//  The specific Filters for this subcategory are not created: pses_filters
export * as pses_filters from "@/utils/org/pses/ses/DATA_SES_D_Filters"

export * as pst_filters from "@/utils/org/pst/slp/DATA_SLP_D_Filters"
export * as pves_filters from "@/utils/org/pves/op/DATA_OP_D_Filters"

type TYPE_CARD_STRUCTURE = {
  [key in SUBCATEGORY_KEYS]: {
    right: object[]
    left: object[]
  }
}

export const cardsObj: TYPE_CARD_STRUCTURE = {
  /* PAT subcategories */
  wcmd: {
    right: [{}],
    left: [{}],
  },
  tfs: {
    right: [{}],
    left: [{}],
  },
  acs: {
    right: [{}],
    left: [{}],
  },
  sdat: {
    right: [{}],
    left: [{}],
  },
  ihtat: {
    right: [{}],
    left: [{}],
  },

  /* PAA Subcategories */
  cr: {
    right: [{}],
    left: [{}],
  },
  se: {
    right: [{}],
    left: [{}],
  },
  elmp: {
    right: [{}],
    left: [{}],
  },
  disa: {
    right: [{}],
    left: [{}],
  },
  idd: {
    right: [{}],
    left: [{}],
  },

  /* PCMPS subcategories */
  day: {
    right: [{}],
    left: [{}],
  },
  ovn: {
    right: [{}],
    left: [{}],
  },
  dayt: {
    right: [{}],
    left: [{}],
  },

  /* PCC subcategories */
  cc: {
    right: [{}],
    left: [{}],
  },
  fc: {
    right: [{}],
    left: [{}],
  },
  ac: {
    right: [{}],
    left: [{}],
  },

  /* PDCTR subcategories */
  psyt: {
    right: [{}],
    left: [{}],
  },
  fm: {
    right: [{}],
    left: [{}],
  },
  no: {
    right: [{}],
    left: [{}],
  },

  /* PMHSS subcategories */
  mh: {
    right: [{}],
    left: [{}],
  },
  fs: {
    right: [{}],
    left: [{}],
  },

  /* PPPAS subcategories */
  a: {
    right: [{}],
    left: [{}],
  },
  pnfpo: {
    right: [{}],
    left: [{}],
  },
  so: {
    right: [{}],
    left: [{}],
  },

  /* PSES subcategories */
  ses: {
    right: [{}],
    left: [{}],
  },
  pre: {
    right: [{}],
    left: [{}],
  },
  pv: {
    right: [{}],
    left: [{}],
  },

  /* PST subcategories */
  slp: {
    right: [{}],
    left: [{}],
  },
  ot: {
    right: [{}],
    left: [{}],
  },

  /* PRP subcategories */
  lt: {
    right: [{}],
    left: [{}],
  },
  st: {
    right: [{}],
    left: [{}],
  },

  /* PVES subcategories */
  op: {
    right: [{}],
    left: [{}],
  },
  hr: {
    right: [{}],
    left: [{}],
  },
  sep: {
    right: [{}],
    left: [{}],
  },
  ai: {
    right: [{}],
    left: [{}],
  },
  jtc: {
    right: [{}],
    left: [{}],
  },
}
