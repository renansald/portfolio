import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-color': '#fcfcfc',
        'primary-color': '#4756df',
        'secondary-color': '#ff7235',
        'primary-shadow': '#8b8eaf',
        'secondary-shadow': '#a17a69',
      },
      boxShadow: {
        '3x5': '0 3px 5px rgba(0, 0, 0, 0.1)',
        'about': '0 2px 15px 2px #8b8eaf',
        'skill-card': '0 3px 10px #a17a69',
        'footer': '0 0 16px #8b8eaf',
      },
    },
  },
  plugins: [],
}
export default config
