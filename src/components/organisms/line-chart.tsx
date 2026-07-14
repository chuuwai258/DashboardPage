import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { Card, CardContent } from '@/components/atoms/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/atoms/chart'
export const description = 'A line chart'
const chartData = [
  { month: 'July', desktop: 186 },
  { month: 'August', desktop: 305 },
  { month: 'September', desktop: 237 },
  { month: 'October', desktop: 73 },
  { month: 'November', desktop: 209 },
  { month: 'December', desktop: 214 },
  { month: 'January', desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig
export default function ChartLineDefault() {
  return (
    <>
      <Card className="h-58 md:h-64 lg:h-72">
        <CardContent className="h-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
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
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="desktop"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>        
      </Card>
    </>
  )
}
