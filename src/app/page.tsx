import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeaturedNews } from '@/components/FeaturedNews';
import { NewsSection } from '@/components/NewsSection';
import { VideoSection } from '@/components/VideoSection';
import { SectionHeader } from '@/components/SectionHeader';
import { NewsCard } from '@/components/NewsCard';

export default function Home() {
  // Mock data for featured news
  const featuredNews = {
    title: 'Gleisi admite discutir anistia, gera revolta no STF e recua: "Fiz uma fala mal colocada"',
    imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/qGbQRAn1qVEojsD4dNiuuFbQBJo=/0x0:1700x1065/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/U/O/EjXABwTCqQlXMfRBANuQ/52348508363-a2fd9a3e12-k.jpg',
    location: 'Blog da Andréia Sadi',
    href: '/',
    bullets: [
      {
        id: '1',
        text: 'PL da Anistia atinge assinaturas para votar urgência na Câmara',
        href: '/'
      },
      {
        id: '2',
        text: 'VALDO: governo muda tom e agora admite redução de penas pelo STF',
        href: '/'
      }
    ]
  };

  // Mock data for news sections
  const politicsNews = [
    {
      id: 'p1',
      title: 'Hospitalizado em Natal, Bolsonaro faz exames e tem quadro estável',
      imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/aZJZd3DhcAYkYYvuYEPX4eLEdgk=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/k/f/gGwB2mT9qiEbkaZ8Bpew/whatsapp-image-2023-09-06-at-21.56.14.jpeg',
      location: 'Rio Grande do Norte',
      href: '/'
    },
    {
      id: 'p2',
      title: 'Ex-presidente passou mal de madrugada e chegou a ser medicado',
      imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/2DwJsQQ-CJ8LhCr3OXHEgY_1MQw=/0x0:1700x945/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/S/a/jMxnrPT4atowWCCByFKg/ap23312713799663.jpg',
      location: 'Em Brasília',
      href: '/'
    }
  ];

  const economyNews = [
    {
      id: 'e1',
      title: 'Em nova reação, China eleva taxas sobre produtos dos EUA para 125%',
      imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/5Rw1c2bCdYqZAc0nrE5xeB1QS-Y=/0x0:6000x4000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/O/4/NdFyzUSzaFdlZDwP1Y9g/2023-11-14t190456z-1831424559-rc2xm3af7sc0-rtrmadp-3-usa-china-trade.jpg',
      category: 'Economia',
      href: '/'
    },
    {
      id: 'e2',
      title: 'Trump diz que política tarifária é "animadora" para o mundo todo',
      imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/53ClxO5n6KLJ9D4PmDMtZQtQd-o=/0x241:5500x3335/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/G/S/2qWS2EQqCVGOnsrt6foA/2025-04-10t173914z-305441069-rc25vda1m1f0-rtrmadp-3-usa-trump.jpg',
      category: 'Economia',
      href: '/'
    },
    {
      id: 'e3',
      title: 'Tarifaço é novo desafio ao consumo interno da China; entenda',
      imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/NEnBBhcIrFaqg4daMcKTlfyAyuA=/0x65:1024x641/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/Z/N/jcjU87TJagv8eiZa7x7Q/000-39t789l.jpg',
      category: 'Economia',
      href: '/'
    }
  ];

  const localNews = [
    {
      id: 'l1',
      title: 'VÍDEO: touro solto em via avança sobre homem e destrói BMW',
      imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/VKZ-QWVyDXbAACfIjWlvN1cHBok=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/I/B/gVPbZdSqAt8wlYiKNXrA/touro-ribeirao-preto.jpg',
      location: 'Ribeirão Preto, SP',
      href: '/'
    },
    {
      id: 'l2',
      title: 'Marcos Oliveira, o Beiçola, ganha casa doada por Marieta Severo, a Dona Nenê',
      imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/VdvCb7Mt_-Y9qPn2kPCIcJUJXD4=/0x0:1700x1133/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/x/T/tg45ydQJygqrCBFVGk8g/captura-de-tela-2021-08-31-as-15.17.34.png',
      location: 'Rio de Janeiro',
      href: '/'
    },
    {
      id: 'l3',
      title: 'Jovem sumida há 4 dias diz para mãe que não vai voltar para casa',
      imageUrl: 'https://s2-Fatos de Camaçari.glbimg.com/LN6ZfBKxEBtJR9tk2KhHLAPPLeg=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/d/H/pTdPhGROO0Tn2HjD8Qow/desaparecidas-rj2.jpg',
      location: 'Paraíba',
      href: '/'
    }
  ];

  // Mock data for videos
  const videos = [
    {
      id: 'v1',
      title: 'Vídeo mostra momento em que helicóptero cai no rio Hudson, em NY',
      thumbnailUrl: 'https://s2-Fatos de Camaçari.glbimg.com/0ep--i8OZHv7DHDA0ccvqakNDOM=/427x240/s03.video.glbimg.com/deo/vi/78/80/13508078',
      duration: '0:27',
      href: '/'
    },
    {
      id: 'v2',
      title: 'Vídeo mostra queda de partes de helicóptero no rio Hudson, em Nova York',
      thumbnailUrl: 'https://s2-Fatos de Camaçari.glbimg.com/KWfB-7RlfN_mkT7yK6jvjoqoGC0=/427x240/s03.video.glbimg.com/deo/vi/18/71/13507118',
      duration: '0:16',
      href: '/'
    },
    {
      id: 'v3',
      title: 'Vídeo mostra momento em que cauda de helicóptero que caiu em Nova York se desintegra',
      thumbnailUrl: 'https://s2-Fatos de Camaçari.glbimg.com/ceItDaiECa-4Y9LnAlm18ORP_LQ=/427x240/s03.video.glbimg.com/deo/vi/34/69/13506934',
      duration: '0:35',
      href: '/'
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <div className="container mx-auto px-4 py-4">
        <FeaturedNews
          title={featuredNews.title}
          imageUrl={featuredNews.imageUrl}
          location={featuredNews.location}
          href={featuredNews.href}
          bullets={featuredNews.bullets}
        />

        <div className="grid md:grid-cols-12 gap-6 mt-6">
          <div className="md:col-span-8">
            <NewsSection
              title="Política"
              items={politicsNews}
              viewAllHref="/"
              columns={2}
            />

            <NewsSection
              title="Economia"
              items={economyNews}
              viewAllHref="/"
              columns={3}
            />

            <VideoSection
              title="Queda de Helicóptero, empresário bate em funcionário e mais VÍDEOS..."
              videos={videos}
              viewAllHref="/"
            />
          </div>

          <div className="md:col-span-4">
            <div className="bg-white p-4 mb-6">
              <SectionHeader title="IPCA" />
              <NewsCard
                title="Inflação: pressionados pelos alimentos, preços sobem 0,56% em março"
                imageUrl="https://s2-Fatos de Camaçari.glbimg.com/jBcOs1f3cCA6w2aSAoNF8nx05IE=/0x0:2000x1125/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/1/V/B0ck1DQ7WwkgDF4WhluQ/sem-titulo-f99a4127-celso-tavares-Fatos de Camaçari-.jpg"
                category="Economia"
                href="/"
                variant="small"
              />

              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="text-[#A80000] mr-2 font-bold">•</span>
                  <a href="/" className="text-sm hover:underline">
                    'Prévia do PIB' aponta alta 0,4% da economia em fevereiro
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A80000] mr-2 font-bold">•</span>
                  <a href="/" className="text-sm hover:underline">
                    Desemprego entre jovens é mais que o dobro da taxa dos adultos
                  </a>
                </li>
              </ul>
            </div>

            <NewsSection
              title="Brasil"
              items={localNews}
              viewAllHref="/"
              variant="list"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
