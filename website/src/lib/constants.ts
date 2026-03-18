export interface Package {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  duration: string;
  price: number;
  priceMax?: number;
  maxGuests: number;
  category: "romantic" | "adventure" | "group" | "custom";
  imageUrl: string;
  inclusions: string[];
  highlights: string[];
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  priceMax?: number;
  category: "beverage" | "photo" | "decor" | "food";
}

export const PACKAGES: Package[] = [
  {
    slug: "sunset-romance",
    name: "Sunset Romance Experience",
    tagline: "An intimate sunset cruise designed for two",
    description:
      "A private, intimate sunset cruise designed specifically for couples. Guests are welcomed with chilled prosecco, soft music, and a relaxed atmosphere.",
    longDescription:
      "A private, intimate sunset cruise designed specifically for couples. Guests are welcomed with chilled prosecco, soft music, and a relaxed atmosphere. The route follows Malta's scenic coastline, ending at a carefully selected sunset viewpoint. As the golden light reflects off the Mediterranean, you'll experience a moment of pure connection — away from the crowds, surrounded only by the sea and the sound of gentle waves.",
    duration: "2 hours",
    price: 450,
    maxGuests: 2,
    category: "romantic",
    imageUrl: "/images/packages/sunset-romance.jpg",
    inclusions: [
      "Prosecco & light refreshments",
      "Curated romantic playlist",
      "Optional swim stop (weather permitting)",
      "Personalized hosting by the captain",
    ],
    highlights: [
      "Golden hour on the Mediterranean",
      "Scenic coastline route",
      "Private couple's experience",
      "Perfect for anniversaries & date nights",
    ],
  },
  {
    slug: "hidden-malta-explorer",
    name: "Hidden Malta Explorer",
    tagline: "Discover Malta's secret coastline",
    description:
      "A discovery-focused cruise exploring hidden coves, lesser-known swimming spots, and unique coastal formations.",
    longDescription:
      "A discovery-focused cruise exploring hidden coves, lesser-known swimming spots, and unique coastal formations. The captain shares local stories, history, and insider knowledge, creating an authentic Maltese experience. You'll visit places most tourists never see — secret caves, pristine swimming spots, and dramatic cliffs that tell the story of Malta's ancient past.",
    duration: "3-4 hours",
    price: 600,
    maxGuests: 6,
    category: "adventure",
    imageUrl: "/images/packages/hidden-malta.jpg",
    inclusions: [
      "Flexible route based on sea conditions",
      "Snorkeling equipment",
      "Local insights and storytelling",
      "Light refreshments",
    ],
    highlights: [
      "Hidden coves & secret caves",
      "Snorkeling in crystal-clear waters",
      "Local history & storytelling",
      "Off-the-beaten-path experience",
    ],
  },
  {
    slug: "champagne-proposal",
    name: "Champagne Proposal Tour",
    tagline: "Create an unforgettable moment",
    description:
      "A luxury, high-emotion experience designed for unforgettable proposal moments. The captain coordinates discreetly with you to plan every detail.",
    longDescription:
      "A luxury, high-emotion experience designed for unforgettable proposal moments. The captain coordinates discreetly with you to plan timing, location, and atmosphere. From the moment you step aboard, every detail is crafted to build toward that perfect, life-changing question. Premium champagne, personalized music, and a stunning Mediterranean backdrop set the stage for a memory that lasts forever.",
    duration: "2-3 hours",
    price: 1200,
    maxGuests: 2,
    category: "romantic",
    imageUrl: "/images/packages/proposal.jpg",
    inclusions: [
      "Premium champagne",
      "Personalized music",
      "Scenic proposal backdrop",
      "Discreet coordination with captain",
    ],
    highlights: [
      "Privately coordinated proposal setup",
      "Premium champagne service",
      "Photography-ready moments",
      "The most memorable 'yes' of your life",
    ],
  },
  {
    slug: "blue-lagoon-escape",
    name: "Private Blue Lagoon Escape",
    tagline: "The iconic lagoon, without the crowds",
    description:
      "A private cruise to the iconic Blue Lagoon, scheduled strategically to avoid peak crowds. Crystal-clear waters, total privacy.",
    longDescription:
      "A private cruise to the iconic Blue Lagoon, scheduled strategically to avoid peak crowds. Guests enjoy swimming in crystal-clear waters, relaxing onboard, and experiencing the lagoon without the stress of mass tourism. We anchor in quieter areas, giving you the Blue Lagoon as it's meant to be experienced — peaceful, stunning, and entirely yours.",
    duration: "4-5 hours",
    price: 850,
    priceMax: 1000,
    maxGuests: 8,
    category: "group",
    imageUrl: "/images/packages/blue-lagoon.jpg",
    inclusions: [
      "Flexible departure times",
      "Snorkeling equipment",
      "Drinks & refreshments",
      "Private anchoring in quieter areas",
    ],
    highlights: [
      "Iconic Blue Lagoon without crowds",
      "Crystal-clear swimming",
      "Full-day relaxation",
      "Perfect for groups & families",
    ],
  },
  {
    slug: "custom-vip-charter",
    name: "Custom VIP Charter",
    tagline: "Your vision, our expertise",
    description:
      "A fully customizable private charter tailored to your preferences. Ideal for corporate outings, birthdays, photography sessions, or unique itineraries.",
    longDescription:
      "A fully customizable private charter tailored to your preferences. Whether it's a corporate team outing, a birthday celebration, a photography session, or a completely unique itinerary — we design the experience around you. Tell us your vision, and Captain Patrick will craft something extraordinary.",
    duration: "Flexible",
    price: 600,
    priceMax: 1200,
    maxGuests: 8,
    category: "custom",
    imageUrl: "/images/packages/custom-vip.jpg",
    inclusions: [
      "Custom route planning",
      "Flexible duration",
      "Personalized service",
      "Optional premium add-ons",
    ],
    highlights: [
      "Fully customizable experience",
      "Corporate & celebration ready",
      "Photography-optimized routes",
      "Flexible scheduling",
    ],
  },
];

export const ADD_ONS: AddOn[] = [
  {
    id: "champagne-upgrade",
    name: "Champagne Upgrade",
    description: "Premium champagne selection",
    price: 50,
    priceMax: 150,
    category: "beverage",
  },
  {
    id: "photography",
    name: "Professional Photography",
    description: "High-quality photos of your experience",
    price: 150,
    priceMax: 300,
    category: "photo",
  },
  {
    id: "decorations",
    name: "Custom Decorations",
    description: "Rose petals, balloons, banners & more",
    price: 50,
    priceMax: 200,
    category: "decor",
  },
  {
    id: "gourmet-picnic",
    name: "Gourmet Picnic",
    description: "Charcuterie board & gourmet snacks",
    price: 40,
    priceMax: 80,
    category: "food",
  },
  {
    id: "drone-footage",
    name: "Drone Footage",
    description: "Aerial video of your experience (weather permitting)",
    price: 100,
    priceMax: 150,
    category: "photo",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sophie & James",
    location: "London, UK",
    text: "The sunset cruise was absolutely magical. Captain Patrick made us feel like the only people in the world. An unforgettable anniversary.",
    rating: 5,
  },
  {
    name: "Marcus W.",
    location: "Berlin, Germany",
    text: "Hidden Malta Explorer was the highlight of our entire trip. The secret coves and Patrick's storytelling made it so authentic.",
    rating: 5,
  },
  {
    name: "Elena & David",
    location: "Stockholm, Sweden",
    text: "She said yes! The proposal tour was perfection. Every detail was coordinated so smoothly. Thank you, Captain Patrick!",
    rating: 5,
  },
  {
    name: "The Moretti Family",
    location: "Milan, Italy",
    text: "Blue Lagoon without the crowds — exactly as promised. The kids loved snorkeling and we loved the peace. Highly recommend.",
    rating: 5,
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const SITE_CONFIG = {
  name: "Captain Prive Malta",
  tagline: "Premium Private Maritime Experiences",
  description:
    "Curated, intimate private boat charter experiences in Malta. Sunset cruises, proposals, hidden coves & more. Led personally by Captain Patrick.",
  url: "https://captainprivemalta.com",
  whatsappNumber: "356XXXXXXXX",
  email: "hello@captainprivemalta.com",
  location: "Bugibba, Malta",
  launchDate: "April 2027",
  instagram: "captainprivemalta",
};

export function formatPrice(price: number, priceMax?: number): string {
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-EU", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(n);
  if (priceMax && priceMax !== price) {
    return `${fmt(price)} - ${fmt(priceMax)}`;
  }
  return fmt(price);
}
