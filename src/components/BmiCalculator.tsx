// Import statements
import React, { useState, useEffect } from 'react';
import '../App.css'; // Make sure to have an App.css for additional styling


// BMIFormState interface definition
interface BMIFormState {
  system: 'metric' | 'imperial';
  height: { cm: number; feet: number; inches: number };
  weight: { kg: number; stones: number; pounds: number };
  bmi?: number;
  category?: string;
  idealWeight?: string;
}

// BmiCalculator functional component
const BmiCalculator: React.FC = () => {
  // State initialization for formState
  const [formState, setFormState] = useState<BMIFormState>({
    // Initial state setup
    system: 'imperial',
    height: { cm: 0, feet: 0, inches: 0 },
    weight: { kg: 0, stones: 0, pounds: 0 }
  });

  // useEffect hook for BMI calculation
  useEffect(() => {
    // Function to calculate BMI
    const calculateBMI = () => {
      //Variables
      const { system, height, weight } = formState;
      let bmi = 0;

      // BMI calculation for metric system
      if (system === 'metric') {
        if (height.cm > 0 && weight.kg > 0) {
          bmi = weight.kg / ((height.cm / 100) ** 2);
        }
      } else {
        // BMI calculation for imperial system
        const totalHeightInInches = height.feet * 12 + height.inches;
        const totalWeightInPounds = weight.stones * 14 + weight.pounds;
        if (totalHeightInInches > 0 && totalWeightInPounds > 0) {
          bmi = (totalWeightInPounds / (totalHeightInInches ** 2)) * 703;
        }
      }

      // Setting the calculated BMI, category, and ideal weight in state
      const category = getBMICategory(bmi);
      const idealWeight = getIdealWeight(height, system);
      setFormState(prev => ({ ...prev, bmi, category, idealWeight }));
    }

    // Call the function to calculate BMI
    calculateBMI();

  }, [formState.height, formState.weight, formState.system]);

  // Function to handle measurement system change (metric/imperial)
  const handleSystemChange = (system: 'metric' | 'imperial') => {
    // Update state based on selected system & reset height & weight
    setFormState({
      ...formState, system, height: { cm: 0, feet: 0, inches: 0 },
      weight: { kg: 0, stones: 0, pounds: 0 }
    })

  };

  // Function to handle input changes for height and weight fields
  const handleInputChange = (name: string, value: number) => {
    // Update state based on input change
    setFormState((prev) => ({
      ...prev,
      height: { ...prev.height, [name]: value },
      weight: { ...prev.weight, [name]: value },
    }))
  };

  // Function to render individual input fields
  const renderInputField = (
    name: string,
    label: string,
    value: number,
    onChange: (name: string, value: number) => void
  ) => (
    // Return JSX for input field
    <div className="flex flex-row items-center mb-3 border-2 border-gray-300 rounded-md hover:border-blue-500 focus-within:border-blue-500 flex-grow shrink-0 basis-1/4 p-1">
      <input
        type="number"
        name={name}
        className="p-2 rounded focus:outline-none border-none w-full text-xl font-semibold"
        value={value}
        onChange={(e) => onChange(name, parseFloat(e.target.value))}
      />
      <span className="p-2 text-xl font-semibold">{label}</span>
    </div>
  );

  // Function to get BMI category
  const getBMICategory = (bmi: number): string => {
    // Determine and return BMI category
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Healthy weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  // Function to get ideal weight range
  const getIdealWeight = (height: { feet: number; inches: number; cm: number }, system: 'metric' | 'imperial'): string => {
    // Calculate and return ideal weight range
    const idealBMI = 22.5;
    if (system === 'metric' && height.cm) {
      const idealKg = idealBMI * ((height.cm / 100) ** 2);
      return `${(idealKg - 5).toFixed(1)}kg - ${(idealKg + 5).toFixed(1)}kg`;
    } else if (height.feet && height.inches) {
      const totalHeightInInches = height.feet * 12 + height.inches;
      const idealLbs = idealBMI * (totalHeightInInches ** 2) / 703;
      const idealSt = idealLbs / 14;
      return `${Math.floor(idealSt)}st ${Math.round(idealLbs % 14)}lbs - ${Math.floor(idealSt + 0.5)}st ${Math.round((idealLbs + 10) % 14)}lbs`;
    }
    return '';
  };

  // Component JSX return
  return (
    // Main container for the BMI Calculator
    <div className="container mx-auto p-4  shadow-lg rounded-lg sm:-mt-60 
     bg-white xl:absolute xl:right-40 xl:top-80 xl:w-[40%] xl:rounded-3xl">
      {/* // Heading for the BMI Calculator */}
      <h1 className="text-xl font-bold mb-4">Enter your details below</h1>

      {/* // Radio buttons for system selection (Metric and Imperial) */}
      <div className='flex justify-around mb-6 text-xs'>
        {/* // Radio button for Metric system */}
        <label className="inline-flex items-center mt-3 gap-3">
          <input type="radio" name="system" className='form-radio h-5 w-5 text-blue-600' checked={formState.system === 'metric'} onChange={() => handleSystemChange('metric')} />
          <span className="ml-2 text-gray-700 font-semibold">Metric</span>
        </label>
        {/* // Radio button for Imperial system */}
        <label className="inline-flex items-center mt-3 gap-3">
          <input type="radio" name="system" className='form-radio h-5 w-5 text-blue-600' checked={formState.system === 'imperial'} onChange={() => handleSystemChange('imperial')} />
          <span className="ml-2 text-gray-700 font-semibold">Imperial</span>
        </label>
      </div>

      {/* // Conditional rendering of input fields based on selected measurement system */}
      {formState.system === 'metric' ? (
        // Input fields for Metric system
        <div className="flex flex-col xl:flex-row xl:gap-2">
          <div> <span className='text-xs text-gray-500'>Height</span>
            {renderInputField('cm', 'cm', formState.height.cm, handleInputChange)}
          </div>
          <div>
            <span className='text-xs text-gray-500'>Weight</span>
            {renderInputField('kg', 'kg', formState.weight.kg, handleInputChange)}
          </div>
        </div>
      ) : (

        <div className="">
          <span className='text-xs text-gray-500'>Height</span>
          <div className="flex flex-row justify-between items-center gap-2">
            {renderInputField('feet', 'ft', formState.height.feet, handleInputChange)}
            {renderInputField('inches', 'in', formState.height.inches, handleInputChange)}
          </div>
          <span className='text-xs text-gray-500'>Weight</span>
          <div className="flex flex-row justify-between items-center gap-2">
            {renderInputField('stones', 'st', formState.weight.stones, handleInputChange)}
            {renderInputField('pounds', 'lbs', formState.weight.pounds, handleInputChange)}
          </div>
        </div>
      )}

      {/* // Result display section showing BMI, category, and ideal weight range */}
      <div className="bg-blue-500 text-white p-8 rounded-xl mt-4
      sm:rounded-r-full
      
      ">
        {/* // Conditional rendering for displaying BMI result or welcome message */}
        {formState.bmi !== 0 && formState.bmi !== undefined && formState.bmi != null ? (
          <div className='text-center sm:text-left'>
            Your BMI is...
            <h1 className='text-4xl  mb-3 font-semibold'>{formState.bmi.toFixed(2)}</h1>
            <p className='text-xs'> Your BMI suggests that you are {formState.category}. Your ideal weight is between {formState.idealWeight}.</p>

          </div>
        ) : (
          <div className='text-center  sm:text-left'>
            <h1 className='text-xl  mb-3'>Welcome!</h1>
            <p className='text-xs'> Enter your height and weight, and you'll see your BMI result here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the BmiCalculator component
export default BmiCalculator;
