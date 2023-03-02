import React from 'react';

import { PostStyles, StyledPost, StyledPostHeader } from './post.styles';
import { PostType } from '../../types/post';

type Props = PostStyles & PostType;
export const Post = (props: Props) => {
  const { title } = props;

  return (
    <StyledPost>
      <StyledPostHeader>
        <h3>{title}</h3>
      </StyledPostHeader>
    </StyledPost>
  );
};
