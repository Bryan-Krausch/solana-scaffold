import '../styles/globals.css'
import type { AppProps } from 'next/app'

import WalletContextProvider from '../context/WalletContextProvider'
import {WorkspaceProvider} from "../context/WorkspaceProvider"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <WorkspaceProvider>
        {/* Wallet Button Container */}
        <div className="absolute top-5 right-10">
          <WalletMultiButton />
        </div>
        <Component {...pageProps} />
      </WorkspaceProvider>
    </WalletContextProvider>
  )
}

export default MyApp
