/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables Tailwind's dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family-sans)', 'sans-serif'],
        serif: ['var(--font-family-serif)', 'serif'],
        mono: ['var(--font-family-mono)', 'monospace'],
        // You can also add specific font families directly
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
        nunito: ['Nunito', 'sans-serif'],
        garamond: ['EB Garamond', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        bold: "var(--font-weight-bold)",
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
      },
    },
  },
  plugins: [],
};
