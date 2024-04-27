import { useFieldArray, useFormContext } from "react-hook-form";
import { FormDescription, FormField, FormItem } from "./ui/form";
import MenuItemInput from "./MenuItemInput";
import { Button } from "./ui/button";

const AddMenuSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-bold text-2xl">Menu</h2>
        <FormDescription>
          Create your menu and give each item a name and a price
        </FormDescription>
      </div>

      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuItemInput
                key={index}
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />

      <Button type="button" onClick={() => append({ name: "", price: 0 })}>
        Add menu item
      </Button>
    </div>
  );
};

export default AddMenuSection;
