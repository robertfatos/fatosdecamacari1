import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  href?: string;
  variant?: 'default' | 'light' | 'dark';
  className?: string;
}

export function SectionHeader({
  title,
  href,
  variant = 'default',
  className = '',
}: SectionHeaderProps) {
  const variantStyles = {
    default: 'text-[#A80000] border-b-[#A80000]',
    light: 'text-gray-600 border-b-gray-300',
    dark: 'text-gray-800 border-b-gray-800',
  };

  const headerContent = (
    <h2 className={`text-lg font-bold inline-block border-b-2 pb-1 ${variantStyles[variant]}`}>
      {title}
    </h2>
  );

  return (
    <div className={`mb-4 ${className}`}>
      {href ? (
        <Link href={href} className="hover:opacity-80">
          {headerContent}
        </Link>
      ) : (
        headerContent
      )}
    </div>
  );
}
