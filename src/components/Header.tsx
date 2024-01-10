import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <div className='flex flex-col items-center p-4 text-center 
    space-y-4 bg-blue-gray-gradient sm:pb-80 rounded-lg  xl:w-[65%] xl:relative 
    xl:items-start xl:pl-20 xl:pt-10 xl:pr-80 xl:text-left xl:pb-40
    '>
      <img src={logo} alt="logo" className='xl:mb-10' />
      <h1 className='text-4xl font-semibold xl:font-bold xl:text-5xl xl:pb-10'>Body Mass Index Calculator</h1>
      <p className='text-sm'>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>

    </div>
  )
}

export default Header