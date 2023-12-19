import { SUBCATEGORY_KEYS } from "../../DATA_ORG_CheckPaths_Results_D"

export * as data_paa from "@/utils/ORG/paa/DATA_PCR_D"
export * as data_pat from "@/utils/ORG/pat/DATA_PAT_D"
export * as data_pcc from "@/utils/ORG/pcc/DATA_PCC_D"
export * as data_pcmps from "@/utils/ORG/pcmps/DATA_PCMPS_D"
export * as data_pdctr from "@/utils/ORG/pdctr/DATA_PDCTR_D"
export * as data_pmhss from "@/utils/ORG/pmhss/DATA_PMHSS_D"
export * as data_pppas from "@/utils/ORG/pppas/DATA_PPPAS_D"
export * as data_prp from "@/utils/ORG/prp/DATA_PRP_D"
export * as data_pses from "@/utils/ORG/pses/DATA_PSES_D"
export * as data_pst from "@/utils/ORG/pst/DATA_PST_D"
export * as data_pves from "@/utils/ORG/pves/DATA_PVES_D"

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
