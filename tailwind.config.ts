import type { Config } from "tailwindcss"
import {fontFamily} from "tailwindcss/defaultTheme"
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      "2xl": {max: "1400px"},
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",

    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        primaryTransparent: {
          DEFAULT: "var(--primary-transparent)"
        },
        error: {
          DEFAULT: "var(--error)"
        },
        errorTransparent: {
          DEFAULT: "var(--error-transparent)"
        },
        success: {
          DEFAULT: "var(--success)"
        },
        secondary: {
          DEFAULT: "var(--secondary))",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive))",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted))",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent))",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover))",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config