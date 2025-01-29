import { useQuery } from "@tanstack/react-query"

type Post = {
  id: number
  title: string
  body: string
}

export const fetchPosts = async () => {
  const response = await fetch("/api/mongo_data")
  const data = await response.json()
  return data
}

type UsePostsType = {
  internalKey?: string
}

export const usePosts = ({
  internalKey = "getMongoData",
}: UsePostsType = {}) => {
  return useQuery({
    queryKey: [internalKey],
    queryFn: () => fetchPosts(),
    enabled: false,
    refetchOnWindowFocus: false,
  })
}
