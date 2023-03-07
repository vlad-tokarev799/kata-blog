import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../button/button';
import { ButtonStyles } from '../button/button.styles';

type Props = ButtonStyles & {
  to: string;
  label: string;
};

export const LinkButton = (props: Props) => {
  const { to, label, ...otherProps } = props;

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button {...otherProps}>{label}</Button>
    </Link>
  );
};
