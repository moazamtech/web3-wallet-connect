"use client"

import { wagmiAdapter, projectId, networks } from "@/lib/wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createAppKit } from "@reown/appkit/react"
import { mainnet } from "@reown/appkit/networks"
import type { ReactNode } from "react"
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi"

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error("Project ID is not defined")
}

const metadata = {
  name: "Web3 wallet connect",
  description:
    "Modern Web3 wallet connection UI built with Next.js 15, TypeScript & Tailwind CSS. Multi-wallet support, responsive design, open source.",
  url: "http://localhost:3000/",
  icons: ["http://localhost:3000/logo.png"],
}

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: networks,
  defaultNetwork: mainnet, // Production mainnet
  metadata: metadata,
})

interface Web3ProviderProps {
  children: ReactNode
  cookies?: string | null
}

export function Web3Provider({ children, cookies }: Web3ProviderProps) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
 