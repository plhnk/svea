export default {
  breakpoints: ['40rem', '60rem', '80rem'],
  buttons: {
    invisible: {
      cursor: 'pointer',
      display: 'block',
      background: 'transparent',
      px: 0,
      py: 0,
      m: 0,
      outline: 'none',
      '&:focus': {
        boxShadow: (theme) =>
          '0px 0px 4px 2px ' +
          `${theme.colors.secondary}` +
          ', 0px 0px 2px 4px #FFFFFF;',
      },
    },
  },
  colors: {
    // Basic Theme Colors
    text: '#F1E8DC',
    headline: '#FCF9E8',
    textSecondary: '#C7C2AD',
    background: '#22201D',
    primary: '#D05F40',
    secondary: '#CA9C42',
    accent: '#D05F40',
    muted: '#7b736e',
    modes: {
      light: {
        text: '#22201D',
        headline: '#130902',
        textSecondary: '#68472F',
        background: '#F1E8DC',
        // background: '#F9F0CA',
        primary: '#CA9C42',
        muted: '#878382',
      },
    },
  },
  fonts: {
    display: 'Wisteria, serif',
    heading: '"Work Sans", sans-serif',
    body: '"Work Sans", sans-serif',
  },
  fontSizes: [
    '.8rem',
    '.9rem',
    '1rem',
    '1.2rem',
    '1.8rem',
    '2.2rem',
    '3rem',
    '5rem',
  ],
  sizes: [
    '.8rem',
    '.9rem',
    '1rem',
    '1.2rem',
    '1.8rem',
    '2.2rem',
    '3rem',
    '5rem',
  ],
  lineHeights: {
    body: 1.4,
    heading: 1.1,
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.1em',
  },
  links: {
    nice: {
      color: 'primary',
    },
  },
  text: {
    heading: {
      color: 'text',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
    },
    display: {
      color: 'headline',
      fontFamily: 'display',
      fontWeight: 'initial',
      lineHeight: 0.84,
      letterSpacing: 'initial',
      fontSize: ['40vw', '10vw', '21.8vw'],
      //   fontSize: ['6rem', '12rem', '10vw'],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: 'caps',
    },
    hotkey: {
      variant: 'styles.codeBase',
      lineHeight: '1.5',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      color: 'mainL4',
      py: 0,
      mx: '.2ch',
      bg: 'white',
    },
    code: {},
  },
  space: [0, '.4rem', '1rem', '2rem', '3rem', '8rem', '16rem', '32rem'],
  alignments: {
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  animations: {
    core: {
      transition: 'transform 0.4s',
      opacity: 0,
      willChange: 'transform, opacity',
    },
    toTop: {
      animation: 'toTop 0.5s cubic-bezier(0.5, 1.35, 0.5, 1) forwards',
      transform: 'translateY(5rem)',
      variant: 'animations.core',
      '@keyframes toTop': {
        '0%': {
          transform: 'translateY(5rem)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: 1,
        },
      },
    },
    toRight: {
      animation: 'toRight 0.5s cubic-bezier(0.5, 1.35, 0.5, 1) forwards',
      transform: 'translateX(-30%)',
      variant: 'animations.core',
      '@keyframes toRight': {
        '0%': {
          transform: 'translateX(-30%)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: 1,
        },
      },
    },
    scaleIn: {
      animation: 'scaleIn 0.3s cubic-bezier(0.5, 1.35, 0.5, 1) forwards',
      transform: 'scale(.5)',
      variant: 'animations.core',
      '@keyframes scaleIn': {
        '0%': {
          transform: 'scale(.5)',
          opacity: 0,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 1,
        },
      },
    },
    opacityIn: {
      animation: 'opacityIn 0.5s ease-in-out forwards',
      variant: 'animations.core',
      '@keyframes opacityIn': {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
    a: {
      variant: 'links.nice',
    },
  },
};
