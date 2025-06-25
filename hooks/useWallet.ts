import { useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { useBalance, useEnsName } from 'wagmi'
import { mainnet } from 'wagmi/chains'

export function useWallet() {
  const { address, isConnected, caipAddress } = useAppKitAccount()
  const { chainId } = useAppKitNetwork()
  
  const { data: balance } = useBalance({
    address: address as `0x${string}` | undefined,
  })
  
  const { data: ensName } = useEnsName({
    address: address as `0x${string}` | undefined,
    chainId: mainnet.id,
  })

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatBalance = (balance: bigint, decimals: number) => {
    const divisor = BigInt(10 ** decimals)
    const formatted = Number(balance / divisor)
    return formatted.toFixed(4)
  }

  return {
    address,
    isConnected,
    chainId,
    caipAddress, // CAIP-10 formatted address (includes chain info)
    balance,
    ensName,
    displayName: ensName || (address ? formatAddress(address) : ''),
    formattedBalance: balance ? formatBalance(balance.value, balance.decimals) : '0',
    balanceSymbol: balance?.symbol || 'ETH'
  }
}