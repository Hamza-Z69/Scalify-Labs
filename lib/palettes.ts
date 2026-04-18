export interface PaletteMode {
  bg: string;
  fg: string;
  muted: string;
  rule: string;
  card: string;
  accent: string;
  accentFg: string;
  panel: string;
  panelFg: string;
  cream: string;
  creamFg: string;
  creamRule: string;
  creamMuted: string;
}

export interface Palette {
  name: string;
  light: PaletteMode;
  dark: PaletteMode;
}

export const PALETTES: Record<string, Palette> = {
  terracotta: {
    name: "Terracotta",
    light: { bg: "#f5f1ea", fg: "#2e241c", muted: "#6b5b4e", rule: "#d9cfbf", card: "#ebe3d4", accent: "#e07a3c", accentFg: "#f5f1ea", panel: "#2e241c", panelFg: "#f5f1ea", cream: "#ebe1cc", creamFg: "#2e241c", creamRule: "#d2c4a8", creamMuted: "#7a6853" },
    dark:  { bg: "#1a1510", fg: "#efe4d1", muted: "#a59583", rule: "#332a22", card: "#231c16", accent: "#ff8c4a", accentFg: "#1a1510", panel: "#120e0a", panelFg: "#efe4d1", cream: "#e8dcc4", creamFg: "#2a1f15", creamRule: "#c7b896", creamMuted: "#7a6853" },
  },
  olive: {
    name: "Olive",
    light: { bg: "#f4f2eb", fg: "#1a1c17", muted: "#6b6c5f", rule: "#d7d4c5", card: "#ebe8dd", accent: "#5c7a2f", accentFg: "#f4f2eb", panel: "#1a1c17", panelFg: "#f4f2eb", cream: "#e8e4d1", creamFg: "#1a1c17", creamRule: "#c9c4a8", creamMuted: "#6b6c5f" },
    dark:  { bg: "#17181a", fg: "#f4f2eb", muted: "#8b8c7d", rule: "#2a2c26", card: "#1f2120", accent: "#a8c45a", accentFg: "#17181a", panel: "#0f1012", panelFg: "#f4f2eb", cream: "#e5e1cc", creamFg: "#17181a", creamRule: "#c4beac", creamMuted: "#6b6c5f" },
  },
  ink: {
    name: "Ink",
    light: { bg: "#f4f1ea", fg: "#0f1115", muted: "#5b5d66", rule: "#d4d1c6", card: "#ebe7de", accent: "#1f2d5a", accentFg: "#f4f1ea", panel: "#0f1115", panelFg: "#f4f1ea", cream: "#e8e3d0", creamFg: "#0f1115", creamRule: "#c9c1a8", creamMuted: "#5b5d66" },
    dark:  { bg: "#0f1115", fg: "#f4f1ea", muted: "#888b94", rule: "#22252c", card: "#171a21", accent: "#7b93e8", accentFg: "#0f1115", panel: "#08090c", panelFg: "#f4f1ea", cream: "#e5dfca", creamFg: "#0f1115", creamRule: "#c2b99f", creamMuted: "#5b5d66" },
  },
};

export interface TypePair {
  name: string;
  display: string;
  sans: string;
  mono: string;
}

export const TYPE_PAIRS: Record<string, TypePair> = {
  editorial: {
    name: "Editorial",
    display: "var(--font-instrument-serif), 'Instrument Serif', Georgia, serif",
    sans: "'Geist', 'Helvetica Neue', Arial, sans-serif",
    mono: "var(--font-jetbrains-mono), 'JetBrains Mono', ui-monospace, monospace",
  },
  swiss: {
    name: "Swiss",
    display: "'Geist', 'Helvetica Neue', Arial, sans-serif",
    sans: "'Geist', 'Helvetica Neue', Arial, sans-serif",
    mono: "var(--font-jetbrains-mono), 'JetBrains Mono', ui-monospace, monospace",
  },
  classic: {
    name: "Classic",
    display: "var(--font-fraunces), 'Fraunces', Georgia, serif",
    sans: "var(--font-inter-tight), 'Inter Tight', 'Helvetica Neue', Arial, sans-serif",
    mono: "var(--font-jetbrains-mono), 'JetBrains Mono', ui-monospace, monospace",
  },
};
