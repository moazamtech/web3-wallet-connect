'use client'

import { useState, useEffect } from 'react'
import { Settings, Wallet, Copy, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAppKit } from '@reown/appkit/react'
import { useAppKitAccount, useAppKitState } from '@reown/appkit/react'
import { toast } from "sonner"

function WalletConnect() {
  const { open } = useAppKit()
  const { address, isConnected, status } = useAppKitAccount()
  const { activeChain } = useAppKitState()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const formatAddress = (address: string) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success("Address copied to clipboard!", {
        duration: 2000,
        description: `${formatAddress(text)} copied`
      })
    } catch (err) {
      toast.error("Failed to copy address", {
        description: "Please try again or copy manually",
        duration: 2000,
      })
    }
  }

  const handleConnect = () => {
    open()
    toast.info("Opening wallet connection...", {
      description: "Choose your preferred wallet from the list"
    })
  }

  const handleExplorerClick = () => {
    const explorerUrl = getExplorerUrl(activeChain, address!)
    window.open(explorerUrl, '_blank')
    toast.info("Opening blockchain explorer", {
      description: "View your address on the blockchain"
    })
  }

  const getExplorerUrl = (chain: string, address: string) => {
    const explorers: { [key: string]: string } = {
      'ethereum': 'https://etherscan.io/address/',
      'polygon': 'https://polygonscan.com/address/',
      'arbitrum': 'https://arbiscan.io/address/',
      'base': 'https://basescan.org/address/',
      'sepolia': 'https://sepolia.etherscan.io/address/',
    }
    
    const baseUrl = explorers[chain?.toLowerCase()] || explorers['ethereum']
    return `${baseUrl}${address}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-800'
      case 'connecting': return 'bg-yellow-100 text-yellow-800'
      case 'disconnected': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Show connection status changes
  useEffect(() => {
    if (mounted && isConnected && address) {
      toast.success("Wallet connected successfully!", {
        description: `Connected to ${formatAddress(address)}`,
        duration: 3000,
      })
    }
  }, [isConnected, address, mounted])

  if (!mounted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex items-center justify-center p-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Main Connection Card */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {isConnected ? 'Wallet Connected' : 'Connect Your Wallet'}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {isConnected 
              ? 'Your wallet is successfully connected'
              : 'Connect your wallet to start using Web3 features'
            }
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {isConnected ? (
            <div className="space-y-4">
              {/* Status Badge */}
              <div className="flex justify-center">
                <Badge className={`${getStatusColor(status)} border-0`}>
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Badge>
              </div>

              {/* Address Display */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Address:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(address!)}
                    className="h-6 px-2 hover:bg-gray-200"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <p className="font-mono text-sm bg-white px-3 py-2 rounded border">
                  {formatAddress(address!)}
                </p>
              </div>

              {/* Chain Info */}
              {activeChain && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-sm font-medium text-gray-700">Network:</span>
                  <p className="text-sm mt-1 capitalize">{activeChain}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleConnect}
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-gray-50"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Button>
                <Button
                  onClick={handleExplorerClick}
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-gray-50"
                >
                  <ExternalLink className="w-4 h-4" />
                  Explorer
                </Button>
              </div>
            </div>
          ) : (
            <Button
              onClick={handleConnect}
              className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              disabled={status === 'connecting'}
            >
              {status === 'connecting' ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Connecting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5" />
                  Connect Wallet
                </div>
              )}
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Features Card */}
      <Card className="shadow-lg border-0 bg-white/60 backdrop-blur-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Multi-wallet support
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Responsive design
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Modern UI/UX
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              Open source
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default WalletConnect