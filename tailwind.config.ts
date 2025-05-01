import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/globals.css"

  ],
  theme: {
  	extend: {
		boxShadow:{
         'custom-box':'0px 4px 30px rgba(0,0,0,0.05)',
		 'custom-shadow-input':'0px 1px 10px 0px #0000001A',
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			  "custom-black": "#313131",
        "custom-muted": "#757F95",
        "custom-red": "#F05454",
        "custom-gold": "#FBA707",
        "custom-gray": "#313131",
        "rose": {
          900: "#F82BA9",
          800: "#F940B2",
          700: "#F955BA",
          600: "#FA6BC3",
          500: "#FB80CB",
          400: "#FB95D4",
          300: "#FCAADD",
          200: "#FDBFE5",
          100: "#FED5EE",
          50: "#FEEAF6",
          25: "#FEEDF7",
        },
        "custom-blue": {
          900: "#160E4B",
          800: "#2D265D",
          700: "#453E6F",
          600: "#5C5681",
          500: "#757F95",
          400: "#8A86A5",
          300: "#A29FB7",
          200: "#B9B7C9",
          100: "#D0CFDB",
          50: "#E8E7ED",
        },
        "custom-violet": {
          900: "#8C52FF",
          800: "#9763FF",
          700: "#A375FF",
          600: "#AF86FF",
          500: "#BA97FF",
          400: "#C5A8FF",
          300: "#D1BAFF",
          200: "#DDCBFF",
          100: "#E8DCFF",
          50: "#F3EEFF",
        },
        "custom-green": {
          900: "#39D8A3",
          800: "#4DDCAC",
          700: "#61E0B5",
          600: "#74E4BF",
          500: "#88E8C8",
          400: "#9CEBD1",
          300: "#B0EFDA",
          200: "#C4F3E3",
          100: "#D7F7ED",
          50: "#EBFBF6",
        },
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
      container: {
        center: true,
        padding: {
          DEFAULT: "3rem",
        },
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
