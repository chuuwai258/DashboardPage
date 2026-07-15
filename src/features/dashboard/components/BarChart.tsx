import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Card, CardContent, CardHeader } from '@/components/atoms/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/atoms/chart'
export const description = 'A multiple bar chart'
const chartData = [
  { month: 'Saturday', deposit: 350, widthdraw: 170 },
  { month: 'Sunday', deposit: 230, widthdraw: 100 },
  { month: 'Monday', deposit: 230, widthdraw: 190 },
  { month: 'Tuesday', deposit: 340, widthdraw: 240 },
  { month: 'Wednesday', deposit: 150, widthdraw: 150 },
  { month: 'Thusday', deposit: 280, widthdraw: 170 },
  { month: 'Friday', deposit: 250, widthdraw: 140 },
]
const chartConfig = {
  deposit: {
    label: 'Deposit',
    color: 'var(--chart-3)',
  },
  widthdraw: {
    label: 'Widthdraw',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig
export default function ChartBarMultiple() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-7 justify-end px-15">
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full bg-[var(--color-chart-3)]" />
          <span className="text-base">Deposit</span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="size-4 rounded-full "
            style={{ backgroundColor: 'var(--chart-5)' }}
          />
          <span className="text-base">Widthdraw</span>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full md:h-63 lg:h-70">
          <BarChart accessibilityLayer data={chartData} barSize={15}>
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
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="deposit" fill="var(--color-deposit)" radius={8} />
            <Bar dataKey="widthdraw" fill="var(--color-widthdraw)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
