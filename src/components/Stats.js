/** @jsx jsx */

import { jsx, Text, Box, Link, IconButton } from 'theme-ui';

export default function Stats({ stats, ...props }) {
  const newArray = stats.reduce(function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
  const statArray = newArray.map((i, index) => (
    <Text
      as="p"
      sx={{
        lineHeight: 1.5,
        variant: 'animations.toRight',
        animationDelay: `${0.5 + index / 5 + 's'}`,
      }}
      key={index}
    >
      <Text as="strong" sx={{ fontWeight: 'body' }}>
        {i[0]}{' '}
      </Text>
      <Text as="span" sx={{ color: 'muted' }}>
        {i[1]}
      </Text>
    </Text>
  ));
  return (
    <Box {...props}>
      {statArray}
      <Link
        target="_blank"
        rel={'noopener noreferrer'}
        sx={{
          position: 'absolute',
          bottom: '-3rem',
          display: 'flex',
          alignItems: 'center',
          variant: 'animations.opacityIn',
          animationDelay: '1s',
        }}
        href="http://eepurl.com/dJFMOM"
      >
        Want a magnet?{' '}
        <IconButton name='External Link'>
          <svg
            sx={{
              fill: 'currentColor',
              opacity: 0.4,
              height: '1.3em',
              width: '1.3em',
            }}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 2h1.5V.5H18V2zm0 16v1.5h1.5V18H18zM2 18H.5v1.5H2V18zM2 2V.5H.5V2H2zm9.333 1.5H18v-3h-6.667v3zM16.5 2v6.667h3V2h-3zm.44-1.06l-11 11 2.12 2.12 11-11L16.94.94zm-.44 10.393V18h3v-6.667h-3zM18 16.5H2v3h16v-3zM3.5 18V2h-3v16h3zM2 3.5h6.667v-3H2v3z" />
          </svg>
        </IconButton>
      </Link>
    </Box>
  );
}
