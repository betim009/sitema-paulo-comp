import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./sobre.css";

function Sobre() {
  return (
    <>
      <Header />
      <Container className="sobre-container mt-4">
        <div className="sobre-header text-center mb-5">
          <h1 className="sobre-title">Sobre o Sistema</h1>
          <p className="sobre-subtitle">
            Sistema completo de gerenciamento de produtos e serviços de tecnologia
          </p>
        </div>

        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="sobre-card">
              <Card.Body>
                <h2 className="card-title">Nossa Missão</h2>
                <p className="card-text">
                  Fornecer soluções tecnológicas de qualidade, oferecendo produtos e serviços 
                  de manutenção que atendam às necessidades dos nossos clientes com excelência 
                  e confiabilidade.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="feature-card">
              <Card.Body>
                <div className="feature-icon">🛍️</div>
                <h3 className="feature-title">Produtos de Tecnologia</h3>
                <p className="feature-text">
                  Oferecemos uma ampla variedade de produtos de tecnologia, desde notebooks 
                  e smartphones até acessórios e periféricos de alta qualidade.
                </p>
                <Badge className="badge-feature">Variedade</Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="feature-card">
              <Card.Body>
                <div className="feature-icon">🔧</div>
                <h3 className="feature-title">Serviços de Manutenção</h3>
                <p className="feature-text">
                  Serviços especializados em manutenção de computadores, formatação, 
                  remoção de vírus e upgrade de hardware.
                </p>
                <Badge className="badge-feature">Especializado</Badge>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card className="info-card">
              <Card.Body>
                <h2 className="card-title">Funcionalidades do Sistema</h2>
                <Row>
                  <Col md={6}>
                    <div className="funcionalidade-item">
                      <h4>📱 Interface Responsiva</h4>
                      <p>Design adaptável para diferentes dispositivos e tamanhos de tela.</p>
                    </div>
                    <div className="funcionalidade-item">
                      <h4>🔍 Busca Inteligente</h4>
                      <p>Sistema de busca que filtra produtos e serviços em tempo real.</p>
                    </div>
                    <div className="funcionalidade-item">
                      <h4>🛒 Carrinho de Compras</h4>
                      <p>Gerenciamento completo de itens no carrinho com persistência local.</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="funcionalidade-item">
                      <h4>📊 Organização por Categorias</h4>
                      <p>Produtos e serviços organizados em categorias para fácil navegação.</p>
                    </div>
                    <div className="funcionalidade-item">
                      <h4>👤 Sistema de Login</h4>
                      <p>Autenticação de usuários com controle de sessão.</p>
                    </div>
                    <div className="funcionalidade-item">
                      <h4>💳 Checkout Integrado</h4>
                      <p>Processo de finalização de compra simplificado e intuitivo.</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="contact-icon">📧</div>
                <h4>Contato</h4>
                <p>contato@sistema.com</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="contact-icon">📞</div>
                <h4>Telefone</h4>
                <p>(11) 99999-9999</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="contact-icon">📍</div>
                <h4>Endereço</h4>
                <p>São Paulo, SP</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Sobre;