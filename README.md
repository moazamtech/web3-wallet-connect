# 🌐 Web3 Wallet Connect

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A **modern, responsive Web3 wallet connection interface** built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Reown AppKit**. This project provides a clean, user-friendly way to connect multiple Web3 wallets with support for various blockchain networks.

![Web3 Wallet Connect Preview](https://via.placeholder.com/800x400/007AFF/FFFFFF?text=Web3+Wallet+Connect+Preview)

## ✨ Features

- 🔌 **Multi-wallet Support** - Connect with MetaMask, WalletConnect, Coinbase Wallet, and more
- 🌐 **Multi-network** - Support for Ethereum, Polygon, Arbitrum, Base, and testnets
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Beautiful glassmorphism design with smooth animations
- 🔐 **Secure & Reliable** - Built with security best practices
- ⚡ **Optimized Performance** - Fast loading with Next.js 14 App Router
- 🎯 **TypeScript Ready** - Full type safety throughout the application
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔔 **Smart Notifications** - Enhanced user feedback with Sonner toasts
- 🔗 **Blockchain Explorer Integration** - Direct links to view addresses on explorers

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.x | React framework with App Router |
| **TypeScript** | 5.x | Type safety and developer experience |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **Reown AppKit** | 1.x | Web3 wallet connection infrastructure |
| **Wagmi** | 2.x | React hooks for Ethereum |
| **Sonner** | 1.x | Beautiful toast notifications |
| **Lucide React** | Latest | Modern icon library |
| **Radix UI** | Latest | Accessible UI components |

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** / **yarn** / **pnpm**
- A **Reown Project ID** (free at [cloud.reown.com](https://cloud.reown.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/moazamtech/web3-wallet-connect.git
   cd web3-wallet-connect
   Install dependencies
bashnpm install
# or
yarn install
# or
pnpm install

Set up environment variables
bashcp .env.example .env.local
Update your environment variables:
envNEXT_PUBLIC_PROJECT_ID=your_reown_project_id_here

Run the development server
bashnpm run dev
# or
yarn dev
# or
pnpm dev

Open your browser
Navigate to http://localhost:3000 🎉

📁 Project Structure
web3-wallet-connect/
├── 📁 app/                     # Next.js 14 App Router
│   ├── 📄 globals.css         # Global styles with Tailwind
│   ├── 📄 layout.tsx          # Root layout with providers
│   └── 📄 page.tsx            # Home page component
├── 📁 components/             # Reusable components
│   ├── 📁 ui/                 # UI component library
│   │   ├── 📄 button.tsx      # Button component
│   │   ├── 📄 card.tsx        # Card component
│   │   └── 📄 badge.tsx       # Badge component
│   ├── 📄 WalletConnect.tsx   # Main wallet connection component
│   └── 📄 Web3Provider.tsx    # Web3 context provider
├── 📁 lib/                    # Utility functions
│   └── 📄 utils.ts            # Helper functions
├── 📁 public/                 # Static assets
│   └── 📄 favicon.ico         # Favicon
├── 📄 .env.example            # Environment variables template
├── 📄 tailwind.config.js      # Tailwind CSS configuration
├── 📄 tsconfig.json           # TypeScript configuration
└── 📄 package.json            # Dependencies and scripts
🎨 Design Features
Modern UI Components

Glassmorphism Effects - Semi-transparent cards with backdrop blur
Gradient Backgrounds - Beautiful blue to purple gradients
Smooth Animations - Loading states and hover effects
Responsive Grid - Adapts to all screen sizes

UX Enhancements

Smart Loading States - Visual feedback during connections
Toast Notifications - Success, error, and info messages
Address Formatting - Clean display of wallet addresses
One-click Copy - Easy address copying with feedback
Explorer Links - Direct links to blockchain explorers

🔧 Configuration
Environment Variables
Create a .env.local file with:
env# Required - Get from https://cloud.reown.com
NEXT_PUBLIC_PROJECT_ID=your_project_id_here

# Optional - Custom app metadata
NEXT_PUBLIC_APP_NAME="Web3 Wallet Connect"
NEXT_PUBLIC_APP_DESCRIPTION="Modern Web3 wallet connection interface"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
Getting a Reown Project ID

Visit Reown Cloud
Create an account or sign in
Create a new project
Copy your Project ID
Add it to your .env.local file

Supported Networks
The app supports these networks out of the box:

✅ Ethereum Mainnet
✅ Polygon
✅ Arbitrum
✅ Base
✅ Sepolia Testnet

Add more networks in components/Web3Provider.tsx:
typescriptimport { mainnet, polygon, arbitrum, base, sepolia, optimism } from '@reown/appkit/networks'

const networks = [mainnet, polygon, arbitrum, base, optimism, sepolia]
📱 Mobile Support
Fully responsive design includes:

Touch-optimized buttons - Perfect for mobile interaction
Mobile wallet deep linking - Direct app connections
Responsive layouts - Adapts to all screen sizes
Mobile-first approach - Designed for mobile, enhanced for desktop

🎨 Customization
Theme Colors
Customize the color scheme in your Tailwind config:
javascript// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3B82F6', // Blue
          600: '#2563EB',
        },
        secondary: {
          500: '#8B5CF6', // Purple
          600: '#7C3AED',
        }
      }
    }
  }
}
AppKit Theme
Modify the Web3 modal appearance:
typescript// components/Web3Provider.tsx
createAppKit({
  // ... other config
  themeMode: 'light', // or 'dark'
  themeVariables: {
    '--w3m-color-mix': '#007AFF',
    '--w3m-color-mix-strength': 20,
    '--w3m-font-family': 'Inter, sans-serif'
  }
})
🧪 Development Scripts
bash# Development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code
npm run format
🚀 Deployment
Vercel (Recommended)

Push your code to GitHub
Connect your repository to Vercel
Add your environment variables
Deploy! 🚀

Other Platforms
The app works on any platform that supports Next.js:

Netlify
Railway
AWS Amplify
Digital Ocean App Platform

🤝 Contributing
Contributions are welcome! Here's how you can help:
Getting Started

Fork the repository
Create a feature branch: git checkout -b feature/amazing-feature
Make your changes
Add tests if applicable
Commit: git commit -m 'Add amazing feature'
Push: git push origin feature/amazing-feature
Open a Pull Request

Development Guidelines

Follow the existing code style
Use TypeScript strictly
Add comments for complex logic
Test on multiple devices
Update documentation

🐛 Bug Reports
Found a bug? Please create an issue with:

Clear description of the problem
Steps to reproduce the issue
Expected vs actual behavior
Screenshots if applicable
Environment details (OS, browser, etc.)

💡 Feature Requests
Have an idea? Open an issue with:

Clear description of the feature
Use case and motivation
Implementation ideas (optional)

📊 Roadmap

 Dark mode support
 Multi-language support
 Advanced wallet management
 Transaction history
 ENS name resolution
 Wallet balance display
 NFT collection viewer
 DeFi protocol integration

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments
Special thanks to:

Reown - Excellent Web3 infrastructure
Wagmi - React hooks for Ethereum
Next.js - Amazing React framework
Tailwind CSS - Utility-first CSS framework
Vercel - Best deployment platform
Open Source Community - For making this possible

💬 Community & Support

📧 Email: moazamtech@example.com
🐛 Issues: GitHub Issues
💬 Discussions: GitHub Discussions
🐦 Twitter: @moazamtech

⭐ Show Your Support
If this project helped you, please consider:

⭐ Starring the repository
🍴 Forking for your own projects
📢 Sharing with the community
☕ Sponsoring the development


<div align="center">
Built with ❤️ by MoazamTech
Making Web3 accessible to everyone
⬆ Back to Top
</div>
```
📄 Additional Files
.env.example
env# Reown Project ID (Required)
# Get yours at: https://cloud.reown.com
NEXT_PUBLIC_PROJECT_ID=your_project_id_here

# App Metadata (Optional)
NEXT_PUBLIC_APP_NAME="Web3 Wallet Connect"
NEXT_PUBLIC_APP_DESCRIPTION="Modern Web3 wallet connection interface"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
NEXT_PUBLIC_APP_ICON="https://your-domain.com/icon.png"
LICENSE
MIT License

Copyright (c) 2025 MoazamTech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
This README is comprehensive, professional, and highlights all the key technologies (Next.js, TypeScript, Tailwind CSS) prominently. The repository name web3-wallet-connect is perfect for SEO and clarity. The documentation covers everything from setup to deployment, making it easy for other developers to use and contribute to your project!
