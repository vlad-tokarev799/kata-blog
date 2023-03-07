import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ArticlesPage } from '../../pages/articles-page/articles-page';
import { Layout } from '../layout/layout';
import { Article } from '../../pages/article/article';
import { SignUpPage } from '../../pages/sign-up-page/sign-up-page';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import { ProfilePage } from '../../pages/profile-page/profile-page';
import { CreateArticlePage } from '../../pages/create-article-page/create-article-page';
import { EditArticlePage } from '../../pages/edit-article-page/edit-article-page';
import { ProtectedRoute } from '../protect-route/protected-route';
import { useAppSelector } from '../../store/hooks';
import { selectIsAuth } from '../../store/slices/user-slice';

export const App = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<ArticlesPage />}></Route>
          <Route path={'articles/'} element={<ArticlesPage />}></Route>
          <Route path={'articles/:id'} element={<Article />}></Route>
          <Route
            path={'articles/:id/edit'}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <EditArticlePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={'new-article'}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <CreateArticlePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={'profile'}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={'sign-in'}
            element={
              <ProtectedRoute isAllowed={!isAuth} redirectPath={'/'}>
                <SignInPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={'sign-up'}
            element={
              <ProtectedRoute isAllowed={!isAuth} redirectPath={'/'}>
                <SignUpPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
