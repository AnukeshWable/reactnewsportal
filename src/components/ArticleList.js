import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../store/articlesSlice';
import Article from './Article';
import './ArticleList.css';

const categories = [
  { label: 'General', value: 'general' },
  { label: 'Business', value: 'business' },
  { label: 'Technology', value: 'technology' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Health', value: 'health' },
  { label: 'Science', value: 'science' },
  { label: 'Sports', value: 'sports' }
];

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const articleStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    dispatch(fetchArticles(selectedCategory));
  }, [selectedCategory, dispatch]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  let content;

  if (articleStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (articleStatus === 'succeeded') {
    content = articles.map((article) => (
      <Article key={article.title} article={article} />
    ));
  } else if (articleStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="article-list">
      <div className="filter">
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <div className="articles">
        {content}
      </div>
    </div>
  );
};

export default ArticleList;
