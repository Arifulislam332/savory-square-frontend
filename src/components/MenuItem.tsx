import { MenuItem as TMenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Props {
  item: TMenuItem;
  addToCart: () => void;
}

const MenuItem = ({ item, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${(item.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
