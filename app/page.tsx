"use client";

import { FormWrap } from "@/components/shared/FormWrap";
import { useState } from "react";
import Image from "next/image"

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="wrapper">
      <div className="w-full relative flex flex-col items-center">
        <div className="relative w-[375px] h-[172px] bg-purple overflow-hidden flex justify-center">
          <Image src='/images/bg-sidebar-mobile.svg' height={172} width={375} alt="bg"/>
          {/* <div className="bg-[#6259FF] h-[400px] w-[400px] absolute -left-[270px] -top-14 rounded-full" />
          <div className="bg-orange h-[192px] w-[192px] absolute -left-[120px] top-[50px] rounded-full" />
          <div className="bg-pink h-[390px] w-[332px] rounded-full absolute -right-[100px] top-[90px]" />
          <div className="w-[20px] h-[5px] rounded-xl bg-white absolute top-[120px] right-[130px] rotate-[130deg]" /> */}
          <div className="flex flex-row gap-4 absolute z-10 mx-auto mt-8 w-fit">
            <div
              className="steps-circle"
              id={`${currentStep == 1 && "step-active"}`}
            >
              1
            </div>
            <div
              className="steps-circle"
              id={`${currentStep == 2 && "step-active"}`}
            >
              2
            </div>
            <div
              className="steps-circle"
              id={`${currentStep == 3 && "step-active"}`}
            >
              3
            </div>
            <div
              className="steps-circle"
              id={`${currentStep == 4 && "step-active"}`}
            >
              4
            </div>
          </div>
        </div>
        <FormWrap currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      </div>
    </div>
  );
}
