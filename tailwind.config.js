// tailwind.config.js
export default {
  darkMode: "class", // using class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Button Colors */
        button: {
          DEFAULT: "var(--button-bg-color)",
          text: "var(--button-text-color)",
          hover: "var(--button-hover-bg-color)",
          hoverText: "var(--button-hover-text-color)",
          secondary: {
            DEFAULT: "var(--button-secondary-bg-color)",
            text: "var(--button-secondary-text-color)",
            hover: "var(--button-secondary-hover-bg-color)",
            hoverText: "var(--button-secondary-hover-text-color)",
          },
          disabled: {
            DEFAULT: "var(--button-disabled-bg-color)",
            text: "var(--button-disabled-text-color)",
          },
        },

        /* Light Mode / Default Theme Colors */
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          alt1: "var(--bg-alt1)",
          alt2: "var(--bg-alt2)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        border: {
          DEFAULT: "var(--border-color)",
          sidebar: "var(--sidebar-border-color)",
        },

        /* Header & Footer */
        footer: {
          bg: "var(--footer-bg-color)",
          text: "var(--footer-text-color)",
        },
        header: {
          bg: "var(--header-bg-color)",
          text: "var(--header-text-color)",
        },

        /* Sidebar */
        sidebar: {
          bg: "var(--sidebar-bg-color)",
          text: "var(--sidebar-text-color)",
        },
      },

      /* Fonts */
      fontFamily: {
        sans: "var(--font-family-sans)",
        serif: "var(--font-family-serif)",
        mono: "var(--font-family-mono)",
      },

      /* Spacing & Layout Dimensions */
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",

        // Layout-specific (header, footer, sidebar)
        header: "var(--header-height)",
        footer: "var(--footer-height)",
        sidebar: "var(--sidebar-width)",
      },

      /* Border Radius */
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
      },

      /* Transitions & Animations */
      transitionDuration: {
        DEFAULT: "var(--transition-duration)",
        fast: "var(--animation-duration-fast)",
        normal: "var(--animation-duration-normal)",
        slow: "var(--animation-duration-slow)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--transition-timing-function)",
        ease: "var(--animation-ease)",
        bounce: "var(--animation-bounce)", // If you need it as a timing function
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn var(--animation-duration-normal) var(--animation-ease) forwards",
        slideUp: "slideUp var(--animation-duration-normal) var(--animation-ease) forwards",
      },

      /* Font Sizes */
      fontSize: {
        xs: "var(--font-size-xs)",    // 12px
        sm: "var(--font-size-sm)",    // 14px
        md: "var(--font-size-md)",    // 16px
        lg: "var(--font-size-lg)",    // 18px
        xl: "var(--font-size-xl)",    // 20px
        "2xl": "var(--font-size-2xl)",    // 24px
        "3xl": "var(--font-size-3xl)",    // 30px
        "4xl": "var(--font-size-4xl)",    // 36px
        "5xl": "var(--font-size-5xl)",    // 48px
        "6xl": "var(--font-size-6xl)",    // 60px
        "7xl": "var(--font-size-7xl)",    // 72px
        "8xl": "var(--font-size-8xl)",    // 96px
        "9xl": "var(--font-size-9xl)",    // 128px
      },
    },
  },
  plugins: [],
};
