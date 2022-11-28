import Head from 'next/head'
import { isMounted } from './hooks/isMounted';
import { useAccount } from 'wagmi';
import AddCredentials from '../components/AddCredentials';

export default function Home() {

  const mounted = isMounted();
  const {address} = useAccount();
  return (
    <div >
      <Head>
        <title>PasswordHut</title>
        <meta name="description" content="Decentralized Password Manager Powered by Lit Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddCredentials className='relative' />
      {/* <div>
        {mounted ? <h1>Address: {address}</h1> : <h1>Not Connected</h1>}
      </div> */}
    </div>
  )
}
