import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ArticlesPage } from '../../pages/articles-page/articles-page';
import { Layout } from '../layout/layout';
import { Article } from '../../pages/article/article';
import { SignUp } from '../../pages/sign-up/sign-up';
import { SignIn } from '../../pages/sign-in/sign-in';
import { Profile } from '../../pages/profile/profile';
import { CreateArticle } from '../../pages/create-article/create-article';
import { EditArticle } from '../../pages/edit-article/edit-article';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<ArticlesPage />}></Route>
          <Route path={'articles/'} element={<ArticlesPage />}></Route>
          <Route path={'articles/:id'} element={<Article />}></Route>
          <Route path={'articles/:id/edit'} element={<EditArticle />}></Route>
          <Route path={'new-article'} element={<CreateArticle />} />
          <Route path={'profile'} element={<Profile />} />
          <Route path={'sign-in'} element={<SignIn />} />
          <Route path={'sign-up'} element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};
