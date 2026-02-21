tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#d4af35",
        "primary-dark": "#b08d2b",
        "background-light": "#f8f7f6",
        "background-dark": "#201d12",
        "burgundy": "#800020",
        "burgundy-dark": "#5e0018",
        "floral-white": "#FFFAF0",
      },
      fontFamily: {
        "display": ["Work Sans", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #d4af35 0%, #f3d77c 50%, #d4af35 100%)",
      },
    },
  },
};
