# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Raiany Morais Ribeiro
- Matricula:904589
- Proposta de projeto escolhida: Pessoas e produções.
- Breve descrição sobre seu projeto: Meu projeto e sobre um jovem artista negro chamado Jean Michael Basquiat, que morreu por overdose de mistura de drogas aos 27 anos, sua obra mais cara foi vendida por 110,5 milhões de dorales, suas obras criticavam o racismo e a desigualdade social.

## Print da Home-Page

![Tela de inspeção com navegador](img/home.png)

## Print da página de detalhes do item

![Tela de inspeção com navegador](img/detalhes.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js
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

```javascript
const dados = [
  {
    "id": 1,
    "titulo": "Prefeitura Lança Plano de Mobilidade Urbana",
    "descricao": "Novo plano do transporte público.",
    "conteudo": "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana.",
    "categoria": "Cidades",
    "autor": "Joana Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/mobilidade.jpg"
  }
]
```