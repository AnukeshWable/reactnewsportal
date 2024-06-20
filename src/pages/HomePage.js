import React from 'react';
import ArticleList from '../components/ArticleList';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">News Articles</h1>
      <h5>Made by Anukesh Wable</h5>
      <ArticleList />
    </div>
  );
};

export default HomePage;
