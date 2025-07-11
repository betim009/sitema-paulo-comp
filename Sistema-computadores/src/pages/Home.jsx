import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";
import { servicosManutencao, servicosPorCategoria, getCategoriasServicos } from "../mocks/servicos";
import { produtosTecnologia, produtosPorCategoria, getCategoriasProdutos } from "../mocks/produtos";
import "./home.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [logado, setLogado] = useState(false);
  const [qtdCarrinho, setQtdCarrinho] = useState(0);
  const navigate = useNavigate();
  const query = useQuery();
  const termoBusca = query.get("busca")?.toLowerCase() || "";

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    setLogado(!!usuario);
  }, []);

  // Carrega e atualiza a quantidade de itens no carrinho
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    const total = carrinhoSalvo.reduce((acc, item) => acc + (item.quantidade || 1), 0);
    setQtdCarrinho(total);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setLogado(false);
    navigate("/login");
  };

  // Adiciona o serviço ao carrinho no localStorage (sem duplicar)
  const handleSolicitar = (servico) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const index = carrinhoAtual.findIndex((item) => item.id === servico.id);
    if (index >= 0) {
      // Se já existe, aumenta a quantidade
      carrinhoAtual[index].quantidade = (carrinhoAtual[index].quantidade || 1) + 1;
    } else {
      // Se não existe, adiciona com quantidade 1
      carrinhoAtual.push({ ...servico, quantidade: 1 });
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    
    // Atualiza a quantidade no estado
    const novaQuantidade = carrinhoAtual.reduce((acc, item) => acc + (item.quantidade || 1), 0);
    setQtdCarrinho(novaQuantidade);
    
    navigate("/checkout");
  };

  // Adiciona o produto ao carrinho no localStorage (sem duplicar)
  const handleAdicionarProduto = (produto) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const index = carrinhoAtual.findIndex((item) => item.id === produto.id && item.tipo === "produto");
    if (index >= 0) {
      carrinhoAtual[index].quantidade = (carrinhoAtual[index].quantidade || 1) + 1;
    } else {
      carrinhoAtual.push({ ...produto, quantidade: 1, tipo: "produto" });
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    const novaQuantidade = carrinhoAtual.reduce((acc, item) => acc + (item.quantidade || 1), 0);
    setQtdCarrinho(novaQuantidade);
    navigate("/checkout");
  };

  // Filtra os serviços pelo termo de busca (nome ou descrição)
  const servicosFiltrados = servicosManutencao.filter(
    (servico) =>
      servico.nome.toLowerCase().includes(termoBusca) ||
      servico.descricao.toLowerCase().includes(termoBusca)
  );

  // Filtra os produtos pelo termo de busca (nome ou descrição)
  const produtosFiltrados = produtosTecnologia.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(termoBusca) ||
      produto.descricao.toLowerCase().includes(termoBusca)
  );

  // Renderiza um card de serviço
  const renderServicoCard = (servico) => (
    <Col key={servico.id} sm={12} md={6} lg={4} className="mb-4">
      <Card className="service-card card-clickable" onClick={() => navigate(`/servico/${servico.id}`)} style={{ cursor: 'pointer' }}>
        <Card.Img
          variant="top"
          src={servico.poster}
          alt={servico.nome}
        />
        <Card.Body>
          <Card.Title>{servico.nome}</Card.Title>
          <Card.Text>{servico.descricao}</Card.Text>
          <Card.Text>
            <span className="price">R$ {servico.preco.toFixed(2)}</span> <br />
            <span className="duration">Duração: {servico.duracao}</span>
          </Card.Text>
          {servico.disponivel ? (
            <Badge className="badge-disponivel mb-2">
              Disponível
            </Badge>
          ) : (
            <Badge className="badge-indisponivel mb-2">
              Indisponível
            </Badge>
          )}
          <div>
            <Button
              className="btn-solicitar"
              disabled={!servico.disponivel}
              onClick={e => { e.stopPropagation(); handleSolicitar(servico); }}
            >
              Solicitar serviço
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  // Renderiza um card de produto
  const renderProdutoCard = (produto) => (
    <Col key={produto.id} sm={12} md={6} lg={4} className="mb-4">
      <Card className="service-card card-clickable" onClick={() => navigate(`/produto/${produto.id}`)} style={{ cursor: 'pointer' }}>
        <Card.Img
          variant="top"
          src={produto.imagem}
          alt={produto.nome}
          style={{ height: "220px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
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
          <div>
            <Button
              className="btn-solicitar"
              disabled={produto.estoque === 0}
              onClick={e => { e.stopPropagation(); handleAdicionarProduto(produto); }}
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <>
      <Header hideLogin={logado}>
        {logado && (
          <Button
            className="btn-sair ms-3"
            onClick={handleLogout}
            style={{ float: "right" }}
          >
            Sair
          </Button>
        )}
        {logado && qtdCarrinho > 0 && (
          <Badge 
            className="badge-carrinho ms-2"
          >
            🛒 {qtdCarrinho} itens
          </Badge>
        )}
      </Header>
      
      {/* Seção de Serviços Organizados por Categoria */}
      <Container className="home-container mt-4">
        <h2 className="home-title">Serviços de Manutenção</h2>
        {servicosFiltrados.length === 0 ? (
          <p>Nenhum serviço encontrado.</p>
        ) : (
          <>
            {getCategoriasServicos().map((categoria) => {
              const servicosDaCategoria = servicosPorCategoria[categoria].filter(
                (servico) =>
                  servico.nome.toLowerCase().includes(termoBusca) ||
                  servico.descricao.toLowerCase().includes(termoBusca)
              );
              
              if (servicosDaCategoria.length === 0) return null;
              
              return (
                <div key={categoria} className="mb-5">
                  <h3 className="categoria-title">{categoria}</h3>
                  <Row>
                    {servicosDaCategoria.map(renderServicoCard)}
                  </Row>
                </div>
              );
            })}
          </>
        )}
      </Container>

      {/* Seção de Produtos Organizados por Categoria */}
      <Container className="home-container mt-4">
        <h2 className="home-title">Produtos de Tecnologia</h2>
        {produtosFiltrados.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          <>
            {getCategoriasProdutos().map((categoria) => {
              const produtosDaCategoria = produtosPorCategoria[categoria].filter(
                (produto) =>
                  produto.nome.toLowerCase().includes(termoBusca) ||
                  produto.descricao.toLowerCase().includes(termoBusca)
              );
              
              if (produtosDaCategoria.length === 0) return null;
              
              return (
                <div key={categoria} className="mb-5">
                  <h3 className="categoria-title">{categoria}</h3>
                  <Row>
                    {produtosDaCategoria.map(renderProdutoCard)}
                  </Row>
                </div>
              );
            })}
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Home;