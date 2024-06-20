import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ArticlePage.css'; // Import the CSS file

const ArticlePage = () => {
  const { title } = useParams();
  const articles = useSelector((state) => state.articles.articles);
  const article = articles.find((a) => a.title === decodeURIComponent(title));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-page">
      <h1 className="article-title">{article.title}</h1>
      <img src={article.image} alt={article.title} className="article-image" />
      <div className="article-content">
        <p>{article.description}</p>
        <p>{article.content}</p>
      </div>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-source">
        Read more at {article.source.name}
      </a>
    </div>
  );
};

export default ArticlePage;
