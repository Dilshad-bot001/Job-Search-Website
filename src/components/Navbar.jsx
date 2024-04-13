import React from 'react'

import logo from '../assets/images/Logo.svg'

const Navbar = () => {
  return (
    <nav className='flex justify-between w-[1238px] mx-[102px] h-[73px] items-center'>
      <div className='flex items-center gap-1'>
        <img src={logo} alt="logo" className='w-8 h-[30px]' />
        <h1 className='text-[32px] font-bold text-[#10141D]'>JOB<span className='font-light'>Link</span></h1>
      </div>
        <ul className='flex text-xl text-[#10141D] gap-[30px]'>
          <a href=""><li>Find Jobs</li></a>
          <a href=""><li>Companies</li></a>
          <a href=""><li>Career Mentoring</li></a>
        </ul>
      <div className='flex playfair text-xl font-bold gap-[9px]'>
        <button className='bg-transparent border-black border rounded-[5px] text-[#10141D] w-[104px] h-[53px] flex items-center justify-center'>Sign In</button>
        <button className='text-[#FEFEF2] bg-[#10141D] rounded-[5px] w-[104px] h-[53px] flex items-center justify-center'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar