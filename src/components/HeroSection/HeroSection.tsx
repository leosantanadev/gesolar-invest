'use client'

import { ArrowRight } from 'lucide-react';
import { HeroChart } from './HeroChart';

export function HeroSection() {
  return (
    <section className="min-h-[85vh] h-full w-full max-w-screen-xl flex items-center justify-center mx-auto px-4 py-20 lg:px-8 lg:gap-8">
      <div className='flex flex-1 flex-col items-center justify-between gap-12 lg:flex-row'>
        <div>
          <div className="w-full max-w-lg flex flex-col items-start text-left md:items-center md:text-center lg:items-start lg:text-start">
            <p className='block px-6 py-1 border border-zinc-500 rounded-full font-medium text-sm text-zinc-400'>New Release</p>
            
            <h1 className="my-4 text-pretty text-4xl font-bold lg:text-7xl">
              Welcome to Our <span className='text-primaryOrange-500'>Website</span>
            </h1>

            <p className="max-w-xl mb-8 text-zinc-500 font-normal text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2 md:flex-row lg:justify-start md:gap-8">
              <button className="w-full flex items-center justify-center gap-2 bg-primaryOrange-500 px-4 py-2 rounded-md sm:w-auto">
                  Primary
                  <ArrowRight className="size-4" />
              </button>

              <button className="w-full px-4 py-2 border border-zinc-700 rounded-md text-zinc-600 sm:w-auto">
                  Secondary
              </button>
          </div>
        </div>
        
        <div className='w-full max-w-96'>
            <HeroChart />
        </div>
      </div>
    </section>
  );
};