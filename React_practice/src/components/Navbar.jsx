import React from 'react'
import EthLogo from '../images/ethereum.svg'

const Navbar = () => {
  return (
    <>
        <nav className='ml-2 mr-2 sticky top-2 bg-slate-500 flex pl-5 justify-between pr-30 rounded-b-sm h-19'>
            <div className='flex gap-5 items-center '>
                <img src={EthLogo} className='h-20 ' alt="" />
                <ul className='hidden sm:hidden md:flex gap-10'>
                    <li>Learn</li>
                    <li>Use</li>
                    <li>Build</li>
                    <li>Participate</li>
                    <li>Research</li>
                </ul>
            </div>
            <div className='flex  gap-10'>
                <button>hello </button>
                <button>he</button>
                <button>hey</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar