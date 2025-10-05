const dados = [
  {
    id: 1,
    titulo: "Sem Título (Caveira) - 1982",
    descricao: "Obra mais cara de Basquiat, vendida por US$ 110,5 milhões.",
    conteudo: "A pintura, criada em 1982, apresenta uma caveira colorida e caótica, com traços fortes e expressivos. Vendida em 2017 por US$ 110,5 milhões, tornou-se a obra mais cara de um artista americano até então. É considerada um marco do neoexpressionismo.",
    imagem: "img/caveira.jpg"
  },
  {
    id: 2,
    titulo: "Sem Título (Caveira Coroada) - 1981",
    descricao: "Obra também conhecida como 'Caveira Coroada', vendida por US$ 34,9 milhões.",
    conteudo: "Pintada em 1981, representa uma caveira com uma coroa, símbolo recorrente em suas obras. Reflete o poder, a realeza e a luta por reconhecimento. Foi vendida por US$ 34,9 milhões em 2014, superando as expectativas de leilão.",
    imagem: "img/caveira-coroada.jpg"
  },
  {
    id: 3,
    titulo: "Sem Título (Pescaria) - 1981",
    descricao: "Obra vendida por US$ 26,4 milhões, um recorde para o artista na época.",
    conteudo: "Criada em 1981, retrata figuras humanas e elementos simbólicos em meio a cores intensas e contrastantes. Foi vendida por US$ 26,4 milhões em 2012, marcando um novo recorde para Basquiat naquele período.",
    imagem: "img/pescaria.jpg"
  },
  {
    id: 4,
    titulo: "Ironia do Policial Negro (1981)",
    descricao: "Ironia do Policial Negro carrega mensagens sociais evidentes.",
    conteudo: "Uma das obras mais famosas de Basquiat, Ironia do Policial Negro carrega mensagens sociais evidentes. Aqui, não existe um recado sutil nem uma insinuação: o pintor tece duras críticas às práticas racistas que vigoravam (e ainda vigoram) nos Estados Unidos. Negro e filho de imigrantes, ele não tinha medo de 'meter o dedo na ferida' e confrontar a sociedade norte-americana com suas falhas e preconceitos. O quadro em análise, que combina grafite e pintura expressionista, apresenta um indivíduo no centro. O seu chapéu, que se assemelha a uma gaiola, o identifica como um agente da Polícia. <br> Nos Estados Unidos da América, como em outros países, as forças policiais são conhecidas pela sua brutalidade, sobretudo com os cidadãos negros. A dualidade de padrões e a violência da autoridade têm sido denunciadas em massa nas últimos anos com o movimento Black Lives Matter (Vidas Negras Importam). <br> No começo da década de 80, Basquiat já estava alertando para estas questões, se perguntando por quê um homem negro se juntaria a uma polícia racista. <br> A profissão, neste caso, é vista como uma outra forma de domínio e opressão. Isso fica explícito com a palavra 'pawn' (peão, alguém que é manipulado) no canto inferior direito.",
    imagem: "img/police.jpg"
  },
];
const container = document.getElementById("container");
if (container) {
  dados.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}">
      <h2>${item.titulo}</h2>
      <p>${item.descricao}</p>
      <a href="detalhes.html?id=${item.id}">Ver detalhes</a>
    `;
    container.appendChild(card);
  });
}


const detalhesDiv = document.getElementById("detalhes");
if (detalhesDiv) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const item = dados.find(d => d.id === id);

  if (item) {
    detalhesDiv.innerHTML = `
      <h1>${item.titulo}</h1>
      <img src="${item.imagem}" alt="${item.titulo}">
      <p>${item.conteudo}</p>
      <a href="index.html">← Voltar à página inicial</a>
    `;
  } else {
    detalhesDiv.innerHTML = "<p>Obra não encontrada.</p>";
  }
}