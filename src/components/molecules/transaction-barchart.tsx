import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/atoms/chart"
export const description = "A bar chart"
const chartData = [
  { month: "Augest", desktop: 186 },
  { month: "September", desktop: 305 },
  { month: "October", desktop: 200 },
  { month: "November", desktop:  140},
  { month: "December", desktop: 250 },
  { month: "January", desktop: 186 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig
export default function ChartBarDefault() {
  return (
    <Card className="relative h-60 md:w-[95%] lg:w-[95%] md:h-63 lg:h-65">
      <h3 className="absolute top-9 right-14 lg:top-10 lg:right-20 text-primary2 font-bold">
          $12,500
        </h3>
      
      <CardContent className="h-56">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart accessibilityLayer data={chartData} barSize={27}>
            <CartesianGrid vertical={false} />
            <XAxis
            
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}