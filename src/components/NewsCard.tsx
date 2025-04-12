import { Card } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  title: string;
  imageUrl: string;
  category?: string;
  location?: string;
  href: string;
  variant?: 'small' | 'medium' | 'large' | 'featured';
  className?: string;
}

export function NewsCard({
  title,
  imageUrl,
  category,
  location,
  href,
  variant = 'medium',
  className,
}: NewsCardProps) {
  const sizes = {
    small: {
      container: 'max-w-[300px]',
      imageWrapper: 'h-32',
      title: 'text-sm font-semibold',
    },
    medium: {
      container: 'max-w-[400px]',
      imageWrapper: 'h-48',
      title: 'text-base font-semibold',
    },
    large: {
      container: 'max-w-[600px]',
      imageWrapper: 'h-64',
      title: 'text-lg font-semibold',
    },
    featured: {
      container: 'w-full',
      imageWrapper: 'h-72',
      title: 'text-xl md:text-2xl font-bold text-[#A80000]',
    },
  };

  const currentSize = sizes[variant];

  return (
    <Card className={`overflow-hidden shadow-none border-0 bg-white ${currentSize.container} ${className || ''}`}>
      <Link href={href} className="block">
        <div className={`relative ${currentSize.imageWrapper} w-full mb-2`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {(category || location) && (
          <div className="px-2 mb-1">
            <div className="text-xs text-gray-500">
              {location && <span className="font-medium">{location}</span>}
              {location && category && <span className="mx-1">•</span>}
              {category && <span>{category}</span>}
            </div>
          </div>
        )}

        <div className="px-2 pb-4">
          <h3 className={currentSize.title}>{title}</h3>
        </div>
      </Link>
    </Card>
  );
}
