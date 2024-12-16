/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      nother: '0.3px',
    },
    maxWidth: {
      '50px': '50px',
      '700px': '700px'
    },
    minWidth: {
      '30px': '30px',
      '40px': '40px',
      '35px': '35px',
    },
    minHeight: {
      '400px': '400px',
    },
    fontSize: {
      half: '18px',
      ten: '0.625rem',
      ssc: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      vs: '0.5rem',
      ll: '1.875rem',
      ql: '2.5rem',
      me: '1.375rem',
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        fontWeight: '700',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '2.5rem',
        fontWeight: '700',
      }],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'full': '100% 100%',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
      'large': '12px',
      '10': '10px',
      '50%': '50%',
      '4': '4px',
    },
    screens: {
      'xxs': '365px',
      // >= @media (min-width: 365px) { ... }
      'xs': '580px',
      // >= @media (min-width: 580px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '991px',
      // => @media (min-width: 991px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      scale: {
        '175': '1.75',
        '6': '0.6',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        'mine': '45px'
      },
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'main-color': '#0F4C5C',
        'extra-gray': '#F5F5F5',
        'gray-bold': '#F4F4F4',
        'gray-light': '#F7F7F7',
        'sala': 'rgba(0,0,0,.6)',
        'bgs':'#3d405b',
        'opositnew': 'rgba(0,0,0,0.6)',
        'textcol': '#aaaaaa',
        'f8': '#f8f8f8',
      },
      spacing: {
        '5px': '5px',
        '10px': '10px',
        '9px': '9px',
        '15px': '15px',
        '1px': '1px',
        '8px': '8px',
        '33px': '33px',
        '20%': '20%',
        '30%': '30%',
        '10%': '10%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '7%': '7%',
        '9%': '9%',
        '12%': '12%',
        '5%': '5%',
        '1%': '1%',
        '8%': '8%',
        '65%': '65%',
        '4rem': '4rem',
        '5rem': '5rem',
        '6rem': '6rem',
        '3%': '3%',
        '94%': '94%',
        '13%': '13%',
        '25%': '25%',
        '35%': '35%',
        '45%': '45%',
        '59%': '59%',
        '67%': '67%',
        '75%': '75%',
        '85%': '85%',
        '89%': '89%',
        '94%': '94%',
        '98%': '98%',
        '22px': '22px',
        '30px': '30px',
        '15%': '15%',
        '55%': '55%',
        '17%': '17%',
        '49%': '49%',
        '50px': '50px',
        '60px': '60px',
        '30px': '30px',
        '20px': '20px',
        '26px': '26px',
        '13px': '13px',
        '17px': '17px',
        '100vw': '100vw',
        '100vh': '100vh',
        '40px': '40.73px',
        '2%': '2%',
        '23%': '23%',
        '95px': '95px',
        '2.5%': '2.5%',
        '31.5%': '31.5%',
        '80px': '80px',
        '25px': '25px',
        '6px': '6px',
        '32px': '32px',
        '38.3%': '38.3%',
        '2px': '2px',
        '83%': '83%',
        '11%': '11%',
        '150%': '150%',
        '50vh': '50vh',
        '50vw': '50vw',
        '22.222%': '22.222%',
        '45px': '45px',
        '57%': '57%',
        '42%': '42%',
        '10.5rem': '10.5rem',
        '9rem': '9rem',
        '8rem': '8rem',
        '52%': '52%',
        '48%': '48%',
        '54%': '54%',
        '3px': '3px',
        '18%': '18%',
        '95%': '95%',
        '133px': '133px',
      },
      strokeWidth: {
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '15': '15px',
        '30': '30px',
      },
      zIndex: {
        '100': '100',
        '1000': '1000',
      },
    },
  },
  plugins: [],
}