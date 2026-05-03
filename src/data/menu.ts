export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[];
  optional?: string;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export const menu: MenuSection[] = [
  {
    category: "Para los amantes del café",
    items: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Intenso y puro, extraído con precisión. Cada gota es rica, densa y aterciopelada.",
        price: 0,
      },
      {
        id: "doble-espresso",
        name: "Doble Espresso",
        description: "Doble intensidad para quienes necesitan un arranque extra.",
        price: 0,
      },
      {
        id: "cortado",
        name: "Cortado",
        description: "La suavidad de la leche se mezcla con el espresso en un balance perfecto.",
        price: 0,
      },
      {
        id: "americano",
        name: "Americano",
        description: "Elegante y ligero, diluido con agua caliente para liberar su carácter.",
        price: 0,
      },
      {
        id: "latte",
        name: "Latte",
        description: "Leche espumosa que abraza el espresso. Suave y aterciopelado.",
        price: 0,
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Leche cremosa y espumosa cubriendo el espresso. Cada sorbo es un abrazo cálido.",
        price: 0,
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Leche texturizada y espresso en equilibrio. Simple y refinado.",
        price: 0,
      },
      {
        id: "mocca",
        name: "Mocca",
        description: "El dulzor del chocolate se fusiona con el espresso para una bebida profunda y reconfortante.",
        price: 0,
      },
    ],
  },
  {
    category: "Bebidas frías",
    items: [
      {
        id: "iced-latte",
        name: "Iced Latte",
        description: "Opción Caramelo o Vainilla.",
        price: 0,
      },
      {
        id: "iced-americano",
        name: "Iced Americano",
        description: "Opción Caramelo o Vainilla.",
        price: 0,
      },
      {
        id: "iced-cappuccino",
        name: "Iced Cappuccino",
        description: "Opción Caramelo o Vainilla.",
        price: 0,
      },
    ],
  },
  {
    category: "Buen día, buenas tardes",
    items: [
      {
        id: "clasico-mama",
        name: "Clásico Mama",
        description: "Infusión, acompañada de dos medialunas con dos palmeritas o dos tortillas con tres chipás. Con ensalada de fruta y jugo de naranja.",
        price: 0,
      },
      {
        id: "saludable",
        name: "Saludable",
        description: "Infusión, acompañada de dos tostadas, queso crema, mermelada, jugo de naranja y ensalada de fruta.",
        price: 0,
      },
      {
        id: "power-pancakes",
        name: "Power Pancakes",
        description: "Panqueques de avena y harina de almendra, esponjosos y ligeros, servidos con frutas frescas de estación y nueces tostadas. Con un toque de miel que ilumina el día y una porción de mantequilla de maní.",
        price: 0,
      },
      {
        id: "avocado-toast-deluxe",
        name: "Avocado Toast Deluxe",
        description: "Tostada de pan de campo crujiente, cubierta con palta cremosa, queso crema, huevos revueltos, Tomates confitados, aceto y semillas crocantes.",
        price: 0,
        optional: "Cambiá tu pan por versión sin TACC.",
      },
      {
        id: "keto-bowl",
        name: "Keto Bowl",
        description: "Un bowl cargado de proteínas y frescura: lomo ahumado, queso, palta, en una combinación rica y equilibrada.",
        price: 0,
      },
      {
        id: "proteico",
        name: "Proteico",
        description: "Un bowl de yogur griego, frutas frescas, miel y granola.",
        price: 0,
      },
    ],
  },
  {
    category: "Para compartir",
    items: [
      {
        id: "brunch-para-dos",
        name: "Brunch para Dos",
        description: "Tostadas con palta y huevo revuelto, panqueques bañados en miel, ensalada de frutas frescas y una infusión o café a elección.",
        price: 0,
        optional: "Cambiá tu pan por versión sin TACC.",
      },
      {
        id: "desayuno-duo",
        name: "Desayuno Dúo",
        description: "Dos medialunas de manteca recién horneadas, tostadas crujientes con mermelada casera, jugo de naranja recién exprimido y un café con leche.",
        price: 0,
      },
    ],
  },
  {
    category: "Limonadas",
    items: [
      {
        id: "limonada-clasica",
        name: "Limonada Clásica",
        description: "Refrescante y chispeante, el balance perfecto entre acidez y dulzura.",
        price: 0,
      },
      {
        id: "limonada-frutos-rojos",
        name: "Limonada de Frutos Rojos",
        description: "Un toque de frutilla le da un giro especial. Fresca y deliciosa.",
        price: 0,
      },
      {
        id: "limonada-menta-jengibre",
        name: "Limonada de Menta y Jengibre",
        description: "Menta, jengibre y limón para un soplo de aire fresco.",
        price: 0,
      },
    ],
  },
  {
    category: "Pastelería artesanal by Māma Café",
    items: [
      {
        id: "rolls-de-canela",
        name: "Rolls de Canela",
        description: "",
        price: 0,
      },
      {
        id: "lemon-pie-individual",
        name: "Lemon Pie Individual",
        description: "",
        price: 0,
      },
      {
        id: "budin-limon-arandanos",
        name: "Budín de Limón y Arándanos",
        description: "",
        price: 0,
      },
    ],
  },
  {
    category: "Panadería para acompañar",
    items: [
      {
        id: "croissant-jamon-queso",
        name: "Croissant de Jamón y Queso",
        description: "",
        price: 0,
      },
      {
        id: "croissant-dulce-de-leche",
        name: "Croissant con Dulce de Leche",
        description: "",
        price: 0,
      },
      {
        id: "medialunas",
        name: "Medialunas",
        description: "",
        price: 0,
      },
      {
        id: "tortillas-gold",
        name: "Tortillas Gold",
        description: "",
        price: 0,
      },
      {
        id: "chipa",
        name: "Chipá",
        description: "",
        price: 0,
      },
      {
        id: "palmeritas",
        name: "Palmeritas",
        description: "",
        price: 0,
      },
      {
        id: "alfajor-nueces-almendras",
        name: "Alfajor de Nueces o Almendras",
        description: "",
        price: 0,
      },
    ],
  },
  {
    category: "Smoothies",
    items: [
      {
        id: "smoothie-rojo-bosque",
        name: "Smoothie Rojo del Bosque",
        description: "Con Frambuesas y Frutillas.",
        price: 0,
      },
      {
        id: "smoothie-tropical",
        name: "Smoothie Tropical",
        description: "De Durazno y Mango.",
        price: 0,
      },
      {
        id: "smoothie-verde-detox",
        name: "Smoothie Verde Detox",
        description: "Kiwi, Melón y Pepino.",
        price: 0,
      },
    ],
  },
  {
    category: "Opciones sin TACC",
    items: [
      {
        id: "mini-quindim-coco",
        name: "Mini Quindim de Coco",
        description: "Postre brasileño de coco suave y caramelizado.",
        price: 0,
        tags: ["sin-tacc"],
      },
      {
        id: "mini-bomba-chocolate",
        name: "Mini Bomba de Chocolate",
        description: "Bocado de masa rellena de ganache de chocolate.",
        price: 0,
        tags: ["sin-tacc"],
      },
      {
        id: "mini-tatin-manzana",
        name: "Mini Tatin de Manzana",
        description: "Manzanas caramelizadas sobre base crujiente.",
        price: 0,
        tags: ["sin-tacc"],
      },
    ],
  },
  {
    category: "Sándwiches especiales",
    items: [
      {
        id: "sandwich-jamon-rucula",
        name: "Sándwich de Jamón Crudo y Rúcula",
        description: "Jamón crudo, rúcula y tomates cherry confitados en pan baguette.",
        price: 0,
      },
      {
        id: "sandwich-lomo-ahumado",
        name: "Sándwich de Lomo Ahumado con Pimientos y Queso Crema",
        description: "Lomo ahumado, pimientos asados y queso crema en pan ciabatta.",
        price: 0,
      },
      {
        id: "sandwich-cantimpalo-queso",
        name: "Sándwich de Cantimpalo y Queso",
        description: "Cantimpalo con queso fundido en pan baguette.",
        price: 0,
      },
      {
        id: "sandwich-roquefort",
        name: "Sándwich de Roquefort",
        description: "Queso Roquefort, rúcula, peras caramelizadas, nueces tostadas y una reducción de aceto balsámico.",
        price: 0,
      },
      {
        id: "sandwich-triple-jamon-queso",
        name: "Sándwich Triple de Jamón y Queso",
        description: "En pan de miga.",
        price: 0,
      },
      {
        id: "sandwich-ternera-queso",
        name: "Sándwich de Ternera y Queso",
        description: "En pan de miga, con tomates a elección.",
        price: 0,
      },
    ],
  },
  {
    category: "Bebidas sin alcohol",
    items: [
      {
        id: "coca",
        name: "Coca",
        description: "",
        price: 0,
      },
      {
        id: "coca-zero",
        name: "CocaZero",
        description: "",
        price: 0,
      },
      {
        id: "agua-mineral",
        name: "Agua Mineral",
        description: "",
        price: 0,
      },
      {
        id: "agua-con-gas",
        name: "Agua con Gas",
        description: "",
        price: 0,
      },
      {
        id: "kefir",
        name: "Kéfir",
        description: "",
        price: 0,
      },
    ],
  },
  {
    category: "Bebidas con alcohol",
    items: [
      {
        id: "cerveza-andes",
        name: "Cerveza Andes",
        description: "",
        price: 0,
      },
      {
        id: "cerveza-stella",
        name: "Cerveza Stella",
        description: "",
        price: 0,
      },
      {
        id: "cerveza-patagonia",
        name: "Cerveza Patagonia",
        description: "",
        price: 0,
      },
    ],
  },
];
