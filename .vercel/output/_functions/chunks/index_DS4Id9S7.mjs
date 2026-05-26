import { c as createComponent } from './astro-component_D-RlLxVB.mjs';
import 'piccolore';
import { n as createRenderInstruction, o as renderComponent, p as Fragment, r as renderTemplate, m as maybeRenderHead, q as renderSlot, v as renderHead, u as unescapeHTML, h as addAttribute, s as spreadAttributes } from './entrypoint_pfdkOexq.mjs';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import 'clsx';
import { createClient } from '@supabase/supabase-js';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$EventPopup = createComponent(($$result, $$props, $$slots) => {
  const hasImage = existsSync(join(process.cwd(), "public", "images", "evento-actual.png"));
  return renderTemplate`${hasImage && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="event-popup" class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20 p-4 cursor-pointer"><div class="relative w-[90vw] max-w-[500px] rounded-2xl overflow-hidden"><button id="event-popup-close" aria-label="Cerrar" class="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-off-white text-gris cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><img src="/images/evento-actual.png" alt="Evento actual" class="w-full block"></div></div><button id="ver-evento-btn" class="fixed bottom-4 right-4 z-50 hidden opacity-0 transition-opacity duration-300 px-3 py-2 rounded-full text-xs shadow-md cursor-pointer" style="background-color: #a47c53; color: #e6e3df;">
Ver evento
</button>` })}`}${renderScript($$result, "C:/Mama Cafe/src/components/EventPopup.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Mama Cafe/src/components/EventPopup.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    image = "/images/hero-carrot-cakes.jpg"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const ogImage = new URL(image, Astro2.site);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Māma Café",
    "url": canonicalURL.toString(),
    "image": ogImage.toString(),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Solano Vera 1174",
      "addressLocality": "Yerba Buena",
      "addressRegion": "Tucumán",
      "addressCountry": "AR"
    },
    "telephone": "+54-9-381-612-5109",
    "openingHours": [
      "Mo-Fr 08:00-21:30",
      "Sa-Su 08:00-13:00",
      "Sa-Su 17:00-21:30"
    ],
    "sameAs": [
      "https://instagram.com/mamacafetuc"
    ]
  };
  return renderTemplate(_a || (_a = __template(['<html lang="es-AR"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:locale" content="es_AR"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><!-- JSON-LD --><script type="application/ld+json">', "<\/script>", '</head> <body class="bg-off-white text-gris font-sans"> ', " ", " ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), unescapeHTML(JSON.stringify(jsonLd)), renderHead(), renderComponent($$result, "EventPopup", $$EventPopup, {}), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/Mama Cafe/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Mama Cafe/src/layouts/BaseLayout.astro", void 0);

const whatsappURL = `https://wa.me/5493813664395?text=${encodeURIComponent("Hola! Quería hacer una consulta.")}`;

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full min-h-screen flex flex-col items-center justify-center"> <div class="max-w-2xl md:max-w-3xl mx-auto px-4 text-center"> <h1 class="font-sans font-bold text-5xl md:text-7xl text-gris tracking-tight leading-none">
măma café
</h1> <div class="h-px w-12 bg-dulce mx-auto my-8" aria-hidden="true"></div> <p class="font-display italic text-2xl md:text-3xl text-gris/80 leading-snug">
Una taza de café, una charla.
</p> <p class="mt-6 text-xs md:text-sm tracking-[0.2em] uppercase text-gris/60">
Café de especialidad · Yerba Buena, Tucumán
</p> <div class="mt-6 md:mt-8 flex justify-center"> <img src="/images/brand/te-amo.png" alt="" class="h-16 md:h-20 w-auto opacity-55"> </div> <div class="flex flex-col items-center gap-4 mt-12"> <a href="#menu" class="text-xs tracking-[0.2em] uppercase font-semibold text-dulce hover:text-choco">
Ver la carta ↓
</a> <a${addAttribute(whatsappURL, "href")} target="_blank" rel="noopener noreferrer" class="text-xs tracking-[0.2em] uppercase text-gris/60 hover:text-dulce transition-colors duration-200">
Pedí o reservá
</a> <a href="https://forms.gle/HAq2CvfhgzZk9xRy7" target="_blank" rel="noopener noreferrer" class="text-xs tracking-[0.2em] uppercase font-semibold text-dulce hover:text-choco transition-colors duration-200">
Sumate a la comunidad mama
</a> </div> </div> <a href="#horarios" aria-label="Desplazarse a horarios" class="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-gris/40 hover:text-dulce transition-colors duration-200 animate-soft-pulse">
↓
</a> </section>`;
}, "C:/Mama Cafe/src/components/Hero.astro", void 0);

const superCategories = [
  { label: "Temporada", anchor: "temporada", sections: ["Cafés de Temporada", "Dulce de la Casa", "Tostones de Temporada"], image: "/images/brand/coffee-plant.png" },
  { label: "Infusiones", anchor: "infusiones", sections: ["Infusiones"], image: "/images/brand/coffee-cup-foam.png" },
  { label: "Desayunos y Meriendas", anchor: "desayunos", sections: ["Desayunos y Meriendas"], image: "/images/brand/croissant.png" },
  { label: "Almuerzos", anchor: "almuerzos", sections: ["Ensaladas", "Tartas"], image: "/images/brand/flowers.png" },
  { label: "Panadería", anchor: "panaderia", sections: ["Panadería"] },
  { label: "Sándwiches", anchor: "sandwiches", sections: ["Sándwiches", "Apretaditos"] },
  { label: "Bebidas", anchor: "bebidas", sections: ["Bebidas", "Smoothies"], image: "/images/brand/moka-pot.png" },
  { label: "Promos Coworkers", anchor: "promos", sections: ["Promos Coworkers", "Transformá tus promos"], image: "/images/brand/sunglasses.png" }
];

const $$CoffeeGlass = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CoffeeGlass;
  const { layers } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-10 h-[60px] shrink-0" aria-hidden="true"> <div class="absolute inset-0 rounded-b-md overflow-hidden flex flex-col-reverse"> ${layers.map((layer) => renderTemplate`<div class="w-full shrink-0"${addAttribute(`height: ${layer.percentage}%; background-color: ${layer.color};`, "style")}></div>`)} </div> <div class="absolute inset-0 rounded-b-md border border-gris/30 pointer-events-none"></div> </div>`;
}, "C:/Mama Cafe/src/components/CoffeeGlass.astro", void 0);

const $$MenuSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MenuSection;
  const { section } = Astro2.props;
  const superCat = superCategories.find((sc) => sc.sections.includes(section.category));
  const image = superCat?.sections[0] === section.category ? superCat.image : void 0;
  const imageSizeClass = superCat?.label === "Promos Coworkers" ? "h-8 md:h-10 w-auto opacity-75" : superCat?.label === "Desayunos y Meriendas" ? "h-10 md:h-12 w-auto opacity-75" : superCat?.label === "Infusiones" ? "h-12 md:h-14 w-auto opacity-75" : "h-20 md:h-24 w-auto opacity-75";
  return renderTemplate`${maybeRenderHead()}<section class="mb-16"> <h2 class="text-xs font-semibold tracking-[0.2em] uppercase text-gris mb-6 pb-3 border-b border-gris/20 flex items-center justify-between"> <span>${section.category}</span> ${image && renderTemplate`<img${addAttribute(image, "src")} alt=""${addAttribute(imageSizeClass, "class")}>`} </h2> ${section.category === "Infusiones" && renderTemplate`<div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 -mt-2"> ${[
    { color: "#27241c", label: "Café" },
    { color: "#e6e3df", label: "Leche" },
    { color: "#f5f3f0", label: "Espuma" },
    { color: "#776358", label: "Chocolate" },
    { color: "#c8d8e4", label: "Agua" }
  ].map(({ color, label }) => renderTemplate`<div class="flex items-center gap-1.5"> <span class="inline-block w-3 h-3 shrink-0"${addAttribute(`background-color: ${color}; outline: 1px solid #2a2b2a;`, "style")}></span> <span class="text-xs text-gris/60">${label}</span> </div>`)} </div>`} <ul class="grid grid-cols-1 md:grid-cols-2 md:gap-x-12" data-menu-section> ${section.items.map((item) => renderTemplate`<li${addAttribute(`pb-6 mb-6 border-b border-gris/10 last:border-0 last:mb-0 last:pb-0${item.image ? " cursor-pointer select-none" : ""}`, "class")}${spreadAttributes(item.image ? { "data-menu-item": "" } : {})}> <div class="flex items-center gap-4"> <div class="flex-1 min-w-0"> <div class="flex items-baseline justify-between gap-4"> <span class="text-[0.9375rem] font-medium leading-snug text-gris"> ${item.name} ${item.tags?.includes("sin-tacc") && renderTemplate`<span class="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-dulce/15 text-dulce align-middle">
Sin TACC
</span>`} ${item.image && renderTemplate`<svg data-chevron class="inline-block ml-1.5 align-middle" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="transition: transform 0.3s ease;"> <path d="M2 4L6 8L10 4" stroke="#a47c53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`} </span> <span class="shrink-0 text-gris/40 tabular-nums text-sm">${unescapeHTML(item.price === 0 ? "&mdash;" : "$" + item.price.toLocaleString("es-AR"))}</span> </div> ${item.description && renderTemplate`<p class="mt-1.5 text-sm text-gris/70 leading-relaxed">${item.description}</p>`} ${item.optional && renderTemplate`<p class="mt-1 text-xs italic text-dulce">${item.optional}</p>`} ${item.image && renderTemplate`<div data-image-container style="max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.3s ease, opacity 0.3s ease;"> <img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} class="mt-3 rounded-lg w-full object-contain" onerror="var li=this.closest('[data-menu-item]');if(li){li.removeAttribute('data-menu-item');li.classList.remove('cursor-pointer','select-none');var c=li.querySelector('[data-chevron]');if(c)c.style.display='none';}"> </div>`} </div> ${item.composition && renderTemplate`${renderComponent($$result, "CoffeeGlass", $$CoffeeGlass, { "layers": item.composition.layers })}`} </div> </li>`)} </ul> </section> ${renderScript($$result, "C:/Mama Cafe/src/components/MenuSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Mama Cafe/src/components/MenuSection.astro", void 0);

const $$MenuNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--
  Sentinel: forces Tailwind to generate these classes used only in JS.
  classList.toggle() at runtime won't be scanned by the CSS bundler otherwise.
-->${maybeRenderHead()}<div class="hidden bg-dulce border-dulce text-off-white text-gris/60 border-gris/15" aria-hidden="true" data-astro-cid-zsnh7y7r></div> <nav class="sticky top-0 z-10 bg-off-white/95 backdrop-blur-sm border-b border-gris/10 -mx-4 px-4 py-4" data-astro-cid-zsnh7y7r> <div class="menu-nav-scroll flex gap-2 overflow-x-auto" data-astro-cid-zsnh7y7r> ${superCategories.map(({ label, anchor }) => renderTemplate`<a${addAttribute(`#${anchor}`, "href")}${addAttribute(anchor, "data-anchor")} class="menu-nav-pill whitespace-nowrap px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase transition-colors text-gris/60 border border-gris/15" data-astro-cid-zsnh7y7r> ${label} </a>`)} </div> </nav>  ${renderScript($$result, "C:/Mama Cafe/src/components/MenuNav.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Mama Cafe/src/components/MenuNav.astro", void 0);

const $$Horarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="horarios"> <div class="max-w-2xl md:max-w-3xl mx-auto px-4 py-20 md:py-32"> <h2 class="text-3xl md:text-4xl font-light text-gris text-center mb-12">Horarios</h2> <dl> <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline py-4 border-b border-gris/10"> <dt class="text-sm md:text-base tracking-[0.2em] uppercase text-gris/70">Lunes a viernes</dt> <dd class="text-base md:text-lg text-gris mt-1 sm:mt-0">
08:00 – 21:30 <span class="text-sm text-gris/50">corrido</span> </dd> </div> <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline py-4"> <dt class="text-sm md:text-base tracking-[0.2em] uppercase text-gris/70">Sábados y domingos</dt> <dd class="text-base md:text-lg text-gris mt-1 sm:mt-0">08:00 – 13:00 · 17:00 – 21:30</dd> </div> </dl> </div> </section>`;
}, "C:/Mama Cafe/src/components/Horarios.astro", void 0);

const $$Ubicacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="ubicacion"> <div class="max-w-2xl md:max-w-3xl mx-auto px-4 py-20 md:py-32 text-center"> <img src="/images/brand/bird-of-paradise.png" alt="" class="h-28 md:h-36 w-auto opacity-65 mx-auto mb-6"> <h2 class="text-3xl md:text-4xl font-light text-gris mb-12">Ubicación</h2> <address class="not-italic space-y-2"> <p class="text-lg md:text-xl text-gris">Av. Solano Vera 1174</p> <p class="text-base md:text-lg text-gris/70">Yerba Buena, Tucumán</p> </address> <div class="mt-12"> <a href="https://www.google.com/maps/place/Mama+caf%C3%A9/@-26.8326798,-65.3055524,19z/data=!4m15!1m8!3m7!1s0x9422433c5c5de2ab:0xa810be8b9b128841!2sAv.+Solano+Vera+1174,+Yerba+Buena,+Tucum%C3%A1n,+Argentina!3b1!8m2!3d-26.8324967!4d-65.3052788!16s%2Fg%2F11z1xyj2gg!3m5!1s0x942243000b1b6523:0x9d4064d828cfccc6!8m2!3d-26.8323697!4d-65.3064291!16s%2Fg%2F11lyvbt641?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="inline-block border border-dulce text-dulce px-8 py-3 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-dulce hover:text-off-white transition-colors duration-200">
Cómo llegar →
</a> </div> </div> </section>`;
}, "C:/Mama Cafe/src/components/Ubicacion.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-dark-choco pb-[env(safe-area-inset-bottom)]"> <div class="max-w-2xl md:max-w-3xl mx-auto px-4 py-16 md:py-20 text-center"> <p class="text-xl md:text-2xl text-off-white">măma café</p> <p class="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-off-white/60">
Café de especialidad
</p> <div class="h-px w-12 bg-dulce mx-auto my-8" aria-hidden="true"></div> <address class="not-italic space-y-3"> <p class="text-sm text-off-white/70">
Av. Solano Vera 1174 · Yerba Buena, Tucumán
</p> <a${addAttribute(whatsappURL, "href")} target="_blank" rel="noopener noreferrer" class="block text-sm uppercase tracking-[0.2em] text-dulce hover:text-off-white transition-colors duration-200">
Pedí o reservá por WhatsApp
</a> <a href="https://instagram.com/mamacafetuc" target="_blank" rel="noopener noreferrer" class="block text-sm text-dulce hover:text-off-white transition-colors duration-200">
@mamacafetuc
</a> </address> <p class="mt-12 text-xs text-off-white/40">
© 2026 Măma Café. Todos los derechos reservados.
</p> </div> </footer>`;
}, "C:/Mama Cafe/src/components/Footer.astro", void 0);

const supabaseUrl = undefined                            ;
const supabaseAnonKey = undefined                                 ;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fetchMenu() {
  try {
    const [{ data: categories, error: catError }, { data: items, error: itemError }] = await Promise.all([
      supabase.from("categories").select("id, name").eq("is_active", true).order("display_order"),
      supabase.from("menu_items").select("id, category_id, name, description, price, tags, optional, image, composition").eq("is_active", true).order("display_order")
    ]);
    if (catError) throw catError;
    if (itemError) throw itemError;
    if (!categories || !items) return null;
    return categories.map((cat) => ({
      category: cat.name,
      items: items.filter((item) => item.category_id === cat.id).map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        tags: item.tags,
        optional: item.optional,
        image: item.image,
        composition: item.composition
      }))
    }));
  } catch (err) {
    console.error("[menu-db] fetchMenu failed:", err);
    return null;
  }
}

const menu = [
  {
    category: "Cafés de Temporada",
    items: [
      {
        id: "cafe-dubai",
        name: "Café Dubai",
        description: "Café con notas intensas de chocolate y pistacho. Cremoso, dulce y único.",
        price: 8e3,
        image: "/images/menu/cafe-dubai.jpg"
      },
      {
        id: "cafe-tiramisu",
        name: "Café Tiramisú",
        description: "Inspirado en el clásico italiano: café, crema suave y cacao.",
        price: 7200,
        image: "/images/menu/cafe-tiramisu.jpg"
      },
      {
        id: "cold-brew-cold-foam",
        name: "Cold Brew Cold Foam",
        description: "Café en frío, suave y refrescante, coronado con espuma cremosa.",
        price: 6e3,
        optional: "Elegí tu sabor: Clásico, Pistacho o Chocolate.",
        image: "/images/menu/cold-brew-cold-foam.jpg"
      }
    ]
  },
  {
    category: "Dulce de la Casa",
    items: [
      {
        id: "alfajores-mama",
        name: "Alfajores Mama",
        description: "Nuestra versión casera, rellenos y cubiertos con chocolate.",
        price: 3500,
        image: "/images/menu/alfajor-mama.jpg"
      }
    ]
  },
  {
    category: "Tostones de Temporada",
    items: [
      {
        id: "toston-proteico",
        name: "Tostón Proteico",
        description: "Pasta de maní, frutas frescas de estación, toque de miel y granola.",
        price: 11500,
        image: "/images/menu/toston-proteico.jpg"
      },
      {
        id: "toston-mediterraneo-mama",
        name: "Tostón Mediterráneo Mama",
        description: "Queso crema, rúcula fresca, tomates cherry confitados, queso sardo en láminas, almendras tostadas y pesto.",
        price: 12500,
        image: "/images/menu/toston-mediterraneo-mama.jpg"
      }
    ]
  },
  {
    category: "Infusiones",
    items: [
      {
        id: "expresso",
        name: "Expresso",
        description: "",
        price: 3600,
        image: "/images/menu/expresso.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 100, label: "espresso" }] }
      },
      {
        id: "expresso-doble",
        name: "Expresso doble",
        description: "",
        price: 4e3,
        image: "/images/menu/expresso-doble.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 100, label: "espresso" }] }
      },
      {
        id: "lungo",
        name: "Lungo",
        description: "",
        price: 3700,
        image: "/images/menu/lungo.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 40, label: "espresso" }, { color: "#c8d8e4", percentage: 60, label: "water" }] }
      },
      {
        id: "americano",
        name: "Americano",
        description: "",
        price: 4200,
        image: "/images/menu/americano.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 30, label: "espresso" }, { color: "#c8d8e4", percentage: 70, label: "water" }] }
      },
      {
        id: "macchiato",
        name: "Macchiato",
        description: "",
        price: 3900,
        image: "/images/menu/macchiato.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 85, label: "espresso" }, { color: "#f5f3f0", percentage: 15, label: "foam" }] }
      },
      {
        id: "cortado",
        name: "Cortado",
        description: "",
        price: 4e3,
        image: "/images/menu/cortado.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 50, label: "espresso" }, { color: "#e6e3df", percentage: 50, label: "milk" }] }
      },
      {
        id: "latte",
        name: "Latte",
        description: "",
        price: 4500,
        image: "/images/menu/latte.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 20, label: "espresso" }, { color: "#e6e3df", percentage: 65, label: "milk" }, { color: "#f5f3f0", percentage: 15, label: "foam" }] }
      },
      {
        id: "capuccino",
        name: "Capuccino",
        description: "",
        price: 4400,
        image: "/images/menu/capuccino.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 33, label: "espresso" }, { color: "#e6e3df", percentage: 34, label: "milk" }, { color: "#f5f3f0", percentage: 33, label: "foam" }] }
      },
      {
        id: "flat-white",
        name: "Flat white",
        description: "",
        price: 4800,
        image: "/images/menu/flat-white.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 30, label: "espresso" }, { color: "#e6e3df", percentage: 70, label: "milk" }] }
      },
      {
        id: "mocca",
        name: "Mocca",
        description: "",
        price: 4800,
        image: "/images/menu/mocca.jpg",
        composition: { layers: [{ color: "#27241c", percentage: 25, label: "espresso" }, { color: "#776358", percentage: 25, label: "chocolate" }, { color: "#e6e3df", percentage: 35, label: "milk" }, { color: "#f5f3f0", percentage: 15, label: "foam" }] }
      },
      {
        id: "chocolatada",
        name: "Chocolatada",
        description: "",
        price: 4400,
        image: "/images/menu/chocolatada.jpg",
        composition: { layers: [{ color: "#776358", percentage: 40, label: "chocolate" }, { color: "#e6e3df", percentage: 50, label: "milk" }, { color: "#f5f3f0", percentage: 10, label: "foam" }] }
      },
      {
        id: "te-en-hebras",
        name: "Té en hebras",
        description: "",
        price: 3500,
        image: "/images/menu/te-en-hebras.jpg"
      },
      {
        id: "opcion-ice",
        name: "Opción Ice",
        description: "Consultar opciones.",
        price: 1500,
        image: "/images/menu/opcion-ice.jpg"
      },
      {
        id: "extra-shot",
        name: "Extra Shot",
        description: "",
        price: 1500,
        image: "/images/menu/extra-shot.jpg"
      },
      {
        id: "leche-vegetal",
        name: "Leche vegetal",
        description: "",
        price: 1500,
        image: "/images/menu/leche-vegetal.jpg"
      }
    ]
  },
  {
    category: "Desayunos y Meriendas",
    items: [
      {
        id: "clasico-mama",
        name: "Clásico măma",
        description: "Dos medialunas y 3 palmeritas.",
        price: 9e3,
        image: "/images/menu/clasico-mama.jpg"
      },
      {
        id: "saludable",
        name: "Saludable",
        description: "Dos tostadas (consultar opciones), queso crema y mermelada de temporada.",
        price: 7e3,
        image: "/images/menu/saludable.jpg"
      },
      {
        id: "power-pancakes",
        name: "Power Pancakes",
        description: "Panqueques de avena y harina de almendra, servidos con frutas de estación y miel orgánica.",
        price: 12e3,
        image: "/images/menu/power-pancakes.jpg"
      },
      {
        id: "avocado",
        name: "Avocado",
        description: "Pan de campo cubierto con queso crema, palta cremosa, huevos revueltos, tomates confitados, praliné de girasol y aceto.",
        price: 13500,
        image: "/images/menu/avocado.jpg"
      },
      {
        id: "keto-bowl",
        name: "Keto Bowl",
        description: "Lomo ahumado o panceta salteada, huevos revueltos, palta cremosa, queso en feta, tomates confitados y pan keto.",
        price: 13500,
        image: "/images/menu/keto-bowl.jpg"
      },
      {
        id: "proteico",
        name: "Proteico",
        description: "Yogurt griego, granola, frutos de estación y miel orgánica.",
        price: 12e3,
        image: "/images/menu/proteico.jpg"
      }
    ]
  },
  {
    category: "Ensaladas",
    items: [
      {
        id: "ensalada-rosa",
        name: "Ensalada Rosa",
        description: "Base de mousse de remolacha, remolacha asada, mix de hojas verdes, queso sardo, brotes de alfalfa y praliné de semillas de girasol. Acompañada con pan de harina de arroz.",
        price: 1e4,
        image: "/images/menu/ensalada-rosa.jpg"
      },
      {
        id: "ensalada-verde",
        name: "Ensalada Verde",
        description: "Mix de hojas frescas, pepino, tomate cherry, queso sardo, almendras tostadas y croutons, sobre una cama de guasacaca con yogurt griego.",
        price: 1e4,
        image: "/images/menu/ensalada-verde.jpg"
      },
      {
        id: "ensalada-mexicana",
        name: "Ensalada Mexicana",
        description: "Pollo, porotos negros, choclo asado, tomate cherry, cebolla curtiada, cilantro y aderezo guasacaca. Acompañada con tortilla de maíz.",
        price: 14e3,
        image: "/images/menu/ensalada-mexicana.jpg"
      }
    ]
  },
  {
    category: "Tartas",
    items: [
      {
        id: "tarta-jamon-queso",
        name: "Tarta de Jamón y Queso",
        description: "Clásica, casera y siempre perfecta.",
        price: 1e4,
        image: "/images/menu/tarta-jamon-queso.jpg"
      },
      {
        id: "tarta-mediterranea",
        name: "Tarta Mediterránea",
        description: "Tomates cherry confitados, queso y toque de pesto.",
        price: 11500,
        image: "/images/menu/tarta-mediterranea.jpg"
      }
    ]
  },
  {
    category: "Panadería",
    items: [
      {
        id: "budin",
        name: "Budín",
        description: "Consultar opciones.",
        price: 5e3,
        image: "/images/menu/budin.jpg"
      },
      {
        id: "brownie",
        name: "Brownie",
        description: "",
        price: 5300,
        image: "/images/menu/brownie.jpg"
      },
      {
        id: "pain-au-chocolat",
        name: "Pain au chocolat",
        description: "",
        price: 5500,
        image: "/images/menu/pain-au-chocolat.jpg"
      },
      {
        id: "cookies",
        name: "Cookies",
        description: "Consultar opciones.",
        price: 4e3,
        image: "/images/menu/cookies.jpg"
      },
      {
        id: "croissants",
        name: "Croissants",
        description: "",
        price: 5e3,
        image: "/images/menu/croissants.jpg"
      },
      {
        id: "medialunas",
        name: "Medialunas",
        description: "",
        price: 2600,
        image: "/images/menu/medialunas.jpg"
      },
      {
        id: "palmeritas",
        name: "Palmeritas",
        description: "",
        price: 1200,
        image: "/images/menu/palmeritas.jpg"
      },
      {
        id: "roll-de-canela",
        name: "Roll de canela",
        description: "",
        price: 5e3,
        image: "/images/menu/roll-canela.jpg"
      }
    ]
  },
  {
    category: "Sándwiches",
    items: [
      {
        id: "sandwich-jamon-crudo",
        name: "Jamón Crudo",
        description: "Jamón Crudo, rúcula, tomates cherry y provolone rallado.",
        price: 14e3,
        image: "/images/menu/sandwichs-jamon-crudo.jpg"
      },
      {
        id: "sandwich-lomo-ahumado",
        name: "Lomo Ahumado",
        description: "Lomo ahumado, pimientos al rescoldo en conserva y queso crema.",
        price: 12e3,
        image: "/images/menu/sandwichs-lomo-ahumado.jpg"
      },
      {
        id: "sandwich-roquefort",
        name: "Roquefort",
        description: "Queso roquefort, rúcula, peras caramelizadas, nueces tostadas y reducción de aceto.",
        price: 12e3,
        image: "/images/menu/sandwich-roquefort.jpg"
      }
    ]
  },
  {
    category: "Apretaditos",
    items: [
      {
        id: "apretadito-ternera-queso",
        name: "Ternera y queso",
        description: "",
        price: 11e3,
        image: "/images/menu/apretadito-ternera-queso.jpg"
      },
      {
        id: "apretadito-jamon-queso",
        name: "Jamón y queso",
        description: "",
        price: 11e3,
        image: "/images/menu/apretadito-jamon-queso.jpg"
      },
      {
        id: "apretadito-cantimpalo-queso",
        name: "Cantimpalo y queso",
        description: "",
        price: 11e3,
        image: "/images/menu/apretadito-cantimpalo-queso.jpg"
      }
    ]
  },
  {
    category: "Bebidas",
    items: [
      {
        id: "coca-cola",
        name: "Coca cola",
        description: "Común o zero.",
        price: 3900,
        image: "/images/menu/coca-cola.jpg"
      },
      {
        id: "limonada-clasica",
        name: "Limonada clásica",
        description: "",
        price: 4400,
        image: "/images/menu/limonada-clasica.jpg"
      },
      {
        id: "limonada-menta-jengibre",
        name: "Limonada menta y jengibre",
        description: "",
        price: 4900,
        image: "/images/menu/limonada-menta-jengibre.jpg"
      },
      {
        id: "limonada-frutos-rojos",
        name: "Limonada de frutos rojos",
        description: "",
        price: 4900,
        image: "/images/menu/limonada-frutos-rojos.jpg"
      },
      {
        id: "jugo-naranja",
        name: "Jugo de naranja",
        description: "",
        price: 4100,
        image: "/images/menu/jugo-naranja.jpg"
      },
      {
        id: "licuado-banana",
        name: "Licuado de banana",
        description: "",
        price: 4400,
        image: "/images/menu/licuado-banana.jpg"
      }
    ]
  },
  {
    category: "Smoothies",
    items: [
      {
        id: "smoothie-rojo",
        name: "Rojo",
        description: "Frutos rojos.",
        price: 6e3,
        image: "/images/menu/smoothies-rojo.jpg"
      },
      {
        id: "smoothie-amarillo",
        name: "Amarillo",
        description: "Durazno, mango y naranja.",
        price: 6e3,
        image: "/images/menu/smoothie-amarillo.jpg"
      },
      {
        id: "smoothie-verde-detox",
        name: "Verde detox",
        description: "Kiwi, melón y pepino.",
        price: 6e3,
        image: "/images/menu/verde-detox.jpg"
      }
    ]
  },
  {
    category: "Promos Coworkers",
    items: [
      {
        id: "promo-arranque-productivo",
        name: "Arranque productivo",
        description: "Desayuno Saludable o Clásico + Infusión simple.",
        price: 11e3,
        image: "/images/menu/promo-arranque-productivo.jpg"
      },
      {
        id: "promo-recarga-mediodia",
        name: "Recarga de medio día",
        description: "Infusión simple + Almuerzo.",
        price: 17e3,
        image: "/images/menu/promo-recarga-mediodia.jpg"
      },
      {
        id: "promo-dia-productivo",
        name: "Día productivo",
        description: "Desayuno Saludable o Clásico + Infusión simple + Almuerzo.",
        price: 25e3,
        image: "/images/menu/promo-dia-productivo.jpg"
      }
    ]
  },
  {
    category: "Transformá tus promos",
    items: [
      {
        id: "cambio-desayuno",
        name: "Cambio de desayuno",
        description: "Avocado, Keto Bowl o Proteico.",
        price: 3e3,
        image: "/images/menu/cambio-desayuno.jpg"
      },
      {
        id: "extra-shot-promo",
        name: "Extra shot",
        description: "",
        price: 1500,
        image: "/images/menu/extra-shot-promo.jpg"
      },
      {
        id: "extra-ice",
        name: "ICE",
        description: "",
        price: 1500,
        image: "/images/menu/extra-ice.jpg"
      },
      {
        id: "extra-croissant",
        name: "Croissant",
        description: "",
        price: 4e3,
        image: "/images/menu/extra-croissant.jpg"
      },
      {
        id: "extra-pain-au-chocolat",
        name: "Pain au chocolat",
        description: "",
        price: 4e3,
        image: "/images/menu/extra-pain-au-chocolat.jpg"
      },
      {
        id: "extra-limonada-coca",
        name: "Limonada o coca cola",
        description: "",
        price: 4e3,
        image: "/images/menu/extra-limonada-coca.jpg"
      }
    ]
  }
];

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const menu$1 = await fetchMenu() ?? menu;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Māma Café | Café de especialidad en Yerba Buena", "description": "Una taza de café, una charla. Café de especialidad en Yerba Buena, Tucumán." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Horarios", $$Horarios, {})} ${renderComponent($$result2, "Ubicacion", $$Ubicacion, {})} ${maybeRenderHead()}<section id="menu"> <main class="max-w-2xl md:max-w-3xl mx-auto px-4 py-16 md:py-24"> <div class="flex items-center justify-center gap-4 mb-8"> <h2 class="text-3xl md:text-4xl font-light text-gris">Carta</h2> <img src="/images/brand/stamp-seal.png" alt="" class="h-12 md:h-16 w-auto opacity-55"> </div> ${renderComponent($$result2, "MenuNav", $$MenuNav, {})} ${superCategories.map(({ anchor, sections: sectionNames }) => {
    const groupSections = menu$1.filter((s) => sectionNames.includes(s.category));
    return renderTemplate`<div${addAttribute(anchor, "id")}${addAttribute(anchor, "data-menu-group")} class="scroll-mt-20 pt-10"> ${groupSections.map((section) => renderTemplate`${renderComponent($$result2, "MenuSectionComponent", $$MenuSection, { "section": section })}`)} </div>`;
  })} </main> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Mama Cafe/src/pages/index.astro", void 0);

const $$file = "C:/Mama Cafe/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
