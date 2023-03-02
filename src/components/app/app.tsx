import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Posts } from '../../pages/posts/posts';
import { Layout } from '../layout/layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Posts />}></Route>
          {/*<Route path={'articles/'} element={<Posts />}>*/}
          {/*  <Route path={''} element={<Article />} />*/}
          {/*</Route>*/}
          {/*<Route path={'create-article'} element={<CreateArticle />} />*/}
          {/*<Route path={'edit-article'} element={<EditArticle />} />*/}
          {/*<Route path={'profile'} element={<Profile />} />*/}
          {/*<Route path={'sign-in'} element={<SignIn />} />*/}
          {/*<Route path={'sign-up'} element={<SignUp />} />*/}
        </Route>
      </Routes>
    </>
  );
};
