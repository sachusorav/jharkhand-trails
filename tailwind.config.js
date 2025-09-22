module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Forest Authority
        primary: {
          DEFAULT: "#2D5016", // primary-900
          50: "#F4F7F0",
          100: "#E8EFDF",
          200: "#D1DFBF",
          300: "#BACF9F",
          400: "#A3BF7F",
          500: "#8CAF5F",
          600: "#759F3F",
          700: "#5E8F1F",
          800: "#477F0F",
          900: "#2D5016"
        },
        // Secondary Colors - Tribal Earth Connection
        secondary: {
          DEFAULT: "#8B4513", // secondary-900
          50: "#F7F3F0",
          100: "#EFE7E1",
          200: "#DFCFC3",
          300: "#CFB7A5",
          400: "#BF9F87",
          500: "#AF8769",
          600: "#9F6F4B",
          700: "#8F572D",
          800: "#7F3F0F",
          900: "#8B4513"
        },
        // Accent Colors - Cultural Celebration
        accent: {
          DEFAULT: "#FF6B35", // accent-900
          50: "#FFF4F0",
          100: "#FFE9E1",
          200: "#FFD3C3",
          300: "#FFBDA5",
          400: "#FFA787",
          500: "#FF9169",
          600: "#FF7B4B",
          700: "#FF652D",
          800: "#FF4F0F",
          900: "#FF6B35"
        },
        // Background Colors
        background: "#FEFEFE", // Clean canvas
        surface: "#F8F6F3", // Subtle warmth
        
        // Text Colors
        text: {
          primary: "#1A1A1A", // Clear communication
          secondary: "#666666" // Supportive hierarchy
        },
        
        // Status Colors
        success: "#228B22", // forest-green - Positive community impact
        warning: "#DAA520", // goldenrod - Cultural sensitivity alerts
        error: "#CD5C5C", // indian-red - Helpful correction
        
        // Neutral Colors
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717"
        }
      },
      fontFamily: {
        // Headlines - Sophisticated cultural authority
        'display': ['Playfair Display', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        
        // Body - Clean readability for storytelling
        'sans': ['Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        
        // Accents - Cultural storytelling moments
        'accent': ['Crimson Text', 'serif'],
        'crimson': ['Crimson Text', 'serif']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'small': ['0.75rem', { lineHeight: '1.4' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      boxShadow: {
        'card': '0 4px 12px rgba(45, 80, 22, 0.1)',
        'gentle': '0 2px 8px rgba(45, 80, 22, 0.05)',
        'modal': '0 8px 24px rgba(45, 80, 22, 0.15)',
        'cultural': '0 6px 20px rgba(45, 80, 22, 0.12)'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'parallax': 'parallax 0.5s ease-out',
        'cultural-reveal': 'culturalReveal 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        parallax: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        culturalReveal: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms'
      },
      transitionTimingFunction: {
        'cultural': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      backdropBlur: {
        'cultural': '8px'
      },
      borderRadius: {
        'cultural': '12px'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        },
        '.backdrop-blur-cultural': {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(248, 246, 243, 0.9)'
        },
        '.gradient-forest': {
          background: 'linear-gradient(135deg, #759F3F 0%, #2D5016 100%)'
        },
        '.gradient-earth': {
          background: 'linear-gradient(135deg, #9F6F4B 0%, #8B4513 100%)'
        },
        '.gradient-celebration': {
          background: 'linear-gradient(135deg, #FF9169 0%, #FF652D 100%)'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}