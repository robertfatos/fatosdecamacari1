import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#C4170C] pt-4 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Link href="/" className="text-3xl font-bold mr-1">Fatos de Camaçari</Link>
        </div>

        <div className="text-center text-xs mb-4">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2">
            <li>
              <Link href="/" className="hover:underline">
                Últimas Notícias
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Princípios editoriais
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Minha conta
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Anuncie conosco
              </Link>
            </li>
          </ul>
          <p>Copyright {currentYear}  Comunicação e Participações S.A.</p>
        </div>

        <div className="border-t border-red-800 pt-4">
          <div className="text-center text-xs">
            <h3 className="font-semibold mb-2">Editorias</h3>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <li>
                <Link href="/" className="hover:underline">Economia</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Política</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Tecnologia</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Educação</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Saúde</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Ciência</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Mundo</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Pop & Arte</Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">Carros</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
