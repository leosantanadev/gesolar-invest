'use client';

import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from './ui/button';
import type { CarouselApi } from './ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import { CarrouselCharts } from './CarrouselChart';

const data = [
  {
    id: 'item-1',
    title: 'Usina localizada no interior de são paulo de 30KW',
    summary:
      'O capital investido desse projeto é de R$ 90.000,00 e ele tem um retorno de 2,26%',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    chartData: [{
      activity: "Usina",
      value: (30) * 100,
      label: "30KW",
      fill: "var(--color-power)",
      },
      {
      activity: "Capital Investido",
      value: (90) * 100,
      label: "RS 90.000,00",
      fill: "var(--color-amount)",
      },
      {
      activity: "Retorno Mensal",
      value: 176 * 100,
      label: "Rendendo 1,76%",
      fill: "var(--color-payback)",
    },
    {
      activity: "Captado",
      value: (70) * 100,
      label: "70%",
      fill: "var(--chart-3)",
    }]
  },
  {
    id: 'item-2',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    chartData: [{
      activity: "Unica",
      value: (60) * 100,
      label: "60KW",
      fill: "var(--color-power)",
      },
      {
      activity: "Capital Investido",
      value: (180) * 100,
      label: "RS 180.000,00",
      fill: "var(--color-amount)",
      },
      {
      activity: "Retorno Mensal",
      value: 206 * 100,
      label: "Rendendo 2,6%",
      fill: "var(--color-payback)",
    },
    {
      activity: "Captado",
      value: (25) * 100,
      label: "25%",
      fill: "var(--chart-3)",
    }]
  },
  {
    id: 'item-3',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    chartData: [{
      activity: "Power",
      value: (75) * 100,
      label: "75KW",
      fill: "var(--color-power)",
      },
      {
      activity: "Amount",
      value: (250) * 100,
      label: "RS 250.000,00",
      fill: "var(--color-amount)",
      },
      {
      activity: "Payback",
      value: 186 * 100,
      label: "Rendendo 1,86%",
      fill: "var(--color-payback)",
    },
    {
      activity: "Captado",
      value: (90) * 100,
      label: "90%",
      fill: "var(--chart-3)",
    }]
  },
];

export function CasesSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="min-h-[80vh] h-full w-full max-w-screen-xl mx-auto px-4 py-12 lg:px-8">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className='flex items-start flex-col'>
            <h2 className="my-4 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Conheça e invista nos projetos
            </h2>
          </div>

          <div className="mt-8 flex shrink-0 items-center justify-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-4 mr-4 2xl:ml-[calc(50vw-700px+5] 2xl:mr-[calc(50vw-700px+16px))]">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-[20px] md:max-w-[452px]"
              >
                <a
                  href={item.href}
                  className="group flex flex-col justify-between"
                >
                  <div className='h-full'>
                    <div className="flex aspect-[3/2] text-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative size-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="size-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CarrouselCharts data={item.chartData}/>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
