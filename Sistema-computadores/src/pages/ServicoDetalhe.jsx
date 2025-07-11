import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicosManutencao } from "../mocks/servicos";
import { Card, Button, Container, Badge, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";

function ServicoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const servico = servicosManutencao.find((s) => String(s.id) === String(id));

  if (!servico) {
    return (
      <Container className="mt-5 text-center">
        <h2>Serviço não encontrado</h2>
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
              src={servico.poster}
              alt={servico.nome}
              style={{ maxWidth: "100%", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
            />
          </Col>
          <Col md={6}>
            <Card className="service-card p-3">
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem" }}>{servico.nome}</Card.Title>
                <Card.Text>{servico.descricao}</Card.Text>
                <Card.Text>
                  <span className="price">R$ {servico.preco.toFixed(2)}</span> <br />
                  <span className="duration">Duração: {servico.duracao}</span>
                </Card.Text>
                {servico.disponivel ? (
                  <Badge className="badge-disponivel mb-2">Disponível</Badge>
                ) : (
                  <Badge className="badge-indisponivel mb-2">Indisponível</Badge>
                )}
                <div className="mt-3">
                  <Button
                    className="btn-solicitar"
                    disabled={!servico.disponivel}
                    onClick={() => navigate("/checkout")}
                  >
                    Solicitar agora
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

export default ServicoDetalhe; 