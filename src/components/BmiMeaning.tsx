import React from 'react'
import manEatingImg from '../assets/images/image-man-eating.webp'

const BmiMeaning = () => {
  return (
    <div className='p-4 sm:flex sm:items-center xl:pl-20 '>
     
        <img src={manEatingImg} alt="Man eating" className='sm:w-1/2 xl:w-[40%]' />
    
      <div className='sm:ml-6 xl:pl-20 xl:pr-60'>
        <h1 className='text-2xl font-semibold mt-6 mb-6 xl:text-4xl xl:mt-20'>What your BMI result means</h1>
        <p className='text-sm text-gray-500'>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  )
}

export default BmiMeaning