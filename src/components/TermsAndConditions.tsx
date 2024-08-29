import { assets } from "../assets/assets";
import React  from "react";
import Title from "./Title";
import { termsAndConditionsData } from "../data/termsAndConditions";


const TermsAndConditions = () => {
  return (
    <div className="my-10">
    <div className="text-center py-8 text-3xl">
      <Title text1={"TERMS"} text2={"AND CONDITIONS"} />
    
    </div>
    {/* <div className="flex flex-col sm:flex-row border border-gray-400 h-auto lg:h-[450px]">
      <img className="w-full" src={assets.cancellation_banner} alt="" />
    </div> */}
    {termsAndConditionsData.map((item)=>{
      return <div key={item.id}>  <h1 className="text-2xl mt-4">{item.title}</h1>
      <p className="m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2 text-justify">
       {item.description}
       </p></div>
    })}
  
  </div>
  )
}

export default TermsAndConditions