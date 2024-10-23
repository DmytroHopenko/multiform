"use client";

import { FirstStep } from "./FirstStep";
import { formSchema } from "@/lib/validator";
import * as z from "zod";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { FourthStep } from "./FourthStep";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { StepButtons } from "./StepButtons";
import { Form } from "../ui/form";
import { useState } from "react";


interface FormWrapProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormWrap = ({ currentStep, setCurrentStep}: FormWrapProps) => {

    const defaultPlan: Plan = {
        title: "Arcade",
        priceM: 9,
        priceY: 90,
    }

    const [year, setYear] = useState<boolean>(false);
    const [selectedPlan, setSelectedPlan] = useState<Plan>(defaultPlan);
    const [selectedThings, setSelectedThings] = useState<AdditionThings[]>([]);
    const [isSubmited, setIsSubmited] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
        },
      });
    
    
    const switchStep = () => {
      switch (currentStep) {
        case 1:
          return <FirstStep form={form}/>;
        case 2:
          return <SecondStep selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} period={year} setPeriod={setYear}/>;
        case 3:
          return <ThirdStep period={year} selectedThings={selectedThings} setSelectedThings={setSelectedThings}/>;
        case 4:
          return <FourthStep period={year} selectedPlan={selectedPlan} selectedThings={selectedThings} setCurrentStep={setCurrentStep} isSubmited={isSubmited}/>;
        default:
          return <FirstStep form={form}/>;
      }
    };

    const checker = form.getValues().name !== "" && form.getValues().email !== "" && form.getValues().phone !== "";

    function onSubmit(values: z.infer<typeof formSchema>){
      const selectedPlanPrice = year ? selectedPlan.priceY : selectedPlan.priceM;
      const selectedPlanTitle = selectedPlan.title;
      const selectedAdditionalThings = selectedThings.map((thing) => ({
        title: thing.addTitle,
        price: year ? thing.addPriceY : thing.addPriceM,
      }));
  
      const finalData:finalList = {
        ...values,
        planTitle: selectedPlanTitle,
        planPrice: selectedPlanPrice,
        additionalThings: selectedAdditionalThings,
        period: year ? "Yearly" : "Monthly",
      };

        setIsSubmited(!isSubmited);
        console.log(finalData);
        form.reset();
  }

  return (
    <div className="w-[343px] h-auto bg-white rounded-lg absolute top-[99px] px-5 py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {switchStep()}
            {!isSubmited && (<StepButtons currentStep={currentStep} setCurrentStep={setCurrentStep} checker={checker}/>)}
          </form>
        </Form>
    </div>
  );
};
