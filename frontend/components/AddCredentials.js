import React from 'react'
import Image from 'next/image'

const AddCredentials = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-12 py-12 mx-auto flex flex-wrap items-center">
    <div class="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 lg:mx-6 content-between">
      <div className='flex flex-row justify-center content-center align-middle space-x-5'>
      <Image src="/lock.png" alt="PasswordHut" width={100} height={100} />
      <h1 class="title-font font-medium text-4xl text-white py-8">Add your Credentials</h1></div>
      <p class="leading-relaxed mt-4 justify-center content-center align-middle">Password Hut Ensures Security by Leveraging Lit infrastructure and IPFS Storage to Securely save your Credentials on Blockchain!</p>
      
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mr-20">
      <h2 class="text-white text-lg font-medium title-font mb-5">Enter Credential Details: </h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-400">Platform</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-400">Email ID or Username</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-400">Password</label>
        <input type="password" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Add</button>
      <p class="text-base font-semibold text-purple-400 mt-3">Generate a Strong Password for Me!</p>
    </div>
  </div>
</section>
  )
}

export default AddCredentials