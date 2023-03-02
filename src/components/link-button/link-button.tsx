import React from 'react';

import { LinkButtonStyles, StyledLinkButton } from './link-button.styles';

type Props = LinkButtonStyles & {
  to: string;
  label: string;
};

export const LinkButton = (props: Props) => {
  const { to, label, ...otherProps } = props;

  return (
    <>
      <StyledLinkButton to={to} {...otherProps}>
        {label}
      </StyledLinkButton>
    </>
  );
};
