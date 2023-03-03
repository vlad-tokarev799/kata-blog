import { PostResponse, PostsResponse } from '../../types/post';
import { getResource } from '../core';
import { GetArticle, GetArticles } from './types';

export const getArticles: GetArticles = async (limit, offset) => {
  const response = await getResource<PostsResponse>(`/articles?limit=${limit}&offset=${offset}`, {});

  return response.data;
};

export const getArticle: GetArticle = async (slug) => {
  const response = await getResource<PostResponse>(`/articles/${slug}`, {});

  return response.data;
};
