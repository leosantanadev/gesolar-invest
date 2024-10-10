"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

export const description = "A mixed bar chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#f9a826" },
  { browser: "safari", visitors: 200, fill: "#E76E50" },
  { browser: "firefox", visitors: 187, fill: "#274754" },
  { browser: "edge", visitors: 173, fill: "#E8C468" },
  { browser: "other", visitors: 90, fill: "#F4A462" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "GE Invest",
    color: "#f9a826",
  },
  safari: {
    label: "Safari",
    color: "#E76E50",
  },
  firefox: {
    label: "Firefox",
    color: "#274754",
  },
  edge: {
    label: "Edge",
    color: "#E8C468",
  },
  other: {
    label: "Other",
    color: "#F4A462",
  },
} satisfies ChartConfig

export function HeroChart() {
  return (
    <Card className="border-zinc-900">
      <CardHeader>
        <CardTitle className="text-zinc-300">Bar Chart - Mixed</CardTitle>
        <CardDescription className="text-zinc-400">January - June 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="rounded-xl border-zinc-800" hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-zinc-300">
          Trending up by <span className="text-primaryOrange-400">5.2%</span> this month <TrendingUp className="h-4 w-4 text-primaryOrange-400" />
        </div>
        <div className="leading-none text-zinc-500">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
