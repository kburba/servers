import { PropsWithChildren } from 'react';

import { ButtonSize } from './enums';

export type ButtonAdditionalProps = {
  size?: ButtonSize;
  isLoading?: boolean;
  testId?: string;
};

export type ButtonProps = PropsWithChildren<
  React.ComponentProps<'button'> & ButtonAdditionalProps
>;
