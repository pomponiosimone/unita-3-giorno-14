import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";

interface IArticle {
  id: string;
  title: string;
  summary: string;
  published_at: string;
  url: string;
  image_url:string;
}

const listArticle = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");

      if (resp.ok) {
        const data = await resp.json();
      
        const arrOfArticles = data.results;
        setArticles(arrOfArticles);
      }
    } catch (error) {
      console.error('Errore nel recupero degli articoli:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={6}>
          <h2>Articoli</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map(article => (
          <SingleArticle key={article.id} article={article} />
        ))}
      </Row>
    </Container>
  );
};

export default listArticle;