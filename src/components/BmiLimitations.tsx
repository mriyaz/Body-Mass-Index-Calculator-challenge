import React from 'react';
import genderIcon from '../assets/images/icon-gender.svg';
import ageIcon from '../assets/images/icon-age.svg';
import muscleIcon from '../assets/images/icon-muscle.svg';
import pregnancyIcon from '../assets/images/icon-pregnancy.svg';
import raceIcon from '../assets/images/icon-race.svg';

type LimitationCardProps = {
  icon: string;
  alt: string;
  heading: string,
  ptext: string,
  classname?: string,

};

const LimitationCard: React.FC<LimitationCardProps> = ({ icon, alt, heading, ptext, classname }) => (
  <div className={`mb-4 shadow-custom shadow-gray-200 rounded-lg p-4 bg-white
  
  sm:w-[45%] xl:w-[23%] xl:h-[85%] ${classname}`}>
    <div className="flex mb-6 ">
      <img src={icon} alt={alt} />
      <h1 className="text-lg font-semibold ml-2">{heading}
      </h1>
    </div>
    <p className='text-sm text-gray-500'>{ptext}
    </p>
  </div>
)

const BmiLimitations = () => {

  return (
    <div className='p-4 sm:ml-4 xl:relative xl:mt-20 xl:mb-[40%]'>
      <div className='text-center xl:text-left xl:pl-16 xl:pr-[60%] '>
        <h1 className='text-2xl font-semibold mt-6 mb-6 xl:text-4xl'>Limitations of BMI</h1>
        <p className='text-sm text-gray-500'>
          Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
        </p>
      </div>

      <div className='mt-8 sm:flex sm:flex-wrap sm:gap-4 sm:justify-center '>
        <LimitationCard icon={genderIcon} alt='Gender Icon' heading='Gender'
          ptext="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI." classname='xl:absolute xl:top-[10%] xl:right-[15%]' />

        <LimitationCard icon={ageIcon} alt='Age Icon' heading='Age'
          ptext="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          classname='xl:absolute xl:top-[108%] xl:right-[35.5%]' />

        <LimitationCard icon={muscleIcon} alt='Muscle Icon' heading='Muscle'
          ptext="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          classname='xl:absolute xl:top-[108%] xl:right-[10%]' />

        <LimitationCard icon={pregnancyIcon} alt='Pregnancy Icon' heading='Pregnancy'
          ptext="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy 
          BMI is advisable to minimise health risks for both mother and child." classname='xl:absolute xl:top-[207%] xl:right-[45.5%]' />


        <LimitationCard icon={raceIcon} alt='Race Icon' heading='Race'
          ptext="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          classname='xl:absolute xl:top-[207%] xl:right-[20%]' />

      </div>

    </div>
  )
}

export default BmiLimitations