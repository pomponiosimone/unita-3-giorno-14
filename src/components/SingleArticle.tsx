import React from 'react';
import {Col, Card} from "react-bootstrap"

interface IArticle {
  id: string;
  title: string;
  summary: string;
  published_at: string;
  url: string;
  image_url: string;
}

interface SingleArticleProps {
  article: IArticle;
}


const SingleArticle: React.FC<SingleArticleProps> = ({ article }) => {
    const publishedDate = new Date(article.published_at);

   
    const formattedDate = publishedDate.toLocaleDateString();
  return (
    <Col xs={12} md={3}>
    <Card className="mt-5">
      <Card.Img className="imgDimension" variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title className="text-truncate">{article.title}</Card.Title>
      
        <Card.Text className="line-truncate-3">{article.summary}</Card.Text>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        <p>{formattedDate}</p>
      </Card.Body>
    </Card>
    </Col>
  
  );
};

export default SingleArticle;
