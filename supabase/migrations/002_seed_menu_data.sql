-- ─────────────────────────────────────────────────────────────────────────────
-- 002_seed_menu_data.sql
-- Māma Café — seed categories and menu items from src/data/menu.ts
-- ─────────────────────────────────────────────────────────────────────────────

-- ── Categories (14, display_order 0–13) ──────────────────────────────────────

INSERT INTO categories (name, display_order) VALUES
  ('Cafés de Temporada',    0),
  ('Dulce de la Casa',      1),
  ('Tostones de Temporada', 2),
  ('Infusiones',            3),
  ('Desayunos y Meriendas', 4),
  ('Ensaladas',             5),
  ('Tartas',                6),
  ('Panadería',             7),
  ('Sándwiches',            8),
  ('Apretaditos',           9),
  ('Bebidas',               10),
  ('Smoothies',             11),
  ('Promos Coworkers',      12),
  ('Transformá tus promos', 13);

-- ── Menu Items ────────────────────────────────────────────────────────────────
-- category_id resolved by name subquery; slug = id from menu.ts

INSERT INTO menu_items
  (category_id, slug, name, description, price, optional, image_path, composition, display_order)
VALUES

  -- ── Cafés de Temporada ───────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Cafés de Temporada'),
    'cafe-dubai',
    'Café Dubai',
    'Café con notas intensas de chocolate y pistacho. Cremoso, dulce y único.',
    8000, NULL, '/images/menu/cafe-dubai.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Cafés de Temporada'),
    'cafe-tiramisu',
    'Café Tiramisú',
    'Inspirado en el clásico italiano: café, crema suave y cacao.',
    7200, NULL, '/images/menu/cafe-tiramisu.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Cafés de Temporada'),
    'cold-brew-cold-foam',
    'Cold Brew Cold Foam',
    'Café en frío, suave y refrescante, coronado con espuma cremosa.',
    6000,
    'Elegí tu sabor: Clásico, Pistacho o Chocolate.',
    '/images/menu/cold-brew-cold-foam.jpg',
    NULL,
    2
  ),

  -- ── Dulce de la Casa ─────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Dulce de la Casa'),
    'alfajores-mama',
    'Alfajores Mama',
    'Nuestra versión casera, rellenos y cubiertos con chocolate.',
    3500, NULL, '/images/menu/alfajor-mama.jpg', NULL, 0
  ),

  -- ── Tostones de Temporada ────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Tostones de Temporada'),
    'toston-proteico',
    'Tostón Proteico',
    'Pasta de maní, frutas frescas de estación, toque de miel y granola.',
    11500, NULL, '/images/menu/toston-proteico.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Tostones de Temporada'),
    'toston-mediterraneo-mama',
    'Tostón Mediterráneo Mama',
    'Queso crema, rúcula fresca, tomates cherry confitados, queso sardo en láminas, almendras tostadas y pesto.',
    12500, NULL, '/images/menu/toston-mediterraneo-mama.jpg', NULL, 1
  ),

  -- ── Infusiones ───────────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'expresso',
    'Expresso',
    '',
    3600, NULL, '/images/menu/expresso.jpg',
    '{"layers":[{"color":"#27241c","percentage":100,"label":"espresso"}]}'::jsonb,
    0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'expresso-doble',
    'Expresso doble',
    '',
    4000, NULL, '/images/menu/expresso-doble.jpg',
    '{"layers":[{"color":"#27241c","percentage":100,"label":"espresso"}]}'::jsonb,
    1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'lungo',
    'Lungo',
    '',
    3700, NULL, '/images/menu/lungo.jpg',
    '{"layers":[{"color":"#27241c","percentage":40,"label":"espresso"},{"color":"#c8d8e4","percentage":60,"label":"water"}]}'::jsonb,
    2
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'americano',
    'Americano',
    '',
    4200, NULL, '/images/menu/americano.jpg',
    '{"layers":[{"color":"#27241c","percentage":30,"label":"espresso"},{"color":"#c8d8e4","percentage":70,"label":"water"}]}'::jsonb,
    3
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'macchiato',
    'Macchiato',
    '',
    3900, NULL, '/images/menu/macchiato.jpg',
    '{"layers":[{"color":"#27241c","percentage":85,"label":"espresso"},{"color":"#f5f3f0","percentage":15,"label":"foam"}]}'::jsonb,
    4
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'cortado',
    'Cortado',
    '',
    4000, NULL, '/images/menu/cortado.jpg',
    '{"layers":[{"color":"#27241c","percentage":50,"label":"espresso"},{"color":"#e6e3df","percentage":50,"label":"milk"}]}'::jsonb,
    5
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'latte',
    'Latte',
    '',
    4500, NULL, '/images/menu/latte.jpg',
    '{"layers":[{"color":"#27241c","percentage":20,"label":"espresso"},{"color":"#e6e3df","percentage":65,"label":"milk"},{"color":"#f5f3f0","percentage":15,"label":"foam"}]}'::jsonb,
    6
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'capuccino',
    'Capuccino',
    '',
    4400, NULL, '/images/menu/capuccino.jpg',
    '{"layers":[{"color":"#27241c","percentage":33,"label":"espresso"},{"color":"#e6e3df","percentage":34,"label":"milk"},{"color":"#f5f3f0","percentage":33,"label":"foam"}]}'::jsonb,
    7
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'flat-white',
    'Flat white',
    '',
    4800, NULL, '/images/menu/flat-white.jpg',
    '{"layers":[{"color":"#27241c","percentage":30,"label":"espresso"},{"color":"#e6e3df","percentage":70,"label":"milk"}]}'::jsonb,
    8
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'mocca',
    'Mocca',
    '',
    4800, NULL, '/images/menu/mocca.jpg',
    '{"layers":[{"color":"#27241c","percentage":25,"label":"espresso"},{"color":"#776358","percentage":25,"label":"chocolate"},{"color":"#e6e3df","percentage":35,"label":"milk"},{"color":"#f5f3f0","percentage":15,"label":"foam"}]}'::jsonb,
    9
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'chocolatada',
    'Chocolatada',
    '',
    4400, NULL, '/images/menu/chocolatada.jpg',
    '{"layers":[{"color":"#776358","percentage":40,"label":"chocolate"},{"color":"#e6e3df","percentage":50,"label":"milk"},{"color":"#f5f3f0","percentage":10,"label":"foam"}]}'::jsonb,
    10
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'te-en-hebras',
    'Té en hebras',
    '',
    3500, NULL, '/images/menu/te-en-hebras.jpg', NULL, 11
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'opcion-ice',
    'Opción Ice',
    'Consultar opciones.',
    1500, NULL, '/images/menu/opcion-ice.jpg', NULL, 12
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'extra-shot',
    'Extra Shot',
    '',
    1500, NULL, '/images/menu/extra-shot.jpg', NULL, 13
  ),
  (
    (SELECT id FROM categories WHERE name = 'Infusiones'),
    'leche-vegetal',
    'Leche vegetal',
    '',
    1500, NULL, '/images/menu/leche-vegetal.jpg', NULL, 14
  ),

  -- ── Desayunos y Meriendas ────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Desayunos y Meriendas'),
    'clasico-mama',
    'Clásico măma',
    'Dos medialunas y 3 palmeritas.',
    9000, NULL, '/images/menu/clasico-mama.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Desayunos y Meriendas'),
    'saludable',
    'Saludable',
    'Dos tostadas (consultar opciones), queso crema y mermelada de temporada.',
    7000, NULL, '/images/menu/saludable.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Desayunos y Meriendas'),
    'power-pancakes',
    'Power Pancakes',
    'Panqueques de avena y harina de almendra, servidos con frutas de estación y miel orgánica.',
    12000, NULL, '/images/menu/power-pancakes.jpg', NULL, 2
  ),
  (
    (SELECT id FROM categories WHERE name = 'Desayunos y Meriendas'),
    'avocado',
    'Avocado',
    'Pan de campo cubierto con queso crema, palta cremosa, huevos revueltos, tomates confitados, praliné de girasol y aceto.',
    13500, NULL, '/images/menu/avocado.jpg', NULL, 3
  ),
  (
    (SELECT id FROM categories WHERE name = 'Desayunos y Meriendas'),
    'keto-bowl',
    'Keto Bowl',
    'Lomo ahumado o panceta salteada, huevos revueltos, palta cremosa, queso en feta, tomates confitados y pan keto.',
    13500, NULL, '/images/menu/keto-bowl.jpg', NULL, 4
  ),
  (
    (SELECT id FROM categories WHERE name = 'Desayunos y Meriendas'),
    'proteico',
    'Proteico',
    'Yogurt griego, granola, frutos de estación y miel orgánica.',
    12000, NULL, '/images/menu/proteico.jpg', NULL, 5
  ),

  -- ── Ensaladas ────────────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Ensaladas'),
    'ensalada-rosa',
    'Ensalada Rosa',
    'Base de mousse de remolacha, remolacha asada, mix de hojas verdes, queso sardo, brotes de alfalfa y praliné de semillas de girasol. Acompañada con pan de harina de arroz.',
    10000, NULL, '/images/menu/ensalada-rosa.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Ensaladas'),
    'ensalada-verde',
    'Ensalada Verde',
    'Mix de hojas frescas, pepino, tomate cherry, queso sardo, almendras tostadas y croutons, sobre una cama de guasacaca con yogurt griego.',
    10000, NULL, '/images/menu/ensalada-verde.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Ensaladas'),
    'ensalada-mexicana',
    'Ensalada Mexicana',
    'Pollo, porotos negros, choclo asado, tomate cherry, cebolla curtiada, cilantro y aderezo guasacaca. Acompañada con tortilla de maíz.',
    14000, NULL, '/images/menu/ensalada-mexicana.jpg', NULL, 2
  ),

  -- ── Tartas ───────────────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Tartas'),
    'tarta-jamon-queso',
    'Tarta de Jamón y Queso',
    'Clásica, casera y siempre perfecta.',
    10000, NULL, '/images/menu/tarta-jamon-queso.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Tartas'),
    'tarta-mediterranea',
    'Tarta Mediterránea',
    'Tomates cherry confitados, queso y toque de pesto.',
    11500, NULL, '/images/menu/tarta-mediterranea.jpg', NULL, 1
  ),

  -- ── Panadería ────────────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Panadería'),
    'budin',
    'Budín',
    'Consultar opciones.',
    5000, NULL, '/images/menu/budin.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Panadería'),
    'brownie',
    'Brownie',
    '',
    5300, NULL, '/images/menu/brownie.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Panadería'),
    'pain-au-chocolat',
    'Pain au chocolat',
    '',
    5500, NULL, '/images/menu/pain-au-chocolat.jpg', NULL, 2
  ),
  (
    (SELECT id FROM categories WHERE name = 'Panadería'),
    'cookies',
    'Cookies',
    'Consultar opciones.',
    4000, NULL, '/images/menu/cookies.jpg', NULL, 3
  ),
  (
    (SELECT id FROM categories WHERE name = 'Panadería'),
    'croissants',
    'Croissants',
    '',
    5000, NULL, '/images/menu/croissants.jpg', NULL, 4
  ),
  (
    (SELECT id FROM categories WHERE name = 'Panadería'),
    'medialunas',
    'Medialunas',
    '',
    2600, NULL, '/images/menu/medialunas.jpg', NULL, 5
  ),
  (
    (SELECT id FROM categories WHERE name = 'Panadería'),
    'palmeritas',
    'Palmeritas',
    '',
    1200, NULL, '/images/menu/palmeritas.jpg', NULL, 6
  ),
  (
    (SELECT id FROM categories WHERE name = 'Panadería'),
    'roll-de-canela',
    'Roll de canela',
    '',
    5000, NULL, '/images/menu/roll-canela.jpg', NULL, 7
  ),

  -- ── Sándwiches ───────────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Sándwiches'),
    'sandwich-jamon-crudo',
    'Jamón Crudo',
    'Jamón Crudo, rúcula, tomates cherry y provolone rallado.',
    14000, NULL, '/images/menu/sandwichs-jamon-crudo.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Sándwiches'),
    'sandwich-lomo-ahumado',
    'Lomo Ahumado',
    'Lomo ahumado, pimientos al rescoldo en conserva y queso crema.',
    12000, NULL, '/images/menu/sandwichs-lomo-ahumado.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Sándwiches'),
    'sandwich-roquefort',
    'Roquefort',
    'Queso roquefort, rúcula, peras caramelizadas, nueces tostadas y reducción de aceto.',
    12000, NULL, '/images/menu/sandwich-roquefort.jpg', NULL, 2
  ),

  -- ── Apretaditos ──────────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Apretaditos'),
    'apretadito-ternera-queso',
    'Ternera y queso',
    '',
    11000, NULL, '/images/menu/apretadito-ternera-queso.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Apretaditos'),
    'apretadito-jamon-queso',
    'Jamón y queso',
    '',
    11000, NULL, '/images/menu/apretadito-jamon-queso.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Apretaditos'),
    'apretadito-cantimpalo-queso',
    'Cantimpalo y queso',
    '',
    11000, NULL, '/images/menu/apretadito-cantimpalo-queso.jpg', NULL, 2
  ),

  -- ── Bebidas ──────────────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Bebidas'),
    'coca-cola',
    'Coca cola',
    'Común o zero.',
    3900, NULL, '/images/menu/coca-cola.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Bebidas'),
    'limonada-clasica',
    'Limonada clásica',
    '',
    4400, NULL, '/images/menu/limonada-clasica.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Bebidas'),
    'limonada-menta-jengibre',
    'Limonada menta y jengibre',
    '',
    4900, NULL, '/images/menu/limonada-menta-jengibre.jpg', NULL, 2
  ),
  (
    (SELECT id FROM categories WHERE name = 'Bebidas'),
    'limonada-frutos-rojos',
    'Limonada de frutos rojos',
    '',
    4900, NULL, '/images/menu/limonada-frutos-rojos.jpg', NULL, 3
  ),
  (
    (SELECT id FROM categories WHERE name = 'Bebidas'),
    'jugo-naranja',
    'Jugo de naranja',
    '',
    4100, NULL, '/images/menu/jugo-naranja.jpg', NULL, 4
  ),
  (
    (SELECT id FROM categories WHERE name = 'Bebidas'),
    'licuado-banana',
    'Licuado de banana',
    '',
    4400, NULL, '/images/menu/licuado-banana.jpg', NULL, 5
  ),

  -- ── Smoothies ────────────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Smoothies'),
    'smoothie-rojo',
    'Rojo',
    'Frutos rojos.',
    6000, NULL, '/images/menu/smoothies-rojo.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Smoothies'),
    'smoothie-amarillo',
    'Amarillo',
    'Durazno, mango y naranja.',
    6000, NULL, '/images/menu/smoothie-amarillo.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Smoothies'),
    'smoothie-verde-detox',
    'Verde detox',
    'Kiwi, melón y pepino.',
    6000, NULL, '/images/menu/verde-detox.jpg', NULL, 2
  ),

  -- ── Promos Coworkers ─────────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Promos Coworkers'),
    'promo-arranque-productivo',
    'Arranque productivo',
    'Desayuno Saludable o Clásico + Infusión simple.',
    11000, NULL, '/images/menu/promo-arranque-productivo.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Promos Coworkers'),
    'promo-recarga-mediodia',
    'Recarga de medio día',
    'Infusión simple + Almuerzo.',
    17000, NULL, '/images/menu/promo-recarga-mediodia.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Promos Coworkers'),
    'promo-dia-productivo',
    'Día productivo',
    'Desayuno Saludable o Clásico + Infusión simple + Almuerzo.',
    25000, NULL, '/images/menu/promo-dia-productivo.jpg', NULL, 2
  ),

  -- ── Transformá tus promos ────────────────────────────────────────────────
  (
    (SELECT id FROM categories WHERE name = 'Transformá tus promos'),
    'cambio-desayuno',
    'Cambio de desayuno',
    'Avocado, Keto Bowl o Proteico.',
    3000, NULL, '/images/menu/cambio-desayuno.jpg', NULL, 0
  ),
  (
    (SELECT id FROM categories WHERE name = 'Transformá tus promos'),
    'extra-shot-promo',
    'Extra shot',
    '',
    1500, NULL, '/images/menu/extra-shot-promo.jpg', NULL, 1
  ),
  (
    (SELECT id FROM categories WHERE name = 'Transformá tus promos'),
    'extra-ice',
    'ICE',
    '',
    1500, NULL, '/images/menu/extra-ice.jpg', NULL, 2
  ),
  (
    (SELECT id FROM categories WHERE name = 'Transformá tus promos'),
    'extra-croissant',
    'Croissant',
    '',
    4000, NULL, '/images/menu/extra-croissant.jpg', NULL, 3
  ),
  (
    (SELECT id FROM categories WHERE name = 'Transformá tus promos'),
    'extra-pain-au-chocolat',
    'Pain au chocolat',
    '',
    4000, NULL, '/images/menu/extra-pain-au-chocolat.jpg', NULL, 4
  ),
  (
    (SELECT id FROM categories WHERE name = 'Transformá tus promos'),
    'extra-limonada-coca',
    'Limonada o coca cola',
    '',
    4000, NULL, '/images/menu/extra-limonada-coca.jpg', NULL, 5
  );
