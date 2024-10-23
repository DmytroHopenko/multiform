import { additionalThings } from "@/constants"
import { Checkbox } from "../ui/checkbox"
import { useEffect, useState } from "react";

interface ThirdFormProps{
    period: boolean;
    setSelectedThings: React.Dispatch<React.SetStateAction<AdditionThings[]>>;
    selectedThings: AdditionThings[];
}

export const ThirdStep = ({period, setSelectedThings, selectedThings}: ThirdFormProps) => {

    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    useEffect(() => {
        const selectedIds = selectedThings.map((item) => item.id);
        setCheckedItems(selectedIds);
      }, [selectedThings]);
    
      const toggleAddition = (additionId: number, addition: AdditionThings) => {
        setCheckedItems((prev) =>
          prev.includes(additionId)
            ? prev.filter((id) => id !== additionId)
            : [...prev, additionId]
        );
    
        setSelectedThings((prevState) => {
          const isAlreadySelected = prevState.some((item) => item.id === additionId);
    
          if (isAlreadySelected) {
            return prevState.filter((item) => item.id !== additionId);
          } else {
            return [...prevState, addition];
          }
        });
      };

    return (
        <div>
            <div>
                <span className="text-denim text-[24px] font-bold mb-2">
                    Pick add-ons                
                </span>
                <p className="text-grey text-[16px] font-normal w-[273px]">
                Add-ons help enhance your gaming experience.
                </p>
            </div>
            <div className="flex flex-col gap-4 my-5">
                {additionalThings.map((addition) => (
                    <div className={`flex items-center rounded-lg border border-border-color h-[62px] w-[295px] p-4 gap-4 ${checkedItems.includes(addition.id) && "border-purple bg-very-light-grey"}`} key={addition.id}>
                        <Checkbox checked={checkedItems.includes(addition.id)}
              onCheckedChange={() => toggleAddition(addition.id, addition)}/>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-[14px] text-denim leading-4">{addition.addTitle}</span>
                            <p className="font-medium text-[12px] text-grey leading-3">{addition.description}</p>
                        </div>
                        <p className="ml-auto text-purple text-[12px]">+${period ? addition.addPriceY : addition.addPriceM}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}