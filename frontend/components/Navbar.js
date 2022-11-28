import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
        
<header class="text-gray-400 bg-gray-900 body-font sticky top-0 z-50">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <Image src="/logo_purple.png" alt="PasswordHut" width={200} height={40} />
    </Link>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center sm:my-2">
        <Link href={'/mycredentials'} class="mr-5 hover:text-white text-lg font-bold text-gray-300">Your Credentials</Link>
      <Link href={'/extension'} class="mr-5 hover:text-white text-lg font-bold text-gray-300">Add Extension</Link>
    </nav>
    {/* <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button */}
    <ConnectButton />
    {/* </button> */}
  </div>
</header>
  )
}

export default Navbar