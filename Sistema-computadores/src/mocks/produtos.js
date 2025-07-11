// Base de dados fictícia de produtos de tecnologia organizados por categoria

// Produtos organizados por categoria
export const produtosPorCategoria = {
  Notebook: [
    {
      id: 1,
      nome: "Notebook Dell Inspiron 15",
      descricao:
        "Notebook com processador Intel Core i5, 8GB RAM, SSD 256GB, Tela 15.6'' Full HD.",
      preco: 3899.9,
      categoria: "Notebook",
      imagem:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/notebook-inspiron-15-3520-black-gallery-10.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full",
      estoque: 12,
    },
  ],
  Acessório: [
    {
      id: 2,
      nome: "Mouse Gamer Logitech G203",
      descricao:
        "Mouse gamer RGB com sensor de 8000 DPI, 6 botões programáveis.",
      preco: 149.9,
      categoria: "Acessório",
      imagem:
        "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SX679_.jpg",
      estoque: 30,
    },
    {
      id: 4,
      nome: "Teclado Mecânico Redragon Kumara",
      descricao:
        "Teclado mecânico ABNT2, switches Outemu Blue, iluminação LED vermelha.",
      preco: 229.9,
      categoria: "Acessório",
      imagem:
        "https://m.media-amazon.com/images/I/61fq5PhqPQL.__AC_SX300_SY300_QL70_ML2_.jpg",
      estoque: 15,
    },
  ],
  Monitor: [
    {
      id: 3,
      nome: "Monitor LG 24'' Full HD",
      descricao: "Monitor LED 24 polegadas, resolução Full HD, HDMI e VGA.",
      preco: 899.0,
      categoria: "Monitor",
      imagem:
        "https://m.media-amazon.com/images/I/61ql0c9MWcL.__AC_SX300_SY300_QL70_ML2_.jpg",
      estoque: 8,
    },
  ],
  Smartphone: [
    {
      id: 5,
      nome: "Smartphone Samsung Galaxy S21",
      descricao: "Smartphone 128GB, 8GB RAM, câmera tripla, tela 6.2'' AMOLED.",
      preco: 3499.0,
      categoria: "Smartphone",
      imagem:
        "https://m.media-amazon.com/images/I/710BXPlJ65L.__AC_SX300_SY300_QL70_ML2_.jpg",
      estoque: 5,
    },
  ],
  Áudio: [
    {
      id: 6,
      nome: "Fone de Ouvido Bluetooth JBL Tune 510BT",
      descricao:
        "Fone de ouvido sem fio, bateria de até 40h, microfone integrado.",
      preco: 249.9,
      categoria: "Áudio",
      imagem:
        "https://m.media-amazon.com/images/I/61NIN9D9wjL.__AC_SX300_SY300_QL70_ML2_.jpg",
      estoque: 20,
    },
  ],
  Armazenamento: [
    {
      id: 7,
      nome: "HD Externo Seagate 1TB",
      descricao: "HD externo portátil USB 3.0, compatível com Windows e Mac.",
      preco: 399.0,
      categoria: "Armazenamento",
      imagem:
        "https://m.media-amazon.com/images/I/91e-WNUpH0L.__AC_SY300_SX300_QL70_ML2_.jpg",
      estoque: 10,
    },
  ],
  Impressora: [
    {
      id: 8,
      nome: "Impressora Multifuncional HP DeskJet Ink Advantage 2774",
      descricao:
        "Imprime, copia e digitaliza, conexão Wi-Fi, compatível com HP Smart.",
      preco: 499.0,
      categoria: "Impressora",
      imagem:
        "https://m.media-amazon.com/images/I/71E0oNEjf5S.__AC_SY300_SX300_QL70_ML2_.jpg",
      estoque: 7,
    },
  ],
  Tablet: [
    {
      id: 9,
      nome: "Tablet Apple iPad 9ª Geração 64GB",
      descricao: "Tela Retina 10.2'', Wi-Fi, processador A13 Bionic, iPadOS.",
      preco: 2999.0,
      categoria: "Tablet",
      imagem:
        "https://m.media-amazon.com/images/I/51pnOmSGLnL._AC_SX569_.jpg",
      estoque: 6,
    },
  ],
  Rede: [
    {
      id: 10,
      nome: "Roteador TP-Link Archer C6",
      descricao: "Roteador Gigabit Dual Band, 1200Mbps, 4 antenas externas.",
      preco: 199.9,
      categoria: "Rede",
      imagem:
        "https://m.media-amazon.com/images/I/51tXbZtxq9L.__AC_SX300_SY300_QL70_ML2_.jpg",
      estoque: 18,
    },
  ],
};

// Lista completa de produtos (mantida para compatibilidade)
export const produtosTecnologia = [
  {
    id: 1,
    nome: "Notebook Dell Inspiron 15",
    descricao:
      "Notebook com processador Intel Core i5, 8GB RAM, SSD 256GB, Tela 15.6'' Full HD.",
    preco: 3899.9,
    categoria: "Notebook",
    imagem:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/notebook-inspiron-15-3520-black-gallery-10.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full",
    estoque: 12,
  },
  {
    id: 2,
    nome: "Mouse Gamer Logitech G203",
    descricao: "Mouse gamer RGB com sensor de 8000 DPI, 6 botões programáveis.",
    preco: 149.9,
    categoria: "Acessório",
    imagem:
      "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SX679_.jpg",
    estoque: 30,
  },
  {
    id: 3,
    nome: "Monitor LG 24'' Full HD",
    descricao: "Monitor LED 24 polegadas, resolução Full HD, HDMI e VGA.",
    preco: 899.0,
    categoria: "Monitor",
    imagem:
      "https://m.media-amazon.com/images/I/61ql0c9MWcL.__AC_SX300_SY300_QL70_ML2_.jpg",
    estoque: 8,
  },
  {
    id: 4,
    nome: "Teclado Mecânico Redragon Kumara",
    descricao:
      "Teclado mecânico ABNT2, switches Outemu Blue, iluminação LED vermelha.",
    preco: 229.9,
    categoria: "Acessório",
    imagem:
      "https://m.media-amazon.com/images/I/61fq5PhqPQL.__AC_SX300_SY300_QL70_ML2_.jpg",
    estoque: 15,
  },
  {
    id: 5,
    nome: "Smartphone Samsung Galaxy S21",
    descricao: "Smartphone 128GB, 8GB RAM, câmera tripla, tela 6.2'' AMOLED.",
    preco: 3499.0,
    categoria: "Smartphone",
    imagem:
      "https://m.media-amazon.com/images/I/710BXPlJ65L.__AC_SX300_SY300_QL70_ML2_.jpg",
    estoque: 5,
  },
  {
    id: 6,
    nome: "Fone de Ouvido Bluetooth JBL Tune 510BT",
    descricao:
      "Fone de ouvido sem fio, bateria de até 40h, microfone integrado.",
    preco: 249.9,
    categoria: "Áudio",
    imagem:
      "https://m.media-amazon.com/images/I/61NIN9D9wjL.__AC_SX300_SY300_QL70_ML2_.jpg",
    estoque: 20,
  },
  {
    id: 7,
    nome: "HD Externo Seagate 1TB",
    descricao: "HD externo portátil USB 3.0, compatível com Windows e Mac.",
    preco: 399.0,
    categoria: "Armazenamento",
    imagem:
      "https://m.media-amazon.com/images/I/91e-WNUpH0L.__AC_SY300_SX300_QL70_ML2_.jpg",
    estoque: 10,
  },
  {
    id: 8,
    nome: "Impressora Multifuncional HP DeskJet Ink Advantage 2774",
    descricao:
      "Imprime, copia e digitaliza, conexão Wi-Fi, compatível com HP Smart.",
    preco: 499.0,
    categoria: "Impressora",
    imagem:
      "https://m.media-amazon.com/images/I/71E0oNEjf5S.__AC_SY300_SX300_QL70_ML2_.jpg",
    estoque: 7,
  },
  {
    id: 9,
    nome: "Tablet Apple iPad 9ª Geração 64GB",
    descricao: "Tela Retina 10.2'', Wi-Fi, processador A13 Bionic, iPadOS.",
    preco: 2999.0,
    categoria: "Tablet",
    imagem:
      "https://m.media-amazon.com/images/I/51pnOmSGLnL._AC_SX569_.jpg",
    estoque: 6,
  },
  {
    id: 10,
    nome: "Roteador TP-Link Archer C6",
    descricao: "Roteador Gigabit Dual Band, 1200Mbps, 4 antenas externas.",
    preco: 199.9,
    categoria: "Rede",
    imagem:
      "https://m.media-amazon.com/images/I/51tXbZtxq9L.__AC_SX300_SY300_QL70_ML2_.jpg",
    estoque: 18,
  },
];

// Função auxiliar para obter categorias únicas
export const getCategoriasProdutos = () => {
  return Object.keys(produtosPorCategoria);
};

// Função auxiliar para obter produtos por categoria
export const getProdutosPorCategoria = (categoria) => {
  return produtosPorCategoria[categoria] || [];
};
