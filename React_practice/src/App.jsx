import React from 'react'
import Navbar from './components/Navbar'
import Mainphoto from './images/download.webp'
import { ContainerTextFlipDemo } from './components/ContainerTextFlipDemo'
import Box from './components/Box'

const App = () => {
  return (
    <div className='maindiv bg-slate-100'>
      <Navbar />
      <div className='h-[240px] md:h-[380px] lg:h-[540px] overflow-hidden '>
        <aside className='flex justify-center p-3'>
          <p className='text-purple-500'>
            10 years of Ethereum! -
          </p>
          <a href="https://google.com" className='ml-1 text-blue-900'>Join us to celebrate 10 years of Ethereum!</a>
        </aside>
        <img src={Mainphoto} className='lg:h-full lg:w-full' alt="photo" />
      </div>
      <div className='flex flex-col items-center lg:p-21 sm:p-10'>
        <span className='lg:text-5xl font-bitcount text-7xl'><span className='ml-5'>Welcome</span> <span className='sm:ml-30 lg:m-auto'>to</span> <ContainerTextFlipDemo /></span>
        <div className='lg:text-2xl lg:mt-5 lg:text-zinc-500'>
          The leading platform for innovative apps and <span className='ml-15 lg:hidden'>blockchain networks</span> <span className='lg:block lg:pl-32 hidden'>blockchain networks</span>
        </div>
      </div>
      <div className='flex justify-evenly'>
        <Box head="Pick a wallet" body="Create accounts and manage assets" color="text-amber-500"/>
        <Box head="Get ETH" body="The currency of Ethereum" color="text-amber-500" />
        <Box head="Try apps" body="Finance, Gaming, Social" color="text-amber-500" />
        <Box head="Start building" body="Create your first app" color="text-amber-500" />
      </div>
      <section className='my-20 lg:grid lg:grid-cols-bento '>
        <div className='font-inter text-5xl'>A new way to use the internet</div>
      </section>
    </div>

  )
}

export default App