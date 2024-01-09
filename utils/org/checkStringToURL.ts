type Props = {
  stringToURL: string
}

export const checkStringToURL = ({ stringToURL }: Props) => {
  let checkedToURL = stringToURL
    .split(/\W+/)
    .filter((word) => word.length > 2)
    .join("-")
    .toLowerCase()

  return { checkedToURL }
}
