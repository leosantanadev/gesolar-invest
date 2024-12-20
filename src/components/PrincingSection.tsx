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
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
              Nossos Planos
            </h2>
            
            <p className="mb-4 max-w-xl text-sm text-zinc-500 md:text-base">
              Conheça os planos de cotas de investimento adequados ao seu perfil​
            </p>
          </div>

          <div className="flex flex-col flex-wrap items-stretch gap-6 lg:flex-row">
            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle className='mb-4'>
                  <p className='text-xl font-semibold'>Básico</p>
                </CardTitle>
                <span className="text-lg font-medium">Projeto: <span className='text-primaryOrange-500'>R$ 100.000,00</span></span>
                <span className="text-lg font-medium">Valor da cota:  <span className='text-primaryOrange-500'>R$ 10.000,00</span></span>
                <span className="text-lg font-medium">
                  Rendimento médio: <span className='text-primaryOrange-500'>1,7%</span> ao mes
                </span>
              </CardHeader>
              <CardContent>
                <Separator className="mb-2" />
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Cotas disponiveis: 10</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Prazo: 10 anos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Aprox. 200% do CDI</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="">
                <a href='https://w.app/DeG5rn' target='_blank' className="w-full flex items-center justify-center ">
                  Saber mais
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>

            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle className='mb-4'>
                  <p className='text-xl font-medium'>Pro</p>
                </CardTitle>
                <span className="text-lg font-medium">Projeto: <span className='text-primaryOrange-500'>R$ 200.000,00</span></span>
                <span className="text-lg font-medium">Valor da cota:  <span className='text-primaryOrange-500'>R$ 50.000,00</span></span>
                <span className="text-lg font-medium">
                  Rendimento médio: <span className='text-primaryOrange-500'>1,8%</span> ao mes
                </span>
              </CardHeader>
              <CardContent>
                <Separator className="mb-2" />
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Cotas disponiveis: 04</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Prazo: 10 anos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Aprox. 210% do CDI</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="">
                <a href='https://w.app/DeG5rn' target='_blank' className="w-full flex items-center justify-center ">
                  Saber mais
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>

            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle className='mb-4'>
                  <p className='text-xl font-semibold'>Exclusivo</p>
                </CardTitle>
                <span className="text-lg font-medium">Projeto: <span className='text-primaryOrange-500'>R$ 250.000,00</span></span>
                <span className="text-lg font-medium">Valor da cota:  <span className='text-primaryOrange-500'>R$ 250.000,00</span></span>
                <span className="text-lg font-medium">
                  Rendimento médio: <span className='text-primaryOrange-500'>2,0%</span> ao mes
                </span>
              </CardHeader>
              <CardContent>
                <Separator className="mb-2" />
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Cotas disponiveis: Unica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Prazo: 10 anos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Aprox. 224% do CDI</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="">
                <a href='https://w.app/DeG5rn' target='_blank' className="w-full flex items-center justify-center ">
                  Saber mais
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>

            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle className='mb-4'>
                  <p className='text-xl font-semibold'>Personalizado</p>
                </CardTitle>
                <span className="text-lg font-medium">Projeto: <span className='text-primaryOrange-500'>Comodato</span></span>
                <span className="text-lg font-medium">Valor da cota:  <span className='text-primaryOrange-500'>R$ 128.889,00</span></span>
                <span className="text-lg font-medium">
                  Rendimento médio: <span className='text-primaryOrange-500'>1,5%</span> ao mes
                </span>
                <span className="text-lg font-medium">
                  Retorno do capital: <span className='text-primaryOrange-500'>1,37%</span> ao mes
                </span>
              </CardHeader>
              <CardContent>
                <Separator className="mb-2" />
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Cotas disponiveis: Unica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Prazo: 72 meses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Garantia: <span className='text-primaryOrange-500'>contrato comodato</span></span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="">
                <a href='https://w.app/DeG5rn' target='_blank' className="w-full flex items-center justify-center ">
                  Saber mais
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
