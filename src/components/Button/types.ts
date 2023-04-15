import { PropsWithChildren } from 'react';

import { ButtonSize } from './enums';

export type ButtonAdditionalProps = { size?: ButtonSize; isLoading?: boolean };

export type ButtonProps = PropsWithChildren<
  React.ComponentProps<'button'> & ButtonAdditionalProps
>;
