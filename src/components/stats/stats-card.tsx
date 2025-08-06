import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  title: string;
  description: string | number;
  icon: LucideIcon;
};

const StatsCard = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <CardAction>
          <props.icon />
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default StatsCard;
