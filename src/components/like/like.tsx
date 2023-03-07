import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import like from './like.svg';
import { StyledLike } from './like.styles';
import { useFavorited } from '../../api/favorited/hooks';

export type LikeProps = {
  favorited: boolean;
  favoritesCount: number;
  slug: string;
};

export const Like = (props: LikeProps) => {
  const { favorited, favoritesCount, slug } = props;

  const [liked, setLiked] = useState<boolean>(false);
  const [add, remove] = useFavorited(slug);

  useEffect(() => {
    setLiked(favorited);
  }, [favorited]);

  const likeHandler = () => {
    liked ? remove() : add();
  };

  return (
    <StyledLike onClick={likeHandler} active={liked}>
      <ReactSVG src={like} wrapper={'span'} />
      <span className="likes-count">{favoritesCount}</span>
    </StyledLike>
  );
};
