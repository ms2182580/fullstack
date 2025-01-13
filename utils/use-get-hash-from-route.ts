type Props = {
  hashToCheck: string | ""
  acceptedHash: string | string[] | null
}

type Return = {
  foundedHash: boolean
}

export const useGetHashFromRoute = ({
  hashToCheck = "",
  acceptedHash = null,
}: Props): Return => {
  if (hashToCheck === "") {
    return { foundedHash: false }
  }

  const getHash = hashToCheck.split("#")[1].toLowerCase()

  const routeHaveHash =
    (Array.isArray(acceptedHash) &&
      acceptedHash.some((x) => x.toLowerCase() === getHash)) ||
    (typeof acceptedHash === "string" && acceptedHash.toLowerCase() === getHash)

  if (routeHaveHash) {
    return {
      foundedHash: true,
    }
  } else {
    return {
      foundedHash: false,
    }
  }
}
