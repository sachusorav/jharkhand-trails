module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Jharkhand's red earth, grounding and authentic
        primary: {
          DEFAULT: "#8B4513", // saddle-brown
          50: "#FDF8F4", // very light brown
          100: "#F7E6D3", // light brown
          200: "#EFCCA7", // medium light brown
          300: "#E7B27B", // medium brown
          400: "#DF984F", // darker brown
          500: "#8B4513", // saddle-brown
          600: "#7A3D11", // darker saddle-brown
          700: "#69350F", // very dark brown
          800: "#582D0D", // extremely dark brown
          900: "#47250B", // deepest brown
        },
        // Secondary Colors - Forest canopy, growth and exploration
        secondary: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0F9F0", // very light green
          100: "#D4F4D4", // light green
          200: "#A8E8A8", // medium light green
          300: "#7CDD7C", // medium green
          400: "#50D150", // bright green
          500: "#228B22", // forest-green
          600: "#1F7D1F", // darker forest-green
          700: "#1B6F1B", // very dark green
          800: "#186118", // extremely dark green
          900: "#145314", // deepest green
        },
        // Accent Colors - Tribal art warmth, celebration moments
        accent: {
          DEFAULT: "#FF6B35", // orange-red
          50: "#FFF4F1", // very light orange
          100: "#FFE4DB", // light orange
          200: "#FFC9B7", // medium light orange
          300: "#FFAE93", // medium orange
          400: "#FF936F", // bright orange
          500: "#FF6B35", // orange-red
          600: "#E6602F", // darker orange-red
          700: "#CC5529", // very dark orange
          800: "#B34A23", // extremely dark orange
          900: "#993F1D", // deepest orange
        },
        // Background Colors
        background: "#FAF7F2", // handmade-paper
        surface: "#F5F1EB", // subtle-texture
        // Text Colors
        text: {
          primary: "#2C1810", // rich-soil
          secondary: "#5D4E37", // tree-bark
        },
        // Status Colors
        success: {
          DEFAULT: "#32CD32", // lime-green
          50: "#F0FFF0", // very light lime
          100: "#D4F4D4", // light lime
          500: "#32CD32", // lime-green
          600: "#2DB82D", // darker lime
          700: "#28A328", // very dark lime
        },
        warning: {
          DEFAULT: "#DAA520", // goldenrod
          50: "#FEFCF0", // very light gold
          100: "#FDF5D4", // light gold
          500: "#DAA520", // goldenrod
          600: "#C4941D", // darker goldenrod
          700: "#AE831A", // very dark gold
        },
        error: {
          DEFAULT: "#CD5C5C", // indian-red
          50: "#FDF2F2", // very light red
          100: "#F8D7D7", // light red
          500: "#CD5C5C", // indian-red
          600: "#B85252", // darker indian-red
          700: "#A34848", // very dark red
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
      },
      boxShadow: {
        'natural': '0 4px 12px rgba(139, 69, 19, 0.1)',
      },
      transitionTimingFunction: {
        'natural': 'ease-out',
      },
      transitionDuration: {
        'natural': '300ms',
      },
      borderColor: {
        'gentle': 'rgba(93, 78, 55, 0.2)',
      },
    },
  },
  plugins: [],
}