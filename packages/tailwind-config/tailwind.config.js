module.exports = {
  plugins: [require('daisyui')],
  content: [
    `pages/**/*.{js,ts,jsx,tsx}`,
    `components/**/*.{js,ts,jsx,tsx}`,
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#b097e5',
          secondary: '#f9b8bc',
          accent: '#c46938',
          neutral: '#1D2635',
          'base-100': '#2A3241',
          info: '#7EB1E7',
          success: '#0E7161',
          warning: '#F3A639',
          error: '#F86D86',
        },
      },
    ],
  },
}
