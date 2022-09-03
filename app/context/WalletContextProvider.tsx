import {FC, ReactNode} from 'react'
import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react'
import {WalletAdapterNetwork} from '@solana/wallet-adapter-base'
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui'
import * as WalletAdapterWallet from "@solana/wallet-adapter-wallets"
import {useMemo} from 'react'
import { clusterApiUrl } from '@solana/web3.js'
require('@solana/wallet-adapter-react-ui/styles.css')


const WalletContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const network = WalletAdapterNetwork.Devnet
    const endpoint = clusterApiUrl("devnet")
    const wallets = useMemo(
        () => [
          new WalletAdapterWallet.PhantomWalletAdapter(),
          new WalletAdapterWallet.GlowWalletAdapter(),
          new WalletAdapterWallet.SlopeWalletAdapter(),
          new WalletAdapterWallet.TorusWalletAdapter(),
        ],
        [network]
      );

    return(
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletContextProvider