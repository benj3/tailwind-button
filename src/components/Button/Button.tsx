import * as React from 'react';
import { ActionProps } from './types';
import { CircleCheck } from '../../images/icons/CircleCheck';
import { CircleLoading } from '../../images/icons/CircleLoading';

const Button: React.FC<ActionProps> = (props) => {
  const { variant = "primary", outline = false, disabled, children, loading, icon, className } = props;
  const outlineClass = outline ? `button--outline` : '';
  const disabledClass = disabled ? `button--disabled` : '';
  const allClassNames = `button button--${variant} ${outlineClass} ${disabledClass} transition ${className || ''}`;

  if (props.as === 'anchor') {
    const { as, ...linkProps } = props;

    return (
      <a className={allClassNames} {...linkProps}>
        {icon && <CircleCheck />}
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = props;

  return (
    <button className={allClassNames} {...buttonProps}>
      {loading ? <CircleLoading /> : (
        <>
          {icon && <CircleCheck />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;