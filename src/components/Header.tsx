import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-4">
        <div className="container mx-auto flex items-center h-8 text-xs gap-4 overflow-x-auto">
          <Link href="/" className="text-[#A80000] hover:underline">.com</Link>
          <Link href="/" className="text-[#A80000] font-bold hover:underline">Fatos de Camaçari</Link>
          <Link href="/" className="text-[#A80000] hover:underline">ge</Link>
          <Link href="/" className="text-[#A80000] hover:underline">gshow</Link>
          <Link href="/" className="text-[#A80000] hover:underline">play</Link>
          <Link href="/" className="text-gray-600 hover:underline">o </Link>
          <Link href="/" className="text-gray-600 hover:underline">valor</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#C4170C] h-[4.25rem] px-4 flex items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu"
              className="text-white hover:bg-[#9e1209]"
            >
              <Menu size={24} />
              <span className="ml-2 text-sm font-bold hidden sm:inline">MENU</span>
            </Button>
          </div>

          <div className="flex items-center justify-center flex-1">
            <div className="text-center">
              <Link href="/">
                <div className="flex items-center justify-center">
                  <span className="text-white text-3xl font-bold mr-1">Fatos de Camaçari</span>
                  <Image
                    src="https://ext.same-assets.com/2093408981/2320907649.svg"
                    alt="Fatos de Camaçari logo"
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-[#9e1209] px-6"
            >
              <span className="sr-only">Search</span>
              BUSCAR
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
