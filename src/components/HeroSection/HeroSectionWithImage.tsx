import imageSrc from '@/src/app/assets/solar-panel-array-1591350-1200x600.jpg'

export function HeroSectionWithImage() {
    return (
        <div className='relative w-full h-[75vh]'>
            <div className='absolute inset-0 bg-black/80'/>
            <img src={imageSrc.src} alt="Hero Image" className='w-full h-full object-cover' />

            <div className='absolute inset-0 z-10 w-full h-full max-w-screen-xl flex items-center justify-center px-4 mx-auto '>
                <div className="flex items-center justify-center flex-col text-center">
                    <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-6">
                        <h1 className="text-pretty text-4xl font-bold lg:text-6xl">
                            Seja Bem vindo à <br /> <span className='text-primaryOrange-500'>Gesolar Invest</span>
                        </h1>

                        <p className="max-w-xl text-zinc-400 font-medium">
                            Invista em usinas de energia solar de forma fácil, 
                            simples e descomplicada, 
                            com alta rentabilidade e baixo risco.
                        </p>
                    </div>

                    {/* <button className="mt-10 px-4 py-2 bg-primaryOrange-500 text-zinc-200 font-bold rounded-full transition-all hover:opacity-85">
                        Quero Investir
                    </button> */}
                </div>
            </div>
        </div>
    )
}