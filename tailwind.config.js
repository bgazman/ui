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
        // These keys let you use semantic names like "bg-button" in your markup.
        button: {
          DEFAULT: "var(--button-bg-color)",
          text: "var(--button-text-color)",
          hover: "var(--button-hover-bg-color)",
        },
        // For components like tabs, you can still refer to your CSS variables directly…
        bgSecondary: "var(--bg-secondary)",
        textSecondary: "var(--text-secondary)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
      },
      transitionDuration: {
        DEFAULT: "var(--transition-duration)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--transition-timing-function)",
      },
      // Optionally add your animations and other tokens here.
    },
  },
  plugins: [],
};
