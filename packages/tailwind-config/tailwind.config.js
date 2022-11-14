module.exports = {
  plugins: [require('daisyui')],
  content: [
    `../apps/**/app/**/*.{js,ts,jsx,tsx}`,
    `app/**/*.{js,ts,jsx,tsx}`,
    `../components/**/app/**/*.{js,ts,jsx,tsx}`,
    `components/**/*.{js,ts,jsx,tsx}`,
    '../../packages/**/src/*.{js,ts,jsx,tsx}',
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
