import { PersonStanding, Timer, Zap, ZoomIn } from 'lucide-react';

export function HowWeWorkSection() {
  return (
    <section className="min-h-[75vh] h-full w-full max-w-screen-xl mx-auto px-4 lg:pt-8 lg:pb-20 lg:px-8">
      <div className='w-full h-full flex flex-col justify-between gap-4 relative lg:flex-row lg:gap-24'>
        <div className="w-full h-full flex flex-col items-start  lg:sticky lg:inset-y-32">
          <h2 className="mt-4 mb-8 text-3xl font-medium lg:text-4xl">
            Siga essa esteira e faça parte da <span className='text-primaryOrange-500'>Gesolar Invest</span>
          </h2>

          <p className="mb-4 max-w-xl text-sm text-zinc-500 md:text-base">Cadastre-se, escolha o plano de cotas de usinas alinhadas ao seu perfil e faça investimentos no mercado de energia renovável. ​</p>
        </div>

        <div className="w-full mt-14 grid gap-16 lg:mt-20">
          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 md:size-12">
              <Timer className="size-5 md:size-6 text-primaryOrange-500" />
            </span>

            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                <span className='mr-2'>1.</span>Fale com um especialista​
                <span className="absolute -left-px hidden h-6 w-px bg-primaryOrange-600 md:inline-block"></span>
              </h3>

              <p className="text-sm text-zinc-500 md:text-base">
                Saiba todas as informações, benefícios e vantagens ao contratar sua cota de investimento​
              </p>
            </div>
          </div>
          
          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 md:size-12">
              <Zap className="size-5 md:size-6 text-primaryOrange-500" />
            </span>
            
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
              <span className='mr-2'>2.</span>Acesse os projetos 
                <span className="absolute -left-px hidden h-6 w-px bg-primaryOrange-600 md:inline-block"></span>
              </h3>
              <p className="text-sm text-zinc-500 md:text-base">
                Avalie as condições do projeto da usina, 
                leia os termos e condições de investimentos e 
                escolha o que mais se encaixa com a sua necessidade.
              </p>
            </div>
          </div>

          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 md:size-12">
              <ZoomIn className="size-5 md:size-6 text-primaryOrange-500" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
              <span className='mr-2'>3.</span>Contrate o plano 
                <span className="absolute -left-px hidden h-6 w-px bg-primaryOrange-600 md:inline-block"></span>
              </h3>
              <p className="text-sm text-zinc-500 md:text-base">
                Escolha a forma de pagamento do seu plano (TED, Cartão, Pix) 
                e transfira o saldo pertinente para sua conta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};