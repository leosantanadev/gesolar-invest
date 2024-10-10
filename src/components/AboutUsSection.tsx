export function AboutUsSection() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">

        <div className="flex flex-col items-start text-left sm:items-center sm:text-center lg:items-start lg:text-left">
          <p className='px-6 py-1 border border-zinc-500 rounded-full font-medium text-sm text-zinc-400'>
            Nosso Time
          </p>
          
          <h1 className="mt-4 mb-8 text-3xl font-semibold lg:text-4xl">
            Um pouco <span className='text-primaryOrange-500'>sobre nós</span> e nosso <span className='text-primaryOrange-500'>propósito</span>
          </h1>

          <div>
            <p className="mb-4 max-w-xl text-zinc-500 lg:text-lg">
              Somos a plataforma que traz pra você as melhoras oportunidades de investimento em energia solar. 
              Conheça as usinas que estao esperando pelo seu investimento. 
              Saiba quais são os projetos que serão vializados e a rentabilidade dos dividendos.
            </p>

            <p className="mb-4 max-w-xl text-zinc-500 lg:text-lg">
            A Gesolar Invest é umacorrespondente bancário que opera através de CCB (Cédula de Crédito Bancário) 
            geradas por instituições bancárias, viabilizando transação de parcelamentos para clientes.
            A atividade de correspondente bancário é regulada pelo Banco Central do Brasil, nos termos da Resolução nº. 3.954, de 24 de fevereiro de 2011.
            </p>

            <p className="mb-4 max-w-xl text-zinc-500 lg:text-lg">
              Trabalhamos com investimentos alternativos que destacam-se por sua diferença em relação às opções de investimento tradicionais. 
              Essa categoria abrange uma ampla gama de ativos e estratégias como fundos imobiliários, 
              Private Equity, Venture Capital, Hedge Funds, Investimentos em recursos naturais como ouro, petróleo, energia, grãos, entre outros.
            </p>
          </div>
        </div>

        <img
          src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
          alt="placeholder hero"
          className="max-h-96 w-full rounded-md object-cover"
        />
      </div>
    </section>
  );
};