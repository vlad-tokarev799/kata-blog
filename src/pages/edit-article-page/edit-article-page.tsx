import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleForm } from '../../components/article-form/article-form';
import { FormValues } from '../../components/article-form/validation-data';
import { useArticle } from '../../api/articles/hooks';
import { updateArticle } from '../../api/articles/articles';
import { useAppSelector } from '../../store/hooks';
import { selectToken } from '../../store/slices/user-slice';
import { Alert } from 'antd';
import { StyledEditArticlePage } from './edit-article-page.styles';

export const EditArticlePage = () => {
  const { id } = useParams();
  const article = useArticle(id || '');
  const token = useAppSelector(selectToken);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const defaultValues = useMemo(() => {
    return {
      articleTitle: article?.title,
      description: article?.description,
      text: article?.body,
      tags: article?.tagList.map((tag) => ({ name: tag })),
    };
  }, [article]);

  const onSubmit = async (data: FormValues) => {
    if (id && token) {
      const { articleTitle, description, text, tags } = data;

      await updateArticle(id, token, {
        title: articleTitle,
        body: text,
        tagList: tags.map((tag) => tag.name),
        description,
      });

      setShowSuccess(true);
    }
  };

  return (
    <StyledEditArticlePage>
      <ArticleForm title={'Create new article'} submitHandler={onSubmit} defaultValues={defaultValues} />
      {showSuccess && (
        <div className={'success-message'}>
          <Alert message="Success" description={'Data updated successful'} type="success" showIcon />
        </div>
      )}
    </StyledEditArticlePage>
  );
};
