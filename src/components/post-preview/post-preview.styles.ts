import styled from 'styled-components';

export type PostPreviewStyles = object;

export const StyledPostPreview = styled.div<PostPreviewStyles>`
  .post-description {
    margin-top: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .post-btns {
      display: flex;
      gap: 12px;
    }
  }
`;
