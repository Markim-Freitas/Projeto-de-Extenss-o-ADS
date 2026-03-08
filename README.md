# Pode Inte For — Site Oficial

Site inspirado no [Calcinha Preta](https://calcinhapreta.com.br/), recriado para a banda **Pode Inte For** ([@pode.inte.for](https://www.instagram.com/pode.inte.for/)).

## Estrutura do projeto

```
Projeto-de-Extenss-o-ADS/
├── index.html          # Página principal (todas as seções)
├── css/
│   └── styles.css      # Estilos globais
├── js/
│   └── main.js         # Menu mobile, agenda, loader
├── README.md
└── .gitignore
```

## Seções do site

- **Início** — Hero com nome da banda e link para o Instagram
- **Agenda** — Abas por mês (Mar/Abr/Mai 2026) e cards de eventos
- **Linha do Tempo** — Histórico da banda por ano
- **Discografia** — Link para plataformas e lista de álbuns
- **Loja** — Grid de produtos (camisetas, caneca, boné)
- **Fotos & Eventos** — Categorias e galeria de fotos
- **Contato** — Shows, Publicidade, Imprensa, Central de Fãs

## Como usar

1. Abra o `index.html` no navegador (duplo clique ou arraste para o Chrome/Edge/Firefox).
2. Ou use um servidor local, por exemplo:
   - **VS Code**: extensão "Live Server" e "Go Live".
   - **Node**: `npx serve .` na pasta do projeto.

## Personalização

- **Texto e datas**: edite o `index.html` (agenda, timeline, discografia, contatos, e-mails e telefones).
- **Cores**: em `css/styles.css`, altere as variáveis em `:root` (`--color-primary`, `--color-bg`, etc.).
- **Imagens**: substitua os blocos `.loja-image`, `.foto-category-image` e `.gallery-item` por `<img src="caminho/da/imagem.jpg" alt="...">` ou use imagens como background nos mesmos elementos.
- **Link da discografia**: altere o `href` do link "Acessar nas plataformas" na seção Discografia.

## Tecnologias

- HTML5
- CSS3 (variáveis, Grid, Flexbox)
- JavaScript (vanilla)
- Fontes: Google Fonts (Oswald, Source Sans 3)

## Observação

Os dados de agenda, timeline, discografia, loja e contato estão como **placeholders**. Atualize com as informações reais da banda Pode Inte For.
