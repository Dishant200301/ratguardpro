export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface HeroSlide {
  id: string;
  category: string;
  kicker: string;
  heading: string;
  paragraph: string;
  features: { icon: string; label: string }[];
  ctaText: string;
  bgImage: string;
  accentBadge?: string;
}

export interface BentoCategory {
  id: string;
  name: string;
  image: string;
  colSpan?: string;
  rowSpan?: string;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  iconType: string;
}

export interface VideoProductItem {
  id: string;
  title: string;
  videoType: 'mp4' | 'youtube';
  videoUrl: string;
  thumbnail: string;
  productImage: string;
  price: string;
  originalPrice: string;
  discount: string;
  customerName?: string;
}

export interface CustomerReelItem {
  id: string;
  name: string;
  role: string;
  hookTitle?: string;
  quote: string;
  thumbnail: string;
  videoUrl: string;
  youtubeId?: string;
  posterTime?: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  icon: string;
  ratguard: boolean;
  traditional: boolean;
  chemical: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
}

export interface BrandItem {
  name: string;
  label: string;
  subtext: string;
  logo: string;
}

