"use client";

import { plan } from "@/constants";
import Image from "next/image"
import { Switch } from "../ui/switch";

interface SecondStepProps{
    selectedPlan: Plan | null;
    setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
    period: boolean;
    setPeriod: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SecondStep = ({selectedPlan, setSelectedPlan, period, setPeriod}: SecondStepProps) => {
    return (
        <div>
            <div>
                <span className="text-denim text-[24px] font-bold mb-2">
                Select your plan
                </span>
                <p className="text-grey text-[16px] font-normal w-[273px]">
                You have the option of monthly or yearly billing.
                </p>
            </div>
            <div className="flex flex-col gap-4 my-5">
                {plan.map((plan) => (
                    <div className="flex rounded-lg border border-border-color h-auto w-[295px] p-4 gap-4" key={plan.title} onClick={() => setSelectedPlan(plan)} id={`${selectedPlan?.title == plan.title && "active-plan"}`}>
                        <div>
                            <Image src={plan.img} height={40} width={40} alt={plan.title}/>
                        </div>
                        <div>
                            <span className="text-denim text-[16px] font-bold mb-2">
                                {plan.title}
                            </span>
                            <p className="text-grey text-[14px] leading-[20px] mb-2">
                                ${period ? plan.priceY : plan.priceM}/{period ? "yr" : "mo"}
                            </p>
                            {period && <span className="text-[12px]">2 month free</span>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full h-[48px] bg-very-light-grey flex items-center justify-center gap-4">
                <span>Month</span>
                <Switch checked={period} onCheckedChange={() => setPeriod(!period)}/>
                <span>Year</span>
            </div>
        </div>
    ) 
}