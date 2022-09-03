import { AnchorProvider, Program } from "@project-serum/anchor"
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import {SolanaProgram, IDL} from "./solana_program"
import idl from './solana_program.json';
import {AnchorWallet, useAnchorWallet} from '@solana/wallet-adapter-react'
import { createContext, FC, useMemo } from "react";

interface Workspace {
    program: Program<SolanaProgram>,
    provider: AnchorProvider,
    wallet: AnchorWallet,
    connection: Connection
}

export const WorkspaceContext = createContext<Workspace | null>(null)

const preflightCommitment = "processed"
const commitment = "processed"
const programID = new PublicKey(idl.metadata.address)

export const WorkspaceProvider: FC<any> = ({children}) => {
    const connection = new Connection(clusterApiUrl('devnet'))
    const wallet: any = useAnchorWallet()
    let provider: any
    let program: any

    provider = useMemo(() => {
        if(wallet){
            return new AnchorProvider(connection, wallet, {
                preflightCommitment,
                commitment
            })
        }
    }, [wallet])

    program = useMemo(() => {
        if(wallet && provider){
            return new Program<SolanaProgram>(IDL, programID, provider)
        }
    }, [provider])

    
    
    return (
        <WorkspaceContext.Provider
            value={{
                wallet,
                connection,
                provider,
                program,
            }}
        >
            {children}
        </WorkspaceContext.Provider>
    )
}