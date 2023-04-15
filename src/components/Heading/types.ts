import { ComponentProps, PropsWithChildren } from 'react';

import { Align, HeadingSize } from './enums';

export type HeadingAdditionalProps = {
  size?: HeadingSize;
  noMargin?: boolean;
  align?: Align;
};
export type HeadingProps = PropsWithChildren<ComponentProps<'h1'>> &
  HeadingAdditionalProps;
