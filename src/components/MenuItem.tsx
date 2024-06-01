import { MenuItem as TMenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Props {
  item: TMenuItem;
}

const MenuItem = ({ item }: Props) => {
  return (
    <Card className="cursor-pointer">
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
