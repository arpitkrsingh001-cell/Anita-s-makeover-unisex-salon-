/**
 * Anita's Makeover - Verified Business Data & Content Inventory
 * Preserved from https://www.anitasmakeover.com/salon/ and official client assets
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  pricingNote: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  shortDesc: string;
  items: ServiceItem[];
}

export interface BranchInfo {
  id: string;
  name: string;
  category: 'Registered Office' | 'Branch Office';
  address: string;
  locality: string;
  pincode: string;
  phone: string;
  formattedPhone: string;
  email: string;
  timings: string;
  googleMapsUrl: string;
  description: string;
}

export interface MembershipPlan {
  id: string;
  title: string;
  tagline: string;
  badge?: string;
  priceText: string;
  benefitText: string;
  cardImage: string;
  terms: string[];
  features: string[];
}

export interface AcademyCourse {
  id: string;
  title: string;
  category: string;
  description: string;
  curriculum: string[];
  careerRoles: string[];
  image: string;
  certification: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'party_makeup' | 'bridal' | 'hair_styling' | 'before_after' | 'interior' | 'services';
  imageUrl: string;
  thumbnailUrl?: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  description?: string;
}

// -------------------------------------------------------------
// BRANCHES DATA (Preserved from contact.html & franchise.html)
// -------------------------------------------------------------
export const SALON_BRANCHES: BranchInfo[] = [
  {
    id: 'sector-23a',
    name: 'Sector 23A, Gurgaon (Registered Head Office)',
    category: 'Registered Office',
    address: '39/18, West Zone Entry No. 03, Sector 23A, Opposite Block A Palam Vihar, Gurgaon',
    locality: 'Sector 23A, Palam Vihar',
    pincode: '122017',
    phone: '+919650170897',
    formattedPhone: '+91-9650170897',
    email: 'info@anitasmakeover.com',
    timings: '10:00 AM – 8:00 PM (All 7 Days)',
    googleMapsUrl: 'https://maps.google.com/?q=Sector+23A+Palam+Vihar+Gurgaon+122017',
    description: 'Our premier registered facility and main academy training center offering complete bridal suites, unisex hair studios, and private skincare treatment chambers.',
  },
  {
    id: 'sector-81',
    name: 'Sector 81, Gurgaon',
    category: 'Branch Office',
    address: 'Club House, Besttech Ananda Park View, Sector 81, Gurgaon',
    locality: 'Sector 81 (New Gurgaon)',
    pincode: '122004',
    phone: '+918527705931',
    formattedPhone: '+91-8527705931',
    email: 'info@anitasmakeover.com',
    timings: '10:00 AM – 8:00 PM (All 7 Days)',
    googleMapsUrl: 'https://maps.google.com/?q=Besttech+Ananda+Park+View+Sector+81+Gurgaon+122004',
    description: 'Located in the exclusive Club House of Besttech Ananda Park View, catering to luxury hair design, rejuvenating facials, and wedding transformations.',
  },
  {
    id: 'imt-manesar',
    name: 'IMT Manesar',
    category: 'Branch Office',
    address: 'SCO D 4, First Floor, Sector 1, IMT Manesar, Haryana',
    locality: 'Sector 1, IMT Manesar',
    pincode: '122050',
    phone: '+919953747142',
    formattedPhone: '+91-9953747142',
    email: 'info@anitasmakeover.com',
    timings: '10:00 AM – 8:00 PM (All 7 Days)',
    googleMapsUrl: 'https://maps.google.com/?q=SCO+D4+Sector+1+IMT+Manesar+122050',
    description: 'Our spacious commercial branch in IMT Manesar, celebrated for bridal makeovers, signature hair colouring, and express grooming services.',
  },
];

// -------------------------------------------------------------
// MEMBERSHIP PLANS (Preserved from membership.html)
// -------------------------------------------------------------
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'silver-card',
    title: 'Silver Membership Card',
    tagline: 'Pay Less, Get More Value',
    badge: 'Popular Choice',
    priceText: 'Avail services worth ₹10,000 for just ₹7,500',
    benefitText: 'Instant ₹2,500 bonus service credit on hair, skin, and spa treatments.',
    cardImage: '/images/client/academy/2.png',
    features: [
      'Prepaid salon wallet value of ₹10,000',
      'Pay only ₹7,500 upfront',
      'Valid across all salon services',
      'Priority appointment booking',
      'Complimentary personalized hair/skin consultation',
    ],
    terms: [
      'Avail services worth Rs 10,000 for just Rs 7500.',
      'Terms & Conditions apply.',
      'Prices and card rules subject to salon terms at time of issue.',
    ],
  },
  {
    id: 'golden-card',
    title: 'Golden Membership Card',
    tagline: 'Maximum Savings & Luxury Indulgence',
    badge: 'Best Luxury Value',
    priceText: 'Avail services worth ₹30,000 for just ₹20,000',
    benefitText: 'Enormous ₹10,000 bonus service credit for regular salon and spa visits.',
    cardImage: '/images/client/academy/6.png',
    features: [
      'Prepaid salon wallet value of ₹30,000',
      'Pay only ₹20,000 upfront',
      'Usable for hair, bridal, skin rituals, and nail bar',
      'Priority bridal styling and suite access',
      'Complimentary diagnostic camera analysis',
    ],
    terms: [
      'Avail services worth Rs 30,000 for just Rs 20,000.',
      'Terms & Conditions apply.',
      'Valid across verified treatments at issuing branch.',
    ],
  },
  {
    id: 'prive-loyalty',
    title: "Prive' Loyalty Membership",
    tagline: '365 Days of Unlimited VIP Privilege',
    badge: 'Annual Loyalty Card',
    priceText: 'Flat 20% Discount all year long',
    benefitText: 'Enjoy unlimited 20% savings on every salon service for 12 months.',
    cardImage: '/images/client/academy/makeup-banner3.jpg',
    features: [
      '20% off all salon services for 1 full year (365 days)',
      'Valid from date of card issuance',
      'VIP guest treatment at all branches',
      'Invitations to seasonal beauty launches & masterclasses',
    ],
    terms: [
      'Prive Membership is not applicable for retail products available in salon or for purchase of gift vouchers.',
      'Member discounts are not redeemable for cash.',
      'Cannot be used in conjunction with any other special offers or packages.',
      'Your membership card must be presented at the time of payment in order to receive the discount (exceptions can be considered after verification).',
      'Replacement cards will be issued for lost cards at an extra fee of Rs 250.',
      'All prices are subjected to change without notice.',
      'The card is valid for 12 months from the date of issue.',
    ],
  },
];

// -------------------------------------------------------------
// VERIFIED CLIENT TESTIMONIALS (Preserved from index.html)
// -------------------------------------------------------------
export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      "Anita yadav always gives me amazing haircut that my friends ask where i get my hair styled. she is such a brilliant hair dresser yet she is such a down to earth person. His energy and passion has taken him to great heights and i wish him all the best for future.",
    author: 'Rashmi Sharma',
    role: 'Gurgaon Resident & Regular Client',
    verified: true,
  },
  {
    id: 'test-2',
    quote:
      "Anita's Makeover Salon is my neighbourhood salon…Everyone is always warm and friendly …And they provide best makeup services in their manesar branch .",
    author: 'Monalisha',
    role: 'TV Anchor',
    verified: true,
  },
];

// -------------------------------------------------------------
// SERVICES CATALOG (Preserved from services.html & prompt specs)
// -------------------------------------------------------------
export const SALON_SERVICES: ServiceCategory[] = [
  {
    id: 'hair-styling',
    name: 'Hair Styling & Couture',
    shortDesc: 'Signature unisex haircuts, blow-drys, smoothing & texture transformations.',
    items: [
      {
        id: 'hair-cut',
        name: 'Designer Hair Cut',
        category: 'Hair Styling',
        tagline: 'Precision cutting sculpted to your face shape and personal aura.',
        description:
          "Transform your everyday look with precision styling by our senior stylists. Includes detailed hair consultation, relaxing hair wash, expert cut, and custom blow dry styling.",
        image: '/assets/aistudio/IMG-20261111-WA0086_3a6f87d2.jpg',
        highlights: ['Face-shape consultation', 'Shampoo & conditioning', 'Blow dry finish', 'Men & Women styling'],
        pricingNote: 'Prices on consultation depending on hair length and stylist tier.',
      },
      {
        id: 'hair-texture',
        name: 'Hair Texture (Straightening & Perming)',
        category: 'Hair Styling',
        tagline: 'Turn unruly curls into silky smooth glass hair or add lustrous bouncy curls.',
        description:
          "Ever dreamt of changing the natural texture of your hair? Get those lustrous curls turned into straight smooth hair or just some curly locks to enhance your frame. Right from smooth, silky, ultra soft, straight to bouncy lustrous curls.",
        image: '/assets/aistudio/IMG-20261111-WA0087_59776bb6.jpg',
        highlights: ['Keratin smoothing', 'Permanent straightening', 'Bouncy perm', 'Moisture sealing'],
        pricingNote: 'Custom quote provided after hair strand diagnostic test.',
      },
      {
        id: 'blow-dry-ironing',
        name: 'Blow Dry & Ironing Styling',
        category: 'Hair Styling',
        tagline: 'High-gloss red carpet blow dry and thermal straightening.',
        description:
          'Get event-ready bouncy hair with our signature thermal blowouts, volume rolls, or sleek poker-straight flat iron finishes.',
        image: '/assets/aistudio/IMG-20261111-WA0052_00bba762.jpg',
        highlights: ['Heat protectant infusion', 'Volumizing blowout', 'Curling wand waves', 'Long-lasting hold'],
        pricingNote: 'Available as standalone service or add-on.',
      },
      {
        id: 'hair-rituals',
        name: 'Energizing Scalp & Hair Rituals',
        category: 'Hair Styling',
        tagline: 'Nutrient-rich deep therapy stimulating scalp roots and restoring density.',
        description:
          "Hair is the richest ornament of women. An energizing revitalizing ritual stimulates the scalp and nourishes hair from root to tip to increase density against UV rays, pollution, dust and heat. We use a specialized scalp and hair analysis diagnostic camera to select the ideal ritual.",
        image: '/assets/aistudio/IMG-20261111-WA0037_62c8c224.jpg',
        highlights: ['Scalp diagnostic camera', 'Intense root nourishment', 'Anti-breakage repair', 'Relaxing head massage'],
        pricingNote: 'Custom therapy plans crafted based on diagnostic camera readout.',
      },
    ],
  },
  {
    id: 'hair-colouring',
    name: 'Hair Colouring & Highlights',
    shortDesc: 'Ammonia-free global colors, balayage, and dimensional highlights.',
    items: [
      {
        id: 'global-colour',
        name: 'Ammonia-Free Global Hair Colouring',
        category: 'Hair Colouring',
        tagline: 'Rich, lustrous shades with zero ammonia and gentle scalp comfort.',
        description:
          'Transform your persona with our wide palette of international ammonia-free hair colours. Our master colourists analyze your skin undertones, eye color, and face shape to recommend the most flattering shade.',
        image: '/assets/aistudio/IMG-20261111-WA0087_59776bb6.jpg',
        highlights: ['Ammonia-free formulation', '100% grey coverage', 'Conditioning gloss', 'Personalized shade matching'],
        pricingNote: 'Prices vary by hair volume, root touch-up, or full length.',
      },
      {
        id: 'highlights-lowlights',
        name: 'Creative Highlights & Lowlights',
        category: 'Hair Colouring',
        tagline: 'Dimensional balayage, ombre, and high-street face-framing tones.',
        description:
          'Creative Highlights & Lowlights have the power to vamp up your looks. Add depth & definition to your hair with Gold, Blonde, Pink, Purple, Magenta, and bright high-street shades, tailored to your haircut and personal lifestyle.',
        image: '/assets/aistudio/IMG-20261111-WA0053_c0a60ce3.jpg',
        highlights: ['Balayage & Ombre techniques', 'Face-framing moneypiece', 'Bold fashion tones', 'Tone-refreshing toner'],
        pricingNote: 'Priced per foil streak or full balayage session.',
      },
      {
        id: 'root-touch-up',
        name: 'Root Touch Up & Gloss',
        category: 'Hair Colouring',
        tagline: 'Seamless regrowth coverage with matching color harmony.',
        description:
          'Quick, seamless touch-up for new growth and grey hair with conditioning shine gloss.',
        image: '/assets/aistudio/IMG-20261111-WA0052_00bba762.jpg',
        highlights: ['Regrowth matching', 'Quick application', 'Scalp barrier protection'],
        pricingNote: 'Standard touch-up session pricing available at branch.',
      },
    ],
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup by Anita Yadav',
    shortDesc: 'Signature bridal glam, HD Airbrush finishes, saree draping & jewellery setting.',
    items: [
      {
        id: 'signature-bridal',
        name: 'Signature Bridal Makeover',
        category: 'Bridal Makeup',
        tagline: 'Timeless luxury bridal look crafted personally by Anita Yadav and senior artists.',
        description:
          'Looking beautiful is the most important thing for every woman on her wedding day. Our signature bridal makeover brings out your natural radiance with high-definition makeup, custom lash extensions, precision contouring, hair couture, and traditional or modern jewellery placement.',
        image: '/assets/aistudio/IMG-20261111-WA0085_ea398949.jpg',
        highlights: ['HD / Airbrush bridal makeup', 'Designer hair styling & florals', 'Saree & Dupatta draping', 'Jewellery & accessory setting'],
        pricingNote: 'Available as Bridal Day Package or Multi-Day Wedding Suites.',
      },
      {
        id: 'reception-engagement',
        name: 'Engagement & Reception Makeup',
        category: 'Bridal Makeup',
        tagline: 'Modern ethereal elegance for ring ceremonies, cocktail nights & receptions.',
        description:
          'Glamorous, picture-perfect makeup designed for evening spotlights and photography, featuring luminous glass skin and alluring eye styling.',
        image: '/images/client/bridal/anita-yadav-bridal-makeup1.jpg',
        highlights: ['Waterproof long-stay base', 'Smokey or glam cut-crease eyes', 'Contoured highlighting', 'Designer hair setting'],
        pricingNote: 'Special pricing when booked with pre-bridal or main bridal packages.',
      },
    ],
  },
  {
    id: 'makeup',
    name: 'Party, Fashion & Occasion Makeup',
    shortDesc: 'Flawless makeup for parties, festivals, portfolio shoots & special milestones.',
    items: [
      {
        id: 'party-makeup',
        name: 'Party & Festive Make-Up',
        category: 'Makeup',
        tagline: 'Radiant occasion makeup that stays fresh all night long.',
        description:
          'For a woman, make-up is about enhancing beauty and looks. Our specialized makeup services are a beauty accessory for weddings, anniversary dinners, and festive celebrations.',
        image: '/assets/aistudio/IMG-20261111-WA0008_de2144e7.jpg',
        highlights: ['Flawless base matching', 'Precision eye art', 'Lip contouring', 'Setting mist lock'],
        pricingNote: 'Inquire via WhatsApp for single or group booking.',
      },
      {
        id: 'eye-base-makeup',
        name: 'Base Makeup & Dramatic Eye Art',
        category: 'Makeup',
        tagline: 'Express beauty touch-ups, dramatic glitter cuts & flawless skin base.',
        description:
          'Focused makeup services for clients who desire an ultra-clean base or striking statement eyes for corporate events or photo shoots.',
        image: '/images/client/bridal/anita-yadav-bridal-makeup2.jpg',
        highlights: ['Airbrush foundation base', 'Winged eyeliner & lashes', 'Defined brows'],
        pricingNote: 'Available on walk-in or appointment.',
      },
    ],
  },
  {
    id: 'facials-skin',
    name: 'Facials & Skin Care Rituals',
    shortDesc: 'Luxury anti-aging, brightening and restorative therapies with Skeydor & Agelock.',
    items: [
      {
        id: 'skeydor-agelock',
        name: 'Luxury Skeydor & Agelock Skin Rituals',
        category: 'Facials and Skin Care',
        tagline: 'Combining the magic of nature with the wisdom of science for ageless skin.',
        description:
          'Indulging in skin rituals helps maintain healthy skin against biological ageing, stress, and pollution. We believe in using unique, exclusive, luxury brands like Skeydor and Agelock formulated with breakthrough curative science for oily glands, pigmentation, age spots, fine lines, and scars.',
        image: '/images/client/academy/self_grooming.jpg',
        highlights: ['Skeydor & Agelock certified products', 'Deep cellular infusion', 'Age reversal & pigmentation repair', 'Immediate and long-lasting glow'],
        pricingNote: 'Curated ritual recommendation provided after skin diagnostic camera analysis.',
      },
      {
        id: 'clean-up-bleach',
        name: 'Advanced Clean-Ups & Bleach',
        category: 'Facials and Skin Care',
        tagline: 'Pore clearing, gentle exfoliation, and even-toned skin clarity.',
        description:
          'Thorough pore extraction, dead-skin buffing, fruit or oxy bleach, and soothing herbal packs.',
        image: '/images/client/academy/self_grooming.jpg',
        highlights: ['Pore extraction', 'Steam therapy', 'Herbal cooling mask', 'Even skin tone'],
        pricingNote: 'Regular maintenance packages available.',
      },
    ],
  },
  {
    id: 'pre-bridal',
    name: 'Pre-Bridal Packages',
    shortDesc: 'Comprehensive head-to-toe wellness and rejuvenation for the bride-to-be.',
    items: [
      {
        id: 'complete-pre-bridal',
        name: 'Complete Pre-Bridal Wellness Package',
        category: 'Pre-Bridal Packages',
        tagline: 'Head-to-toe pampering scheduled over 7 to 30 days prior to the wedding.',
        description:
          'Plan your pre-bridal hair, beauty, and skin with our complete packages which include Body Scrub, Body Wrap, Skin Ritual, Hair Ritual, Full Body Waxing, Spa Manicure, Spa Pedicure, and just about everything a bride needs to look her absolute best.',
        image: '/images/client/bridal/anita-yadav-bridal-makeup3.jpg',
        highlights: ['Full body scrub & wrap', 'Customized skin rituals', 'Intensive hair density therapy', 'Luxury spa mani-pedi', 'Body waxing & polishing'],
        pricingNote: 'Package customized according to wedding dates (7-day, 15-day, 30-day).',
      },
    ],
  },
  {
    id: 'body-spa',
    name: 'Body Spa & Holistic Wellness',
    shortDesc: 'Nutritional feasts for your body, pressure-point release, wraps and scrubs.',
    items: [
      {
        id: 'body-spa-full',
        name: 'Holistic Body Spa & Wraps',
        category: 'Body Spa',
        tagline: 'Soothe your body, mind, and soul with natural essential oils and scrubs.',
        description:
          'A nutritional feast for your body to keep it looking radiant and healthy. Holistic health care with natural essential oils, body wraps, and external exfoliation leaving the skin glowing, accompanied by simultaneous pressure point therapy for relaxation and healing.',
        image: '/images/client/academy/makeup-banner3.jpg',
        highlights: ['Natural essential oils', 'Herbal body wraps', 'Deep tissue & pressure point massage', 'Full body detox exfoliation'],
        pricingNote: 'Session duration options: 60 mins / 90 mins.',
      },
    ],
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    shortDesc: 'Rejuvenate, relax and refresh your hands and feet with distress-relieving spa soaks.',
    items: [
      {
        id: 'spa-mani-pedi',
        name: 'Spa Manicure & Pedicure',
        category: 'Manicure and Pedicure',
        tagline: 'Rejuvenate. Relax. Refresh.',
        description:
          'Start your day by pampering yourself or relax after a hard day at work. High quality products keep your hands and feet smooth, soft, and supple while stimulating blood circulation and melting stress away with soaking, exfoliation, massage, masque, and moisture sealing.',
        image: '/images/client/academy/6.png',
        highlights: ['Aromatic soak', 'Callus removal & exfoliation', 'Pressure point foot reflexology', 'Hydrating masque & moisturizer'],
        pricingNote: 'Available as individual or combo booking.',
      },
    ],
  },
  {
    id: 'nail-services',
    name: 'Nail Bar & Extensions',
    shortDesc: 'Gel nails, 3D art, Swarovski crystals, and permanent gel polish.',
    items: [
      {
        id: 'nail-bar',
        name: 'Luxury Nail Enhancements & Art',
        category: 'Nail Services',
        tagline: 'Flaunt healthy, glamorous nails with certified international nail educators.',
        description:
          'Exclusively introduced for clients who love healthy, beautiful nails. Choose from Gel, 3D, and Swarovski elements, permanent gel polish, nail strengthening treatments, and dry manicures. Featuring premier brands like Star Nail, Cuccio, IBD, Red Carpet Manicure, and Ciate.',
        image: '/images/client/academy/2.png',
        highlights: ['Gel extensions & overlays', 'Swarovski crystal & 3D art', 'Permanent gel polish', 'Certified nail technicians'],
        pricingNote: 'Prices according to chosen nail extension length and art complexity.',
      },
    ],
  },
  {
    id: 'hand-feet',
    name: 'Hand & Feet Grooming',
    shortDesc: 'Waxing, hand polishing, paraffin wraps & nail filing for everyday elegance.',
    items: [
      {
        id: 'hand-feet-wax',
        name: 'Hand & Feet Care & Waxing',
        category: 'Hand and Feet',
        tagline: 'Silky smooth arms, legs, and supple hands.',
        description:
          'Full arms, legs, underarms, and gentle chocolate / rica waxing treatments paired with cuticle care and moisturizing hand packs.',
        image: '/images/client/academy/6.png',
        highlights: ['Gentle rica / stripless wax', 'Moisture sealing', 'Cuticle care'],
        pricingNote: 'Multiple wax varieties available upon request.',
      },
    ],
  },
  {
    id: 'mehndi',
    name: 'Bridal & Traditional Mehndi',
    shortDesc: 'Intricate bridal henna, Arabic patterns, and party mehndi designs.',
    items: [
      {
        id: 'bridal-mehndi',
        name: 'Bridal Mehndi & Designer Henna',
        category: 'Mehndi',
        tagline: 'Deep organic color with intricate bridal storytelling and floral figures.',
        description:
          'Traditional and contemporary bridal mehndi, full arms and feet, figure work, portrait motifs, and dark stain natural herbal henna cones.',
        image: '/images/client/bridal/anita-yadav-bridal-makeup4.jpg',
        highlights: ['100% pure organic herbal henna', 'Custom bridal motifs & portraits', 'Rich long-lasting stain'],
        pricingNote: 'Consultation required for bridal package details.',
      },
    ],
  },
];

// -------------------------------------------------------------
// ACADEMY COURSES (Preserved from ../academy/)
// -------------------------------------------------------------
export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'cosmetology',
    title: 'Professional Cosmetology Course',
    category: 'Full-Spectrum Diploma',
    description:
      "A comprehensive, all-encompassing program in cosmetology encompassing advanced hair dressing, scientific skin therapy, creative makeup artistry, and salon administration. Designed to shape salon managers, master stylists, and beauty entrepreneurs.",
    curriculum: [
      'Anatomy of skin & hair',
      'Diagnostic camera analysis',
      'Chemical texture & advanced hair color chemistry',
      'Facial ergonomics & electrotherapy',
      'Salon hygiene & management ethics',
    ],
    careerRoles: ['Salon Director', 'Chief Cosmetologist', 'Beauty Educator', 'Independent Entrepreneur'],
    image: '/images/client/academy/demo.png',
    certification: "Anita's Makeover Academy Professional Diploma (International syllabus)",
  },
  {
    id: 'makeup-course',
    title: 'Professional Makeup Artistry Course',
    category: 'Master Makeup Program',
    description:
      "Learn from the best in the beauty industry. Our state-of-the-art makeup classes walk you through everything that goes into establishing a successful career in this fast-paced industry, including Makeup Theory, essential tools, Engagement, Bridal, Reception, Ramp, and Portfolio Makeup.",
    curriculum: [
      'Color theory & undertone mapping',
      'High-Definition (HD) & Airbrush techniques',
      'Bridal makeup (Traditional, Modern, Reception)',
      'Editorial, Fashion Runway & Portfolio styling',
      'Saree draping, false lashes & accessory styling',
    ],
    careerRoles: ['Bridal Makeup Artist', 'Fashion Runway Stylist', 'Media / Film Makeup Artist', 'Makeup Consultant'],
    image: '/images/client/academy/makeup.jpg',
    certification: 'Certified Professional Makeup Artist Certificate',
  },
  {
    id: 'skin-care-course',
    title: 'Advanced Skin Care & Clinical Aesthetics',
    category: 'Skin Therapy',
    description:
      'Master the science of dermal healing, curative skin treatments, luxury facial rituals, chemical exfoliation, and international formulations including Skeydor and Agelock.',
    curriculum: [
      'Skin histology & condition analysis',
      'Anti-aging & pigmentation protocols',
      'Acne remediation & scar management',
      'Lymphatic drainage & pressure point techniques',
    ],
    careerRoles: ['Clinical Aesthetician', 'Skin Specialist', 'Spa Therapist'],
    image: '/images/client/academy/self_grooming.jpg',
    certification: 'Advanced Skin Therapy Certification',
  },
  {
    id: 'hair-care-course',
    title: 'Master Hair Designing & Chemical Treatments',
    category: 'Hair Couture',
    description:
      'Extensive hands-on training covering classic to avant-garde hair cutting, ammonia-free hair colouring, creative highlights, permanent straightening, perming, and hair density rituals.',
    curriculum: [
      'Geometric hair sectioning and scissor work',
      'Balayage, ombre, foil placement & color correction',
      'Keratin smoothing, botox & hair rituals',
      'Scalp diagnostics & hair fall remedies',
    ],
    careerRoles: ['Senior Hair Stylist', 'Master Colorist', 'Hair Texture Specialist'],
    image: '/assets/aistudio/IMG-20261111-WA0053_c0a60ce3.jpg',
    certification: 'Professional Hair Dressing Diploma',
  },
  {
    id: 'self-grooming',
    title: 'Self Grooming & Corporate Presentation',
    category: 'Personal Styling',
    description:
      'Specially designed for working professionals, homemakers, and students wanting to master everyday flawless makeup, hairstyle variations, skincare habits, and personal elegance.',
    curriculum: [
      '5-minute everyday corporate makeup',
      'Quick day-to-evening glam transformation',
      'Daily skincare routine and product selection',
      'Self hair styling: curling, straightening & neat updos',
    ],
    careerRoles: ['Personal Grooming Masterclass Graduate', 'Corporate Image Confidence'],
    image: '/images/client/academy/self_grooming.jpg',
    certification: 'Self Grooming Masterclass Certificate',
  },
  {
    id: 'nail-technician',
    title: 'Certified Nail Technician Course',
    category: 'Nail Art & Extensions',
    description:
      'Train in the booming nail industry with certified educators from top international brands. Learn gel extensions, 3D art, Swarovski application, acrylics, and permanent gel polish.',
    curriculum: [
      'Nail anatomy & sanitization protocols',
      'Gel extension sculpting & tip overlays',
      'Permanent gel polish & nail strengthening',
      '3D Swarovski & encapsulated nail art',
    ],
    careerRoles: ['Certified Nail Technician', 'Nail Bar Owner', 'Nail Art Specialist'],
    image: '/images/client/academy/2.png',
    certification: 'Certified Nail Technician Diploma',
  },
];

// -------------------------------------------------------------
// GALLERY ITEMS (All from client assets)
// -------------------------------------------------------------
export const SALON_GALLERY: GalleryItem[] = [
  // Party Makeup by Anita Ma'am (Authentic Client Transformations)
  {
    id: 'pm1',
    title: "Party Makeup by Anita Ma'am - Shimmer Emerald & Golden Glam",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0008_de2144e7.jpg',
    description: "Subtle metallic eye artistry paired with radiant golden resham attire and emerald jewellery. Flawless camera-ready finish by Anita Ma'am.",
  },
  {
    id: 'pm2',
    title: "Party Makeup by Anita Ma'am - Traditional Banarasi Red Silk Saree",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0010_926de40b.jpg',
    description: "Timeless festive elegance featuring classic crimson lips, red bindi, and satin finish skin for wedding celebration.",
  },
  {
    id: 'pm3',
    title: "Party Makeup by Anita Ma'am - Cocktail Silver Embellished Look",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0006_f0bb8818.jpg',
    description: "Sleek red-carpet styling with glamorous cascading waves, contoured cheekbones, and high-shine lip lacquer.",
  },
  {
    id: 'pm4',
    title: "Party Makeup by Anita Ma'am - Flawless Contour & Emerald Neckpiece",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0007_7ab94027.jpg',
    description: "Close-up detail of signature skin glow, airbrushed base, soft smokey eye gradation, and sculpted brow framing.",
  },
  {
    id: 'pm5',
    title: "Party Makeup by Anita Ma'am - Peach Cape Gown Event Styling",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0023_c019605b.jpg',
    description: "Contemporary evening elegance with peach tones, sapphire and diamond necklace styling, and seamless dewy skin.",
  },
  {
    id: 'pm6',
    title: "Party Makeup by Anita Ma'am - Radiant Festive Profile",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0012_5165f621.jpg',
    description: "Luminous high-point illumination, warm bronze blush, and neatly sculpted side profile for family ceremonies.",
  },
  {
    id: 'pm7',
    title: "Party Makeup by Anita Ma'am - Golden Yellow Haldi / Sangeet Glam",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0014_73c0ca14.jpg',
    description: "Vibrant Haldi and Sangeet ceremony makeover with radiant warm hues, defined lashline, and statement maangtikka.",
  },
  {
    id: 'pm8',
    title: "Party Makeup by Anita Ma'am - Classic Red & Gold Glow",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0013_18e86820.jpg',
    description: "Celebratory post-wedding glow featuring classic scarlet lip pigment, winged eye definition, and pure radiance.",
  },
  {
    id: 'pm9',
    title: "Party Makeup by Anita Ma'am - In-Salon Mirror Showcase",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0024_27f734f6.jpg',
    description: "Captured inside Anita's Makeover salon mirror suite highlighting full outfit draping, silhouette and party glamour.",
  },
  {
    id: 'pm10',
    title: "Party Makeup by Anita Ma'am - Sunlight Radiance Sangeet Look",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0019_47c77b52.jpg',
    description: "Natural daylight beauty capture showing seamless base blending, soft coral lips, and festive mirror embroidery.",
  },
  {
    id: 'pm11',
    title: "Party Makeup by Anita Ma'am - Ivory Saree & Ruby Accents",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0022_00699616.jpg',
    description: "Ethereal party glamour with sheer ivory saree draping, statement gem necklace, and polished evening makeup.",
  },
  {
    id: 'pm12',
    title: "Party Makeup by Anita Ma'am - Pastel Pink Chikankari Lehenga",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0009_63229941.jpg',
    description: "Delicate pastel aesthetics with rose-gold metallic eyelids, soft pink blush, and regal emerald jewellery.",
  },
  {
    id: 'pm13',
    title: "Party Makeup by Anita Ma'am - Intricate Gold Suit Elegance",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0018_114bfb50.jpg',
    description: "Sophisticated family reception look with warm bronze eyeshadow and perfectly contoured face structure.",
  },
  {
    id: 'pm14',
    title: "Party Makeup by Anita Ma'am - Radiant Rose Lip & Dewy Base",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0016_f6eede5c.jpg',
    description: "High-definition close-up showing silky skin texture, rose satin lips, and subtle brow sculpting.",
  },
  {
    id: 'pm15',
    title: "Party Makeup by Anita Ma'am - Royal Reception Pink Couture",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0025_c94a83f9.jpg',
    description: "Complete festive ensemble styling with pastel lehenga volume, emerald accents, and signature Anita Ma'am artistry.",
  },
  {
    id: 'pm16',
    title: "Party Makeup by Anita Ma'am - Traditional Hair Bun & Saree Styling",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0017_129e54b8.jpg',
    description: "Sculpted side profile highlighting traditional Indian hair bun arrangement and clean jawline definition.",
  },
  {
    id: 'pm17',
    title: "Party Makeup by Anita Ma'am - Heritage Wedding Guest Glam",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0011_1f043ef4.jpg',
    description: "Rich cultural styling with crimson Banarasi weaves, gold jhumkas, and radiant, sweat-resistant festive base.",
  },
  {
    id: 'pm18',
    title: "Party Makeup by Anita Ma'am - Festive Outdoor Day Makeover",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0021_d4edb8b6.jpg',
    description: "Sunlit portrait in vibrant mustard yellow with intricate latkans, glowing cheekbones, and soft waves.",
  },
  {
    id: 'pm19',
    title: "Party Makeup by Anita Ma'am - Complete Salon Suite Reveal",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0015_ed484889.jpg',
    description: "Full head-to-toe salon reveal showcasing outfit pleating, complementary red manicure, and makeup finish.",
  },
  {
    id: 'pm20',
    title: "Party Makeup by Anita Ma'am - Sangeet Maangtikka & Eye Glam",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0020_63c279f1.jpg',
    description: "Intimate portrait detailing jewelry setting, ruby bead choker, soft smoky eyeliner, and peach flush.",
  },
  {
    id: 'pm21',
    title: "Party Makeup by Anita Ma'am - Roka Ceremony Glow in Mustard Yellow",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0094_2437a164.jpg',
    description: "Subtle pink eye art, dewy cheeks, and soft Hollywood curls for an intimate Roka ceremony.",
  },
  {
    id: 'pm22',
    title: "Party Makeup by Anita Ma'am - Fresh Mint & Yellow Roka Day Look",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0095_9e1b0b60.jpg',
    description: "Delicate maangtikka styling with natural glow base and glossy peach lips.",
  },
  {
    id: 'pm23',
    title: "Party Makeup by Anita Ma'am - Crimson Sequin Cocktail Glam",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0093_43a714a7.jpg',
    description: "Bold smokey rose lids, statement diamond jewellery, and a pearl tiara for evening gala events.",
  },
  {
    id: 'pm24',
    title: "Party Makeup by Anita Ma'am - Shimmer Wine Lehenga & Palace Backdrop",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0097_5fd39246.jpg',
    description: "High-shine glitter eyeshadow, defined brows, and sculpted cheeks for palace wedding receptions.",
  },
  {
    id: 'pm25',
    title: "Party Makeup by Anita Ma'am - Silver Grey Resham & Ruby Choker",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0091_86950428.jpg',
    description: "Soft glam silver eyeshadow, warm berry lips, and voluminous brushed waves.",
  },
  {
    id: 'pm26',
    title: "Party Makeup by Anita Ma'am - Peach Tulle Cape Gown Silhouette",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0096_9f79b77d.jpg',
    description: "Full length mirror capture showcasing sequined bodice, flowy tulle cape, and radiant evening makeup.",
  },
  {
    id: 'pm27',
    title: "Party Makeup by Anita Ma'am - Peacock Resham Choli & Mint Choker",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0064_37b6af42.jpg',
    description: "Vibrant festive blouse styling with colorful tassels, mint polki choker, and warm bronze makeup.",
  },
  {
    id: 'pm28',
    title: "Party Makeup by Anita Ma'am - Sheer Ivory Organza Saree Glam",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0088_df544386.jpg',
    description: "Monochromatic elegance with delicate ivory embroidery, ruby diamond necklace, and soft brown pout.",
  },
  {
    id: 'pm29',
    title: "Party Makeup by Anita Ma'am - Intricate Sangeet Look with Mint Accents",
    category: 'party_makeup',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0046_a5778d28.jpg',
    description: "Close-up portrait featuring clean brow arch, warm blush, and statement heritage jewellery.",
  },

  // Hair Couture & Designer Styling (by Salon Master Stylists)
  {
    id: 'h1',
    title: 'Hair Couture - Half-Up Cascading Waves with Pearl Comb',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0086_3a6f87d2.jpg',
    description: 'Voluminous textured waves styled with an exquisite crystal floral hair comb for sangeet & reception.',
  },
  {
    id: 'h2',
    title: 'Hair Couture - Waterfall Braid with Pearl Bow & Glossy Curls',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0068_6e5d40c3.jpg',
    description: 'Intricate multi-strand waterfall braid crowned with a pearl bow and soft romantic cascading curls.',
  },
  {
    id: 'h3',
    title: 'Hair Couture - Sleek Low Braided Bun with Floral Gajra',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0047_4a37d558.jpg',
    description: 'Precision-sculpted low braided chignon decorated with delicate white floral buds for traditional ceremonies.',
  },
  {
    id: 'h4',
    title: 'Hair Couture - Textured Bridal Bun with Fresh Hydrangeas & Roses',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0045_869ab433.jpg',
    description: 'Artisan textured bun adorned with blush pink hydrangeas, white roses, and traditional bridal ear chains.',
  },
  {
    id: 'h5',
    title: 'Hair Couture - Voluminous Curly Bun with Crimson Roses & Gypsophila',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0044_0bdd65ca.jpg',
    description: "Romantic bridal updo with deep red roses and cloud of baby's breath, paired with a traditional gold zari saree.",
  },
  {
    id: 'h6',
    title: 'Hair Couture - Textured Crown High Ponytail with Wave Definition',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0052_00bba762.jpg',
    description: 'High-fashion textured ponytail with structured crown volume and defined curls for cocktail & modern party wear.',
  },
  {
    id: 'h7',
    title: 'Hair Couture - Side-Twisted Floral Bun with Peach Garden Roses',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0037_62c8c224.jpg',
    description: 'Sculpted side twists flowing into a textured bun decorated with fresh peach roses and gypsophila.',
  },
  {
    id: 'h8',
    title: 'Hair Couture - Classic French Roll with Scarlet Roses',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0053_c0a60ce3.jpg',
    description: 'Timeless smooth French roll adorned with vibrant scarlet roses and delicate white florals.',
  },
  {
    id: 'h9',
    title: 'Hair Couture - Traditional Long Bridal Braid with Kundan Floral Brooches',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0087_59776bb6.jpg',
    description: 'Royal south-Indian inspired long bridal plait crowned with baby breath and antique kundan brooches down the braid.',
  },
  {
    id: 'h10',
    title: 'Hair Couture - Open Cascading Curls with Crystal Vine Headpiece',
    category: 'hair_styling',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0058_8a504eb5.jpg',
    description: 'Long voluminous spiral curls accented by an intricate gold crystal vine accessory for modern receptions.',
  },

  // Bridal
  { id: 'b1', title: 'Signature Royal Heritage Bridal Makeover', category: 'bridal', imageUrl: '/assets/aistudio/IMG-20261111-WA0085_ea398949.jpg', description: 'Royal Indian bridal makeup with traditional jewellery and crimson lehenga' },
  { id: 'b2', title: 'Royal Heritage Bridal Glam', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup1.jpg', description: 'Flawless HD bridal base with radiant gold accents' },
  { id: 'b3', title: 'Regal Wedding Day Look', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup2.jpg', description: 'Precision eye contouring and matte rose lips' },
  { id: 'b4', title: 'Classic Red Sabyasachi Bride', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup3.jpg', description: 'Traditional mathapatti placement with timeless winged eyes' },
  { id: 'b5', title: 'Ethereal Engagement Glow', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup4.jpg', description: 'Airbrushed dewiness with delicate pastel tones' },
  { id: 'b6', title: 'Intricate Bridal Dupatta Setting', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup1.jpg', description: 'Precision dupatta draping and floral bun styling' },
  { id: 'b7', title: 'Modern Reception Elegance', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup2.jpg', description: 'Glamorous Hollywood wave hair and sculpted cheekbones' },
  { id: 'b8', title: 'Traditional Gold & Crimson Bride', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup3.jpg', description: 'Authentic Anita Makeover signature bridal finish' },
  { id: 'b9', title: 'Pastel Lehenga Bridal Portrait', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup1.jpg', description: 'Soft glam bridal makeover with emerald green jewellery' },
  { id: 'b10', title: 'Subtle Mehendi Festive Glam', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup2.jpg', description: 'Fresh sun-kissed radiant makeup' },
  { id: 'b11', title: 'Jewelled Bridal Tiara Styling', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup3.jpg', description: 'Contemporary bridal hair accessories and glowing base' },
  { id: 'b12', title: 'Smokey Kohl Bridal Eyes', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup4.jpg', description: 'Intense kohl-rimmed eyes with nude satin lips' },
  { id: 'b13', title: 'Cocktail Night Statement Glam', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup2.jpg', description: 'Luminous highlighter and shimmer lids' },
  { id: 'b14', title: 'Intricate Bridal Mehndi Hands', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup4.jpg', description: 'Deep organic henna stains with bridal jewelry' },
  { id: 'b15', title: 'Grand Wedding Reception Look', category: 'bridal', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup.jpg', description: 'Sophisticated royal bridal appearance' },
  {
    id: 'b16',
    title: 'Signature Bridal - Royal Crimson Velvet Lehenga by Anita Yadav',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0040_4100f448.jpg',
    description: 'Traditional kundan mathapatti, delicate nath, and airbrushed HD bridal finish with soft pink blush.',
  },
  {
    id: 'b17',
    title: 'Signature Bridal - Royal Heritage Magenta & Emerald Kundan',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0038_6cc5d3a6.jpg',
    description: 'Intricate heavy zardozi bridal couture with multi-tier emerald kundan haar and traditional gold chooda.',
  },
  {
    id: 'b18',
    title: 'Signature Bridal - Traditional Red Zardozi Lehenga Pose',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0057_934c83ae.jpg',
    description: 'Flawless matte bridal complexion, winged eyeliner, and heritage polki jewellery.',
  },
  {
    id: 'b19',
    title: 'Signature Bridal - Grand Wedding Suite Portrait',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0071_6a20825b.jpg',
    description: 'Full length seated bridal portrait highlighting flared zardozi lehenga, sheer veil, and gold jewellery.',
  },
  {
    id: 'b20',
    title: 'Signature Bridal - Royal Crimson & Gold Lotus Motif Lehenga',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0085_ea398949.jpg',
    description: 'Regal seated bride with green emerald choker and radiant beaming smile.',
  },
  {
    id: 'b21',
    title: 'Signature Bridal - Radiant Pink Zari & Pearl Choker Glow',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0077_d285733f.jpg',
    description: 'Soft rose eyelids, pearl haar, and delicate ruby bead maangtikka for wedding ceremonies.',
  },
  {
    id: 'b22',
    title: 'Signature Bridal - Royal Blue Banarasi Silk Saree & Gold Temple Haram',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0080_4d919d94.jpg',
    description: 'Aristocratic bridal look with royal blue Banarasi silk, Lakshmi temple jewellery, and sleek bun.',
  },
  {
    id: 'b23',
    title: 'Signature Bridal - Heritage Blue Silk Saree Standing Portrait',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0072_fde05414.jpg',
    description: 'Graceful poise in rich blue zari saree with red chooda and pristine bridal glow.',
  },
  {
    id: 'b24',
    title: 'Signature Bridal - Metallic Rose Gold Lids & Emerald Kundan',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0063_f2852a8d.jpg',
    description: 'Precision winged liner with rose-gold metallic shimmer, emerald drop jewellery, and dewy bridal base.',
  },
  {
    id: 'b25',
    title: 'Signature Bridal - Side-Plait with Fresh White & Coral Flowers',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0073_84b294a6.jpg',
    description: 'Traditional long side braid with fresh floral accents, red and gold lehenga, and bridal chooda.',
  },
  {
    id: 'b26',
    title: 'Signature Bridal - Pink Lehenga & Ruby Maangtikka Touch',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0062_28689588.jpg',
    description: 'Intimate bridal preparation moment with pearl choker, pink floral dupatta, and glowing complexion.',
  },
  {
    id: 'b27',
    title: 'Signature Bridal - Deep Maroon Velvet & Kundan Polki Choker',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0049_1e8cfd59.jpg',
    description: 'Dramatic kohl-rimmed smokey eyes, emerald-strung choker, and traditional gold nath.',
  },
  {
    id: 'b28',
    title: 'Signature Bridal - Radiant Smile with Kundan Pearls & Chooda',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0056_55392131.jpg',
    description: 'Joyful bride in fuchsia pink zardozi lehenga with tiered pearl haar and ornate gold jewellery.',
  },
  {
    id: 'b29',
    title: 'Signature Bridal - Royal Purple Velvet Lehenga with Gold Zari',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0066_516fbed9.jpg',
    description: 'Rich imperial purple velvet bridal ensemble with heavy antique gold embroidery and red chooda.',
  },
  {
    id: 'b30',
    title: 'Signature Bridal - Metallic Rust Gold Lehenga & White Rose Bun',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0048_3bc7bdfc.jpg',
    description: 'Unique rust gold metallic bridal lehenga, red velvet border, red bangles, and fresh rose bun.',
  },
  {
    id: 'b31',
    title: 'Signature Bridal - Flawless HD Base & Dramatic Kohl Lids',
    category: 'bridal',
    imageUrl: '/assets/aistudio/IMG-20261111-WA0039_0e2bdcb4.jpg',
    description: 'High-definition bridal makeup detail highlighting cut-crease eyeshadow, sculpted cheeks, and gold nath.',
  },

  // Before & After (8 transformation sets)
  { id: 'ba1', title: 'Bridal Skin Tone & Texture Transformation', category: 'before_after', imageUrl: '/images/client/before_after/before-after-1.jpg', thumbnailUrl: '/images/client/before_after/before-after-1sm.jpg', description: 'Even tone correction and glass bridal glow' },
  { id: 'ba2', title: 'Party Glam Feature Definition', category: 'before_after', imageUrl: '/images/client/before_after/before-after-4.5.jpg', thumbnailUrl: '/images/client/before_after/before-after-4.5sm.jpg', description: 'Eye lift and sculpted jawline with contouring' },
  { id: 'ba3', title: 'Bridal Radiance & Blemish Coverage', category: 'before_after', imageUrl: '/images/client/before_after/before-after-3.jpg', thumbnailUrl: '/images/client/before_after/before-after-3sm.jpg', description: 'Seamless coverage with skin-like natural finish' },
  { id: 'ba4', title: 'Evening Event Complete Makeover', category: 'before_after', imageUrl: '/images/client/before_after/before-after-5.jpg', thumbnailUrl: '/images/client/before_after/before-after-5sm.jpg', description: 'Glowing complexion with warm rose makeup' },
  { id: 'ba5', title: 'Signature Bridal Transformation', category: 'before_after', imageUrl: '/images/client/before_after/before-after-6.jpg', thumbnailUrl: '/images/client/before_after/before-after-6sm.jpg', description: 'Complete traditional transformation with lashes and draping' },
  { id: 'ba6', title: 'Eye Enhancement & Lip Sculpt', category: 'before_after', imageUrl: '/images/client/before_after/before-after-10.jpg', thumbnailUrl: '/images/client/before_after/before-after-10sm.jpg', description: 'Precision defined brows and bold pout' },
  { id: 'ba7', title: 'Under-Eye & Tone Balancing', category: 'before_after', imageUrl: '/images/client/before_after/before-after-8.jpg', thumbnailUrl: '/images/client/before_after/before-after-8sm.jpg', description: 'Color correction and flawless satin base' },
  { id: 'ba8', title: 'Wedding Guest Express Transformation', category: 'before_after', imageUrl: '/images/client/before_after/before-after-9.jpg', thumbnailUrl: '/images/client/before_after/before-after-9sm.jpg', description: 'Polished hair and fresh makeup' },

  // Interior & Salon Ambiance
  { id: 'in1', title: 'Unisex Hair Couture Styling Stations', category: 'interior', imageUrl: '/assets/aistudio/IMG-20261111-WA0037_62c8c224.jpg', description: 'Spacious salon stations equipped with ergonomic mirrors and professional lighting' },
  { id: 'in2', title: 'Private Skincare & Spa Chamber', category: 'interior', imageUrl: '/assets/aistudio/IMG-20261111-WA0086_3a6f87d2.jpg', description: 'Tranquil ambiance designed for deep relaxation and skin therapies' },
  { id: 'in3', title: 'Bridal Makeover Dressing Suite', category: 'interior', imageUrl: '/assets/aistudio/IMG-20261111-WA0085_ea398949.jpg', description: 'Dedicated bridal suite with multi-angle mirrors and jewellery lighting' },
  { id: 'in4', title: 'Hair Wash & Scalp Massage Lounge', category: 'interior', imageUrl: '/assets/aistudio/IMG-20261111-WA0053_c0a60ce3.jpg', description: 'Ergonomic shampoo basins for stress-relieving hair rituals' },
  { id: 'in5', title: 'Luxury Nail Bar & Extension Lounge', category: 'interior', imageUrl: '/assets/aistudio/IMG-20261111-WA0048_3bc7bdfc.jpg', description: 'Featuring imported nail stations and curated brand palettes' },
  { id: 'in6', title: 'Reception & Client Consultation Desk', category: 'interior', imageUrl: '/assets/aistudio/IMG-20261111-WA0040_4100f448.jpg', description: 'Warm hospitality and expert diagnostic consultation' },

  // Services
  { id: 's1', title: 'Precision Hair Cut in Progress', category: 'services', imageUrl: '/assets/aistudio/IMG-20261111-WA0086_3a6f87d2.jpg', description: 'Sculpted styling by senior salon team' },
  { id: 's2', title: 'Creative Balayage & Highlights', category: 'services', imageUrl: '/assets/aistudio/IMG-20261111-WA0053_c0a60ce3.jpg', description: 'Dimensional foil placement' },
  { id: 's3', title: 'Relaxing Scalp Care Ritual', category: 'services', imageUrl: '/assets/aistudio/IMG-20261111-WA0037_62c8c224.jpg', description: 'Deep conditioning scalp revitalization' },
  { id: 's4', title: 'Full Body Spa Aromatherapy', category: 'services', imageUrl: '/images/client/academy/makeup-banner3.jpg', description: 'Holistic wellness and muscle relaxation' },
  { id: 's5', title: 'Aromatic Spa Manicure & Pedicure', category: 'services', imageUrl: '/images/client/academy/6.png', description: 'Exfoliation, massage and moisture lock' },
  { id: 's6', title: 'Party & Festive Make-Up Session', category: 'services', imageUrl: '/assets/aistudio/IMG-20261111-WA0008_de2144e7.jpg', description: 'Expert brush work and contouring' },
  { id: 's7', title: 'Bridal Preparation & Skin Polishing', category: 'services', imageUrl: '/images/client/bridal/anita-yadav-bridal-makeup3.jpg', description: 'Complete pre-wedding grooming' },
  { id: 's8', title: 'Skeydor & Agelock Facial Therapy', category: 'services', imageUrl: '/images/client/academy/self_grooming.jpg', description: 'Curative clinical skincare' },
  { id: 's9', title: 'Designer Nail Bar Art & Gel Polish', category: 'services', imageUrl: '/images/client/academy/2.png', description: 'Intricate nail extensions' },
];

// -------------------------------------------------------------
// ABOUT US CONTENT (Preserved from about.html)
// -------------------------------------------------------------
export const ABOUT_SALON = {
  title: "Anita's Makeover Salon",
  subtitle: "Premium Unisex Salon & Beauty Academy for Men and Women in Delhi and Gurgaon NCR",
  founders: [
    {
      name: 'Anita Yadav',
      initials: 'AY',
      role: 'Founder & Creative Director',
      designation: "Founder, Anita's Makeover & Academy",
      bio: "Visionary makeup artist with deep mastery in bridal transformations, skin aesthetics, and high-fashion hair styling. Trained across international beauty standards, Anita has sculpted hundreds of brides and inspired thousands of aspiring stylists across Delhi NCR.",
      credentials: ['Celebrity Bridal Stylist', 'Academy Master Educator', 'International Standards'],
    },
    {
      name: 'Manoj Yadav',
      initials: 'MY',
      role: 'Co-Founder & Managing Director',
      designation: "Co-Founder, Anita's Makeover",
      bio: "Leading strategic operations, salon expansion, and franchise partnerships across Gurgaon and NCR, establishing state-of-the-art salon infrastructure and luxury guest experiences.",
      credentials: ['Strategic Operations', 'NCR Salon Expansion', 'Client Experience Quality'],
    },
  ],
  legacyStory: [
    "With branches nationally and expanding presence, Anita's Makeover Salon is a premium beauty salon for men and women who desire to look their best every day. Getting a makeover not only changes the appearance of a person but also brings back lost confidence, and Anita's Makeover Salon takes immense pride in being part of that transformative journey.",
    "From beauty to grooming services, we provide a tremendous range of facilities that touch every dimension of beauty and hair treatments. Our repertoire of professional experts makes sure that all your beauty and hair questions are answered, and you leave the salon with a big smile on your face.",
    "With expert employees engaged in transforming your look, we make sure that all the services provided at our salons meet international standards. Through our advice and solutions from expertise in this array, we aim at giving the best services through our state-of-the-art facilities. Our professional stylists and beauty experts are constantly updated with the latest trends and fashion advices that help them work efficiently and deliver outstanding results!",
    "Give us an opportunity to serve you once; we are sure you'll love to come back to us again and be our esteemed customer forever.",
  ],
};
