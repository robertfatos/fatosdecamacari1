import { VideoCard } from './VideoCard';
import { SectionHeader } from './SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  href: string;
}

interface VideoSectionProps {
  title: string;
  videos: VideoItem[];
  viewAllHref?: string;
  className?: string;
}

export function VideoSection({
  title,
  videos,
  viewAllHref,
  className = '',
}: VideoSectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <SectionHeader
          title={title}
          href={viewAllHref}
          className="mb-0"
        />

        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="bg-gray-100 hover:bg-gray-200 rounded-full h-8 w-8"
            title="Ver anterior"
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-gray-100 hover:bg-gray-200 rounded-full h-8 w-8"
            title="Ver próximo"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            duration={video.duration}
            href={video.href}
          />
        ))}
      </div>
    </section>
  );
}
