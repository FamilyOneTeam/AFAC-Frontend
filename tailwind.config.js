/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        yellowLight: {
          DEFAULT: "#fff4e9",
        },
        yellowLightHover: {
          DEFAULT: "#feeede",
        },
        yellowLightActive: {
          DEFAULT: "#fdddbb",
        },
        yellowNormal: {
          DEFAULT: "#fa9023",
        },
        yellowNormalHover: {
          DEFAULT: "#e18220",
        },
        yellowNormalActive: {
          DEFAULT: "#c8731c",
        },
        yellowDark: {
          DEFAULT: "#bc6c1a",
        },
        yellowDarkHover: {
          DEFAULT: "#965615",
        },
        yellowDarkActive: {
          DEFAULT: "#704110",
        },
        yellowDarker: {
          DEFAULT: "#58320c",
        },
        orangeLight: {
          DEFAULT: "#feedea",
        },
        orangeLightHover: {
          DEFAULT: "#fde4df",
        },
        orangeLightActive: {
          DEFAULT: "#fcc8bc",
        },
        orangeNormal: {
          DEFAULT: "#f44e28",
        },
        orangeNormalHover: {
          DEFAULT: "#dc4624",
        },
        orangeNormalActive: {
          DEFAULT: "#c33e20",
        },
        orangeDark: {
          DEFAULT: "#b73b1e",
        },
        orangeDarkHover: {
          DEFAULT: "#922f18",
        },
        orangeDarkActive: {
          DEFAULT: "#6e2312",
        },
        orangeDarker: {
          DEFAULT: "#551b0e",
        },
        greenLight: {
          DEFAULT: "#f3f9ec",
        },
        greenLightHover: {
          DEFAULT: "#edf6e3",
        },
        greenLightActive: {
          DEFAULT: "#dbedc4",
        },
        greenNormal: {
          DEFAULT: "#8ac441",
        },
        greenNormalHover: {
          DEFAULT: "#7cb03b",
        },
        greenNormalActive: {
          DEFAULT: "#6e9d34",
        },
        greenDark: {
          DEFAULT: "#689331",
        },
        greenDarkHover: {
          DEFAULT: "#537627",
        },
        greenDarkActive: {
          DEFAULT: "#3e581d",
        },
        greenDarker: {
          DEFAULT: "#304517",
        },
        redLight: {
          DEFAULT: "#f9e8ea",
        },
        redLightHover: {
          DEFAULT: "#f6dde0",
        },
        redLightActive: {
          DEFAULT: "#ecb9be",
        },
        redNormal: {
          DEFAULT: "#c31c2d",
        },
        redNormalHover: {
          DEFAULT: "#b01929",
        },
        redNormalActive: {
          DEFAULT: "#9c1624",
        },
        redDark: {
          DEFAULT: "#921522",
        },
        redDarkHover: {
          DEFAULT: "#75111b",
        },
        redDarkActive: {
          DEFAULT: "#580d14",
        },
        redDarker: {
          DEFAULT: "#44a10",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
