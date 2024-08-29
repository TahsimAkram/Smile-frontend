import { assets } from "../assets/assets";
import React  from "react";
import Title from "./Title";

const CancellationPolicy = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"CANCELLATION"} text2={"POLICY"} />
      
      </div>
      <div className="flex flex-col sm:flex-row border border-gray-400 h-auto lg:h-[450px]">
        <img className="w-full" src={assets.cancellation_banner} alt="" />
      </div>
      <h1 className="text-2xl">Cancellation before shipment (Only valid on orders placed & delivery in India):</h1>
       <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
    </div>
  );
};

export default CancellationPolicy;
