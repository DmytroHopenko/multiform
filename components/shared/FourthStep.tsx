import React from "react";
import Image from "next/image"

interface FinalListProps {
  period: boolean;
  selectedPlan: Plan;
  selectedThings: AdditionThings[];
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isSubmited: boolean;
}

export const FourthStep = ({
  period,
  selectedPlan,
  selectedThings,
  setCurrentStep,
  isSubmited,
}: FinalListProps) => {
  const totalPrice = selectedThings.reduce(
    (acc, thing) => acc + (period ? thing.addPriceY : thing.addPriceM),
    period ? selectedPlan.priceY : selectedPlan.priceM
  );

  return (
    <div>
      {isSubmited ? (
        <div className="flex flex-col justify-center items-center py-10 mt-[80px]">
          <div className="mb-5">
            <Image src="/images/icon-thank-you.svg" height={56} width={56} alt="thx" className="md:size-[80px]"/>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-denim text-[24px] md:text-[32px] font-bold mb-3">Thank you!</span>
            <p className="text-grey text-[16px] leading-5 text-center w-[295px] md:w-full">
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div>
            <span className="text-denim text-[24px] md:text-[32px] font-bold mb-2">
              Finishing up
            </span>
            <p className="text-grey text-[16px] font-normal w-[273px] md:w-full">
              Double-check everything looks OK before confirming.
            </p>
          </div>
          <div className="flex flex-col bg-very-light-grey p-4 rounded-lg mt-5">
            <div
              className={`flex justify-between items-center ${
                selectedThings.length !== 0 && "border-b-[1px] border-[#D3D3D3]"
              }  ring-offse pb-4`}
            >
              <div className="flex flex-col">
                <span className="text-denim font-bold text-[14px]">
                  {selectedPlan.title} ({period ? "Yearly" : "Monthly"})
                </span>
                <span
                  className="cursor-pointer text-grey font-medium text-[14px] leading-5 underline"
                  onClick={() => setCurrentStep(2)}
                >
                  Change
                </span>
              </div>
              <p className="text-denim text-[14px] leading-[20px] font-bold">
                ${period ? selectedPlan.priceY : selectedPlan.priceM}/
                {period ? "yr" : "mo"}
              </p>
            </div>
            <div
              className={`flex flex-col gap-1 md:gap-5 ${
                selectedThings.length !== 0 && "pt-4"
              }`}
            >
              {selectedThings.map((thing) => (
                <div className="flex justify-between" key={thing.id}>
                  <span className="text-grey font-bold text-[14px] leading-[20px]">
                    {thing.addTitle}
                  </span>
                  <span className="text-denim text-[14px leading-[20px]">
                    +${period ? thing.addPriceY : thing.addPriceM}/
                    {period ? "yr" : "mo"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between pt-4 md:pt-8 pl-4 pr-4">
            <p className="text-grey text-[14px leading-5]">
              Total ({period ? "per year" : "per month"})
            </p>
            <span className="text-[16px] text-purple font-bold">
              +${totalPrice}/{period ? "yr" : "mo"}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
