import React from 'react';
import { LinkButton } from '../link-button/link-button';
import { StyledHeader } from './header.styles';
import { Logo } from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeUserData, selectIsAuth, selectUserData } from '../../store/slices/user-slice';
import { Profile } from '../profile/profile';
import { Button } from '../button/button';

export const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const { username, avatar } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(removeUserData());
  };

  return (
    <StyledHeader>
      <Logo />
      {isAuth ? (
        <div className={'auth-btns'}>
          <LinkButton to={'/new-article'} label={'Create article'} small success />
          <Profile author={{ username, image: avatar }} to={'/profile'} />
          <Button onClick={onLogout} bordered>
            Log out
          </Button>
        </div>
      ) : (
        <div className="btns">
          <LinkButton to={'/sign-in'} label={'Sign in'} />
          <LinkButton to={'/sign-up'} label={'Sign up'} success />
        </div>
      )}
    </StyledHeader>
  );
};
