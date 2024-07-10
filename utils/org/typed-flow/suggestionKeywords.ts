export const enum KEYS_SUGGESTION_KEYWORDS {
  DIAGNOSIS = "diagnosis",
  SYMPTOMS = "symptoms",
}

type SuggestionKeywords_Type = {
  [KEYS_SUGGESTION_KEYWORDS.DIAGNOSIS]: string
  [KEYS_SUGGESTION_KEYWORDS.SYMPTOMS]: string[]
}[]

export const suggestionKeywords: SuggestionKeywords_Type = [
  {
    [KEYS_SUGGESTION_KEYWORDS.DIAGNOSIS]: "ADHD",
    [KEYS_SUGGESTION_KEYWORDS.SYMPTOMS]: [
      "Attention Deficit (AD)",
      "Hyperactivity",
      "Impulsivity",
      "ADD",
    ],
  },
  {
    [KEYS_SUGGESTION_KEYWORDS.DIAGNOSIS]: "Cognitive Impairments",
    [KEYS_SUGGESTION_KEYWORDS.SYMPTOMS]: [
      "Problem Solving",
      "Reasoning",
      "Abstract thinking",
    ],
  },
  {
    [KEYS_SUGGESTION_KEYWORDS.DIAGNOSIS]: "ODD",
    [KEYS_SUGGESTION_KEYWORDS.SYMPTOMS]: [
      "Frequent Anger and Irritability",
      "Argumentative and Defiant Behavior",
      "Vindictiveness",
    ],
  },
]
