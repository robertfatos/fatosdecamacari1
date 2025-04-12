export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center space-y-4">
      <div className="text-3xl font-bold text-[#C4170C]">Fatos de Camaçari</div>
      <div className="text-sm text-gray-500">Carregando...</div>
      <div className="w-16 h-1 bg-gray-200 overflow-hidden">
        <div className="h-full w-1/3 bg-[#C4170C] animate-[loading_1s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}

// Add loading animation
import "./globals.css";
