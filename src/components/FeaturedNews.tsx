import Link from 'next/link';
import Image from 'next/image';

interface FeaturedNewsProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  category?: string;
  location?: string;
  href: string;
  bullets?: { text: string; href: string; id?: string }[];
}

export function FeaturedNews({
  title,
  subtitle,
  imageUrl,
  category,
  location,
  href,
  bullets = [],
}: FeaturedNewsProps) {
  return (
    <div className="bg-white p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {(category || location) && (
          <div className="mb-2">
            <div className="text-xs text-gray-500">
              {location && <span className="font-medium">{location}</span>}
              {location && category && <span className="mx-1">•</span>}
              {category && <span>{category}</span>}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <Link href={href}>
              <h1 className="text-2xl md:text-3xl font-bold text-[#A80000] mb-2 hover:underline">
                {title}
              </h1>
              {subtitle && (
                <p className="text-base text-gray-700 mb-4">{subtitle}</p>
              )}
            </Link>

            {bullets.length > 0 && (
              <ul className="space-y-1 mt-4">
                {bullets.map((bullet, index) => (
                  <li
                    key={bullet.id || `bullet-${bullet.text.substring(0, 10)}-${index}`}
                    className="flex items-start"
                  >
                    <span className="text-[#A80000] mr-2 font-bold">•</span>
                    <Link
                      href={bullet.href}
                      className="text-sm hover:underline"
                    >
                      {bullet.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative h-64 md:h-full">
            <Link href={href}>
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
