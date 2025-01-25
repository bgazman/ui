/** @type {import('tailwindcss').Config} */
export default {
  content: [

    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        header: {
          bg: 'var(--header-bg)',                   // Header background
          text: 'var(--header-text-color)',         // Header text color
          border: 'var(--header-border-bottom-color)', // Header bottom border color
        },
        sidebar: {
          bg: 'var(--sidebar-bg)',                 // Sidebar background
          text: 'var(--sidebar-text-color)',       // Sidebar text color
          hover: 'var(--sidebar-hover-bg)',        // Sidebar hover background
          border: 'var(--sidebar-border-color)',   // Sidebar border color
        },
        content: {
          bg: 'var(--content-layout-bg)',                 // Content background color
          text: 'var(--content-layout-text-color)',       // Content text color
        },
      },
      spacing: {
        header: 'var(--header-height)',            // Header height
        sidebar: 'var(--sidebar-width)',           // Full sidebar width
        'sidebar-collapsed': 'var(--sidebar-collapsed-width)', // Collapsed sidebar width
        content: 'var(--content-layout-padding)',         // Content padding
      },
      borderRadius: {
        content: 'var(--content-layout-border-radius)',   // Content border radius
      },
      boxShadow: {
        header: 'var(--header-shadow)',            // Header shadow
        content: 'var(--content-layout-shadow)',          // Content shadow
      },
      maxWidth: {
        content: 'var(--content-layout-max-width)',       // Max width for content-layout
      },
    },
  },
  plugins: [],
};