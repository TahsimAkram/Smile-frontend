import { assets } from "../assets/assets";
import React  from "react";
import Title from "./Title";
import PrivacyPolicyItem from "./PrivacyPolicyItem";

const PrivacyPolicy = () => {
  return (
    <div className="my-10">
    <div className="text-center py-8 text-3xl">
      <Title text1={""} text2={"POLICY"} />
    
    </div>
    <div className="flex flex-col sm:flex-row border border-gray-400 h-auto lg:h-[450px]">
    </div>
 <PrivacyPolicyItem/>
  </div>
  )
}

export default PrivacyPolicy