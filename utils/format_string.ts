export const format_string = ({
  stringToFormat,
  removeSequence = "",
}: {
  stringToFormat: string
  removeSequence: string
}) => {
  const escapedSequence = removeSequence.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  // Create a regular expression using the escaped sequence
  const regex = new RegExp(escapedSequence, "g")

  const removed = stringToFormat.replace(regex, "")

  return removed.replace(/([A-Z])/g, " $1")
}
