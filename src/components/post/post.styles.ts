import styled from 'styled-components';

export type PostStyles = object;

export const StyledPost = styled.article<PostStyles>`
  background: ${({ theme }) => theme.baseBg};
  border-radius: 5px;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
`;

export const StyledPostHeader = styled.div<PostStyles>`
  display: flex;
  justify-content: space-between;
`;
