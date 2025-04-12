import { Card } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  duration: string;
  href: string;
  className?: string;
}

export function VideoCard({
  title,
  thumbnailUrl,
  duration,
  href,
  className,
}: VideoCardProps) {
  return (
    <Card className={`overflow-hidden shadow-none border-0 bg-white ${className || ''}`}>
      <Link href={href} className="block">
        <div className="relative h-36 w-full mb-2">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 rounded-full p-2">
              <Play size={20} className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
            {duration}
          </div>
        </div>

        <div className="px-2 pb-4">
          <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
        </div>
      </Link>
    </Card>
  );
}
