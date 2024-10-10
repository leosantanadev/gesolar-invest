"use client"

import {
  Bar,
  BarChart,
  LabelList,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
} from "./ui/card"
import {
  ChartContainer,
} from "./ui/chart"

export const description = "A collection of health charts."

export function CarrouselCharts() {
  return (

    <Card className="rounded-none origin-bottom transition duration-300 group-hover:scale-105" x-chunk="charts-01-chunk-4">
        <CardContent className="flex gap-4 p-4 pb-2">
            <ChartContainer
                config={{
                power: {
                    label: "Power",
                    color: "#0c4a6e",
                },
                amount: {
                    label: "Capital Investido",
                    color: "#022c22",
                },
                payback: {
                    label: "Exercise",
                    color: "#c7861e",
                },
                }}
                className="h-[140px] w-full"
            >
                <BarChart
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 10,
                }}
                data={[
                    {
                    activity: "Power",
                    value: (60) * 100,
                    label: "60KW",
                    fill: "var(--color-power)",
                    },
                    {
                    activity: "Amount",
                    value: (90) * 100,
                    label: "RS 90.000,00",
                    fill: "var(--color-amount)",
                    },
                    {
                    activity: "Payback",
                    value: 226 * 100,
                    label: "Rendendo 2,26%",
                    fill: "var(--color-payback)",
                    },
                ]}
                layout="vertical"
                barSize={32}
                barGap={2}
                >
                <XAxis type="number" dataKey="value" hide />
                <YAxis
                    dataKey="activity"
                    type="category"
                    tickLine={false}
                    tickMargin={4}
                    axisLine={false}
                    className="capitalize"
                />
                <Bar dataKey="value" radius={5}>
                    <LabelList
                    position="insideLeft"
                    dataKey="label"
                    fill="white"
                    offset={8}
                    fontSize={12}
                    />
                </Bar>
                </BarChart>
            </ChartContainer>
        </CardContent>
    </Card>
  )
}
