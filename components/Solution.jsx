import React from "react";

export default function Solution() {
  return (
    <div className="container">
      <div className="lg:mt-12 md:mt-8 xl:mx-[150px] lg:mx-[80px] md:mx-2">
        <h2 className="font-bold md:text-[34px] text-[28px] text-center md:mx-0 px-8">
          Solutions that will change your business forever
        </h2>
        <p className="text-center md:mx-8 mx-6 leading-relaxed md:py-12 py-7">
          Some networks believe that by only offering a basic tracking system
          their affiliates can reach a high level of creativity. We like to set
          the bar a lot higher by offering you cutting-edge tech solutions
          together with a team of creative experts.
        </p>
        <div className="flex md:flex-row flex-col gap-6 xl:gap-16 p-4 lg:gap-8 md:gap-2 justify-between">
          <div className="bg-[#381DDB] w-full lg:py-6 lg:px-8 p-4">
            <div className="flex flex-col gap-8 text-white">
              <img
                className="w-[70px] h-[70px]"
                src="/images/web-services.svg"
              />
              <div className="py-4 flex flex-col gap-5">
                <h2 className="font-bold text-[24px]">Web Services</h2>
                <p>Some networks believe that by only offering. </p>
              </div>
              <img
                className="md:w-2 md:h-2 w-[14px] h-[14px] transition-transform duration-300 ease-in-out transform hover:scale-x-150 cursor-pointer"
                src="/images/arrow-right.svg"
              />
            </div>
          </div>
          <div className="border-[#381DDB] border w-full lg:py-6 lg:px-8 p-4">
            <div className="flex flex-col gap-8">
              <img className="w-[70px] h-[70px]" src="/images/crm-icon.svg" />
              <div className="py-4 flex flex-col gap-5">
                <h2 className="font-bold text-[24px]">CRM Product</h2>
                <p>Some networks believe that by only offering. </p>
              </div>
              <img
                className="md:w-2 md:h-2 w-[14px] h-[14px] transition-transform duration-300 ease-in-out transform hover:scale-x-150 cursor-pointer"
                src="/images/arrow-right-blue.svg"
              />
            </div>
          </div>
          <div className="border-[#381DDB] border w-full lg:py-6 lg:px-8 p-4">
            <div className="flex flex-col gap-8">
              <img className="w-[70px] h-[70px]" src="/images/smartphone.svg" />
              <div className="py-4 flex flex-col gap-5">
                <h2 className="font-bold text-[24px]">Mobile App</h2>
                <p>Some networks believe that by only offering. </p>
              </div>
              <img
                className="md:w-2 md:h-2 w-[14px] h-[14px] transition-transform duration-300 ease-in-out transform hover:scale-x-150 cursor-pointer"
                src="/images/arrow-right-blue.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
