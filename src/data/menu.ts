export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[];
  optional?: string;
  image?: string;
  composition?: { layers: { color: string; percentage: number; label: string }[] };
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export const menu: MenuSection[] = [
  {
    category: "Cafés de Temporada",
    items: [
      {
        id: "cafe-dubai",
        name: "Café Dubai",
        description: "Café con notas intensas de chocolate y pistacho. Cremoso, dulce y único.",
        price: 8000,
        image: "/images/menu/cafe-dubai.jpg",
      },
      {
        id: "cafe-tiramisu",
        name: "Café Tiramisú",
        description: "Inspirado en el clásico italiano: café, crema suave y cacao.",
        price: 7200,
        image: "/images/menu/cafe-tiramisu.jpg",
      },
      {
        id: "cold-brew-cold-foam",
        name: "Cold Brew Cold Foam",
        description: "Café en frío, suave y refrescante, coronado con espuma cremosa.",
        price: 6000,
        optional: "Elegí tu sabor: Clásico, Pistacho o Chocolate.",
        image: "/images/menu/cold-brew-cold-foam.jpg",
      },
    ],
  },
  {
    category: "Dulce de la Casa",
    items: [
      {
        id: "alfajores-mama",
        name: "Alfajores Mama",
        description: "Nuestra versión casera, rellenos y cubiertos con chocolate.",
        price: 3500,
        image: "/images/menu/alfajor-mama.jpg",
      },
    ],
  },
  {
    category: "Tostones de Temporada",
    items: [
      {
        id: "toston-proteico",
        name: "Tostón Proteico",
        description: "Pasta de maní, frutas frescas de estación, toque de miel y granola.",
        price: 11500,
      },
      {
        id: "toston-mediterraneo-mama",
        name: "Tostón Mediterráneo Mama",
        description: "Queso crema, rúcula fresca, tomates cherry confitados, queso sardo en láminas, almendras tostadas y pesto.",
        price: 12500,
      },
    ],
  },
  {
    category: "Infusiones",
    items: [
      {
        id: "expresso",
        name: "Expresso",
        description: "",
        price: 3600,
        composition: { layers: [{ color: "#27241c", percentage: 100, label: "espresso" }] },
      },
      {
        id: "expresso-doble",
        name: "Expresso doble",
        description: "",
        price: 4000,
        composition: { layers: [{ color: "#27241c", percentage: 100, label: "espresso" }] },
      },
      {
        id: "lungo",
        name: "Lungo",
        description: "",
        price: 3700,
        composition: { layers: [{ color: "#27241c", percentage: 40, label: "espresso" }, { color: "#c8d8e4", percentage: 60, label: "water" }] },
      },
      {
        id: "americano",
        name: "Americano",
        description: "",
        price: 4200,
        composition: { layers: [{ color: "#27241c", percentage: 30, label: "espresso" }, { color: "#c8d8e4", percentage: 70, label: "water" }] },
      },
      {
        id: "macchiato",
        name: "Macchiato",
        description: "",
        price: 3900,
        composition: { layers: [{ color: "#27241c", percentage: 85, label: "espresso" }, { color: "#f5f3f0", percentage: 15, label: "foam" }] },
      },
      {
        id: "cortado",
        name: "Cortado",
        description: "",
        price: 4000,
        composition: { layers: [{ color: "#27241c", percentage: 50, label: "espresso" }, { color: "#e6e3df", percentage: 50, label: "milk" }] },
      },
      {
        id: "latte",
        name: "Latte",
        description: "",
        price: 4500,
        composition: { layers: [{ color: "#27241c", percentage: 20, label: "espresso" }, { color: "#e6e3df", percentage: 65, label: "milk" }, { color: "#f5f3f0", percentage: 15, label: "foam" }] },
      },
      {
        id: "capuccino",
        name: "Capuccino",
        description: "",
        price: 4400,
        composition: { layers: [{ color: "#27241c", percentage: 33, label: "espresso" }, { color: "#e6e3df", percentage: 34, label: "milk" }, { color: "#f5f3f0", percentage: 33, label: "foam" }] },
      },
      {
        id: "flat-white",
        name: "Flat white",
        description: "",
        price: 4800,
        composition: { layers: [{ color: "#27241c", percentage: 30, label: "espresso" }, { color: "#e6e3df", percentage: 70, label: "milk" }] },
      },
      {
        id: "mocca",
        name: "Mocca",
        description: "",
        price: 4800,
        composition: { layers: [{ color: "#27241c", percentage: 25, label: "espresso" }, { color: "#776358", percentage: 25, label: "chocolate" }, { color: "#e6e3df", percentage: 35, label: "milk" }, { color: "#f5f3f0", percentage: 15, label: "foam" }] },
      },
      {
        id: "chocolatada",
        name: "Chocolatada",
        description: "",
        price: 4400,
        composition: { layers: [{ color: "#776358", percentage: 40, label: "chocolate" }, { color: "#e6e3df", percentage: 50, label: "milk" }, { color: "#f5f3f0", percentage: 10, label: "foam" }] },
      },
      {
        id: "te-en-hebras",
        name: "Té en hebras",
        description: "",
        price: 3500,
      },
      {
        id: "opcion-ice",
        name: "Opción Ice",
        description: "Consultar opciones.",
        price: 1500,
      },
      {
        id: "extra-shot",
        name: "Extra Shot",
        description: "",
        price: 1500,
      },
      {
        id: "leche-vegetal",
        name: "Leche vegetal",
        description: "",
        price: 1500,
      },
    ],
  },
  {
    category: "Desayunos y Meriendas",
    items: [
      {
        id: "clasico-mama",
        name: "Clásico măma",
        description: "Dos medialunas y 3 palmeritas.",
        price: 9000,
      },
      {
        id: "saludable",
        name: "Saludable",
        description: "Dos tostadas (consultar opciones), queso crema y mermelada de temporada.",
        price: 7000,
        image: "/images/menu/saludable.jpg",
      },
      {
        id: "power-pancakes",
        name: "Power Pancakes",
        description: "Panqueques de avena y harina de almendra, servidos con frutas de estación y miel orgánica.",
        price: 12000,
        image: "/images/menu/power-pancakes.jpg",
      },
      {
        id: "avocado",
        name: "Avocado",
        description: "Pan de campo cubierto con queso crema, palta cremosa, huevos revueltos, tomates confitados, praliné de girasol y aceto.",
        price: 13500,
        image: "/images/menu/avocado.jpg",
      },
      {
        id: "keto-bowl",
        name: "Keto Bowl",
        description: "Lomo ahumado o panceta salteada, huevos revueltos, palta cremosa, queso en feta, tomates confitados y pan keto.",
        price: 13500,
        image: "/images/menu/keto-bowl.jpg",
      },
      {
        id: "proteico",
        name: "Proteico",
        description: "Yogurt griego, granola, frutos de estación y miel orgánica.",
        price: 12000,
        image: "/images/menu/proteico.jpg",
      },
    ],
  },
  {
    category: "Ensaladas",
    items: [
      {
        id: "ensalada-rosa",
        name: "Ensalada Rosa",
        description: "Base de mousse de remolacha, remolacha asada, mix de hojas verdes, queso sardo, brotes de alfalfa y praliné de semillas de girasol. Acompañada con pan de harina de arroz.",
        price: 10000,
        image: "/images/menu/ensalada-rosa.jpg",
      },
      {
        id: "ensalada-verde",
        name: "Ensalada Verde",
        description: "Mix de hojas frescas, pepino, tomate cherry, queso sardo, almendras tostadas y croutons, sobre una cama de guasacaca con yogurt griego.",
        price: 10000,
        image: "/images/menu/ensalada-verde.jpg",
      },
      {
        id: "ensalada-mexicana",
        name: "Ensalada Mexicana",
        description: "Pollo, porotos negros, choclo asado, tomate cherry, cebolla curtiada, cilantro y aderezo guasacaca. Acompañada con tortilla de maíz.",
        price: 14000,
      },
    ],
  },
  {
    category: "Tartas",
    items: [
      {
        id: "tarta-jamon-queso",
        name: "Tarta de Jamón y Queso",
        description: "Clásica, casera y siempre perfecta.",
        price: 10000,
        image: "/images/menu/tarta-jamon-queso.jpg",
      },
      {
        id: "tarta-mediterranea",
        name: "Tarta Mediterránea",
        description: "Tomates cherry confitados, queso y toque de pesto.",
        price: 11500,
        image: "/images/menu/tarta-mediterranea.jpg",
      },
    ],
  },
  {
    category: "Panadería",
    items: [
      {
        id: "budin",
        name: "Budín",
        description: "Consultar opciones.",
        price: 5000,
        image: "/images/menu/budin.jpg",
      },
      {
        id: "brownie",
        name: "Brownie",
        description: "",
        price: 5300,
      },
      {
        id: "pain-au-chocolat",
        name: "Pain au chocolat",
        description: "",
        price: 5500,
        image: "/images/menu/pain-au-chocolat.jpg",
      },
      {
        id: "cookies",
        name: "Cookies",
        description: "Consultar opciones.",
        price: 4000,
      },
      {
        id: "croissants",
        name: "Croissants",
        description: "",
        price: 5000,
        image: "/images/menu/croissants.jpg",
      },
      {
        id: "medialunas",
        name: "Medialunas",
        description: "",
        price: 2600,
      },
      {
        id: "palmeritas",
        name: "Palmeritas",
        description: "",
        price: 1200,
        image: "/images/menu/palmeritas.jpg",
      },
      {
        id: "roll-de-canela",
        name: "Roll de canela",
        description: "",
        price: 5000,
        image: "/images/menu/roll-canela.jpg",
      },
    ],
  },
  {
    category: "Sándwiches",
    items: [
      {
        id: "sandwich-jamon-crudo",
        name: "Jamón Crudo",
        description: "Jamón Crudo, rúcula, tomates cherry y provolone rallado.",
        price: 14000,
        image: "/images/menu/sandwichs-jamon-crudo.jpg",
      },
      {
        id: "sandwich-lomo-ahumado",
        name: "Lomo Ahumado",
        description: "Lomo ahumado, pimientos al rescoldo en conserva y queso crema.",
        price: 12000,
        image: "/images/menu/sandwichs-lomo-ahumado.jpg",
      },
      {
        id: "sandwich-roquefort",
        name: "Roquefort",
        description: "Queso roquefort, rúcula, peras caramelizadas, nueces tostadas y reducción de aceto.",
        price: 12000,
      },
    ],
  },
  {
    category: "Apretaditos",
    items: [
      {
        id: "apretadito-ternera-queso",
        name: "Ternera y queso",
        description: "",
        price: 11000,
      },
      {
        id: "apretadito-jamon-queso",
        name: "Jamón y queso",
        description: "",
        price: 11000,
      },
      {
        id: "apretadito-cantimpalo-queso",
        name: "Cantimpalo y queso",
        description: "",
        price: 11000,
      },
    ],
  },
  {
    category: "Bebidas",
    items: [
      {
        id: "coca-cola",
        name: "Coca cola",
        description: "Común o zero.",
        price: 3900,
      },
      {
        id: "limonada-clasica",
        name: "Limonada clásica",
        description: "",
        price: 4400,
      },
      {
        id: "limonada-menta-jengibre",
        name: "Limonada menta y jengibre",
        description: "",
        price: 4900,
      },
      {
        id: "limonada-frutos-rojos",
        name: "Limonada de frutos rojos",
        description: "",
        price: 4900,
      },
      {
        id: "jugo-naranja",
        name: "Jugo de naranja",
        description: "",
        price: 4100,
      },
      {
        id: "licuado-banana",
        name: "Licuado de banana",
        description: "",
        price: 4400,
      },
    ],
  },
  {
    category: "Smoothies",
    items: [
      {
        id: "smoothie-rojo",
        name: "Rojo",
        description: "Frutos rojos.",
        price: 6000,
        image: "/images/menu/smoothies-rojo.jpg",
      },
      {
        id: "smoothie-amarillo",
        name: "Amarillo",
        description: "Durazno, mango y naranja.",
        price: 6000,
      },
      {
        id: "smoothie-verde-detox",
        name: "Verde detox",
        description: "Kiwi, melón y pepino.",
        price: 6000,
        image: "/images/menu/verde-detox.jpg",
      },
    ],
  },
  {
    category: "Promos Coworkers",
    items: [
      {
        id: "promo-arranque-productivo",
        name: "Arranque productivo",
        description: "Desayuno Saludable o Clásico + Infusión simple.",
        price: 11000,
      },
      {
        id: "promo-recarga-mediodia",
        name: "Recarga de medio día",
        description: "Infusión simple + Almuerzo.",
        price: 17000,
      },
      {
        id: "promo-dia-productivo",
        name: "Día productivo",
        description: "Desayuno Saludable o Clásico + Infusión simple + Almuerzo.",
        price: 25000,
      },
    ],
  },
  {
    category: "Transformá tus promos",
    items: [
      {
        id: "cambio-desayuno",
        name: "Cambio de desayuno",
        description: "Avocado, Keto Bowl o Proteico.",
        price: 3000,
      },
      {
        id: "extra-shot-promo",
        name: "Extra shot",
        description: "",
        price: 1500,
      },
      {
        id: "extra-ice",
        name: "ICE",
        description: "",
        price: 1500,
      },
      {
        id: "extra-croissant",
        name: "Croissant",
        description: "",
        price: 4000,
      },
      {
        id: "extra-pain-au-chocolat",
        name: "Pain au chocolat",
        description: "",
        price: 4000,
      },
      {
        id: "extra-limonada-coca",
        name: "Limonada o coca cola",
        description: "",
        price: 4000,
      },
    ],
  },
];
