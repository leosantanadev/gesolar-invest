'use client';

import { ArrowRight, CircleCheck } from 'lucide-react';
import { useState } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Separator } from './ui/separator';

export function PrincingSection () {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="min-h-[85vh] h-full w-full max-w-screen-xl mx-auto px-4 py-16 pb-24 lg:px-8">
      <div>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <p className='px-6 py-1 border border-zinc-500 rounded-full font-medium text-sm text-zinc-400'>
            Nossos Planos
          </p>

          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
            Pricing
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            Check out our affordable pricing plans
          </p>

          <div className="flex flex-col flex-wrap items-stretch gap-6 lg:flex-row">
            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Plus</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For personal use
                </p>
                <span className="text-4xl font-bold">
                  {isYearly ? '$15' : '$19'}
                </span>
                <p className="text-muted-foreground">
                  Rendendo 1,9% ao mes
                </p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </button>
              </CardFooter>
            </Card>

            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Pro</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For professionals
                </p>
                <span className="text-4xl font-bold">
                  {isYearly ? '$35' : '$49'}
                </span>
                <p className="text-muted-foreground">
                  Rendendo 2,26% ao mes
                </p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <p className="mb-3 text-lg font-semibold">
                  Everything in Plus, and:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </button>
              </CardFooter>
            </Card>

            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Pro</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For professionals
                </p>
                <span className="text-4xl font-bold">
                  {isYearly ? '$35' : '$49'}
                </span>
                <p className="text-muted-foreground">
                Rendendo 2,68% ao mes
                </p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <p className="mb-3 text-lg font-semibold">
                  Everything in Plus, and:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </button>
              </CardFooter>
            </Card>

            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Personalizado</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For professionals
                </p>
                <span className="text-4xl font-bold">
                  $80
                </span>
                <p className="text-muted-foreground">
                Rendendo 2,68% - 3,5% ao mes
                </p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <p className="mb-3 text-lg font-semibold">
                  Everything in Plus, and:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
