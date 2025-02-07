export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          elevated: 'var(--surface-elevated)',
          DEFAULT: 'var(--surface)',
          lowered: 'var(--surface-lowered)',
        },
        primary: {
          DEFAULT: 'var(--bg-primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        danger: {
          DEFAULT: 'var(--danger)',
          foreground: 'var(--danger-foreground)',
        },
        content: {
          DEFAULT: 'var(--content)',
          muted: 'var(--content-muted)',
          subtle: 'var(--content-subtle)',
        },
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        }
      },
      fontFamily: {
        sans: "var(--font-family-sans)",
        serif: "var(--font-family-serif)",
        mono: "var(--font-family-mono)",
      },
      spacing: {
        header: "var(--header-height)",
        footer: "var(--footer-height)",
        sidebar: "var(--sidebar-width)",
      },
    },
  },
  plugins: [],
};