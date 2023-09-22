/** @jsx jsx */

import { jsx, Heading } from 'theme-ui';

export default function Header({ content, ...props }) {
  const headline = content.map((i, index) => (
    <span
      sx={{
        '&:nth-of-type(1)': { ml: '.32ch' },
        transform: ['translateX(-.3ch)', 'translateX(0)'],
        display: 'block',
      }}
      key={index}
    >
      {i.split('').map(function (char, index) {
        return (
          <span
            aria-hidden="true"
            key={index}
            sx={{
              variant: 'animations.opacityIn',
              animationDelay: `${0.4 + index / 10 + 's'}`,
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  ));
  return (
    <Heading
      as="h1"
      sx={{
        variant: 'text.display',
        textShadow: (theme) => `${'.2em .2em 1em ' + theme.colors.background}`,
      }}
      {...props}
    >
      {headline}
    </Heading>
  );
}
