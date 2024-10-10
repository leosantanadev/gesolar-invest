import { PersonStanding, Timer, Zap, ZoomIn } from 'lucide-react';

export function HowWeWorkSection() {
  return (
    <section className="min-h-[65vh] h-full w-full max-w-screen-xl mx-auto px-4 py-16 lg:px-8">
      <div className="container">
        <div className="flex flex-col items-start">
          <p className='px-6 py-1 border border-zinc-500 rounded-full font-medium text-sm text-zinc-400'>
            Nosso diferencial
          </p>

          <h2 className="mt-4 mb-8 text-3xl font-medium lg:text-4xl">
            A better way to build websites
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primaryOrange-500 md:size-12">
              <Timer className="size-5 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Performance
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
          
          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primaryOrange-500 md:size-12">
              <Zap className="size-5 md:size-6" />
            </span>
            
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Innovation
                <span className="absolute -left-px hidden h-6 w-px bg-primaryOrange-500 md:inline-block"></span>
              </h3>
              <p className="text-sm text-zinc-500 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>

          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primaryOrange-500 md:size-12">
              <ZoomIn className="size-5 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Quality
                <span className="absolute -left-px hidden h-6 w-px bg-primaryOrange-500 md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>

          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primaryOrange-500 md:size-12">
              <PersonStanding className="size-5 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Accessibility
                <span className="absolute -left-px hidden h-6 w-px bg-primaryOrange-500 md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};