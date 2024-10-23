import { Button } from "../ui/button"

interface StepProps{
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    checker: boolean;
}

export const StepButtons = ({currentStep, setCurrentStep, checker}: StepProps) => {

    return (
        <div className="w-full h-[72px] bg-white absolute -bottom-[115px] -left-0 flex items-center px-4 rounded-lg">
            {currentStep != 1 && <Button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="bg-transparent hover:bg-transparent text-grey font-bold">Go Back</Button>}
            {currentStep != 4 && <Button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="ml-auto bg-denim hover:bg-denim text-white hover:text-white font-bold" disabled={!checker}>Next Step</Button>}
            {currentStep == 4 && <Button type="submit" className="ml-auto bg-purple font-bold hover:bg-[#928CFF] transition">Confirm</Button>}
        </div>
    )
}