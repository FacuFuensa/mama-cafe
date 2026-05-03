# Māma Café — Landing Page

## Project
Single-page marketing site for a specialty coffee shop in
Yerba Buena, Tucumán, Argentina. Spanish only.
Static, deployed to Vercel.

## Stack
- Astro 5+ with TypeScript (strict)
- Tailwind CSS v4 (via @tailwindcss/vite)
- No client-side JS unless absolutely needed

## Brand
- Name: Māma Café (note the breve: ă)
- Tagline: "Una taza de café, una charla."
- Palette: cream background, dark charcoal text,
  gold/tan accent (matches logo line color)
- Tone: warm, family, slow mornings

## Sections (in order)
1. Hero — logo + tagline + CTA al menú
2. Menú — desde src/data/menu.ts, agrupado por categoría
3. Horarios — Lun–Vie 08:00–21:30 corrido /
   Sáb–Dom 08:00–13:00 y 17:00–21:30
4. Ubicación — Av. Solano Vera 1174, Yerba Buena, Tucumán
   + Google Map embed
5. Footer — IG @mamacafetuc, Linktree, dirección

## Rules
- Copy en español rioplatense (vos, no tú)
- Mobile-first
- JSON-LD schema.org/LocalBusiness para SEO
- Open Graph tags para preview en Instagram
- Sin tracking ni analytics en v1

## Workflow
- Data before UI. Build src/data/menu.ts first.
- One section at a time. Don't scaffold the whole page.
- Ask before installing new dependencies.