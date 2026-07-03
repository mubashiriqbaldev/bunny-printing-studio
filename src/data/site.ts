export const SITE = {
  name: "Bunny Printing Studio",
  tagline: "Premium Packaging for Brands That Mean Business.",
  domain: "bunnyprintingstudio.com",
  phone: "+92 325 5822282",
  email: "bunnyprintingstudio@gmail.com",
  address: "Gulberg, Lahore, Pakistan",
  hours: "Monday – Saturday, 10:00 AM – 6:00 PM PKT",
  whatsapp: "https://wa.me/923255822282",
  instagram: "https://www.instagram.com/bunnyprintingstudio/",
  facebook: "https://www.facebook.com/bunnyprintingstudio",
};

export const NAV_ITEMS = [
  {
    label: "Custom Boxes",
    href: "/products",
    children: [
      { label: "Mailer Boxes", href: "/products/mailer-boxes" },
      { label: "Rigid Boxes", href: "/products/rigid-boxes" },
      { label: "Folding Cartons", href: "/products/folding-cartons" },
      { label: "Display Boxes", href: "/products/display-boxes" },
      { label: "Gift Boxes", href: "/products/gift-boxes" },
      { label: "Corrugated Boxes", href: "/products/corrugated-boxes" },
      { label: "Kraft Boxes", href: "/products/kraft-boxes" },
      { label: "Die Cut Boxes", href: "/products/die-cut-boxes" },
    ],
  },
  {
    label: "Bags",
    href: "/products#bags",
    children: [
      { label: "Paper Bags", href: "/products/paper-bags" },
      { label: "Kraft Paper Bags", href: "/products/kraft-paper-bags" },
      { label: "Shopping Bags", href: "/products/shopping-bags" },
      { label: "Tote Bags", href: "/products/tote-bags" },
    ],
  },
  {
    label: "Labels & Stickers",
    href: "/products#labels",
    children: [
      { label: "Custom Labels", href: "/products/custom-labels" },
      { label: "Sticker Sheets", href: "/products/sticker-sheets" },
      { label: "Roll Labels", href: "/products/roll-labels" },
    ],
  },
  {
    label: "Printing",
    href: "/products#printing",
    children: [
      { label: "Offset Printing", href: "/products/offset-printing" },
      { label: "Digital Printing", href: "/products/digital-printing" },
      { label: "Spot UV", href: "/products/spot-uv" },
      { label: "Foil Stamping", href: "/products/foil-stamping" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Cosmetics & Beauty", href: "/industries/cosmetics" },
      { label: "Food & Bakery", href: "/industries/food" },
      { label: "E-Commerce", href: "/industries/ecommerce" },
      { label: "Apparel & Fashion", href: "/industries/fashion" },
      { label: "Retail & FMCG", href: "/industries/retail" },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "How To Order", href: "/how-to-order" },
      { label: "Packaging Samples", href: "/packaging-samples" },
      { label: "Materials Guide", href: "/materials" },
      { label: "FAQs", href: "/faq" },
    ],
  },
];

export const PRODUCTS = [
  {
    id: "mailer-boxes",
    name: "Mailer Boxes",
    slug: "mailer-boxes",
    tagline: "Self-locking branded shipping boxes",
    description: "Self-locking boxes engineered for direct shipping, providing durability, protection, and a clean branded unboxing experience.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    category: "boxes",
    features: ["Self-locking design", "Custom printing", "Eco-friendly options", "Any size available"],
  },
  {
    id: "rigid-boxes",
    name: "Rigid Boxes",
    slug: "rigid-boxes",
    tagline: "Luxury premium packaging",
    description: "Sturdy, durable boxes offering a premium look and feel, ideal for luxury products and high-end packaging.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    category: "boxes",
    features: ["Premium rigid board", "Magnetic closure", "Velvet lining", "Custom embossing"],
  },
  {
    id: "folding-cartons",
    name: "Folding Cartons",
    slug: "folding-cartons",
    tagline: "Lightweight retail-ready packaging",
    description: "Lightweight and customizable boxes designed for retail packaging, offering versatile structures for branding and product presentation.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    category: "boxes",
    features: ["Lightweight design", "Multiple styles", "Full-color printing", "Custom sizes"],
  },
  {
    id: "display-boxes",
    name: "Display Boxes",
    slug: "display-boxes",
    tagline: "Showcase products at retail",
    description: "Open-style boxes created for retail counters, designed to showcase products clearly and encourage quick customer engagement.",
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=600&q=80",
    category: "boxes",
    features: ["Open display front", "Counter-top design", "High visibility", "Brand messaging"],
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes",
    slug: "gift-boxes",
    tagline: "Memorable gifting experiences",
    description: "Elegant gift packaging designed to create a memorable unboxing experience that delights the recipient.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "boxes",
    features: ["Ribbon ready", "Custom inserts", "Metallic finishes", "Premium materials"],
  },
  {
    id: "cosmetic-boxes",
    name: "Cosmetic Boxes",
    slug: "cosmetic-boxes",
    tagline: "Packaging that reflects luxury",
    description: "Packaging that reflects the luxury and quality of your beauty products with premium finishes.",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
    category: "cosmetic",
    features: ["Spot UV", "Foil stamping", "Embossing", "Luxury finishes"],
  },
  {
    id: "food-boxes",
    name: "Food & Bakery Boxes",
    slug: "food-boxes",
    tagline: "Food-safe vibrant packaging",
    description: "Food-safe, vibrant packaging that keeps your products fresh and your brand memorable.",
    image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=600&q=80",
    category: "food",
    features: ["Food-safe materials", "Grease resistant", "FDA approved", "Custom windows"],
  },
  {
    id: "paper-bags",
    name: "Paper Bags",
    slug: "paper-bags",
    tagline: "Branded carry bags that impress",
    description: "Custom printed paper bags that elevate the retail experience and reinforce your brand identity.",
    image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80",
    category: "bags",
    features: ["Rope handles", "Custom sizes", "Glossy/matte finish", "Reinforced base"],
  },
  {
    id: "kraft-boxes",
    name: "Kraft Boxes",
    slug: "kraft-boxes",
    tagline: "Eco-friendly natural packaging",
    description: "Eco-friendly kraft packaging with a natural, sustainable feel perfect for organic and artisan brands.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    category: "boxes",
    features: ["100% recyclable", "Natural texture", "Biodegradable", "Custom print"],
  },
  {
    id: "corrugated-boxes",
    name: "Corrugated Boxes",
    slug: "corrugated-boxes",
    tagline: "Heavy-duty shipping protection",
    description: "Heavy-duty corrugated packaging engineered for safe transit and branded for maximum brand impact.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80",
    category: "boxes",
    features: ["Double wall option", "Custom printing", "Heavy-duty", "Bulk pricing"],
  },
  {
    id: "die-cut-boxes",
    name: "Die Cut Boxes",
    slug: "die-cut-boxes",
    tagline: "Unique shapes that stand out",
    description: "Precision die-cut boxes in any shape or configuration to make your packaging truly unique.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80",
    category: "boxes",
    features: ["Custom shapes", "Precise cutting", "Complex designs", "Window options"],
  },
  {
    id: "labels-stickers",
    name: "Labels & Stickers",
    slug: "labels-stickers",
    tagline: "Stick your brand everywhere",
    description: "Custom printed labels and stickers for products, packaging, and promotions that reinforce brand identity.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80",
    category: "labels",
    features: ["Waterproof options", "Custom shapes", "High resolution", "Roll or sheet"],
  },
];

export const INDUSTRIES = [
  {
    icon: "💄",
    name: "Cosmetics & Beauty",
    description: "Packaging that reflects the luxury and quality of your beauty products.",
    href: "/industries/cosmetics",
  },
  {
    icon: "🍰",
    name: "Food & Bakery",
    description: "Food-safe, vibrant packaging that keeps your products fresh and your brand memorable.",
    href: "/industries/food",
  },
  {
    icon: "📦",
    name: "E-Commerce",
    description: "Branded mailers and boxes built to protect products and impress customers on delivery.",
    href: "/industries/ecommerce",
  },
  {
    icon: "👗",
    name: "Apparel & Fashion",
    description: "Custom boxes, bags, and tissue wrapping for a premium retail experience.",
    href: "/industries/fashion",
  },
  {
    icon: "🏪",
    name: "Retail & FMCG",
    description: "Eye-catching shelf packaging that drives purchase decisions in-store.",
    href: "/industries/retail",
  },
  {
    icon: "💊",
    name: "Pharma & Health",
    description: "Compliant, precise packaging for health and pharmaceutical products.",
    href: "/industries/pharma",
  },
];

export const WHY_US = [
  {
    icon: "✨",
    title: "Free Custom Design Help",
    description: "Our expert designers create your artwork at zero cost. No design experience needed.",
  },
  {
    icon: "🚀",
    title: "Free Worldwide Shipping",
    description: "Every order ships free, anywhere in Pakistan and beyond. No hidden freight charges.",
  },
  {
    icon: "🛡️",
    title: "100% Quality Guaranteed",
    description: "Every batch is quality-checked before dispatch. We re-do it free if it's not perfect.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description: "Rush production available. Most orders ready in 7–10 business days.",
  },
  {
    icon: "💰",
    title: "Competitive Wholesale Pricing",
    description: "Factory-direct pricing with no middleman. Get more for less with our volume discounts.",
  },
];

export const ORDER_STEPS = [
  {
    step: "01",
    title: "Request a Quote",
    description: "Fill in our quick quote form with your box dimensions, quantity, material, and finishing preferences.",
  },
  {
    step: "02",
    title: "Review Your Design",
    description: "Our designers create a mockup based on your artwork or create a design from scratch — all free.",
  },
  {
    step: "03",
    title: "Approve & Confirm",
    description: "Review the digital proof, request changes if needed, then approve and confirm your order.",
  },
  {
    step: "04",
    title: "Production & Delivery",
    description: "Your packaging is manufactured to your specs and shipped directly to your door, free of charge.",
  },
];

export const FAQS = [
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantity starts at 100 units for most products. However, we offer flexible quantities for startups and small businesses. Contact us to discuss your specific needs.",
  },
  {
    question: "Do you offer free samples before placing a bulk order?",
    answer: "Yes! We offer plain samples, printed samples, and full production samples. Request yours before committing to a bulk order so you can verify quality, sizing, and print accuracy.",
  },
  {
    question: "How long does production take?",
    answer: "Standard production is 7–12 business days after artwork approval. Rush orders (3–5 days) are available for an additional fee. We'll give you an exact timeline with your quote.",
  },
  {
    question: "Can I get a custom size that's not listed?",
    answer: "Absolutely. All our packaging is made-to-order. Just provide your dimensions (L × W × H) and we'll manufacture your packaging to your exact specifications.",
  },
  {
    question: "What file format should I submit my artwork in?",
    answer: "We accept AI, EPS, PDF, and high-resolution PSD files (300 DPI minimum). If you don't have print-ready files, our design team can help prepare them free of charge.",
  },
  {
    question: "What printing and finishing options are available?",
    answer: "We offer CMYK and Pantone offset printing, digital printing, gloss/matte lamination, spot UV coating, hot foil stamping, embossing, debossing, and soft-touch coating.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. International orders include free shipping with standard production timelines. Contact us for international shipping estimates.",
  },
  {
    question: "What materials do you use?",
    answer: "We work with kraft paperboard, SBS (solid bleached sulfate), corrugated cardboard, rigid board, and eco-friendly recycled materials. We'll recommend the best material for your product and budget.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ayesha Siddiqui",
    business: "Glow Cosmetics, Lahore",
    rating: 5,
    text: "Bunny Printing Studio completely transformed our brand packaging. The quality of our cosmetic boxes is exceptional — our customers constantly compliment the unboxing experience. Highly recommended!",
  },
  {
    name: "Ahmed Tariq",
    business: "FreshBake, Karachi",
    rating: 5,
    text: "We needed food-safe boxes for our bakery that looked as good as they performed. Bunny delivered exactly that — vibrant colors, sturdy construction, and fast delivery. 10/10.",
  },
  {
    name: "Sara Malik",
    business: "Luna Jewellery",
    rating: 5,
    text: "The rigid boxes we ordered for our jewelry line are absolutely stunning. The foil stamping on our logo looks premium. Our sales have increased noticeably since switching to Bunny packaging.",
  },
  {
    name: "Usman Raza",
    business: "FashionForward, Islamabad",
    rating: 5,
    text: "Professional team, transparent pricing, and beautiful results. Our branded mailer boxes have become part of our brand identity. Customers literally share unboxing videos on social media.",
  },
  {
    name: "Nadia Akhtar",
    business: "OrganicLife PK",
    rating: 5,
    text: "We specifically needed eco-friendly kraft packaging for our organic product line. Bunny Printing provided recyclable options with beautiful custom printing. Perfect brand alignment.",
  },
  {
    name: "Bilal Khan",
    business: "TechShip, Lahore",
    rating: 5,
    text: "Order process was smooth from quote to delivery. The e-commerce mailer boxes are durable and look great. Our return rate due to damage dropped significantly. Excellent product.",
  },
];

export const STATS = [
  { value: "5K+", label: "Happy Clients" },
  { value: "15M+", label: "Boxes Delivered" },
  { value: "50+", label: "Product Types" },
  { value: "8+", label: "Years Experience" },
];
