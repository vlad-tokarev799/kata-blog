import React from 'react';
import { PostHeader } from './post-header/post-header';
import { Paragraph } from '../../typography/paragraph/paragraph';
import { PostPreviewStyles, StyledPostPreview } from './post-preview.styles';
import { PostType } from '../../types/post';
import { LinkButton } from '../link-button/link-button';
import { Button } from '../button/button';
import { Popconfirm } from 'antd';

type Props = PostPreviewStyles &
  PostType & {
    postControl?: boolean;
    onDelete?: any;
  };

export const PostPreview = (props: Props) => {
  const { title, favorited, favoritesCount, tagList, author, createdAt, description, slug, postControl, onDelete } =
    props;

  return (
    <StyledPostPreview>
      <PostHeader
        titleContent={title}
        favorited={favorited}
        favoritesCount={favoritesCount}
        tagList={tagList}
        author={author}
        createdAt={createdAt}
        slug={slug}
      />
      <div className="post-description">
        <Paragraph>{description}</Paragraph>
        {postControl && (
          <div className={'post-btns'}>
            <Popconfirm
              placement="rightTop"
              title={'Are you sure to delete this article?'}
              onConfirm={onDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button small error>
                Delete
              </Button>
            </Popconfirm>
            <LinkButton to={'edit'} label={'Edit'} success small />
          </div>
        )}
      </div>
    </StyledPostPreview>
  );
};
