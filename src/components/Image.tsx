import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';

import { ImageType } from '../types'; 

import blackberry from '../assets/coffee-bag-blackberry.svg'
import blueberry from '../assets/coffee-bag-blueberry.svg'
import cantaloupe from '../assets/coffee-bag-cantaloupe.svg'
import chiliMango from '../assets/coffee-bay-chili-mango.svg'
import cinnamon from '../assets/coffee-bag-cinnamon.svg'
import greenApple from '../assets/coffee-bag-green-apple.svg'
import sourLemon from '../assets/coffee-bag-sour-lemon.svg'
import watermelon from '../assets/coffee-bag-watermelon.svg'

const imageTypes = {
  blackberry,
  blueberry,
  cantaloupe,
  chiliMango,
  cinnamon,
  greenApple,
  sourLemon,
  watermelon,
};

export type ImageProps = StyledType & {
  alt: string;
  type: ImageType;
};

const StyledImage = styled('img')<StyledType>({

});

export const Image = createComponent('img')({
  displayName: 'Image',
  Component: ({ type, ...props }: ImageProps, ref, Element) => {
    const imgSrc = imageTypes[type];
    return (
      <StyledImage as={Element} src={imgSrc} ref={ref} {...props} />
    );
  }
});
