import {
  HeroSlide,
  BentoCategory,
  FeatureCardItem,
  VideoProductItem,
  CustomerReelItem,
  FaqItem,
  ComparisonRow,
  BrandItem,
} from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'car-truck',
    category: 'Car & Truck Owners',
    kicker: 'VEHICLE PROTECTION',
    heading: 'PROTECT YOUR CAR',
    paragraph: 'Stop rats from chewing engine wiring and sensor cables with powerful 24/7 ultrasonic wave protection.',
    features: [
      { icon: 'play', label: 'Plug & Play' },
      { icon: 'power', label: 'Low Power' },
      { icon: 'eco', label: 'Eco & Chemical Free' },
      { icon: 'water', label: 'Water & Heat Proof' },
    ],
    ctaText: 'SHOP NOW',
    bgImage: '/images/home/hero/hero-1.webp',
    accentBadge: 'RATS 24/7',
  },
  {
    id: 'garage',
    category: 'Garage',
    kicker: 'GARAGE PROTECTION',
    heading: 'PROTECT YOUR GARAGE',
    paragraph: 'Prevent rodents from nesting in parked vehicles and dark storage corners with silent repellent sound waves.',
    features: [
      { icon: 'play', label: 'Plug & Play' },
      { icon: 'power', label: 'Low Power' },
      { icon: 'eco', label: 'Eco & Chemical Free' },
      { icon: 'water', label: 'Water & Heat Proof' },
    ],
    ctaText: 'SHOP NOW',
    bgImage: '/images/home/hero/hero-2.webp',
    accentBadge: 'RATS 24/7',
  },
  {
    id: 'hotels',
    category: 'Hotels',
    kicker: 'HOTEL PROTECTION',
    heading: 'PROTECT YOUR HOTEL',
    paragraph: 'Keep dining areas, pantry stores, and guest rooms 100% rodent-free with chemical-free ultrasonic technology.',
    features: [
      { icon: 'play', label: 'Plug & Play' },
      { icon: 'power', label: 'Low Power' },
      { icon: 'eco', label: 'Eco & Chemical Free' },
      { icon: 'water', label: 'Water & Heat Proof' },
    ],
    ctaText: 'SHOP NOW',
    bgImage: '/images/home/hero/hero-3.webp',
    accentBadge: 'RATS 24/7',
  },
  {
    id: 'hospital',
    category: 'Hospital',
    kicker: 'HOSPITAL PROTECTION',
    heading: 'PROTECT YOUR HOSPITAL',
    paragraph: 'Ensure sterile, zero-poison rodent protection around ICU units, diagnostic labs, and medical equipment.',
    features: [
      { icon: 'play', label: 'Plug & Play' },
      { icon: 'power', label: 'Low Power' },
      { icon: 'eco', label: 'Eco & Chemical Free' },
      { icon: 'water', label: 'Water & Heat Proof' },
    ],
    ctaText: 'SHOP NOW',
    bgImage: '/images/home/hero/hero-4.webp',
    accentBadge: 'RATS 24/7',
  },
  {
    id: 'factory',
    category: 'Factory',
    kicker: 'FACTORY PROTECTION',
    heading: 'PROTECT YOUR FACTORY',
    paragraph: 'Protect industrial machinery, automation panels, and cables from costly rodent damage and downtime.',
    features: [
      { icon: 'play', label: 'Plug & Play' },
      { icon: 'power', label: 'Low Power' },
      { icon: 'eco', label: 'Eco & Chemical Free' },
      { icon: 'water', label: 'Water & Heat Proof' },
    ],
    ctaText: 'SHOP NOW',
    bgImage: '/images/home/hero/hero-5.webp',
    accentBadge: 'RATS 24/7',
  },
  {
    id: 'shop',
    category: 'Shop',
    kicker: 'SHOP PROTECTION',
    heading: 'PROTECT YOUR SHOP',
    paragraph: 'Safeguard retail inventory, display racks, and billing electronics from destructive rat attacks.',
    features: [
      { icon: 'play', label: 'Plug & Play' },
      { icon: 'power', label: 'Low Power' },
      { icon: 'eco', label: 'Eco & Chemical Free' },
      { icon: 'water', label: 'Water & Heat Proof' },
    ],
    ctaText: 'SHOP NOW',
    bgImage: '/images/home/hero/hero-6.webp',
    accentBadge: 'RATS 24/7',
  },
  {
    id: 'godown',
    category: 'Godown',
    kicker: 'GODOWN PROTECTION',
    heading: 'PROTECT YOUR GODOWN',
    paragraph: 'Defend warehouse storage, raw materials, and stacked cartons without messy traps or toxic chemicals.',
    features: [
      { icon: 'play', label: 'Plug & Play' },
      { icon: 'power', label: 'Low Power' },
      { icon: 'eco', label: 'Eco & Chemical Free' },
      { icon: 'water', label: 'Water & Heat Proof' },
    ],
    ctaText: 'SHOP NOW',
    bgImage: '/images/home/hero/hero-7.webp',
    accentBadge: 'RATS 24/7',
  },
  {
    id: 'home',
    category: 'Home Owners',
    kicker: 'HOME PROTECTION',
    heading: 'PROTECT YOUR HOME',
    paragraph: 'Keep your kitchen, false ceiling, and bedrooms completely rat-free with family-safe ultrasonic waves.',
    features: [
      { icon: 'play', label: 'Plug & Play' },
      { icon: 'power', label: 'Low Power' },
      { icon: 'eco', label: 'Eco & Chemical Free' },
      { icon: 'water', label: 'Water & Heat Proof' },
    ],
    ctaText: 'SHOP NOW',
    bgImage: '/images/home/hero/hero-8.webp',
    accentBadge: 'RATS 24/7',
  },
];

export const TRUSTED_BRANDS_LEFT: BrandItem[] = [
  { name: 'Sumul Dairy', label: 'SUMUL', subtext: 'Surat Milk Union', logo: '/images/home/logos/sumul.svg' },
  { name: 'Rajhans Cinemas', label: 'RAJHANS CINEMAS', subtext: 'Enjoy The Movie!', logo: '/images/home/logos/rajhans.svg' },
  { name: 'Kailash Sweets', label: 'KAILASH', subtext: 'Dairy & Sweets', logo: '/images/home/logos/kailash.svg' },
  { name: 'Adani Power', label: 'adani', subtext: 'Power', logo: '/images/home/logos/adani.svg' },
  { name: 'Bank of Baroda', label: 'बैंक ऑफ़ बड़ौदा', subtext: 'Bank of Baroda', logo: '/images/home/logos/bank-of-baroda.svg' },
  { name: 'GIFT City', label: 'GIFT', subtext: 'Gujarat Intl Finance Tec-City', logo: '/images/home/logos/gift-city.svg' },
];

export const TRUSTED_BRANDS_RIGHT: BrandItem[] = [
  { name: 'Amul', label: 'Amul', subtext: 'The Taste of India', logo: '/images/home/logos/amul.svg' },
  { name: "Kapoor's Cafe", label: "KAPOOR'S CAFE", subtext: 'Pure Veg Punjabi Cuisine', logo: '/images/home/logos/kapoors-cafe.svg' },
  { name: 'RR Innovative', label: 'RR INNOVATIVE', subtext: 'Chemical Exporters', logo: '/images/home/logos/rr-innovative.svg' },
  { name: 'Jani Locho House', label: 'જાની લોચો હાઉસ', subtext: 'Surat Famous Snacks', logo: '/images/home/logos/jani-locho.svg' },
  { name: 'L&T Infotech', label: 'L&T', subtext: 'Engineering & Infra', logo: '/images/home/logos/l-and-t.svg' },
  { name: 'Surat Diamond Bourse', label: 'SDB', subtext: 'Diamond Association', logo: '/images/home/logos/sdb.svg' },
];


export const BENTO_CATEGORIES: BentoCategory[] = [
  {
    id: 'home',
    name: 'Home Owners',
    image: '/images/home/bento/home.webp',
  },
  {
    id: 'garage',
    name: 'Garage',
    image: '/images/home/bento/garage.webp',
  },
  {
    id: 'car-truck',
    name: 'Car-Truck Owners',
    image: '/images/home/bento/car-truck.webp',
  },
  {
    id: 'hospital',
    name: 'Hospital',
    image: '/images/home/bento/hospital.webp',
  },
  {
    id: 'godown',
    name: 'Godown',
    image: '/images/home/bento/godown.webp',
  },
  {
    id: 'hotels',
    name: 'Hotels',
    image: '/images/home/bento/hotels.webp',
  },
  {
    id: 'factory',
    name: 'Factory',
    image: '/images/home/bento/factory.webp',
  },
  {
    id: 'shop',
    name: 'Shop',
    image: '/images/home/bento/shop.webp',
  },
];

export const PRODUCT_INFO_CHECKLIST = [
  'Home',
  'Office',
  'Store Rooms',
  'Kitchen',
  'Home Elevation',
  'Study Room',
  'Pet Areas',
  'Workstations',
  'Hospital Rooms',
  'Farm House',
  'Hotel Rooms',
  'Car Parking',
];

export const CATEGORY_CAROUSEL_ITEMS = [
  {
    id: 'garage',
    name: 'Garage & Parking',
    subtitle: 'Automotive Protection',
    recommendation: 'Prevents rats from chewing engine wires and vehicle interiors.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'hotels',
    name: 'Hotels & Restaurants',
    subtitle: 'Hospitality & Kitchens',
    recommendation: '100% non-toxic, odorless protection for dining areas & pantries.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'hospital',
    name: 'Hospitals & Clinics',
    subtitle: 'Healthcare Facilities',
    recommendation: 'Zero chemicals or hazardous traps. Completely silent to humans.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'factory',
    name: 'Manufacturing & Plants',
    subtitle: 'Industrial Facilities',
    recommendation: 'Heavy-duty 360° coverage for machinery, panels & conveyor lines.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'shop',
    name: 'Retail Shops & Malls',
    subtitle: 'Commercial Stores',
    recommendation: 'Safeguards grocery racks, apparel inventory & electrical panels.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'godown',
    name: 'Warehouses & Godowns',
    subtitle: 'Storage & Logistics',
    recommendation: 'Continuous 24/7 ultrasonic sweep covering up to 2,500 sq. ft.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'car-truck',
    name: 'Car & Fleet Owners',
    subtitle: 'Vehicle Engine Bays',
    recommendation: 'Stops rodent entry into vehicle bonnets, AC ducts & boots.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'home',
    name: 'Homes & Villas',
    subtitle: 'Residential Spaces',
    recommendation: 'Safe around dogs, cats, kids and home appliances. Plug & play.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=700&auto=format&fit=crop',
  },
];

export const LEFT_FEATURES: FeatureCardItem[] = [
  {
    id: 'f1',
    title: 'Advanced Ultrasonic Tech',
    description: 'Intelligent high-frequency sound waves that repel rats effectively.',
    iconType: 'waves',
  },
  {
    id: 'f2',
    title: 'Energy Efficient',
    description: 'Operates on minimal power, saving energy and ongoing electricity costs.',
    iconType: 'energy',
  },
  {
    id: 'f3',
    title: 'Easy Installation',
    description: 'Just plug it into any standard wall outlet and let it start protecting.',
    iconType: 'plug',
  },
  {
    id: 'f4',
    title: 'Safe & Eco-Friendly',
    description: 'Totally non-toxic, chemical-free and safe for humans and household pets.',
    iconType: 'shield',
  },
  {
    id: 'f6',
    title: 'Durable & Reliable',
    description: 'Built with high-grade components for long-lasting 24/7 continuous use.',
    iconType: 'durable',
  },
];

export const RIGHT_FEATURES: FeatureCardItem[] = [
  {
    id: 'f7',
    title: 'Versatile Placement',
    description: 'Suitable for homes, kitchens, offices, godowns, and industrial spaces.',
    iconType: 'placement',
  },
  {
    id: 'f8',
    title: 'Dual LED Indicators',
    description: 'Clear visual status indicators for instant power and active wave output.',
    iconType: 'led',
  },
  {
    id: 'f9',
    title: 'Maintenance-Free',
    description: 'Zero consumable parts, refills, or recurring maintenance expenses needed.',
    iconType: 'maintenance',
  },
  {
    id: 'f10',
    title: 'Temperature Resistant',
    description: 'Engineered to operate reliably across extreme hot and cold conditions.',
    iconType: 'temp',
  },
  {
    id: 'f11',
    title: 'Designed & Made in India',
    description: 'Proudly manufactured locally with highest quality precision engineering.',
    iconType: 'india',
  },
];

export const VIDEO_PRODUCTS: VideoProductItem[] = [
  {
    id: 'v1',
    title: 'Ratguard Ultrasonic Repellent – Live Rodent Deterrence Test in Car Engine Bay',
    videoType: 'mp4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-under-a-car-in-a-workshop-43647-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    productImage: '/images/home/hero/hero-1.webp',
    price: 'Rs. 2,999',
    originalPrice: 'Rs. 4,500',
    discount: '33% off',
    customerName: 'Automobile Service Center, Surat',
  },
  {
    id: 'v2',
    title: 'Ratguard Pro 360° Industrial Repellent – 24/7 Warehouse Rodent Protection',
    videoType: 'mp4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-in-a-warehouse-operating-machinery-43641-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    productImage: '/images/home/hero/hero-2.webp',
    price: 'Rs. 6,699',
    originalPrice: 'Rs. 9,000',
    discount: '25% off',
    customerName: 'Surat Logistics Godown Manager',
  },
  {
    id: 'v3',
    title: 'Ratguard Retail Shop Ultrasonic Device – Zero Wire Chewing Guarantee',
    videoType: 'mp4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-retail-store-owner-arranging-shelves-41908-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    productImage: '/images/home/hero/hero-3.webp',
    price: 'Rs. 3,499',
    originalPrice: 'Rs. 5,000',
    discount: '30% off',
    customerName: 'Supermarket Owner, Ahmedabad',
  },
  {
    id: 'v4',
    title: 'Ratguard Commercial Hotel & Kitchen Repellent – Safe, Odorless & Non-Lethal',
    videoType: 'mp4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hotel-staff-in-corridor-42478-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    productImage: '/images/home/hero/hero-4.webp',
    price: 'Rs. 4,999',
    originalPrice: 'Rs. 7,200',
    discount: '31% off',
    customerName: 'Commercial Kitchen Manager',
  },
  {
    id: 'v5',
    title: 'Ratguard Smart SonicArmor MINI – Silent Electronic Pest Repeller for Homes',
    videoType: 'mp4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-technician-soldering-wires-in-circuit-board-43759-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    productImage: '/images/home/hero/hero-5.webp',
    price: 'Rs. 1,999',
    originalPrice: 'Rs. 3,200',
    discount: '38% off',
    customerName: 'Homeowner, Mumbai',
  },
];

export const CUSTOMER_REELS: CustomerReelItem[] = [
  {
    id: 'story-1',
    name: 'Rahul Sharma (Surat)',
    role: 'Car Fleet & Garage Owner',
    hookTitle: 'Is Your Vehicle Wiring Safe from Rat Attacks? 🚗 ⚡',
    quote: '"Zero wire cuts in our luxury fleet after installing RatguardPro!"',
    thumbnail: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop',
    videoUrl: '/images/reels/video-1.mp4',
  },
  {
    id: 'story-2',
    name: 'Vikram Patel (Ahmedabad)',
    role: 'Warehouse & Godown Owner',
    hookTitle: 'Is Warehouse Inventory Getting Ruined by Rats? 📦 🐭',
    quote: '"Protected 5,000 sq ft grain storage without toxic chemicals."',
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
    videoUrl: '/images/reels/video-2.mp4',
  },
  {
    id: 'story-3',
    name: 'Suresh Yadav (Mumbai)',
    role: 'Restaurant & Kitchen Head',
    hookTitle: 'Stop Rat Infestation in Restaurant Kitchens! 🍽️ 🛡️',
    quote: '"100% odorless and safe around food prep areas. Outstanding!"',
    thumbnail: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop',
    videoUrl: '/images/reels/video-3.mp4',
  },
  {
    id: 'story-4',
    name: 'Ajay Mehta (Pune)',
    role: 'Supermarket Store Owner',
    hookTitle: 'Protect Retail Goods with Ultrasonic Defense! 🛒 ✨',
    quote: '"Stopped rat damage on FMCG inventory from Day 3 onwards."',
    thumbnail: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&auto=format&fit=crop',
    videoUrl: '/images/reels/video-4.mp4',
  },
  {
    id: 'story-5',
    name: 'Pradeep Kumar (Delhi NCR)',
    role: 'IT Office Administrator',
    hookTitle: 'Keep Server Rooms & Cables 100% Rat-Free! 💻 🔒',
    quote: '"Server room cables are completely safe now. Plug and forget!"',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    videoUrl: '/images/reels/video-5.mp4',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Eco-Friendly',
    icon: '🌿',
    ratguard: true,
    traditional: false,
    chemical: false,
  },
  {
    feature: 'Safe for Pets & Children',
    icon: '🐾',
    ratguard: true,
    traditional: false,
    chemical: false,
  },
  {
    feature: 'Maintenance-Free',
    icon: '⚙️',
    ratguard: true,
    traditional: false,
    chemical: false,
  },
  {
    feature: 'Coverage Area',
    icon: '📐',
    ratguard: true,
    traditional: false,
    chemical: false,
  },
  {
    feature: 'Effectiveness',
    icon: '💡',
    ratguard: true,
    traditional: false,
    chemical: false,
  },
  {
    feature: 'Cost-Effective',
    icon: '💰',
    ratguard: true,
    traditional: false,
    chemical: false,
  },
  {
    feature: 'Chemical-Free',
    icon: '☢️',
    ratguard: true,
    traditional: false,
    chemical: false,
  },
];

export const BENEFIT_CARDS = [
  {
    id: 'b1',
    icon: 'shield',
    title: 'Effective Protection',
    description: 'Shields Vehicle & Home',
  },
  {
    id: 'b2',
    icon: 'leaf',
    title: 'Eco-Friendly Formula',
    description: 'Safe for Pets & Humans',
  },
  {
    id: 'b3',
    icon: 'hourglass',
    title: 'Long-Lasting Effect',
    description: 'Long-Lasting Protection',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'How does Ratguard work?',
    answer:
      'Ratguard uses ultrasonic sound waves that disturb rats and rodents, making the environment uncomfortable for them and forcing them to leave.',
  },
  {
    id: 2,
    question: 'Is Ratguard safe for pets and humans?',
    answer:
      'Yes, 100%! The ultrasonic frequencies generated by Ratguard are inaudible and completely harmless to humans, dogs, cats, birds, and children.',
  },
  {
    id: 3,
    question: 'How long does it take to see results?',
    answer:
      'Most customers observe a significant reduction in rodent activity within 3 to 7 days. Permanent deterrence occurs within 10 to 14 days as rodents migrate away.',
  },
  {
    id: 8,
    question: 'Where should I place the Ratguard device?',
    answer:
      'Place the device plugged into a 220V wall socket roughly 1 to 2 feet above the floor facing open space. For car and truck engines, secure the device under the hood.',
  },
  {
    id: 9,
    question: 'Can I use Ratguard in my car, warehouse, or farm?',
    answer:
      'Yes! Ratguard is engineered with industrial-grade casing that works reliably across car engine bays, agricultural farms, multi-story godowns, restaurant kitchens, and home garages.',
  },
  {
    id: 10,
    question: 'Does Ratguard consume a lot of electricity?',
    answer:
      'Not at all. Ratguard uses ultra-low energy circuitry consuming only 3-5 Watts of electricity. Running it continuously 24/7 costs less than ₹20-₹30 per month.',
  },
  
];

export const FAQ_ITEMS = FAQS;

