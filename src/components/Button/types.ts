import * as React from 'react';

interface BaseProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  outline?: boolean;
  icon?: boolean;
  className?: string;
  loading?: boolean;
}

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' };
type AnchorProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'anchor' };

export type ActionProps = ButtonProps | AnchorProps;
