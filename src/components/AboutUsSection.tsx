import aboutUs from '@/src/app/assets/about-us-image.png';

export function AboutUsSection() {
  return (
    <section className="min-h-[75vh] h-full w-full max-w-screen-xl mx-auto px-4 py-20 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">

        <div className="flex flex-col items-start text-left sm:items-center sm:text-center lg:items-start lg:text-left">
          <h1 className="mb-12 text-4xl font-semibold lg:text-5xl">
            Sobre nós
          </h1>

          <div>
            <p className="mb-4 max-w-xl text-sm text-zinc-500 md:text-base">
              Somos a plataforma que traz pra você as melhoras oportunidades de investimento em energia solar. 
              Apresentamos os projetos de usinas fotovoltaicas e disponibilizamos cotas de participação. 
              Essas cotas proporcionam dividendos de alta rentabilidade para os cotistas investidores.​
            </p>

            <p className="mb-4 max-w-xl text-sm text-zinc-500 md:text-base">
              Somos correspondentes bancário e operamos  através de CCB (Cédula de Crédito Bancário) geradas por instituições bancárias, 
              viabilizando transações de parcelamentos para clientes. 
              A atividade de correspondente bancário é regulada pelo Banco Central do Brasil, nos termos da Resolução nº. 3.954, de 24 de fevereiro de 2011
            </p>

            <p className="mb-4 max-w-xl text-sm text-zinc-500 md:text-base">
              Trabalhamos com investimentos alternativos que destacam-se por sua diferença em relação às opções de investimento tradicionais. 
            </p>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <img
            src={aboutUs.src}
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};