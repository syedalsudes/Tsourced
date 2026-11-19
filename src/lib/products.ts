export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductSize {
  name: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'Crewnecks' | 'Hoodies' | 'Zipper Hoodies' | 'Youth' | 'T-Shirts';
  fabricFamily: 'Core Fleece' | 'CloudLoop' | 'GrainKnit' | 'Jersey';
  badge?: string;
  desc: string;
  img: string;
  extraNotes: string;
  highlights: string[];
  fabrics: string[];
  weights: string[];
  fits: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  additionalOpts: string[];
}

// 1. Updated Categories List (Client Catalogue ke mutabiq)
export const CATEGORIES = [
  'All',
  'Crewnecks',
  'Hoodies',
  'Zipper Hoodies',
  'Youth',
  'T-Shirts'
] as const;

// 2. Client ke 11 Real Products
export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. CREWNECKS (3 Products)
  // ==========================================
  {
    id: 'core-fleece-crewneck',
    name: 'Core Fleece Crewneck',
    category: 'Crewnecks',
    fabricFamily: 'Core Fleece',
    badge: 'Core Range',
    desc: 'Standard everyday 9 oz fleece crewneck featuring double-needle stitching and 1x1 ribbed collar, cuffs, and waistband.',
    img: '/products/crewneck1.png', // Placeholder: Client ki image aane par update karein
    extraNotes: 'Built with durable 80% cotton / 20% polyester fleece, twill neck tape, and a tear-away label for effortless custom rebranding.',
    highlights: ['80% Cotton / 20% Polyester', 'Double-Needle Stitching', 'Twill Neck Tape', 'Tear-Away Label'],
    fabrics: ['Core Fleece (80% Cotton / 20% Poly)'],
    weights: ['9 oz'],
    fits: ['Standard Fit'],
    colors: [
      { name: 'Black', hex: '#111827' },
      { name: 'Charcoal Heather', hex: '#4B5563' },
      { name: 'Athletic Heather', hex: '#9CA3AF' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
  },
  {
    id: 'cloudloop-crewneck',
    name: 'CloudLoop Crewneck',
    category: 'Crewnecks',
    fabricFamily: 'CloudLoop',
    badge: 'CloudLoop',
    desc: 'Ultra-soft 8.5 oz ring-spun cotton blend crewneck with a distinctive towel-like visual knit texture and relaxed unisex fit.',
    img: '/products/crewneck2.png',
    extraNotes: 'Crafted from our signature CloudLoop fabric family (60% ring-spun cotton / 40% polyester) with 1x1 ribbed cuffs, waistband, and twill neck tape.',
    highlights: ['Ring-Spun Cotton Blend', 'Distinctive Knit Texture', 'Twill Neck Tape', 'Tear-Away Label'],
    fabrics: ['CloudLoop (60% Cotton / 40% Poly)'],
    weights: ['8.5 oz'],
    fits: ['Relaxed Unisex Fit'],
    colors: [
      { name: 'Salt & Pepper', hex: '#6B7280' },
      { name: 'Oatmeal', hex: '#D6CFC2' },
      { name: 'Teal', hex: '#0D9488' },
      { name: 'Hot Pink', hex: '#EC4899' },
      { name: 'Aqua', hex: '#38BDF8' },
      { name: 'Navy Heather', hex: '#1E3A8A' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
  },
  {
    id: 'grainknit-crewneck',
    name: 'GrainKnit Crewneck',
    category: 'Crewnecks',
    fabricFamily: 'GrainKnit',
    badge: 'GrainKnit',
    desc: 'Contemporary unisex crewneck featuring a pronounced tonal surface texture and a warm brushed-back fleece interior.',
    img: '/products/crewneck1.png',
    extraNotes: 'Made with 9 oz premium cotton blend (60% premium cotton / 40% polyester) with 1x1 ribbed collar, cuffs, and waistband.',
    highlights: ['Tonal Surface Texture', 'Brushed-Back Fleece Interior', '1x1 Ribbed Trim', '60% Premium Cotton'],
    fabrics: ['GrainKnit (60% Cotton / 40% Poly)'],
    weights: ['9 oz'],
    fits: ['Contemporary Unisex Fit'],
    colors: [
      { name: 'Sand', hex: '#D2B48C' },
      { name: 'Sky', hex: '#7DD3FC' },
      { name: 'Olive', hex: '#556B2F' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true }
    ],
    additionalOpts: ['Custom Neck Label', 'Individual Polybag']
  },

  // ==========================================
  // 2. PULLOVER HOODIES (3 Products)
  // ==========================================
  {
    id: 'core-fleece-hoodie',
    name: 'Core Fleece Hoodie',
    category: 'Hoodies',
    fabricFamily: 'Core Fleece',
    badge: 'Extended Sizes',
    desc: 'Classic 9 oz unisex pullover hoodie with a smooth print-ready exterior, soft interior, and self-fabric lined hood.',
    img: '/products/hoodie1.png',
    extraNotes: '80% cotton / 20% polyester construction featuring flat drawcords, front pouch pocket, and a tear-away label. Available up to 5XL.',
    highlights: ['Smooth Exterior for Printing', 'Self-Fabric Lined Hood', 'Flat Drawcord & Pouch Pocket', 'Tear-Away Label'],
    fabrics: ['Core Fleece (80% Cotton / 20% Poly)'],
    weights: ['9 oz'],
    fits: ['Unisex Fit'],
    colors: [
      { name: 'Black', hex: '#111827' },
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Charcoal Heather', hex: '#4B5563' },
      { name: 'Red', hex: '#DC2626' }
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
      { name: '4XL', inStock: true },
      { name: '5XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
  },
  {
    id: 'cloudloop-hoodie',
    name: 'CloudLoop Hoodie',
    category: 'Hoodies',
    fabricFamily: 'CloudLoop',
    badge: 'CloudLoop',
    desc: 'Relaxed fit pullover hoodie crafted from 8.5 oz ring-spun CloudLoop fabric with a distinctive textured knit surface.',
    img: '/products/hoodie2.png',
    extraNotes: '60% ring-spun cotton / 40% polyester with self-fabric lined hood, unisex construction, and tear-away label.',
    highlights: ['8.5 oz Ring-Spun Cotton', 'Distinctive Knit Surface', 'Self-Fabric Lined Hood', 'Tear-Away Label'],
    fabrics: ['CloudLoop (60% Cotton / 40% Poly)'],
    weights: ['8.5 oz'],
    fits: ['Relaxed Unisex Fit'],
    colors: [
      { name: 'Aqua', hex: '#38BDF8' },
      { name: 'Salt & Pepper', hex: '#6B7280' },
      { name: 'Oatmeal', hex: '#D6CFC2' },
      { name: 'Teal', hex: '#0D9488' },
      { name: 'Hot Pink', hex: '#EC4899' },
      { name: 'Navy Heather', hex: '#1E3A8A' }
    ],
    sizes: [
      { name: 'XS', inStock: false }, // Client doc note: XS supplier se confirm hona baqi hai
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
  },
  {
    id: 'grainknit-hoodie',
    name: 'GrainKnit Hoodie',
    category: 'Hoodies',
    fabricFamily: 'GrainKnit',
    badge: 'Print Ready',
    desc: 'Modern retail fit hoodie with a textured tonal outer finish and heavy brushed fleece interior.',
    img: '/products/hoodie1.png',
    extraNotes: '9 oz (60% premium cotton / 40% polyester) engineered with a smooth outer face suitable for screen printing, embroidery, DTF, and heat press.',
    highlights: ['Screen Print, Embroidery & DTF Ready', 'Heavy Brushed Fleece Interior', 'Double-Needle Stitching', 'Tonal Textured Finish'],
    fabrics: ['GrainKnit (60% Cotton / 40% Poly)'],
    weights: ['9 oz'],
    fits: ['Modern Retail Fit'],
    colors: [
      { name: 'Sand', hex: '#D2B48C' },
      { name: 'Sky', hex: '#7DD3FC' },
      { name: 'Olive', hex: '#556B2F' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true }
    ],
    additionalOpts: ['Custom Neck Label', 'Individual Polybag']
  },

  // ==========================================
  // 3. ZIPPER HOODIES (2 Products)
  // ==========================================
  {
    id: 'cloudloop-full-zip-hoodie',
    name: 'CloudLoop Full-Zip Hoodie',
    category: 'Zipper Hoodies',
    fabricFamily: 'CloudLoop',
    badge: 'YKK Zipper',
    desc: 'Soft 8.5 oz CloudLoop full-zip hoodie equipped with a premium YKK metal kissing zipper and front pouch pockets.',
    img: '/products/ziphoodie1.png',
    extraNotes: '60% cotton / 40% polyester knit with twill neck tape, 1x1 ribbed cuffs and waistband, and tear-away label.',
    highlights: ['YKK Metal Kissing Zipper', 'Soft CloudLoop Knit', 'Twill Neck Tape', 'Tear-Away Label'],
    fabrics: ['CloudLoop (60% Cotton / 40% Poly)'],
    weights: ['8.5 oz'],
    fits: ['Relaxed Unisex Fit'],
    colors: [
      { name: 'Salt & Pepper', hex: '#6B7280' },
      { name: 'Oatmeal', hex: '#D6CFC2' },
      { name: 'Hot Pink', hex: '#EC4899' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
  },
  {
    id: 'core-full-zip-hoodie',
    name: 'Core Full-Zip Hoodie',
    category: 'Zipper Hoodies',
    fabricFamily: 'Core Fleece',
    badge: 'Core Range',
    desc: '9 oz full-zip fleece hoodie designed for customization, featuring a YKK metal kissing zipper and self-fabric lined hood.',
    img: '/products/ziphoodie1.png',
    extraNotes: '80% cotton / 20% polyester with flat drawcord, front pouch pockets, and tear-away label. Available up to 5XL.',
    highlights: ['YKK Metal Kissing Zipper', 'Designed for Customization', 'Self-Fabric Lined Hood', 'Tear-Away Label'],
    fabrics: ['Core Fleece (80% Cotton / 20% Poly)'],
    weights: ['9 oz'],
    fits: ['Standard Unisex Fit'],
    colors: [
      { name: 'Black', hex: '#111827' },
      { name: 'Athletic Heather', hex: '#9CA3AF' },
      { name: 'Charcoal Heather', hex: '#4B5563' },
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Red', hex: '#DC2626' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
      { name: '4XL', inStock: true },
      { name: '5XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
  },

  // ==========================================
  // 4. YOUTH HOODIES (2 Products)
  // ==========================================
  {
    id: 'core-youth-fleece-hoodie',
    name: 'Core Youth Fleece Hoodie',
    category: 'Youth',
    fabricFamily: 'Core Fleece',
    badge: 'Child Safe',
    desc: 'Midweight 9 oz youth pullover hoodie built without drawcords for added safety, featuring a self-fabric lined hood.',
    img: '/products/ziphoodie2.png',
    extraNotes: '80% cotton / 20% polyester construction with front pouch pocket, 1x1 ribbed cuffs and waistband, and tear-away label.',
    highlights: ['No Drawcord for Safety', 'Self-Fabric Lined Hood', '1x1 Ribbed Cuffs & Hem', 'Tear-Away Label'],
    fabrics: ['Core Fleece (80% Cotton / 20% Poly)'],
    weights: ['9 oz'],
    fits: ['Youth Standard Fit'],
    colors: [
      { name: 'Black', hex: '#111827' },
      { name: 'Athletic Heather', hex: '#9CA3AF' },
      { name: 'Charcoal Heather', hex: '#4B5563' },
      { name: 'Fuchsia', hex: '#D946EF' }
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
  },
  {
    id: 'cloudloop-youth-hoodie',
    name: 'CloudLoop Youth Hoodie',
    category: 'Youth',
    fabricFamily: 'CloudLoop',
    badge: 'CloudLoop',
    desc: 'Soft midweight 8.5 oz ring-spun youth hoodie with a smooth, stable surface optimized for custom printing.',
    img: '/products/ziphoodie2.png',
    extraNotes: '60% ring-spun cotton / 40% polyester featuring twill neck tape, 1x1 ribbed cuffs and waistband, and tear-away label.',
    highlights: ['Smooth Print-Stable Surface', '8.5 oz Ring-Spun Cotton', 'Twill Neck Tape', 'Tear-Away Label'],
    fabrics: ['CloudLoop (60% Cotton / 40% Poly)'],
    weights: ['8.5 oz'],
    fits: ['Youth Relaxed Fit'],
    colors: [
      { name: 'Aqua', hex: '#38BDF8' },
      { name: 'Salt & Pepper', hex: '#6B7280' },
      { name: 'Oatmeal', hex: '#D6CFC2' },
      { name: 'Hot Pink', hex: '#EC4899' }
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
  },

  // ==========================================
  // 5. T-SHIRTS (1 Product)
  // ==========================================
  {
    id: 'everyday-jersey-t-shirt',
    name: 'Everyday Jersey T-Shirt',
    category: 'T-Shirts',
    fabricFamily: 'Jersey',
    badge: 'Heavyweight 6 oz',
    desc: 'Structured heavyweight 6 oz 100% open-end cotton t-shirt with preshrunk tubular body construction.',
    img: '/products/shirt1.png',
    extraNotes: 'Features a classic fit, set-in rib collar, shoulder-to-shoulder taping, and a tear-away label. Available up to 5XL.',
    highlights: ['100% Open-End Preshrunk Cotton', 'Tubular Body Construction', 'Shoulder-to-Shoulder Taping', 'Tear-Away Label'],
    fabrics: ['100% Open-End Cotton'],
    weights: ['6 oz'],
    fits: ['Classic Fit'],
    colors: [
      { name: 'Black', hex: '#111827' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Charcoal Heather', hex: '#4B5563' },
      { name: 'Athletic Heather', hex: '#9CA3AF' },
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Red', hex: '#DC2626' },
      { name: 'Royal', hex: '#2563EB' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
      { name: '4XL', inStock: true },
      { name: '5XL', inStock: true }
    ],
    additionalOpts: ['Tear-Away Label (Standard)', 'Custom Neck Label', 'Individual Polybag']
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

export function getProductsByFabric(fabricFamily: string): Product[] {
  if (fabricFamily === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.fabricFamily === fabricFamily);
}