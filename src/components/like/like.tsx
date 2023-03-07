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
  const [count, setCount] = useState<number>(0);
  const [add, remove] = useFavorited(slug);

  useEffect(() => {
    setLiked(favorited);
    setCount(favoritesCount);
  }, [favorited, favoritesCount]);

  const likeHandler = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
      remove();
    } else {
      setLiked(true);
      setCount(count + 1);
      add();
    }
  };

  return (
    <StyledLike onClick={likeHandler} active={liked}>
      <ReactSVG src={like} wrapper={'span'} />
      <span className="likes-count">{count}</span>
    </StyledLike>
  );
};
