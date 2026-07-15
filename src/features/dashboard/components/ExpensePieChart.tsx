// "use client"
import { LabelList, Pie, PieChart } from 'recharts'
import { Card, CardContent } from '@/components/atoms/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/atoms/chart'
export const description = 'A pie chart with a label list'
const chartData = [
  { browser: 'Entertainment', visitors: 30, fill: 'var(--color-Enertainment)' },
  { browser: 'Investment', visitors: 20, fill: 'var(--color-Investment)' },
  { browser: 'other', visitors: 35, fill: 'var(--color-other)' },
  { browser: 'BillExpense', visitors: 15, fill: 'var(--color-BillExpense)' },
]
const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  Entertainment: {
    label: 'Enertainment',
    color: 'var(--chart-1)',
  },
  Investment: {
    label: 'Investment',
    color: 'var(--chart-4)',
  },
  BillExpense: {
    label: 'Bill Expense',
    color: 'var(--chart-2)',
  },

  other: {
    label: 'Other',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig
export default function ChartPieLabelList() {
  return (
    <Card className="flex  ">
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square md:h-[250px]  lg:h-[310px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" outerRadius={125}>
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={14}
                formatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
