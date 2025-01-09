type Props = {
  routeToCheck: string
  acceptedHash: string | string[] | null
}

type Return = {
  foundedHash: boolean
}

export const useGetHashFromRoute = ({
  routeToCheck,
  acceptedHash = null,
}: Props): Return => {
  if (!routeToCheck.includes("#")) {
    return { foundedHash: false }
  }

  const getHash = routeToCheck.split("#")[1].toLowerCase()

  const routeHaveHash =
    (Array.isArray(acceptedHash) &&
      acceptedHash.some((x) => x.toLowerCase() === getHash)) ||
    (typeof acceptedHash === "string" && acceptedHash.toLowerCase() === getHash)

  if (routeHaveHash) {
    return { foundedHash: true }
  } else {
    return { foundedHash: false }
  }
}
