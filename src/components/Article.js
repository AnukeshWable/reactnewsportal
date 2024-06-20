import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';
const Article = ({ article }) => (
  <div className="article">
    <img src={article.image} alt={article.title} />
    <h2>{article.title}</h2>
    <p>{article.description}</p>
    <Link to={`/article/${encodeURIComponent(article.title)}`}>Read more</Link>
  </div>
);

export default Article;
