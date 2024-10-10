import {
    PersonStanding,
    Timer,
    Zap,
    ZoomIn,
  } from 'lucide-react';
  
  const features = [
    {
      title: 'Performance',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
      icon: <Timer className="size-4 md:size-6" />,
    },
    {
      title: 'Innovation',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: 'Quality',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
      icon: <ZoomIn className="size-4 md:size-6" />,
    },
    {
      title: 'Accessibility',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
      icon: <PersonStanding className="size-4 md:size-6" />,
    }
  ];
  
  export function FeatureSection() {
    return (
      <section className="min-h-[65vh] h-full w-full max-w-screen-xl mx-auto px-4 py-16 lg:px-8">
        <div>
          <div className='flex flex-col items-start mb-4 md:items-center md:text-center lg:items-start lg:text-left'>
            <p className='px-6 py-1 border border-zinc-500 rounded-full font-medium text-sm text-zinc-400'>
              Features
            </p>
            
            <h2 className="mt-4 mb-8 text-3xl font-semibold lg:text-4xl">
              Our Core <span className='text-primaryOrange-500'>Features</span>
            </h2>
          </div>

          <div className="mx-auto grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6">
            {features.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full text-primaryOrange-500 md:size-12">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-medium text-zinc-300 md:mb-2 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-500 md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
