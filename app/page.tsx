'use client'

import WalletConnect from '@/components/WalletConnect'
import { Github, Star, Coffee, Copy, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Replace these with your actual addresses
  const addresses = {
    usdc: "0x8DFbf2c26710d1872c35CF5560e2355fA44149Ee", // Replace with your USDC address
    solana: "FT3mXPissQBPvXCjC4hrrTxhFkZYmZaMogi9VEq5rbHk" // Replace with your Solana address
  }

  const handleGitHubClick = () => {
    toast.info("Opening GitHub repository", {
      description: "Don't forget to star the project!"
    })
  }

  const handleSponsorClick = () => {
    setIsModalOpen(true)
  }

  const copyToClipboard = async (address: string, type: string) => {
    try {
      await navigator.clipboard.writeText(address)
      toast.success(`${type} address copied!`, {
        description: "Address has been copied to your clipboard"
      })
    } catch (err) {
      toast.error("Failed to copy address", {
        description: "Please try copying manually"
      })
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W3</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Web3 Connect
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSponsorClick}
            className="hidden sm:flex items-center gap-2"
          >
            <Coffee className="w-4 h-4" />
            Sponsor
          </Button>
          
          <Link 
            href="https://github.com/moazamtech/web3-wallet-connect" 
            target="_blank"
            onClick={handleGitHubClick}
          >
            <Button className="flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Star on GitHub</span>
              <Star className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <WalletConnect />
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600">
        <p>Built with ❤️ using Next.js, Reown AppKit & Tailwind CSS</p>
        <p className="text-sm mt-1">Enhanced with Sonner notifications</p>
      </footer>

      {/* Sponsor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Support This Project</h2>
              <p className="text-gray-600">Your support helps maintain and improve this project</p>
            </div>

            {/* Address Cards */}
            <div className="space-y-4">
              {/* USDC Address */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">USDC Address</span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">BEP 20</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sm text-gray-600 break-all flex-1 font-mono">
                    {addresses.usdc}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(addresses.usdc, 'USDC')}
                    className="flex-shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Solana Address */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">Solana Address</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Solana</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sm text-gray-600 break-all flex-1 font-mono">
                    {addresses.solana}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(addresses.solana, 'Solana')}
                    className="flex-shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Thank you for your support! 🙏
              </p>
              <Button 
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}