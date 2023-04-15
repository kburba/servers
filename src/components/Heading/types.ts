import { ComponentProps, PropsWithChildren } from 'react';

import { HeadingSize } from './enums';

export type HeadingAdditionalProps = {
  size?: HeadingSize;
  noMargin?: boolean;
};
export type HeadingProps = PropsWithChildren<ComponentProps<'h1'>> &
  HeadingAdditionalProps;
