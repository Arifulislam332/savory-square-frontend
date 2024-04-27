import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Props {
  index: number;
  removeMenuItem: () => void;
}

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex items-end gap-5">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="Burger" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              Price (USD) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="15.99" />
            </FormControl>
          </FormItem>
        )}
      />

      <Button
        variant="destructive"
        type="button"
        onClick={removeMenuItem}
        className="max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
