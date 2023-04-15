import { ComponentProps } from 'react';
import { ControllerProps, FieldError, FieldValues } from 'react-hook-form';

export type InputProps<T extends FieldValues> = Pick<
  ControllerProps<T>,
  'control' | 'name'
> &
  ComponentProps<'input'> & {
    label: string;
    error?: FieldError;
    testId?: string;
  };
