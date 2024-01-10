import React from 'react'
import eatingIcon from '../assets/images/icon-eating.svg';
import exerciseIcon from '../assets/images/icon-exercise.svg';
import sleepIcon from '../assets/images/icon-sleep.svg';


type TipRendererProps = {
  icon: string;
  alt: string;
  heading: string,
  ptext: string

};

const BmiTips = () => {

  const TipRenderer: React.FC<TipRendererProps> = ({ icon, alt, heading, ptext }) => (
    <div className='mb-8 sm:flex sm:items-center xl:flex-col xl:items-start '>
      <img src={icon} alt={alt} />
      <div className='sm:ml-6 xl:ml-0'>
        <h1 className="text-xl font-semibold mt-6 mb-6">{heading}</h1>
        <p className='text-sm text-gray-500'>{ptext}
        </p>
      </div>
    </div>
  )


  return (
    <div className='p-4 mt-4 sm:ml-4 xl:flex xl:justify-between xl:gap-4 xl:pl-20 xl:mt-20 '>
      <TipRenderer icon={eatingIcon} alt='Eating icon' heading='Healthy eating' ptext='Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.' />

      <TipRenderer icon={exerciseIcon} alt='Exercise icon' heading='Regular exercise' ptext='Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.' />

      <TipRenderer icon={sleepIcon} alt='Sleep icon' heading='Adequate sleep' ptext='Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.' />

    </div>
  )
}

export default BmiTips