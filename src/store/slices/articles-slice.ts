import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PostsResponse, PostType } from '../../types/post';
import { getArticles } from '../../api/articles/articles';

type ArticlesState = {
  posts: PostType[];
  pageSize: number;
  activePage: number;
  articlesCount: number;
};

const initialState: ArticlesState = {
  posts: [],
  pageSize: 5,
  activePage: 1,
  articlesCount: 0,
};

type GetArticleByOffset = (props: { limit: number; offset: number; token?: string }) => Promise<PostsResponse>;
const getArticlesByOffsetCb: GetArticleByOffset = async ({ limit, offset, token }) => {
  return await getArticles(limit, offset, token);
};

export const getArticlesByOffset = createAsyncThunk('articles/getArticlesByPage', getArticlesByOffsetCb);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
    replaceArticle: (state, action: PayloadAction<PostType>) => {
      const newPost = action.payload;

      state.posts = state.posts.map((post) => (post.slug === newPost.slug ? newPost : post));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticlesByOffset.fulfilled, (state, action: PayloadAction<PostsResponse>) => {
      state.posts = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
    });
  },
});

export const { setActivePage, replaceArticle } = articlesSlice.actions;

export const selectArticles = (state: RootState) => state.articles.posts;
export const selectActivePage = (state: RootState) => state.articles.activePage;
export const selectArticlesCount = (state: RootState) => state.articles.articlesCount;
export const selectPageSize = (state: RootState) => state.articles.pageSize;

export const articlesReducer = articlesSlice.reducer;
