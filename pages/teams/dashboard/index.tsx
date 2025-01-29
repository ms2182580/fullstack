import { INDEX_TeamsDashboard } from "@/components/teams/dashboard"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export default function PAGES_Dashboard() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <INDEX_TeamsDashboard />
    </QueryClientProvider>
  )
}
