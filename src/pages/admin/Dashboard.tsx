import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Group,
  MessageCircle,
  ShieldEllipsis,
  User,
  type LucideIcon,
} from "lucide-react";
import moment from "moment";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

export const description = "A line chart with a label";
export default function Dashboard() {
  return (
    <div className="p-3">
      <Card>
        <CardContent>
          <div className="flex  items-center">
            <div className="flex w-[25%] gap-2 items-center">
              <ShieldEllipsis className="size-12" />
              <Input />
              <Button>Search</Button>
            </div>
            <div>{moment().format(" dddd , MMMM Do yyyy ")} </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Widget Icon={User} title={"Users"} value={34} />
        <Widget Icon={MessageCircle} title={"Chats"} value={3} />
        <Widget Icon={Group} title={"Messages"} value={100} />
      </div>
    </div>
  );
}

const Widget = ({
  title,
  value,
  Icon,
}: {
  title: string;
  value: number;
  Icon: LucideIcon;
}) => {
  return (
    <Card>
      <CardContent>
        <div className="">
          <div className="border-4 mx-auto  border-black size-15 flex justify-center items-center  rounded-full">
            {value}
          </div>
          <div className="flex gap-2 items-center ">
            <Icon size={15} />
            <p>{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartLineLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  );
}
