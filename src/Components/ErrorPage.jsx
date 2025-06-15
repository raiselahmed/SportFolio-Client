import React from "react";
import FuzzyText from '../../ERRORPAGE/FuzzyText/FuzzyText'
import { useNavigate } from "react-router";
import { TbArrowBack } from "react-icons/tb";

const ErrorPage = () => {
  // Define hover intensity and enable hover options
  const hoverIntensity = 0.5; // Example value, adjust as needed
  const enableHover = true;  // Set to false if you want no hover effect
   const navigate = useNavigate()

   const goBack =()=>{
    navigate(-1);
  }


  return (
    <div className="flex min-h-screen justify-center items-center ">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
        className="text-6xl font-bold text-red-600"
      >
        404
      </FuzzyText>
      
        <button onClick={goBack} className="btn btn-outline btn- ms-6"><TbArrowBack /></button>
    </div>
  );
};

export default ErrorPage;
