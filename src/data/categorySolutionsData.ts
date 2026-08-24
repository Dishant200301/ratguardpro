export interface ProblemCard {
  id: string;
  icon: 'wire' | 'engine' | 'nest' | 'health' | 'money' | 'smell' | 'food' | 'shield' | 'alert' | 'tool' | 'box' | 'car';
  title: string;
  description: string;
}

export interface BenefitCard {
  id: string;
  icon: 'wide' | 'plug' | 'clock' | 'safe' | 'eco' | 'tool' | 'shield' | 'india' | 'money' | 'food' | 'car';
  title: string;
  description: string;
}

export interface ProblemSolutionRow {
  problem: string;
  solution: string;
}

export interface SolutionCategoryData {
  slug: string;
  categoryName: string;
  targetSpace: string;
  kicker: string;
  heroHeading: string;
  heroAccentWord: string;
  heroSubheading: string;
  heroBgImage: string;
  heroCtaText: string;
  
  // Problem section
  problemSectionTitle: string;
  problems: ProblemCard[];
  
  // Solution section
  solutionTitle: string;
  solutionSubtitle: string;
  solutionPoints: string[];
  
  // Why choose section
  whyChooseTitle: string;
  benefits: BenefitCard[];
  
  // Installation & How it works
  whereToInstallTitle: string;
  installLocations: string[];
  installImage: string;
  
  // Product Showcase
  productName: string;
  productTagline: string;
  originalPrice: string;
  discountedPrice: string;
  
  // Problem vs Solution Table
  comparisonImage: string;
  comparisonRows: ProblemSolutionRow[];
  
  // Category FAQs
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // Final CTA
  finalCtaTitle: string;
  finalCtaAccent: string;
  finalCtaSubtitle: string;
  finalCtaButtonText: string;
}

export const CATEGORY_SOLUTIONS_DATA: Record<string, SolutionCategoryData> = {
  garage: {
    slug: 'garage',
    categoryName: 'Garage',
    targetSpace: 'Garage',
    kicker: 'GARAGE PROTECTION',
    heroHeading: 'PROTECT YOUR',
    heroAccentWord: 'GARAGE',
    heroSubheading: 'Rats can damage your car, wiring, insulation, and stored items. Ratguard keeps your garage safe, clean and rat-free 24x7.',
    heroBgImage: '/images/home/hero/hero-2.webp',
    heroCtaText: 'PROTECT MY GARAGE',
    
    problemSectionTitle: 'The Rat Problem in Garages',
    problems: [
      {
        id: 'p1',
        icon: 'wire',
        title: 'Damaged Wiring',
        description: 'Rats chew through critical vehicle wires, power sockets, and garage lighting lines, resulting in dangerous short circuits, electrical failures, and costly maintenance bills.'
      },
      {
        id: 'p2',
        icon: 'engine',
        title: 'Engine Damage',
        description: 'Rodents crawl inside warm parked car engines, gnawing on hoses, belts, and insulation pads while building stubborn debris nests that lead to engine failure.'
      },
      {
        id: 'p3',
        icon: 'nest',
        title: 'Nesting & Mess',
        description: 'Rats gather shredded paper, cardboard, insulation, and rags to build breeding nests in corners, cluttering your garage and spreading dirt everywhere.'
      },
      {
        id: 'p4',
        icon: 'health',
        title: 'Health Risks',
        description: 'Dangerous rat droppings and dried urine particles carry salmonella and airborne bacteria, exposing your family and pets to severe health hazards.'
      },
      {
        id: 'p5',
        icon: 'money',
        title: 'Costly Repairs',
        description: 'Leaving rodent activity unchecked in your garage leads to severe mechanical breakdowns, destroyed spare parts, and hefty automobile repair invoices.'
      },
      {
        id: 'p6',
        icon: 'smell',
        title: 'Bad Smell',
        description: 'Accumulated rodent urine, hidden rotting nests, and trapped dirt generate foul odors that linger in your garage and seep directly into your car cabin.'
      }
    ],
    
    solutionTitle: 'RATGUARD SONICARMOR X',
    solutionSubtitle: 'Advanced Ultrasonic Technology that drives rats away and keeps your garage rat-free.',
    solutionPoints: [
      'Dual Ultrasonic Speakers',
      'Wide Coverage Area',
      'No Traps, No Poisons',
      'Chemical-Free & Safe',
      'Easy to Install & Use',
      'Low Power Consumption'
    ],
    
    whyChooseTitle: 'Why Choose RatGuard for Your Garage?',
    benefits: [
      {
        id: 'b1',
        icon: 'wide',
        title: 'Wide Area Protection',
        description: 'Covers large garage spaces effectively.'
      },
      {
        id: 'b2',
        icon: 'plug',
        title: 'Easy Installation',
        description: 'Just plug in and stay protected.'
      },
      {
        id: 'b3',
        icon: 'clock',
        title: 'Continuous Protection',
        description: 'Works 24x7 to keep rats away.'
      },
      {
        id: 'b4',
        icon: 'safe',
        title: 'Safe & Humane',
        description: 'Drives rats away without killing them.'
      },
      {
        id: 'b5',
        icon: 'eco',
        title: 'No Chemicals No Poison',
        description: '100% safe for kids, pets and vehicles.'
      },
      {
        id: 'b6',
        icon: 'tool',
        title: 'Low Maintenance',
        description: 'Hassle-free protection for years.'
      }
    ],
    
    whereToInstallTitle: 'WHERE TO INSTALL IN GARAGE?',
    installLocations: [
      'Near Car Parking Area',
      'Near Electrical Wiring',
      'Near Storage Shelves',
      'Near Garage Entrance',
      'Near Engine Area'
    ],
    installImage: '/images/home/bento/garage.webp',
    
    productName: 'RATGUARD SONICARMOR X',
    productTagline: 'Your Ultimate Garage Protection Partner',
    originalPrice: '7,999',
    discountedPrice: '2,450',
    
    comparisonImage: '/images/home/before_after/before.webp',
    comparisonRows: [
      {
        problem: 'Damaged Wiring & Power Loss',
        solution: 'Ultrasonic wave barrier protects electrical wires'
      },
      {
        problem: 'Nesting in Engine Bay',
        solution: 'Makes engine compartment uncomfortable for rats'
      },
      {
        problem: 'Rat Droppings & Bad Odor',
        solution: 'Discourages rodents and keeps garage fresh and clean'
      },
      {
        problem: 'Repeated Infestation Cycles',
        solution: 'Continuous 24x7 automated active defense'
      },
      {
        problem: 'Costly Parts Replacement',
        solution: 'Prevents spare parts damage and saves lakhs'
      },
      {
        problem: 'Fire & Short Circuit Risk',
        solution: 'Eliminates exposed chewed wire spark hazards'
      }
    ],
    
    faqs: [
      {
        question: 'Is Ratguard safe for pets and children?',
        answer: 'Yes, 100%! The ultrasonic sound waves emitted by Ratguard are strictly above 20 kHz, which is completely inaudible and harmless to humans, children, dogs, and cats.'
      },
      {
        question: 'How does Ratguard work in a garage?',
        answer: 'Ratguard generates multi-frequency ultrasonic sound pulses that disorient rodent auditory and nervous systems. Rats feel extreme distress and immediately flee the area.'
      },
      {
        question: 'How many devices do I need for my garage?',
        answer: 'For a standard 1 to 2 car garage (up to 800 - 1,000 sq.ft), 1 Ratguard SonicArmor X unit is sufficient. For multi-car basement garages or partitioned storage, we recommend 2 units.'
      },
      {
        question: 'Can rats get used to the ultrasonic waves?',
        answer: 'No. Ratguard uses smart auto-frequency modulation between 20 kHz and 65 kHz, continuously alternating frequencies so rodents can never adapt or build immunity.'
      },
      {
        question: 'Does it kill rats?',
        answer: 'No. It is a 100% humane, non-lethal deterrent. It forces rats to abandon your garage alive, meaning zero dead rat odor and no hazardous carcass disposal.'
      },
      {
        question: 'What is the warranty on the Ratguard device?',
        answer: 'Every Ratguard device is backed by an official 1-Year Instant Replacement Warranty and a 7-day money-back guarantee.'
      }
    ],
    
    finalCtaTitle: 'Protect Your',
    finalCtaAccent: 'Garage & Vehicles',
    finalCtaSubtitle: "Keep your cars, bikes, and garage space safe from rat infestations with Ratguard's advanced ultrasonic protection.",
    finalCtaButtonText: 'Protect My Garage'
  },

  hotels: {
    slug: 'hotels',
    categoryName: 'Hotels',
    targetSpace: 'Hotels & Restaurants',
    kicker: 'HOSPITALITY PROTECTION',
    heroHeading: 'PROTECT YOUR',
    heroAccentWord: 'HOTEL & KITCHEN',
    heroSubheading: 'Rodents in dining, food storage and guest rooms ruin hygiene ratings and brand reputation. Ratguard delivers 100% chemical-free protection.',
    heroBgImage: '/images/home/hero/hero-3.webp',
    heroCtaText: 'PROTECT MY HOTEL',
    
    problemSectionTitle: 'The Rat Problem in Hotels & Restaurants',
    problems: [
      {
        id: 'p1',
        icon: 'food',
        title: 'Food Contamination',
        description: 'Rats raid dry grain stores, pantry shelves, and buffet supplies, ruining expensive raw provisions and making bulk food inventory completely unfit for guests.'
      },
      {
        id: 'p2',
        icon: 'alert',
        title: 'Health Audit Penalties',
        description: 'Rodent sightings or fecal droppings during municipal food hygiene audits lead to severe legal penalties, failed inspections, and business license suspension.'
      },
      {
        id: 'p3',
        icon: 'smell',
        title: 'Negative Guest Reviews',
        description: 'A single rat sighting in dining areas or guest suites leads to viral negative reviews, public complaints, and irreversible damage to hospitality branding.'
      },
      {
        id: 'p4',
        icon: 'wire',
        title: 'Kitchen Appliance Bites',
        description: 'Chewed electrical cords on commercial deep freezers, dishwashers, and ovens cause kitchen breakdowns, service delays, and heavy repair expenses.'
      },
      {
        id: 'p5',
        icon: 'nest',
        title: 'False Ceiling Nesting',
        description: 'Rodents breed in HVAC ducting and false ceiling spaces above dining halls, causing loud scratching noises, droppings, and foul odors during service.'
      },
      {
        id: 'p6',
        icon: 'health',
        title: 'Bacterial Contamination',
        description: 'Rats running across prep counters and cutting boards spread dangerous pathogens, putting dining guests at severe risk of food poisoning.'
      }
    ],
    
    solutionTitle: 'RATGUARD SONICARMOR X',
    solutionSubtitle: 'Professional Ultrasonic Technology ensuring 100% food-safe, non-toxic rodent defense.',
    solutionPoints: [
      '100% Food-Grade & Non-Toxic',
      'Dual High-Frequency Transducers',
      'Silent to Guests & Staff',
      'Zero Poisonous Residue',
      'Continuous 24/7 Kitchen Defense',
      'Minimal Electricity Cost'
    ],
    
    whyChooseTitle: 'Why Choose RatGuard for Your Hotel & Restaurant?',
    benefits: [
      {
        id: 'b1',
        icon: 'safe',
        title: 'Food Safety Compliant',
        description: 'FSSAI compliant, 100% chemical-free solution.'
      },
      {
        id: 'b2',
        icon: 'wide',
        title: 'Complete Kitchen Coverage',
        description: 'Sweeps across pantry aisles and counters.'
      },
      {
        id: 'b3',
        icon: 'clock',
        title: '24/7 Silent Guard',
        description: 'Operates quietly without disturbing guests.'
      },
      {
        id: 'b4',
        icon: 'eco',
        title: 'Zero Chemical Odor',
        description: 'No sprays, toxic cakes, or lingering smells.'
      },
      {
        id: 'b5',
        icon: 'tool',
        title: 'Zero Maintenance',
        description: 'Plug into commercial wall outlets & forget.'
      },
      {
        id: 'b6',
        icon: 'shield',
        title: 'Brand Reputation Shield',
        description: 'Guarantees rodent-free dining & suites.'
      }
    ],
    
    whereToInstallTitle: 'WHERE TO INSTALL IN HOTELS & KITCHENS?',
    installLocations: [
      'Near Commercial Kitchen Prep Counters',
      'Inside Dry Food & Spice Storage Rooms',
      'Near Buffet & Dining Hall Entry Points',
      'Inside False Ceiling Cavities & Ducts',
      'Near Garbage Disposal & Loading Docks'
    ],
    installImage: '/images/home/bento/hotels.webp',
    
    productName: 'RATGUARD SONICARMOR X',
    productTagline: 'Your Ultimate Hospitality Partner',
    originalPrice: '7,999',
    discountedPrice: '2,450',
    
    comparisonImage: '/images/home/hero/hero-3.webp',
    comparisonRows: [
      {
        problem: 'Food Spoilage & Contamination',
        solution: '100% food-grade ultrasonic barrier keeps rats away'
      },
      {
        problem: 'Health Audit Non-Compliance',
        solution: 'Clean, non-poisonous pest management for hygiene audits'
      },
      {
        problem: 'False Ceiling Scratching & Odor',
        solution: 'Multi-directional waves clear overhead ceiling cavities'
      },
      {
        problem: 'Chewed Refrigerator Cables',
        solution: 'Protects commercial kitchen appliances from downtime'
      },
      {
        problem: 'Dead Rat Removal in Pantries',
        solution: 'Rats flee premises alive without dying inside storage'
      },
      {
        problem: 'Negative Reviews & Complaints',
        solution: 'Guarantees rodent-free dining rooms and guest suites'
      }
    ],
    
    faqs: [
      {
        question: 'Will guests or dining customers hear any annoying sound?',
        answer: 'No. Ratguard emits ultrasonic sound between 20 kHz and 65 kHz, which is entirely silent and imperceptible to human ears.'
      },
      {
        question: 'Is it approved for use around food prep areas?',
        answer: 'Yes! Unlike toxic poison pellets or chemical aerosols that can contaminate food, Ratguard uses pure acoustic sound waves, making it ideal for commercial kitchens.'
      },
      {
        question: 'How many units are recommended for a commercial restaurant?',
        answer: 'We recommend 1 unit in the main cooking line, 1 in the dry storage pantry, and 1 in false ceiling spaces for thorough coverage.'
      },
      {
        question: 'Does it interfere with hotel Wi-Fi or electronic appliances?',
        answer: 'Not at all. Ratguard emits acoustic sound waves, not electromagnetic radio frequencies, so it will not interfere with Wi-Fi, POS systems, or appliances.'
      },
      {
        question: 'How quickly does it clear hotel kitchens?',
        answer: 'Rodents begin evacuating within 48 to 72 hours, with complete elimination within 10 to 14 days.'
      },
      {
        question: 'What is the electricity cost of running units 24/7?',
        answer: 'Each unit consumes only 3 to 5 Watts, costing approximately ₹20 to ₹30 per month in electricity.'
      }
    ],
    
    finalCtaTitle: 'Protect Your',
    finalCtaAccent: 'Hotel & Restaurant',
    finalCtaSubtitle: "Keep your kitchen, pantry, and dining areas safe from rat infestations with Ratguard's advanced ultrasonic protection.",
    finalCtaButtonText: 'Protect My Hotel'
  },

  hospital: {
    slug: 'hospital',
    categoryName: 'Hospital',
    targetSpace: 'Hospital & Clinic',
    kicker: 'HEALTHCARE PROTECTION',
    heroHeading: 'PROTECT YOUR',
    heroAccentWord: 'HOSPITAL',
    heroSubheading: 'Ensure sterile, zero-poison rodent protection around ICU units, diagnostic labs, patient wards, and sensitive medical electronics.',
    heroBgImage: '/images/home/hero/hero-4.webp',
    heroCtaText: 'PROTECT MY HOSPITAL',
    
    problemSectionTitle: 'The Rat Problem in Hospitals & Healthcare',
    problems: [
      {
        id: 'p1',
        icon: 'alert',
        title: 'Medical Cable Cuts',
        description: 'Chewed wiring on ventilators, patient monitoring screens, and diagnostic systems risks sudden medical device failure during critical operations.'
      },
      {
        id: 'p2',
        icon: 'health',
        title: 'Hospital Infections',
        description: 'Rodent droppings and urine tracks carry hazardous bacteria across sterile wards, severely threatening vulnerable patients with hospital infections.'
      },
      {
        id: 'p3',
        icon: 'shield',
        title: 'Toxic Poison Ban',
        description: 'Chemical rodent poisons and toxic cakes are strictly forbidden in healthcare facilities due to patient safety protocols and chemical contamination.'
      },
      {
        id: 'p4',
        icon: 'food',
        title: 'Pharmacy Drug Damage',
        description: 'Rats chew through sterile packaging, expensive prescription medicines, and saline cartons, resulting in massive pharmaceutical stock write-offs.'
      },
      {
        id: 'p5',
        icon: 'nest',
        title: 'HVAC Duct Infestation',
        description: 'Rodents travel through air conditioning vents and false ceiling ducts above operation theaters, compromising sterile environment compliance.'
      },
      {
        id: 'p6',
        icon: 'money',
        title: 'NABH Audit Penalties',
        description: 'Any rodent presence or physical damage breaches healthcare sanitation guidelines, leading to loss of clinical accreditation and severe penalties.'
      }
    ],
    
    solutionTitle: 'RATGUARD SONICARMOR X',
    solutionSubtitle: 'Hospital-Grade Ultrasonic Protection designed for sterile, noise-sensitive healthcare environments.',
    solutionPoints: [
      'Hospital-Safe & Sterile Compliant',
      'Zero Poisonous Residue or Chemicals',
      'Non-Interfering with Medical Equipment',
      'Silent Operation in ICU & Wards',
      'Continuous 24/7 Boundary Deterrence',
      'Low Heat & Flame-Retardant Casing'
    ],
    
    whyChooseTitle: 'Why Choose RatGuard for Your Hospital?',
    benefits: [
      {
        id: 'b1',
        icon: 'safe',
        title: '100% Patient Safe',
        description: 'Zero chemicals, fumes, or hazardous baits.'
      },
      {
        id: 'b2',
        icon: 'shield',
        title: 'Sterile Facility Compliant',
        description: 'Meets NABH & healthcare sanitation norms.'
      },
      {
        id: 'b3',
        icon: 'clock',
        title: 'Continuous ICU Protection',
        description: 'Guards critical equipment lines 24x7.'
      },
      {
        id: 'b4',
        icon: 'wide',
        title: 'Multi-Directional Sound',
        description: 'Reaches hidden false ceilings and ducts.'
      },
      {
        id: 'b5',
        icon: 'eco',
        title: 'No Dead Rodents',
        description: 'Repels rats without rotting carcasses.'
      },
      {
        id: 'b6',
        icon: 'india',
        title: 'Medical Grade Reliability',
        description: 'Tested for continuous heavy-duty operation.'
      }
    ],
    
    whereToInstallTitle: 'WHERE TO INSTALL IN HOSPITALS?',
    installLocations: [
      'Diagnostic & MRI / CT Scan Server Rooms',
      'Medical Equipment & Oxygen Plant Rooms',
      'Hospital Pharmacy & Medicine Storage',
      'False Ceiling Cavities Above ICU / OT',
      'Biomedical Waste & Drainage Corridors'
    ],
    installImage: '/images/home/bento/hospital.webp',
    
    productName: 'RATGUARD SONICARMOR X',
    productTagline: 'Your Ultimate Healthcare Protection Partner',
    originalPrice: '7,999',
    discountedPrice: '2,450',
    
    comparisonImage: '/images/home/hero/hero-4.webp',
    comparisonRows: [
      {
        problem: 'Medical Device Cables Chewing',
        solution: 'Ultrasonic wave barrier protects critical cables'
      },
      {
        problem: 'Poison Risks Around Patients',
        solution: '100% non-chemical, poison-safe technology'
      },
      {
        problem: 'Contamination of Sterile Tools',
        solution: 'Stops rodents before entering clean zones'
      },
      {
        problem: 'False Ceiling Nesting & Noise',
        solution: 'Clears overhead nesting and wiring rats'
      },
      {
        problem: 'Health Department Penalties',
        solution: 'Zero chances, maintain hygiene and rating'
      },
      {
        problem: 'Disease Spread & Infection Risk',
        solution: 'Creates a rat-free, hygienic environment'
      }
    ],
    
    faqs: [
      {
        question: 'Does Ratguard interfere with sensitive ICU or diagnostic equipment?',
        answer: 'No. Ratguard produces purely mechanical sound vibrations in the air (ultrasonic acoustic waves) and emits zero RF/electromagnetic interference.'
      },
      {
        question: 'Is it completely safe around newborn infants and ICU patients?',
        answer: 'Yes. The frequency is outside the biological hearing range of humans and creates no radiation, fumes, or chemicals.'
      },
      {
        question: 'Can we install it in pharmaceutical and medicine cold rooms?',
        answer: 'Yes! The device is engineered with temperature-resistant components suitable for dry medicine store rooms and hospital basements.'
      },
      {
        question: 'How does it prevent rats from dying inside false ceilings?',
        answer: 'The sound creates intense disorientation that forces rodents to escape outward toward outdoor exits; they do not die on the premises.'
      },
      {
        question: 'How many units are required per hospital floor?',
        answer: 'We recommend placing 1 unit in the central server/diagnostic room, 1 in pharmacy, and 1 per 800 - 1,000 sq.ft of corridor/ceiling space.'
      },
      {
        question: 'Is there any maintenance needed by hospital staff?',
        answer: 'None. Once plugged in, the LED indicators show active status and the device works maintenance-free 24/7.'
      }
    ],
    
    finalCtaTitle: 'Protect Your',
    finalCtaAccent: 'Hospital & Clinic',
    finalCtaSubtitle: "Ensure sterile, poison-free clinical safety with Ratguard's advanced ultrasonic protection.",
    finalCtaButtonText: 'Protect My Hospital'
  },

  factory: {
    slug: 'factory',
    categoryName: 'Factory',
    targetSpace: 'Factory & Machinery',
    kicker: 'INDUSTRIAL PROTECTION',
    heroHeading: 'PROTECT YOUR',
    heroAccentWord: 'FACTORY & MACHINERY',
    heroSubheading: 'Safeguard industrial PLC panels, robotic lines, conveyor belts, and raw material stores from unexpected downtime and costly rodent damage.',
    heroBgImage: '/images/home/hero/hero-5.webp',
    heroCtaText: 'PROTECT MY FACTORY',
    
    problemSectionTitle: 'The Rat Problem in Factories & Plants',
    problems: [
      {
        id: 'p1',
        icon: 'tool',
        title: 'Production Shutdown',
        description: 'A single chewed sensor cable or automation wire halts conveyor belts and robotic arms, causing complete production delays and huge downtime losses.'
      },
      {
        id: 'p2',
        icon: 'alert',
        title: 'Panel Short Circuits',
        description: 'Rats enter warm electrical panels (MCC and PCC boxes), chewing cable insulation and triggering dangerous short circuits and industrial fire hazards.'
      },
      {
        id: 'p3',
        icon: 'box',
        title: 'Raw Material Loss',
        description: 'Rats shred through packaging boxes, textile rolls, and stored raw plastic polymers, rendering valuable warehouse inventories completely unsellable.'
      },
      {
        id: 'p4',
        icon: 'money',
        title: 'Machinery Repairs',
        description: 'Replacing imported servo motors, CNC wiring harnesses, and custom circuit boards destroyed by rats leads to massive out-of-pocket expenses.'
      },
      {
        id: 'p5',
        icon: 'wire',
        title: 'Worker Safety Hazards',
        description: 'Exposed live copper wires left behind by rodent bites increase electrocution and shock hazards for factory workers across plant floor zones.'
      },
      {
        id: 'p6',
        icon: 'smell',
        title: 'Pest Traps Failure',
        description: 'Traditional glue boards and snap traps are completely overwhelmed by extensive industrial rat colonies across expansive manufacturing sheds.'
      }
    ],
    
    solutionTitle: 'RATGUARD SONICARMOR X',
    solutionSubtitle: 'Industrial-Strength Ultrasonic System delivering 360° continuous plant floor protection.',
    solutionPoints: [
      'Heavy-Duty Dual Ultrasonic Transducers',
      'Wide Industrial Coverage (up to 2,500 sq.ft)',
      'Resistant to Plant Dust & Heat',
      'Prevents Cable Sabotage 24/7',
      'No Dangerous Chemicals or Traps',
      'Zero Maintenance Downtime'
    ],
    
    whyChooseTitle: 'Why Choose RatGuard for Your Factory & Plant?',
    benefits: [
      {
        id: 'b1',
        icon: 'wide',
        title: 'Massive Industrial Reach',
        description: 'Covers large sheds, machinery aisles & bays.'
      },
      {
        id: 'b2',
        icon: 'clock',
        title: 'Non-Stop 24/7 Operation',
        description: 'Protects machinery through night shifts.'
      },
      {
        id: 'b3',
        icon: 'shield',
        title: 'Prevents Machine Fires',
        description: 'Keeps control panels & wiring intact.'
      },
      {
        id: 'b4',
        icon: 'tool',
        title: 'Zero Consumable Expenses',
        description: 'No chemical sprays, baits, or refill purchases.'
      },
      {
        id: 'b5',
        icon: 'india',
        title: 'Built for Indian Industries',
        description: 'Handles voltage fluctuation & hot conditions.'
      },
      {
        id: 'b6',
        icon: 'money',
        title: 'Massive ROI on Production',
        description: 'One unit prevents lakhs in machinery downtime.'
      }
    ],
    
    whereToInstallTitle: 'WHERE TO INSTALL IN FACTORIES?',
    installLocations: [
      'Main Electrical Control Panels (MCC / PCC)',
      'Raw Material & Packaging Inventory Sheds',
      'Machine Bases & Conveyor Belt Trenches',
      'Overhead Cable Trays & Structural Girders',
      'Factory Shutters & Dispatch Loading Docks'
    ],
    installImage: '/images/home/bento/factory.webp',
    
    productName: 'RATGUARD SONICARMOR X',
    productTagline: 'Your Ultimate Industrial Protection Partner',
    originalPrice: '7,999',
    discountedPrice: '2,450',
    
    comparisonImage: '/images/home/hero/hero-5.webp',
    comparisonRows: [
      {
        problem: 'Production Line Halts & Cable Cuts',
        solution: 'Continuous acoustic shield stops cable chewing'
      },
      {
        problem: 'Control Panel Fires & Sparking',
        solution: 'High-frequency waves keep electrical panels rodent-free'
      },
      {
        problem: 'Raw Material Spoilage',
        solution: 'Broad ultrasonic spread defends warehouse stock zones'
      },
      {
        problem: 'Expensive Servo & PLC Replacement',
        solution: 'One-time investment saves recurring machine repair bills'
      },
      {
        problem: 'Traps & Poison Fail in Sheds',
        solution: 'Clean, humane deterrent with zero corpse disposal'
      },
      {
        problem: 'Worker Shock & Safety Hazards',
        solution: 'Eliminates live exposed copper wire hazards'
      }
    ],
    
    faqs: [
      {
        question: 'Can Ratguard handle industrial factory noise and machine vibrations?',
        answer: 'Yes! Ratguard operates in the ultrasonic realm (20 kHz to 65 kHz), well above typical industrial acoustic noise (under 15 kHz), maintaining 100% deterrence power.'
      },
      {
        question: 'How many units are required for a 5,000 to 10,000 sq.ft industrial shed?',
        answer: 'Depending on machinery layout and partitions, we recommend 1 unit per 1,000 to 1,500 sq.ft for optimal overlapping sonic coverage.'
      },
      {
        question: 'Will factory workers feel any headache or ear fatigue?',
        answer: 'No. The frequency range is completely imperceptible to human ears and safe for workers during full 12-hour shifts.'
      },
      {
        question: 'Can the device withstand high ambient factory temperatures?',
        answer: 'Yes. Ratguard is built with heat-dissipating housing engineered to withstand operating temperatures up to 55°C.'
      },
      {
        question: 'Does it require 3-phase power or a standard plug?',
        answer: 'It connects to standard 220V single-phase wall sockets, with built-in surge protection against industrial voltage spikes.'
      },
      {
        question: 'What is the lifespan of the ultrasonic transducers?',
        answer: 'The solid-state transducers are rated for over 50,000+ hours of continuous 24/7 operation.'
      }
    ],
    
    finalCtaTitle: 'Protect Your',
    finalCtaAccent: 'Factory & Machinery',
    finalCtaSubtitle: "Keep industrial control lines, machines, and stock safe with Ratguard's advanced ultrasonic protection.",
    finalCtaButtonText: 'Protect My Factory'
  },

  shop: {
    slug: 'shop',
    categoryName: 'Shop',
    targetSpace: 'Retail Shop & Showroom',
    kicker: 'RETAIL PROTECTION',
    heroHeading: 'PROTECT YOUR',
    heroAccentWord: 'SHOP & SHOWROOM',
    heroSubheading: 'Keep display inventory, POS billing computers, clothing, and packaged goods safe from rodent bites, stains, and customer embarrassment.',
    heroBgImage: '/images/home/hero/hero-6.webp',
    heroCtaText: 'PROTECT MY SHOP',
    
    problemSectionTitle: 'The Rat Problem in Retail Shops',
    problems: [
      {
        id: 'p1',
        icon: 'box',
        title: 'Inventory Destruction',
        description: 'Rats bite through clothing, designer garments, cosmetics packaging, and retail items, rendering high-value merchandise unsellable.'
      },
      {
        id: 'p2',
        icon: 'wire',
        title: 'POS Billing Disruption',
        description: 'Chewed internet, barcode scanner, and POS billing cables disrupt customer checkout lines and cause frustrating computer terminal crashes.'
      },
      {
        id: 'p3',
        icon: 'alert',
        title: 'Customer Embarrassment',
        description: 'Rats scurrying across retail aisles, display counters, or product shelves during shopping hours cause shopper panic and destroy store reputation.'
      },
      {
        id: 'p4',
        icon: 'smell',
        title: 'Unpleasant Store Odor',
        description: 'Rodent urine markings and droppings behind floor display racks create stale, unpleasant odors that discourage customers from shopping.'
      },
      {
        id: 'p5',
        icon: 'money',
        title: 'Unsalable Stock Loss',
        description: 'Bite-damaged retail goods and pierced packaging cannot be returned to distributors or sold, resulting in direct monthly margin losses.'
      },
      {
        id: 'p6',
        icon: 'nest',
        title: 'Ceiling & Rack Nesting',
        description: 'Rats gnaw wooden display shelves and nest inside false ceiling cavities, creating unsightly mess and continuous scratching noises.'
      }
    ],
    
    solutionTitle: 'RATGUARD SONICARMOR X',
    solutionSubtitle: 'Compact, Elegant Ultrasonic Repeller that protects shop displays 24/7 silently.',
    solutionPoints: [
      'Discreet & Compact Modern Design',
      '100% Safe Around Shoppers & Kids',
      'Protects POS & Billing Wiring',
      'Reaches Behind Display Racks',
      'Zero Poisonous Powders or Traps',
      'Plug & Play in Any Wall Socket'
    ],
    
    whyChooseTitle: 'Why Choose RatGuard for Your Shop & Retail Store?',
    benefits: [
      {
        id: 'b1',
        icon: 'shield',
        title: 'Protects Valuable Goods',
        description: 'Stops gnawing on clothes, shoes & food items.'
      },
      {
        id: 'b2',
        icon: 'safe',
        title: 'Safe for Customers',
        description: 'Completely silent, odorless & chemical-free.'
      },
      {
        id: 'b3',
        icon: 'plug',
        title: 'Effortless Plug & Play',
        description: 'Plug into billing counter outlet & relax.'
      },
      {
        id: 'b4',
        icon: 'clock',
        title: 'Overnight Shutter Shield',
        description: 'Guards closed store when lights go out.'
      },
      {
        id: 'b5',
        icon: 'tool',
        title: 'Zero Maintenance',
        description: 'No daily trap resetting or messy cleanup.'
      },
      {
        id: 'b6',
        icon: 'money',
        title: 'Saves Inventory Profits',
        description: 'Eliminates recurring monthly stock losses.'
      }
    ],
    
    whereToInstallTitle: 'WHERE TO INSTALL IN RETAIL SHOPS?',
    installLocations: [
      'Behind Billing Counter & POS Wiring Hub',
      'Lower Shelf Display Racks & Floor Bases',
      'Backroom Stock & Inventory Storage',
      'Inside False Ceiling Cavities & Ducts',
      'Near Shop Shutter Corners & Entrance'
    ],
    installImage: '/images/home/bento/shop.webp',
    
    productName: 'RATGUARD SONICARMOR X',
    productTagline: 'Your Ultimate Retail Protection Partner',
    originalPrice: '7,999',
    discountedPrice: '2,450',
    
    comparisonImage: '/images/home/hero/hero-6.webp',
    comparisonRows: [
      {
        problem: 'Gnawed Clothes, Shoes & FMCG Items',
        solution: 'Ultrasonic sound fields keep display racks secure'
      },
      {
        problem: 'Billing Computer Wire Cuts',
        solution: 'Protects underlying electrical connections 24/7'
      },
      {
        problem: 'Rats Scurrying in Front of Customers',
        solution: 'Forces rodents out of retail showroom zones completely'
      },
      {
        problem: 'Urine Stains & Bad Shop Odor',
        solution: 'Maintains fresh, clean retail showroom ambiance'
      },
      {
        problem: 'Unsalable Stock Loss & Returns',
        solution: 'Prevents direct merchandise damage and margin losses'
      },
      {
        problem: 'Poison Hazard Around Kids',
        solution: '100% human-safe, pet-safe non-toxic acoustic waves'
      }
    ],
    
    faqs: [
      {
        question: 'Will customers shopping in my showroom hear anything?',
        answer: 'No. Ratguard frequencies are far above human hearing thresholds, operating in complete silence for shoppers and staff.'
      },
      {
        question: 'How many units do I need for a 500 to 1,500 sq.ft retail store?',
        answer: 'For a 500-800 sq.ft shop, 1 unit placed near the main display area is ideal. For larger stores with separate backrooms, 2 units are recommended.'
      },
      {
        question: 'Does it protect my shop when the main shutters are closed overnight?',
        answer: 'Yes! Nighttime is when rats are most active. Keeping Ratguard plugged in 24/7 provides an impenetrable acoustic barrier all night.'
      },
      {
        question: 'Can rats chew the Ratguard device itself?',
        answer: 'Ratguard is housed in tough, flame-retardant ABS polymer that rodents cannot chew through, and the ultrasonic waves actively repel them.'
      },
      {
        question: 'Does it leave dead rats behind clothing racks?',
        answer: 'No. The high frequencies distress the rodents, prompting them to escape through shutter gaps without dying indoors.'
      },
      {
        question: 'How much electricity does it consume?',
        answer: 'It uses merely 3 to 5 Watts, which is less electricity than a small LED night lamp.'
      }
    ],
    
    finalCtaTitle: 'Protect Your',
    finalCtaAccent: 'Shop & Showroom',
    finalCtaSubtitle: "Keep display inventory, POS billing, and customers safe from rat infestations with Ratguard's advanced ultrasonic protection.",
    finalCtaButtonText: 'Protect My Shop'
  },

  godown: {
    slug: 'godown',
    categoryName: 'Godown',
    targetSpace: 'Godown & Warehouse',
    kicker: 'WAREHOUSE LOGISTICS',
    heroHeading: 'PROTECT YOUR',
    heroAccentWord: 'GODOWN & WAREHOUSE',
    heroSubheading: 'Protect bulk grain sacks, cardboard packaging, logistics stock, and pallets across thousands of square feet without messy traps or poison.',
    heroBgImage: '/images/home/hero/hero-7.webp',
    heroCtaText: 'PROTECT MY GODOWN',
    
    problemSectionTitle: 'The Rat Problem in Godowns & Warehouses',
    problems: [
      {
        id: 'p1',
        icon: 'box',
        title: 'Bulk Inventory Losses',
        description: 'Rats tear through stacked grain sacks, FMCG carton boxes, and corrugated master cases, destroying tons of bulk commodities every month.'
      },
      {
        id: 'p2',
        icon: 'nest',
        title: 'Colony Multiplication',
        description: 'Quiet, dimly lit godown corners provide ideal breeding grounds for rodent colonies that multiply rapidly and overrun storage stacks.'
      },
      {
        id: 'p3',
        icon: 'alert',
        title: 'Rotting Carcass Odor',
        description: 'Chemical rat poison causes rodents to die inside stacked carton pallets, creating unbearable rotting odors and customer consignment rejection.'
      },
      {
        id: 'p4',
        icon: 'wire',
        title: 'Distribution Board Fires',
        description: 'Chewed electrical cables in high-voltage warehouse distribution panels create serious electrical short circuits and catastrophic fire risks.'
      },
      {
        id: 'p5',
        icon: 'money',
        title: 'Compensation Claims',
        description: 'Logistics clients and buyers reject damaged shipments, demanding severe financial compensation and canceling storage contracts.'
      },
      {
        id: 'p6',
        icon: 'tool',
        title: 'Pallet & Rack Damage',
        description: 'Persistent gnawing on heavy wooden pallets destabilizes high-rack storage tiers, creating dangerous physical hazards for godown staff.'
      }
    ],
    
    solutionTitle: 'RATGUARD SONICARMOR X',
    solutionSubtitle: 'Heavy-Duty Ultrasonic Sweep System engineered for expansive warehouse storage spaces.',
    solutionPoints: [
      'Sweeping Dual Transducers for Deep Penetration',
      'Wide Floor Coverage up to 2,500 sq.ft',
      'Drives Rodents Out Alive - Zero Dead Odors',
      'Chemical-Free & Safe for Food Storage',
      'Surge-Protected Industrial Electronics',
      'Maintenance-Free Continuous Operation'
    ],
    
    whyChooseTitle: 'Why Choose RatGuard for Your Godown & Warehouse?',
    benefits: [
      {
        id: 'b1',
        icon: 'wide',
        title: 'Expansive Area Coverage',
        description: 'Sweeps through pallet stacks & aisles.'
      },
      {
        id: 'b2',
        icon: 'eco',
        title: 'Zero Dead Rat Smell',
        description: 'Forces rodents outside rather than dying inside.'
      },
      {
        id: 'b3',
        icon: 'clock',
        title: '24/7 Automated Guard',
        description: 'Continuous defense through weekends & holidays.'
      },
      {
        id: 'b4',
        icon: 'safe',
        title: 'Grain & Food Safe',
        description: 'Non-toxic, ideal for FMCG and agro warehouses.'
      },
      {
        id: 'b5',
        icon: 'money',
        title: 'One-Time Investment',
        description: 'Eliminates monthly pest control contract fees.'
      },
      {
        id: 'b6',
        icon: 'india',
        title: 'Industrial Heavy Build',
        description: 'Built with rugged components for dusty godowns.'
      }
    ],
    
    whereToInstallTitle: 'WHERE TO INSTALL IN GODOWNS?',
    installLocations: [
      'Along Main Pallet Stack Aisles & Base Level',
      'Near Loading Bay Shutters & Ramp Entrance',
      'Corner Walls & Center Structural Pillars',
      'Near Electrical Distribution & Inverter Panels',
      'High-Rack Overhead Rafters & Trusses'
    ],
    installImage: '/images/home/bento/godown.webp',
    
    productName: 'RATGUARD SONICARMOR X',
    productTagline: 'Your Ultimate Warehouse Protection Partner',
    originalPrice: '7,999',
    discountedPrice: '2,450',
    
    comparisonImage: '/images/home/hero/hero-7.webp',
    comparisonRows: [
      {
        problem: 'Sacked Grain & Packaging Bites',
        solution: 'Acoustic sound field disrupts nesting and feeding'
      },
      {
        problem: 'Rapid Colony Multiplication',
        solution: '24/7 active sonic barrier expels entire rat colonies'
      },
      {
        problem: 'Rotting Dead Rats in Shipments',
        solution: 'Drives rats away alive; zero carcasses inside stock pallets'
      },
      {
        problem: 'Recurring Pest Control Invoices',
        solution: 'One-time device cost with zero recurring refill expenses'
      },
      {
        problem: 'Chewed Forklift & Power Cables',
        solution: 'Protects warehouse machinery wiring and distribution panels'
      },
      {
        problem: 'Pallet & Rack Destabilization',
        solution: 'Prevents wood gnawing and keeps heavy stacks secure'
      }
    ],
    
    faqs: [
      {
        question: 'How do ultrasonic sound waves travel through stacked carton pallets?',
        answer: 'Ultrasonic sound waves bounce off solid walls, ceilings, and floors, creating a reverberating matrix of uncomfortable sound pressure throughout the warehouse aisles.'
      },
      {
        question: 'How many units are needed for a 5,000 to 10,000 sq.ft warehouse?',
        answer: 'We recommend 1 unit for every 1,500 - 2,000 sq.ft in open layout godowns, spaced evenly along perimeter walls.'
      },
      {
        question: 'Is it safe for organic grain and foodstuff storage?',
        answer: '100% yes! Ratguard uses zero chemicals, poisons, or gas, making it certified organic-friendly and food-safe.'
      },
      {
        question: 'Will rats simply move to the far corner of the godown?',
        answer: 'Ratguard dual transducers cover 360° frequency angles, leaving no quiet refuge zones and forcing pests toward outdoor exits.'
      },
      {
        question: 'Does it require any periodic filter or cartridge replacement?',
        answer: 'No consumables or refills are required. It operates entirely electronically.'
      },
      {
        question: 'Can the device handle dust and humidity in agro warehouses?',
        answer: 'Yes. The internal components are coated with protective sealant for high reliability in dusty, humid agricultural godowns.'
      }
    ],
    
    finalCtaTitle: 'Protect Your',
    finalCtaAccent: 'Godown & Warehouse',
    finalCtaSubtitle: "Keep bulk commodities, grain sacks, and pallets safe with Ratguard's advanced ultrasonic protection.",
    finalCtaButtonText: 'Protect My Godown'
  },

  'car-truck-owners': {
    slug: 'car-truck-owners',
    categoryName: 'Car-Truck Owners',
    targetSpace: 'Car & Commercial Fleet',
    kicker: 'VEHICLE ENGINE BAY DEFENSE',
    heroHeading: 'PROTECT YOUR',
    heroAccentWord: 'CAR & TRUCK ENGINE',
    heroSubheading: 'Stop costly ECM, wiring harness, and sensor wire damage. Protect parked cars, SUVs, luxury vehicles, and commercial trucks from rodent infestation.',
    heroBgImage: '/images/home/hero/hero-1.webp',
    heroCtaText: 'PROTECT MY VEHICLE',
    
    problemSectionTitle: 'The Rat Problem in Cars & Trucks',
    problems: [
      {
        id: 'p1',
        icon: 'car',
        title: 'Wiring Harness Bites',
        description: 'Rats chew main engine wiring harnesses, alternator leads, and battery cables, resulting in major electrical breakdowns costing up to ₹1,50,000+.'
      },
      {
        id: 'p2',
        icon: 'engine',
        title: 'ECM & Sensor Damage',
        description: 'Rodents gnaw critical ABS sensors, oxygen sensors, and computer ECM cables, triggering dashboard check-engine warnings and stalling.'
      },
      {
        id: 'p3',
        icon: 'alert',
        title: 'Bonnet Fire Hazards',
        description: 'Exposed copper wires inside hot engine compartments spark dangerous short circuits near pressurized fuel injection lines and batteries.'
      },
      {
        id: 'p4',
        icon: 'smell',
        title: 'AC Blower Duct Stench',
        description: 'Rats enter AC blower vents through firewall openings and die inside, producing a foul, toxic stench that is extremely expensive to clean.'
      },
      {
        id: 'p5',
        icon: 'tool',
        title: 'Highway Breakdown Risk',
        description: 'Severed sensor wires and bitten fuel lines cause sudden engine failure and roadside strandings while driving on remote highways.'
      },
      {
        id: 'p6',
        icon: 'money',
        title: 'Insurance Rejections',
        description: 'Automobile insurance policies often reject rodent damage claims or impose heavy deductibles and lengthy garage inspection delays.'
      }
    ],
    
    solutionTitle: 'RATGUARD SONICARMOR X',
    solutionSubtitle: 'Automotive Grade Ultrasonic Defense protecting vehicle bonnets, wiring and engine bays 24/7.',
    solutionPoints: [
      'Automotive Heat & Vibration Resistant',
      'Dual High-Output Acoustic Speakers',
      'Stops Wire & Insulation Chewing',
      'Chemical-Free & Safe for Battery Systems',
      'Protects Parked Vehicles Overnight',
      'No Harmful Sprays That Wash Away'
    ],
    
    whyChooseTitle: 'Why Choose RatGuard for Your Car & Truck?',
    benefits: [
      {
        id: 'b1',
        icon: 'shield',
        title: 'Protects Expensive Wiring',
        description: 'Stops bites on main harness & sensors.'
      },
      {
        id: 'b2',
        icon: 'plug',
        title: 'Garage & Parking Ready',
        description: 'Plug in near parking space or under bonnet.'
      },
      {
        id: 'b3',
        icon: 'clock',
        title: '24/7 Parking Defense',
        description: 'Protects cars parked for days or weeks.'
      },
      {
        id: 'b4',
        icon: 'eco',
        title: 'Permanent Solution',
        description: 'Unlike bitter sprays that evaporate in rain.'
      },
      {
        id: 'b5',
        icon: 'safe',
        title: 'Safe for Car Electronics',
        description: 'Zero interference with ECM or alarms.'
      },
      {
        id: 'b6',
        icon: 'money',
        title: 'Saves Lakhs in Bills',
        description: 'Avoid massive automobile service invoices.'
      }
    ],
    
    whereToInstallTitle: 'WHERE TO INSTALL FOR VEHICLES?',
    installLocations: [
      'Inside Vehicle Parking Bay Facing Front Grille',
      'Near Garage Floor Below Engine Bay',
      'Inside Engine Bonnet (Underhood Installation)',
      'Near Car Battery & Fuse Box Cavity',
      'Inside Commercial Truck Cabin & Battery Box'
    ],
    installImage: '/images/home/bento/car-truck.webp',
    
    productName: 'RATGUARD SONICARMOR X',
    productTagline: 'Your Ultimate Vehicle Protection Partner',
    originalPrice: '7,999',
    discountedPrice: '2,450',
    
    comparisonImage: '/images/home/hero/hero-1.webp',
    comparisonRows: [
      {
        problem: 'Chewed Wiring Harness & Sensors',
        solution: 'Ultrasonic wave barrier protects engine bay 24x7'
      },
      {
        problem: 'AC Blower Duct Nesting & Odors',
        solution: 'Stops rodents from entering vehicle firewall openings'
      },
      {
        problem: 'Bonnet Fire & Spark Risks',
        solution: 'Prevents insulation chewing and dangerous short circuits'
      },
      {
        problem: 'Sprays Wash Off in Rain',
        solution: 'Permanent electronic protection unaffected by weather'
      },
      {
        problem: 'Overnight Parking Infestation',
        solution: 'Continuous sonic shield keeps rats away in dark parking'
      },
      {
        problem: 'Insurance Claim Rejection Hassles',
        solution: 'Eliminates unexpected and expensive garage service bills'
      }
    ],
    
    faqs: [
      {
        question: 'How do I protect my car if it is parked in an open society parking lot?',
        answer: 'You can position the Ratguard device plugged into your parking pillar or garage wall facing the front engine grille of your vehicle. The wide ultrasonic cone penetrates under the engine bay.'
      },
      {
        question: 'Does Ratguard drain my vehicle battery?',
        answer: 'No. Ratguard uses ultra-low micro-power circuitry (under 3 Watts). When plugged into garage power, it uses zero vehicle battery.'
      },
      {
        question: 'Why are chemical rat repellent sprays ineffective for cars?',
        answer: 'Sprays evaporate quickly in engine heat, wash away when driving through rain or water, and leave sticky residues. Ratguard provides permanent, weatherproof acoustic deterrence.'
      },
      {
        question: 'Will it damage luxury car sensors or ADAS cameras?',
        answer: 'No. It operates with harmless acoustic sound waves that cause zero electromagnetic interference with ECMs, keyless entry, or ADAS systems.'
      },
      {
        question: 'How soon will rats stop entering my engine bay?',
        answer: 'Most vehicle owners see immediate deterrence within 24 to 72 hours, with rats abandoning their nesting habits completely.'
      },
      {
        question: 'Can I use it for commercial trucks, buses and tractors?',
        answer: 'Yes! Ratguard is engineered for heavy vehicles, trucks, tractors, and luxury cars alike.'
      }
    ],
    
    finalCtaTitle: 'Protect Your',
    finalCtaAccent: 'Car & Truck Engine',
    finalCtaSubtitle: "Keep expensive wiring harnesses, sensors, and engine bays safe with Ratguard's advanced ultrasonic protection.",
    finalCtaButtonText: 'Protect My Vehicle'
  },

  'home-owners': {
    slug: 'home-owners',
    categoryName: 'Home Owners',
    targetSpace: 'Home & Kitchen',
    kicker: 'RESIDENTIAL PROTECTION',
    heroHeading: 'PROTECT YOUR',
    heroAccentWord: 'HOME & KITCHEN',
    heroSubheading: 'Keep your kitchen cabinets, false ceilings, sofa storage, and bedrooms completely rat-free with safe, silent, chemical-free ultrasonic technology.',
    heroBgImage: '/images/home/hero/hero-8.webp',
    heroCtaText: 'PROTECT MY HOME',
    
    problemSectionTitle: 'The Rat Problem in Homes & Apartments',
    problems: [
      {
        id: 'p1',
        icon: 'food',
        title: 'Kitchen Food Spoilage',
        description: 'Rats chew open pantry containers, bread packaging, fruit baskets, and cereal boxes, contaminating your daily family groceries with germs.'
      },
      {
        id: 'p2',
        icon: 'alert',
        title: 'Ceiling Night Noises',
        description: 'Loud scratching, squeaking, and scurrying sounds inside false ceilings and drywall partitions disturb sleep and cause constant anxiety.'
      },
      {
        id: 'p3',
        icon: 'wire',
        title: 'Appliance Wire Chewing',
        description: 'Rats chew the rear wiring of refrigerators, washing machine drain pipes, and smart televisions, leading to expensive appliance repairs.'
      },
      {
        id: 'p4',
        icon: 'health',
        title: 'Pathogen Contamination',
        description: 'Rodent droppings and urine tracks on kitchen countertops spread hazardous bacteria like Salmonella and Leptospirosis to family members.'
      },
      {
        id: 'p5',
        icon: 'box',
        title: 'Furniture & Clothes Bites',
        description: 'Rodents gnaw through expensive designer clothes, curtains, sofa upholstery, and bed mattresses to gather soft nesting materials.'
      },
      {
        id: 'p6',
        icon: 'shield',
        title: 'Poison Cakes Danger',
        description: 'Placing poisonous rat cakes or chemical traps around home floors poses severe poisoning risks to curious toddlers and household pets.'
      }
    ],
    
    solutionTitle: 'RATGUARD SONICARMOR X',
    solutionSubtitle: 'Family-Safe Ultrasonic Repeller creating an impenetrable 24/7 sound shield for your home.',
    solutionPoints: [
      '100% Safe for Toddlers, Dogs & Cats',
      'Completely Silent to Human Ears',
      'Protects Kitchens, Ceilings & Bedrooms',
      'No Poisons, Toxic Cakes or Traps',
      'Consumes Less than ₹15 Power Per Month',
      'Plug & Play in Any Normal Wall Socket'
    ],
    
    whyChooseTitle: 'Why Choose RatGuard for Your Home & Family?',
    benefits: [
      {
        id: 'b1',
        icon: 'safe',
        title: '100% Safe for Family & Pets',
        description: 'Zero poison risk for kids, dogs & cats.'
      },
      {
        id: 'b2',
        icon: 'clock',
        title: 'Silent 24/7 Kitchen Shield',
        description: 'Keeps pantry & utensils completely clean.'
      },
      {
        id: 'b3',
        icon: 'wide',
        title: 'False Ceiling Penetration',
        description: 'Clears scratching noises above bedrooms.'
      },
      {
        id: 'b4',
        icon: 'eco',
        title: 'Humane & Clean',
        description: 'No dead rats or toxic cleanup.'
      },
      {
        id: 'b5',
        icon: 'plug',
        title: 'Simple Plug & Play',
        description: 'Just plug into any household socket.'
      },
      {
        id: 'b6',
        icon: 'money',
        title: 'Low Electricity Cost',
        description: 'Runs for less than ₹20 electricity a month.'
      }
    ],
    
    whereToInstallTitle: 'WHERE TO INSTALL IN YOUR HOME?',
    installLocations: [
      'Kitchen Modular Cabinets & Counter Base',
      'Inside False Ceiling Cavities & Ducts',
      'Utility Area & Washing Machine Space',
      'Living Room TV & Entertainment Console',
      'Balcony & Main Entrance Door Area'
    ],
    installImage: '/images/home/bento/home.webp',
    
    productName: 'RATGUARD SONICARMOR X',
    productTagline: 'Your Ultimate Home Protection Partner',
    originalPrice: '7,999',
    discountedPrice: '2,450',
    
    comparisonImage: '/images/home/hero/hero-8.webp',
    comparisonRows: [
      {
        problem: 'Nighttime Ceiling Scratching Noises',
        solution: 'Ultrasonic sound clears overhead false ceiling spaces'
      },
      {
        problem: 'Food Contamination in Kitchen',
        solution: '100% safe, non-toxic barrier without poisonous cakes'
      },
      {
        problem: 'TV & Refrigerator Cable Bites',
        solution: 'Keeps home appliance base wiring zones rodent-free'
      },
      {
        problem: 'Poison Hazard for Babies & Pets',
        solution: '100% safe for toddlers, cats, dogs and birds'
      },
      {
        problem: 'Messy Snap Traps & Dead Rat Cleanup',
        solution: 'No dead rats to dispose of; pests flee living spaces'
      },
      {
        problem: 'Pathogen Spread & Leptospirosis',
        solution: 'Maintains a clean, disease-free, hygienic home'
      }
    ],
    
    faqs: [
      {
        question: 'Is Ratguard safe around my pet dog and cat?',
        answer: 'Yes! The frequency bands used by Ratguard (20 kHz to 65 kHz) target rodent biology and are completely harmless and non-disturbing to household dogs, cats, and birds.'
      },
      {
        question: 'Will it work through solid brick walls or closed doors?',
        answer: 'Ultrasonic waves bounce off solid walls to fill a room with sound pressure, but cannot penetrate thick solid walls. For multi-room homes, we recommend 1 unit per room or in key trouble spots (kitchen, ceiling, utility).'
      },
      {
        question: 'How do I eliminate rats running in my false ceiling?',
        answer: 'Plug the device into an outlet located near or inside the false ceiling trapdoor, or point it upward toward the ceiling void. The sound waves fill the cavity and clear the pests.'
      },
      {
        question: 'Does it make any audible clicking or buzzing sound for humans?',
        answer: 'No. Ratguard is engineered to operate silently for humans. The dual LED lights confirm active wave generation.'
      },
      {
        question: 'How long does it take for rats to leave my home?',
        answer: 'You will notice reduced activity in 3 to 5 days, and permanent avoidance by Day 10-14 as rodents migrate elsewhere.'
      },
      {
        question: 'Can I leave it plugged in all year round?',
        answer: 'Yes! It is designed for continuous 24/7/365 operation and consumes only 3 to 5 Watts of electricity.'
      }
    ],
    
    finalCtaTitle: 'Protect Your',
    finalCtaAccent: 'Family & Home',
    finalCtaSubtitle: "Keep your loved ones safe from rat infestations with Ratguard's advanced ultrasonic protection.",
    finalCtaButtonText: 'Protect My Home'
  }
};
