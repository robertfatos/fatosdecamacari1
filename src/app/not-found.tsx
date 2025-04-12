import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center bg-[#f5f5f5] py-16">
        <div className="max-w-lg w-full px-4 py-8 bg-white rounded-lg text-center">
          <h1 className="text-6xl font-bold text-[#C4170C] mb-6">404</h1>
          <h2 className="text-xl font-semibold mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#C4170C] text-white font-medium rounded-md hover:bg-[#a00e06] transition-colors"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
