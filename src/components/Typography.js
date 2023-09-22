/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Global } from '@emotion/core';

import React from 'react';
import wisteria from './../fonts/Wisteria.woff';
import workSans from './../fonts/WorkSans-VariableFont_wght.ttf';

export default function Typography() {
  const component = (
    <>
      <Global
        styles={(theme) => ({
          html: {
            fontSize: '16px',
          },
          '::selection': {
            backgroundColor: theme.colors.primary,
            color: 'white',
          },
        })}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'Wisteria',
            src: `url(${wisteria}) format('woff'), local('Times')`,
            fontDisplay: 'swap',
          },
        }}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'Work Sans',
            src: `url(${workSans}) format('woff'), local('Helvetica')`,
            fontWeight: '400, 800',
            fontDisplay: 'swap',
          },
        }}
      />
    </>
  );
  return component;
}
