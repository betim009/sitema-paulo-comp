// Base de dados fictícia de serviços de manutenção organizados por categoria

// Serviços organizados por categoria
export const servicosPorCategoria = {
  "Limpeza e Manutenção": [
    {
      id: 1,
      nome: "Limpeza interna e externa",
      descricao: "Remoção de poeira e sujeira dos componentes internos e externos do computador.",
      preco: 80.0,
      duracao: "1 hora",
      disponivel: true,
      categoria: "Limpeza e Manutenção",
      poster: "https://st3.depositphotos.com/1000975/18679/i/450/depositphotos_186790622-stock-photo-computer-repair-man-cleaning-dust.jpg"
    },
    {
      id: 4,
      nome: "Troca de pasta térmica",
      descricao: "Substituição da pasta térmica do processador e limpeza do sistema de refrigeração.",
      preco: 90.0,
      duracao: "45 minutos",
      disponivel: true,
      categoria: "Limpeza e Manutenção",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9_pPIspAMa19x5bEJCcjWG2g2-Z5SK_DfA&s"
    }
  ],
  "Sistema e Software": [
    {
      id: 2,
      nome: "Formatação e reinstalação do sistema",
      descricao: "Formatação do disco rígido e reinstalação do sistema operacional com drivers atualizados.",
      preco: 150.0,
      duracao: "2 horas",
      disponivel: true,
      categoria: "Sistema e Software",
      poster: "https://images.wondershare.com/recoverit/article/formatting-a-linux-disk-partition.png"
    },
    {
      id: 3,
      nome: "Remoção de vírus e malware",
      descricao: "Verificação completa do sistema para detectar e remover ameaças como vírus e malwares.",
      preco: 120.0,
      duracao: "1h30min",
      disponivel: true,
      categoria: "Sistema e Software",
      poster: "https://s2-techtudo.glbimg.com/ivb3fr71BrUzBUjfjXq-3TGvMH4=/0x0:695x474/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/A/e/aV7MUFQYCVqX154WGASA/2013-12-13-copia-de-malware.jpg"
    }
  ],
  "Hardware e Upgrade": [
    {
      id: 5,
      nome: "Upgrade de hardware",
      descricao: "Instalação e configuração de novos componentes como SSD, memória RAM e placa de vídeo.",
      preco: 200.0,
      duracao: "2h30min",
      disponivel: true,
      categoria: "Hardware e Upgrade",
      poster: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/160989-laptops-news-feature-which-parts-of-your-gaming-pc-should-you-upgrade-first-image2-dbb2fsrkmz.jpg"
    }
  ],
  "Dados e Backup": [
    {
      id: 6,
      nome: "Backup e recuperação de dados",
      descricao: "Realização de backup seguro e tentativa de recuperação de arquivos excluídos.",
      preco: 180.0,
      duracao: "2 horas",
      disponivel: true,
      categoria: "Dados e Backup",
      poster: "https://www.controle.net/novo/assets/img/faq/faq-praticas-recomendadas-de-backup-e-recuperacao-de-banco-de-dados-1692397574.jpg"
    }
  ]
};

// Lista completa de serviços (mantida para compatibilidade)
export const servicosManutencao = [
    {
        id: 1,
        nome: "Limpeza interna e externa",
        descricao: "Remoção de poeira e sujeira dos componentes internos e externos do computador.",
        preco: 80.0,
        duracao: "1 hora",
        disponivel: true,
        categoria: "Limpeza e Manutenção",
        poster: "https://st3.depositphotos.com/1000975/18679/i/450/depositphotos_186790622-stock-photo-computer-repair-man-cleaning-dust.jpg"
    },
    {
        id: 2,
        nome: "Formatação e reinstalação do sistema",
        descricao: "Formatação do disco rígido e reinstalação do sistema operacional com drivers atualizados.",
        preco: 150.0,
        duracao: "2 horas",
        disponivel: true,
        categoria: "Sistema e Software",
        poster: "https://images.wondershare.com/recoverit/article/formatting-a-linux-disk-partition.png"
    },
    {
        id: 3,
        nome: "Remoção de vírus e malware",
        descricao: "Verificação completa do sistema para detectar e remover ameaças como vírus e malwares.",
        preco: 120.0,
        duracao: "1h30min",
        disponivel: true,
        categoria: "Sistema e Software",
        poster: "https://s2-techtudo.glbimg.com/ivb3fr71BrUzBUjfjXq-3TGvMH4=/0x0:695x474/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/A/e/aV7MUFQYCVqX154WGASA/2013-12-13-copia-de-malware.jpg"
    },
    {
        id: 4,
        nome: "Troca de pasta térmica",
        descricao: "Substituição da pasta térmica do processador e limpeza do sistema de refrigeração.",
        preco: 90.0,
        duracao: "45 minutos",
        disponivel: true,
        categoria: "Limpeza e Manutenção",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9_pPIspAMa19x5bEJCcjWG2g2-Z5SK_DfA&s"
    },
    {
        id: 5,
        nome: "Upgrade de hardware",
        descricao: "Instalação e configuração de novos componentes como SSD, memória RAM e placa de vídeo.",
        preco: 200.0,
        duracao: "2h30min",
        disponivel: true,
        categoria: "Hardware e Upgrade",
        poster: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/160989-laptops-news-feature-which-parts-of-your-gaming-pc-should-you-upgrade-first-image2-dbb2fsrkmz.jpg"
    },
    {
        id: 6,
        nome: "Backup e recuperação de dados",
        descricao: "Realização de backup seguro e tentativa de recuperação de arquivos excluídos.",
        preco: 180.0,
        duracao: "2 horas",
        disponivel: true,
        categoria: "Dados e Backup",
        poster: "https://www.controle.net/novo/assets/img/faq/faq-praticas-recomendadas-de-backup-e-recuperacao-de-banco-de-dados-1692397574.jpg"
    }
];

// Função auxiliar para obter categorias únicas
export const getCategoriasServicos = () => {
  return Object.keys(servicosPorCategoria);
};

// Função auxiliar para obter serviços por categoria
export const getServicosPorCategoria = (categoria) => {
  return servicosPorCategoria[categoria] || [];
};