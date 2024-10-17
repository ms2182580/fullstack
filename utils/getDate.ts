function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) return "th" // special case for 11th, 12th, 13th
  switch (day % 10) {
    case 1:
      return "st"
    case 2:
      return "nd"
    case 3:
      return "rd"
    default:
      return "th"
  }
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const getDate = () => {
  const today = new Date()

  const monthIndex = today.getMonth()
  const month = MONTHS[monthIndex]

  const day = today.getDate()
  const daySuffix = getDaySuffix(day)

  const year = today.getFullYear()

  return {
    month,
    day,
    daySuffix,
    year,
  }
}
