export function StatsSection () {
    return (
        <section className="min-h-[70vh] h-full w-full max-w-screen-xl mx-auto px-4 py-20 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-semibold lg:text-6xl">
            Nossos Números
          </h1>

          <div className="grid gap-12 pt-12 lg:grid-cols-3 lg:gap-0 lg:pt-24">
            <div className="text-center">
              <p className="pt-4 text-4xl font-semibold text-primaryOrange-500 md:text-5xl lg:pt-10 lg:text-6xl">3.5 MW</p>
              <p className="text-lg font-semibold text-zinc-300 md:text-xl lg:text-2xl">
                De potencia instaladas
              </p>
            </div>
            <div className="text-center">
              <p className="pt-4 text-4xl font-semibold text-primaryOrange-500  md:text-5xl lg:pt-10 lg:text-6xl">+500</p>
              <p className="text-lg font-semibold text-zinc-300 md:text-xl lg:text-2xl">
                Clientes economizando energia
              </p>
            </div>
            <div className="text-center">
              <p className="pt-4 text-4xl font-semibold text-primaryOrange-500 md:text-5xl lg:pt-10 lg:text-6xl">+3.2 milhões</p>
              <p className="text-lg font-semibold text-zinc-300 md:text-xl lg:text-2xl">
                De Reais em retorno do investimento
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };