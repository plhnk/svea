/** @jsx jsx */

import { jsx, Box, useColorMode } from 'theme-ui';
import { useState } from 'react';
import Crown from './Crown';
import Img from 'gatsby-image';

export default function Hero({ imageArray, text, ...props }) {
  const [mode, setMode] = useColorMode();

  const darkImages = imageArray[0].dark;

  const lightImages = imageArray[1].light;

  const currentImages = mode === 'light' ? lightImages : darkImages;

  const randomNo = Math.floor(Math.random() * currentImages.length);

  // //https://stackoverflow.com/questions/26944987/show-next-previous-item-of-an-array
  const [initialPic, setPic] = useState(randomNo);

  const imagePlaceholder = currentImages[initialPic];

  const image = (
    <Img
      sx={{
        backgroundColor: `${imagePlaceholder.color}`,
        maxHeight: ['80vh', null, '67vh'],
        height: ['80vh', null, '67vh'],
        boxShadow: `${'0 4em 8em -2em ' + imagePlaceholder.color}`,
        variant: 'animations.toRight',
      }}
      fluid={imagePlaceholder.image}
    />
  );

  return (
    <Box
      sx={{
        position: 'relative',
      }}
      {...props}
    >
      {image}
      <Crown
        onClick={() =>
          setPic(initialPic + 1 > currentImages.length - 1 ? 0 : initialPic + 1)
        }
        sx={{
          position: 'absolute',
          right: '-3em',
          top: 'calc(50% - 3em)',
          height: '6em',
          width: '6em',
          zIndex: 99,
          cursor: 'pointer',
          transition:
            'color .2s ease-in-out, transform .2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            transform: 'scale(1.2) rotate(-15deg)',
            color: 'accent',
            transition:
              'color .2s ease-in-out, transform .2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          },
          '&:active > #crown': {
            animation: 'crownbeat .8s infinite',
            '@keyframes crownbeat': {
              '0%': {
                transform: 'scale( .75 )',
              },
              '20%': {
                transform: 'scale( 1 )',
              },
              '40%': {
                transform: 'scale( .75 )',
              },
              '60%': {
                transform: 'scale( 1 )',
              },
              '80%': {
                transform: 'scale( .75 )',
              },
              '100%': {
                transform: 'scale( .75 )',
              },
            },
          },
          variant: 'animations.scaleIn',
          animationDelay: '.7s',
        }}
        content={text}
      />
    </Box>
  );
}
