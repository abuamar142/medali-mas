// Data types for the application
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  description?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
}

export interface Achievement {
  id: string;
  title: string;
  value: string;
  description: string;
  icon?: string;
}

export interface BusinessInfo {
  name: string;
  owner: string;
  foundedDate: string;
  description: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  addresses: {
    main: {
      address: string;
      mapUrl: string;
      embedUrl: string;
    };
    branch: {
      address: string;
      mapUrl: string;
      embedUrl: string;
    };
  };
}

export interface HeroContent {
  title: {
    main: string;
    highlight: string;
  };
  subtitle: string;
  description: string;
  cta: {
    primary: string;
    secondary: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}
