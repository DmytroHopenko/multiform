"use client";

import { FormWrap } from "@/components/shared/FormWrap";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="wrapper">
      <div className="w-full md:max-w-[940px] md:mx-auto relative flex flex-col md:flex-row items-center md:bg-white md:p-4 md:rounded-xl lg:shadow-xl">
        <div className="relative w-[375px] h-[172px] md:w-[274px] md:h-[568px] bg-purple md:bg-white md:rounded-lg overflow-hidden flex justify-center">
          <Image
            src="/images/bg-sidebar-mobile.svg"
            height={172}
            width={375}
            alt="bg"
            className="md:hidden"
          />
          <Image 
          src="/images/bg-sidebar-desktop.svg"
          height={568}
          width={274}
          alt="bg"
          />
          <div className="flex flex-row md:flex-col gap-4 md:gap-5 absolute md:left-8 z-10 mx-auto mt-8 w-fit">
            <div className="md:flex md:flex-row md:gap-4 md:items-center">
              <div
                className="steps-circle"
                id={`${currentStep == 1 && "step-active"}`}
              >
                1
              </div>
              <div className="hidden md:flex flex-col">
                <span className="uppercase text-light-blue text-[14px]">Step 1</span>
                <span className="uppercase text-white text-[14px] font-bold">Your info</span>
              </div>
            </div>
            <div className="md:flex md:flex-row md:gap-4 md:items-center">
              <div
                className="steps-circle"
                id={`${currentStep == 2 && "step-active"}`}
              >
                2
              </div>
              <div className="hidden md:flex flex-col">
                <span className="uppercase text-light-blue text-[14px]">Step 2</span>
                <span className="uppercase text-white text-[14px] font-bold">Select plan</span>
              </div>
            </div>
            <div className="md:flex md:flex-row md:gap-4 md:items-center">
              <div
                className="steps-circle"
                id={`${currentStep == 3 && "step-active"}`}
              >
                3
              </div>
              <div className="hidden md:flex flex-col">
                <span className="uppercase text-light-blue text-[14px]">Step 3</span>
                <span className="uppercase text-white text-[14px] font-bold">Add-ons</span>
              </div>
            </div>
            <div className="md:flex md:flex-row md:gap-4 md:items-center">
              <div
                className="steps-circle"
                id={`${currentStep == 4 && "step-active"}`}
              >
                4
              </div>
              <div className="hidden md:flex flex-col">
                <span className="uppercase text-light-blue text-[14px]">Step 4</span>
                <span className="uppercase text-white text-[14px] font-bold">Summary</span>
              </div>
            </div>
          </div>
        </div>
        <FormWrap currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </div>
  );
}
