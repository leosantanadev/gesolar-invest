import {
    PersonStanding,
    Timer,
    Zap,
    ZoomIn,
  } from 'lucide-react';
  
  const features = [
    {
      title: 'Investimento  seguro e inteligente',
      description:
        'As usinas são ativos de grande apelo tecnológico e ambiental. A demanda por energia está cada vez maior e por ser sustentavel, a energia solar promove potencial de alta rentabilidade  em operações de uma plataforma fácil e simples de operar.',
      icon: <Timer className="size-4 md:size-6" />,
    },
    {
      title: 'Especialistas',
      description:
        'Nossos especialistas  são profissionais qualificados e certificados no mercado. Realizam análises nas áreas de crédito, jurídica e financeira para apresentar os melhores projetos fotovoltaicos para você investir com segurança.',
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: 'Alto retorno e baixo risco​',
      description:
        'O seu investimento estará atrelado à energia do futuro, que figura nas pautas da agenda mundial e que tem muito a crescer.',
      icon: <ZoomIn className="size-4 md:size-6" />,
    },
    {
      title: 'Transparência',
      description:
        'Acompanhe em tempo real o status do andamento da construção, geração e economia das usinas nas quais você investiu.',
      icon: <PersonStanding className="size-4 md:size-6" />,
    }
  ];
  
  export function FeatureSection() {
    return (
      <section className="min-h-[85vh] h-full w-full max-w-screen-xl mx-auto px-4 pt-16 pb-20 lg:px-8">
        <div>
          <div className='flex flex-col items-start mb-4 md:items-center md:text-center lg:items-start lg:text-left'>
            <h2 className="mt-4 mb-8 text-3xl font-semibold lg:text-4xl">
              Nossos <span className='text-primaryOrange-500'>Diferenciais</span>
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
  
