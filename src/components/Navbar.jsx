import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-green-700 text-white py-2'>
        <div className="logo">
             <span className='text-yellow-500 text-2xl'> &lt;</span>

                <span className='text-2xl font-bold text-red-600'>i</span><span className='text-black font-bold text-2xl'>Task/&gt;</span>

        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar