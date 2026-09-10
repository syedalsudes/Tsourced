export interface ProductColor {
  name: string;
  hex: string;
}

// Naya interface sizes aur unki availability ke liye
export interface ProductSize {
  name: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'Hoodies' | 'Crewneck' | 'Zipper Hoodies' | 'Youth' | 'Bottoms' | 'T-Shirts';
  badge?: string;
  desc: string;
  img: string;
  extraNotes: string;
  highlights: string[];
  fabrics: string[];
  weights: string[];
  fits: string[];
  colors: ProductColor[];
  sizes: ProductSize[]; // Naya property add kiya gaya hai
  additionalOpts: string[];
}

// 1. Categories List
export const CATEGORIES = [
  'All',
  'Hoodies',
  'Crewneck',
  'Zipper Hoodies',
  'Youth',
  'Bottoms',
  'T-Shirts'
] as const;

// 2. Global Products Master Array
export const PRODUCTS: Product[] = [
  // ---------------- HOODIES ----------------
  {
    id: 'heavyweight-pullover-hoodie',
    name: 'Heavyweight Pullover Hoodie',
    category: 'Hoodies',
    badge: 'Best Seller',
    desc: 'Ultra-soft fleece oversized pullover hoodie with double-lined hood and deep kangaroo pocket.',
    img: '/products/hoodie1.png',
    extraNotes: 'Crafted with premium heavy-fleece fabric. Designed for long-lasting comfort, minimal shrinkage after wash, and superior printability.',
    highlights: ['100% Ring-spun Cotton Surface', 'Pre-Shrunk Fleece', 'Double-Needle Stitching', 'Matching Drawstrings'],
    fabrics: ['3-Thread Fleece', 'Cotton Terry', 'Organic Cotton Blend'],
    weights: ['350 GSM', '400 GSM', '450 GSM'],
    fits: ['Oversized Fit', 'Drop Shoulder', 'Boxy Fit'],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Heather Grey', hex: '#9CA3AF' },
      { name: 'Bone White', hex: '#F3F4F6' },
      { name: 'Vintage Brown', hex: '#4A3B32' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: false }, // Ye UI me disabled/cross hoga
      { name: 'XL', inStock: true }
    ],
    additionalOpts: ['Custom Neck Label', 'Polybag Packaging', 'Custom Drawstrings', 'Puff Print Ready']
  },
  {
    id: 'essential-streetwear-hoodie',
    name: 'Essential Streetwear Hoodie',
    category: 'Hoodies',
    badge: 'Trending',
    desc: 'Modern relaxed fit hoodie engineered for daily wear and street culture brands.',
    img: '/products/hoodie2.png',
    extraNotes: 'Double-stitched stress points ensure maximum durability. Smooth face fabric makes it ideal for direct-to-garment (DTG) printing.',
    highlights: ['Lint-Free Outer Surface', 'Reinforced Cuffs', 'Ribbed Hem'],
    fabrics: ['Cotton/Poly Blend', 'French Terry'],
    weights: ['300 GSM', '320 GSM', '360 GSM'],
    fits: ['Regular Fit', 'Relaxed Fit', 'Drop Shoulder'],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Navy Blue', hex: '#1E3A8A' },
      { name: 'Forest Green', hex: '#064E3B' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: false }, // Ye UI me disabled/cross hoga
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: false }
    ],
    additionalOpts: ['Custom Neck Label', 'Hangtag Included', 'Polybag Packaging']
  },

  // ---------------- CREWNECK ----------------
  {
    id: 'classic-fleece-crewneck',
    name: 'Classic Fleece Crewneck',
    category: 'Crewneck',
    badge: 'Popular',
    desc: 'Clean, minimal crewneck sweatshirt with ribbed collar and comfortable raglan sleeve option.',
    img: '/products/crewneck1.png',
    extraNotes: 'Premium ribbing on collar, cuffs, and waistband ensures shape retention even after multiple industrial wash cycles.',
    highlights: ['Ribbed Neck & Cuffs', 'Combed Cotton Topcoat', 'Soft Brushed Interior'],
    fabrics: ['Fleece', 'French Terry', '100% Cotton'],
    weights: ['300 GSM', '350 GSM', '380 GSM'],
    fits: ['Regular Fit', 'Relaxed Fit', 'Boxy Fit'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Sage Green', hex: '#87A96B' },
      { name: 'Heather Grey', hex: '#9CA3AF' }
    ],
    sizes: [
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true }
    ],
    additionalOpts: ['Custom Neck Label', 'Embroidery Patch', 'Polybag Packaging']
  },
  {
    id: 'vintage-wash-crewneck',
    name: 'Vintage Wash Crewneck',
    category: 'Crewneck',
    badge: 'New',
    desc: 'Acid washed crewneck with worn-in aesthetic and ultra-soft hand feel.',
    img: '/products/crewneck2.png',
    extraNotes: 'Individually dyed and enzyme-washed to create a unique vintage look for every single garment.',
    highlights: ['Custom Pigment Wash', 'Pre-Shrunk', 'Heavy Rib Trim'],
    fabrics: ['100% Cotton Fleece', 'French Terry'],
    weights: ['320 GSM', '360 GSM', '400 GSM'],
    fits: ['Oversized Fit', 'Drop Shoulder'],
    colors: [
      { name: 'Washed Charcoal', hex: '#374151' },
      { name: 'Washed Navy', hex: '#1E293B' },
      { name: 'Dusty Rose', hex: '#D8B4FE' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: false },
      { name: 'XL', inStock: false }
    ],
    additionalOpts: ['Custom Neck Label', 'Distressed Edges', 'Hangtag Included']
  },

  // ---------------- ZIPPER HOODIES ----------------
  {
    id: 'full-zip-fleece-hoodie',
    name: 'Full-Zip Fleece Hoodie',
    category: 'Zipper Hoodies',
    badge: 'Versatile',
    desc: 'Heavyweight full-zip hoodie with premium metal YKK zipper and split kangaroo pocket.',
    img: '/products/ziphoodie1.png',
    extraNotes: 'Features covered zipper track for seamless print coverage across the front body.',
    highlights: ['YKK Antique Metal Zipper', 'Covered Zipper Layer for Printing', 'Double Needle Coverstitching'],
    fabrics: ['3-Thread Fleece', 'Cotton Blend'],
    weights: ['320 GSM', '380 GSM', '420 GSM'],
    fits: ['Regular Fit', 'Oversized Fit'],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Heather Grey', hex: '#9CA3AF' },
      { name: 'Midnight Navy', hex: '#0F172A' }
    ],
    sizes: [
      { name: 'S', inStock: false },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true }
    ],
    additionalOpts: ['Custom Puller', 'Custom Neck Label', 'Individual Polybag']
  },
  {
    id: 'quarter-zip-active-hoodie',
    name: 'Quarter-Zip Active Hoodie',
    category: 'Zipper Hoodies',
    badge: 'Sport',
    desc: 'Performance quarter-zip hoodie built for active lifestyle brands and athletic training.',
    img: '/products/quarterziphoodie1.png',
    extraNotes: 'Moisture-wicking breathable fabric designed for optimal movement and high durability.',
    highlights: ['Auto-Lock Quarter Zipper', 'Breathable Fabric', 'Thumbhole Cuffs'],
    fabrics: ['Polyester Blend', 'Performance Terry', 'Spandex Blend'],
    weights: ['260 GSM', '300 GSM'],
    fits: ['Athletic Fit', 'Slim Fit', 'Regular Fit'],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Charcoal', hex: '#4B5563' },
      { name: 'Electric Blue', hex: '#2563EB' }
    ],
    sizes: [
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false }
    ],
    additionalOpts: ['Reflective Prints', 'Custom Neck Label', 'Polybag Packaging']
  },

  // ---------------- YOUTH ----------------
  {
    id: 'youth-essential-hoodie',
    name: 'Youth Essential Hoodie',
    category: 'Youth',
    badge: 'Kids Safety',
    desc: 'Safety-compliant kids pullover hoodie without drawstrings for ultimate safety and comfort.',
    img: '/products/ziphoodie2.png',
    extraNotes: 'Designed according to international youth apparel safety guidelines with no hood drawstrings.',
    highlights: ['No Drawstring Safety Design', 'Ultra-Soft Skin Friendly Cotton', 'Durable Construction'],
    fabrics: ['100% Combed Cotton Fleece', 'Cotton/Poly Blend'],
    weights: ['280 GSM', '320 GSM'],
    fits: ['Youth Regular Fit', 'Youth Loose Fit'],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Heather Grey', hex: '#9CA3AF' },
      { name: 'Sky Blue', hex: '#38BDF8' },
      { name: 'Soft Pink', hex: '#F472B6' }
    ],
    sizes: [
      { name: 'Youth S', inStock: true },
      { name: 'Youth M', inStock: true },
      { name: 'Youth L', inStock: false }
    ],
    additionalOpts: ['Safety Neck Labels', 'Custom Prints', 'Polybag Packaging']
  },
  {
    id: 'youth-everyday-tee',
    name: 'Youth Everyday T-Shirt',
    category: 'Youth',
    badge: 'Soft Touch',
    desc: 'Lightweight and durable youth t-shirt designed for active kids and school merchandise.',
    img: '/products/tshirt.png',
    extraNotes: 'Hypoallergenic fabric washed twice to remove impurities and guarantee softness against skin.',
    highlights: ['Tear-Away Tag Option', 'Non-Irritating Collar', 'Fade Resistant Dyes'],
    fabrics: ['100% Organic Cotton', 'Single Jersey'],
    weights: ['160 GSM', '180 GSM'],
    fits: ['Youth Regular Fit'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Bright Yellow', hex: '#FACC15' }
    ],
    sizes: [
      { name: 'Youth S', inStock: false },
      { name: 'Youth M', inStock: true },
      { name: 'Youth L', inStock: true }
    ],
    additionalOpts: ['Tear-Away Labels', 'Screen Printing', 'Polybag Packaging']
  },

  // ---------------- BOTTOMS ----------------
  {
    id: 'heavyweight-fleece-joggers',
    name: 'Heavyweight Fleece Joggers',
    category: 'Bottoms',
    badge: 'Popular',
    desc: 'Premium fleece sweatpants with deep side pockets, elastic waistband, and ribbed ankle cuffs.',
    img: '/products/trauser1.png',
    extraNotes: 'Includes long capped drawstrings and an extra back pocket for utility.',
    highlights: ['Deep Zipper Pockets', 'Capped Thick Drawstrings', 'Elasticated Ankle Ribbing'],
    fabrics: ['3-Thread Fleece', 'Cotton Terry'],
    weights: ['320 GSM', '380 GSM', '420 GSM'],
    fits: ['Standard Jogger Fit', 'Oversized Tapered Fit'],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Heather Grey', hex: '#9CA3AF' },
      { name: 'Olive Green', hex: '#3F6212' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false }
    ],
    additionalOpts: ['Custom Eyelets', 'Custom Neck/Waist Label', 'Polybag Packaging']
  },
  {
    id: 'open-hem-relaxed-sweatpants',
    name: 'Open Hem Relaxed Sweatpants',
    category: 'Bottoms',
    badge: 'Streetwear',
    desc: 'Straight-leg open bottom sweatpants providing a clean baggy drape over sneakers.',
    img: '/products/trauser2.png',
    extraNotes: 'Engineered with wide leg openings specifically designed for current streetwear fashion silhouettes.',
    highlights: ['Straight Open Hem', 'Hidden Waistband Drawstring', 'Heavyweight Fabric Drape'],
    fabrics: ['100% Cotton Fleece', 'French Terry'],
    weights: ['360 GSM', '400 GSM'],
    fits: ['Wide Leg Fit', 'Straight Fit', 'Baggy Fit'],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Bone White', hex: '#F3F4F6' },
      { name: 'Washed Charcoal', hex: '#374151' }
    ],
    sizes: [
      { name: '28', inStock: false },
      { name: '30', inStock: true },
      { name: '32', inStock: true },
      { name: '34', inStock: true },
      { name: '36', inStock: false }
    ],
    additionalOpts: ['Custom Waistband Printing', 'Custom Labels', 'Polybag Packaging']
  },

  // ---------------- T-SHIRTS ----------------
  {
    id: 'heavyweight-oversized-tee',
    name: 'Heavyweight Oversized Tee',
    category: 'T-Shirts',
    badge: 'Best Seller',
    desc: 'Thick structured boxy t-shirt with tight high-neck collar and dropped shoulders.',
    img: '/products/shirt1.png',
    extraNotes: '240 GSM single jersey fabric ensures the tee holds its boxy structure throughout the day.',
    highlights: ['1.25" High Ribbed Collar', 'Twin Needle Hemming', 'Zero Sag Neckline'],
    fabrics: ['100% Combed Cotton Single Jersey', 'Organic Cotton'],
    weights: ['220 GSM', '240 GSM', '280 GSM'],
    fits: ['Boxy Oversized Fit', 'Drop Shoulder'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Vintage Washed Grey', hex: '#4B5563' },
      { name: 'Rust Orange', hex: '#EA580C' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: false }, // Disabled
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true }
    ],
    additionalOpts: ['Custom Neck Print', 'Custom Hem Tag', 'Polybag Packaging']
  },
  {
    id: 'essential-luxury-crew-tee',
    name: 'Essential Luxury Crew Tee',
    category: 'T-Shirts',
    badge: 'Premium',
    desc: 'Silky smooth classic fit t-shirt made with ultra-fine combed cotton for modern basic lines.',
    img: '/products/shirt2.png',
    extraNotes: 'Silicone washed for an ultra-soft hand feel that gives a luxury retail presentation.',
    highlights: ['Silicone Softener Finish', 'Shoulder-to-Shoulder Taping', 'Slim Ribbed Collar'],
    fabrics: ['100% SuPima/Combed Cotton', 'Cotton Blend'],
    weights: ['180 GSM', '200 GSM'],
    fits: ['Regular Fit', 'Slim Modern Fit'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Navy Blue', hex: '#1E3A8A' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false } // Disabled
    ],
    additionalOpts: ['Custom Neck Tag', 'Polybag Packaging', 'Hangtag Included']
  }
];

// Helper Functions
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}