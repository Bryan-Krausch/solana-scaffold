import type { NextPage } from 'next'
import {useWallet} from "@solana/wallet-adapter-react"
import {useContext} from 'react'
import { WorkspaceContext } from '../context/WorkspaceProvider'


const Home: NextPage = () => {
  const {publicKey} = useWallet()

    const program = publicKey && useContext(WorkspaceContext)

    console.log('====================================');
    console.log(program);
    console.log('====================================');
  return (
    <div>
      <p className='text-red-500'>Hello World</p>
    </div>
  )
}

export default Home
