import { NewsCard } from './NewsCard';
import { SectionHeader } from './SectionHeader';

interface NewsItem {
  id: string;
  title: string;
  imageUrl: string;
  category?: string;
  location?: string;
  href: string;
}

interface NewsSectionProps {
  title: string;
  items: NewsItem[];
  viewAllHref?: string;
  className?: string;
  variant?: 'grid' | 'list';
  columns?: 1 | 2 | 3 | 4;
  cardVariant?: 'small' | 'medium' | 'large';
}

export function NewsSection({
  title,
  items,
  viewAllHref,
  className = '',
  variant = 'grid',
  columns = 3,
  cardVariant = 'medium',
}: NewsSectionProps) {
  const getColumnClass = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-3';
    }
  };

  return (
    <section className={`mb-8 ${className}`}>
      <SectionHeader
        title={title}
        href={viewAllHref}
      />

      {variant === 'grid' ? (
        <div className={`grid ${getColumnClass()} gap-4 md:gap-6`}>
          {items.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              category={item.category}
              location={item.location}
              href={item.href}
              variant={cardVariant}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              category={item.category}
              location={item.location}
              href={item.href}
              variant="small"
              className="flex flex-row h-auto max-w-none"
            />
          ))}
        </div>
      )}
    </section>
  );
}
