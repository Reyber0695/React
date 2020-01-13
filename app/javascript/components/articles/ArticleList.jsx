import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {addArticle, allArticles} from '../../actions/articles';
import Pagination from '../Pagination';

function ArticleList(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(3);

  useEffect(() => { 
    props.listArticles();
  },[]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = props.articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = pageNumber => setCurrentPage(pageNumber);
                                                                      
                                                                                                
  return (
    <div>
      {
        currentArticles.map((article) => {
          return(
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr/>
            </div>
          );
        })
      }
    <Pagination 
     ArticlesPerPage={articlesPerPage}
     totalArticles={props.articles.length}
     paginate={paginate}
    />
    <Link to="/articles/new" className="btn btn-outline-primary">Create Article</Link> 
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: () => dispatch(allArticles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);