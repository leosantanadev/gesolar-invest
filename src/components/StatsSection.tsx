export function StatsSection () {
    return (
        <section className="min-h-[85vh] h-full w-full max-w-screen-xl mx-auto px-4 py-20 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-semibold lg:text-6xl">
            Algumas das marcas que a nossa empresa atingiu
          </h1>

          <div className="grid gap-12 pt-12 lg:grid-cols-3 lg:gap-0 lg:pt-24">
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-500">
                Instalamos aproximadamente
              </p>
              <p className="pt-4 text-4xl font-semibold text-primaryOrange-500 md:text-5xl lg:pt-10 lg:text-6xl">+35 MW</p>
              <p className="text-lg font-semibold text-zinc-300 md:text-xl lg:text-2xl">
                De potencia em usinas solares
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-500">
                Temos uma base de mais o menos 
              </p>
              <p className="pt-4 text-4xl font-semibold text-primaryOrange-500  md:text-5xl lg:pt-10 lg:text-6xl">+500</p>
              <p className="text-lg font-semibold text-zinc-300 md:text-xl lg:text-2xl">
                Clientes economizando energia
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-500">
                Movimentamos o equivalente à
              </p>
              <p className="pt-4 text-4xl font-semibold text-primaryOrange-500 md:text-5xl lg:pt-10 lg:text-6xl">3.2 milhões</p>
              <p className="text-lg font-semibold text-zinc-300 md:text-xl lg:text-2xl">
                De retorno do investimento das usinas
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };