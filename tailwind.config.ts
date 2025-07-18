import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'gradient-gold': 'linear-gradient(135deg, hsl(45, 95%, 68%) 0%, hsl(45, 80%, 55%) 100%)',
  			'gradient-black-gold': 'linear-gradient(135deg, hsl(0, 0%, 8%) 0%, hsl(45, 95%, 68%) 100%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  			},
  			// Impetus Brand Colors
  			gold: {
  				50: 'hsl(45, 100%, 95%)',
  				100: 'hsl(45, 100%, 88%)',
  				200: 'hsl(45, 95%, 80%)',
  				300: 'hsl(45, 95%, 72%)',
  				400: 'hsl(45, 95%, 68%)', // Primary gold
  				500: 'hsl(45, 80%, 55%)',
  				600: 'hsl(45, 70%, 45%)',
  				700: 'hsl(45, 60%, 35%)',
  				800: 'hsl(45, 50%, 25%)',
  				900: 'hsl(45, 40%, 15%)'
  			},
  			'impetus-black': 'hsl(0, 0%, 8%)',
  			'impetus-gray': {
  				50: 'hsl(0, 0%, 98%)',
  				100: 'hsl(0, 0%, 95%)',
  				200: 'hsl(0, 0%, 90%)',
  				300: 'hsl(0, 0%, 80%)',
  				400: 'hsl(0, 0%, 60%)',
  				500: 'hsl(0, 0%, 40%)',
  				600: 'hsl(0, 0%, 25%)',
  				700: 'hsl(0, 0%, 15%)',
  				800: 'hsl(0, 0%, 10%)',
  				900: 'hsl(0, 0%, 5%)'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
