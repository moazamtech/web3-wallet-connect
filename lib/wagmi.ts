import { cookieStorage, createStorage } from "@wagmi/core"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { mainnet, base, optimism, arbitrum, polygon, sepolia } from "@reown/appkit/networks"

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID

if (!projectId) {
  throw new Error("NEXT_PUBLIC_WC_PROJECT_ID is not set")
}

export const networks = [mainnet, base, optimism, arbitrum, polygon, sepolia]

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
})

export const config = wagmiAdapter.wagmiConfig
