import Logo from '@/src/app/assets/Logo branco.amarelo.png'

export function Navbar() {
  return (
    <section className="px-4 h-16 bg-zinc-950 w-full max-w-screen-xl mx-auto flex items-center">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={Logo.src}
                className="w-48"
                alt="logo"
              />
            </div>

          </div>
        </nav>
    </section>
  );
};
