-- ─────────────────────────────────────────────────────────────────────────────
-- 001_create_schema.sql
-- Māma Café — categories, menu_items, events
-- ─────────────────────────────────────────────────────────────────────────────

-- ── Tables ───────────────────────────────────────────────────────────────────

CREATE TABLE categories (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT        NOT NULL,
  display_order INT         NOT NULL DEFAULT 0,
  is_active     BOOLEAN     NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE menu_items (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id   UUID        NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  slug          TEXT        NOT NULL UNIQUE,
  name          TEXT        NOT NULL,
  description   TEXT        NOT NULL DEFAULT '',
  price         INT         NOT NULL,
  tags          TEXT[]      NOT NULL DEFAULT '{}',
  optional      TEXT                 DEFAULT NULL,
  image_path    TEXT                 DEFAULT NULL,
  composition   JSONB                DEFAULT NULL,
  display_order INT         NOT NULL DEFAULT 0,
  is_active     BOOLEAN     NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE events (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT        NOT NULL,
  description   TEXT                 DEFAULT '',
  event_date    DATE                 DEFAULT NULL,
  image_path    TEXT                 DEFAULT NULL,
  is_active     BOOLEAN     NOT NULL DEFAULT false,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── updated_at trigger ───────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER menu_items_updated_at
  BEFORE UPDATE ON menu_items
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ── Row Level Security ───────────────────────────────────────────────────────

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE events     ENABLE ROW LEVEL SECURITY;

-- Public read (anon)
CREATE POLICY "anon_select" ON categories
  FOR SELECT TO anon USING (true);

CREATE POLICY "anon_select" ON menu_items
  FOR SELECT TO anon USING (true);

CREATE POLICY "anon_select" ON events
  FOR SELECT TO anon USING (true);

-- Admin write (authenticated)
CREATE POLICY "authenticated_all" ON categories
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_all" ON menu_items
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_all" ON events
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
