import { cuisineList } from "@/config";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ChangeEvent } from "react";

interface Props {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
}

const CuisineFilter = ({
  isExpanded,
  onChange,
  onExpandedClick,
  selectedCuisines,
}: Props) => {
  const handleCuisineChange = (e: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = e.target.value;
    const isChecked = e.target.checked;

    const newCuisineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisineList);
  };

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="font-semibold text-sm mb-2">Filter by cuisines</div>
        <div
          onClick={() => onChange([])}
          className="text-sm font-semibold mb-2 underline text-sky-500 cursor-pointer"
        >
          Reset Filter
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 10)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);

            return (
              <div key={cuisine} className="flex items-center">
                <input
                  type="checkbox"
                  id={`cuisine_${cuisine}`}
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisineChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={cn(
                    "flex flex-1 items-center cursor-pointer rounded-full text-sm py-2 px-4 font-semibold",
                    isSelected
                      ? "border border-green-500 text-green-500"
                      : "border"
                  )}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </Label>
              </div>
            );
          })}

        <Button
          variant="link"
          onClick={onExpandedClick}
          className="mt-5 flex-1"
        >
          {isExpanded ? (
            <span className="flex items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;
