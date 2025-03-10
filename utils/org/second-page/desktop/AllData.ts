import { SUBCATEGORY_KEYS } from "../../DATA_ORG_CheckPaths_Results_D"

export * as data_paa from "@/utils/org/paa/DATA_PCR_D"
export * as data_pat from "@/utils/org/pat/DATA_PAT_D"
export * as data_pcc from "@/utils/org/pcc/DATA_PCC_D"
export * as data_pcmps from "@/utils/org/pcmps/DATA_PCMPS_D"
export * as data_pdctr from "@/utils/org/pdctr/DATA_PDCTR_D"
export * as data_pmhss from "@/utils/org/pmhss/DATA_PMHSS_D"
export * as data_pppas from "@/utils/org/pppas/DATA_PPPAS_D"
export * as data_prp from "@/utils/org/prp/DATA_PRP_D"
export * as data_pses from "@/utils/org/pses/DATA_PSES_D"
export * as data_pst from "@/utils/org/pst/DATA_PST_D"
export * as data_pves from "@/utils/org/pves/DATA_PVES_D"

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
