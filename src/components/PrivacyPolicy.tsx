import { assets } from "../assets/assets";
import React from "react";
import Title from "./Title";
import PrivacyPolicyItem from "./PrivacyPolicyItem";

const PrivacyPolicy = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"PRIVACY"} text2={"POLICY"} />
      </div>
      <PrivacyPolicyItem />
    </div>
  );
};

export default PrivacyPolicy;
