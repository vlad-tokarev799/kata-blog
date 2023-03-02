import React from 'react';
import { LinkButton } from '../link-button/link-button';
import { StyledHeader } from './header.styles';
import { Logo } from '../logo/logo';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <div className="btns">
        <LinkButton to={'sign-in'} label={'Sign in'} />
        <LinkButton to={'sign-up'} label={'Sign up'} success />
      </div>
    </StyledHeader>
  );
};
