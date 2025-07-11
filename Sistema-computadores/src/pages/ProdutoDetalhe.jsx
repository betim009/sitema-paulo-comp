import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { produtosTecnologia } from "../mocks/produtos";
import { Card, Button, Container, Badge, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";

function ProdutoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtosTecnologia.find((p) => String(p.id) === String(id));

  if (!produto) {
    return (
      <Container className="mt-5 text-center">
        <h2>Produto não encontrado</h2>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container className="home-container mt-4">
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center mb-4 mb-md-0">
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{ maxWidth: "100%", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
            />
          </Col>
          <Col md={6}>
            <Card className="service-card p-3">
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem" }}>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Card.Text>
                  <span className="price">R$ {produto.preco.toFixed(2)}</span> <br />
                  <span className="categoria">Categoria: {produto.categoria}</span>
                </Card.Text>
                {produto.estoque > 0 ? (
                  <Badge className="badge-disponivel mb-2">Em estoque: {produto.estoque}</Badge>
                ) : (
                  <Badge className="badge-indisponivel mb-2">Esgotado</Badge>
                )}
                <div className="mt-3">
                  <Button
                    className="btn-solicitar"
                    disabled={produto.estoque === 0}
                    onClick={() => navigate("/checkout")}
                  >
                    Comprar agora
                  </Button>
                  <Button
                    variant="secondary"
                    className="ms-2"
                    onClick={() => navigate(-1)}
                  >
                    Voltar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProdutoDetalhe; 