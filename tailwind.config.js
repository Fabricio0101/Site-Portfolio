/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1600px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1600px",
		},
		extend: {
			fontSize: {
				title: "4.5rem",
				subtitle: "2.5rem",
				description: "1.5rem",
				min: "1.3rem",
				light: "1rem",
				minlight: "0.8rem",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				"home-pattern": "url('./src/assets/Background.png')",
			},
			colors: {
				border: "hsl(var(--border))", // Utiliza a variável global do border
				borderbutton: "#0061FE", // Cor fixa para botão de borda
				input: "hsl(var(--input))", // Utiliza a variável global do input
				ring: "hsl(var(--ring))", // Utiliza a variável global do ring
				background: "hsl(var(--background))", // Cor de fundo global
				foreground: "hsl(var(--foreground))", // Cor do texto global
				primary: {
					DEFAULT: "hsl(var(--primary))", // Usando a cor primária global #1D1D1D
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))", // Usando a cor secundária global #FFFF
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))", // Usando a cor destrutiva global
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))", // Usando a cor muted global
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))", // Usando a cor de acentuação global
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))", // Usando a cor do popover global
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))", // Usando a cor do card global
					foreground: "hsl(var(--card-foreground))",
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
			dropShadow: {
				sm: "-2px 3px 12px -4px rgba(0,0,0,0.75)",
				md: "-8px 5px 20px -4px rgba(0,0,0,0.75)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
