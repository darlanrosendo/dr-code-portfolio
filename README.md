# D/R Code

Portfólio pessoal de **Darlan Rosendo**, desenvolvedor em formação.

O objetivo do projeto é apresentar meus conhecimentos, projetos e evolução profissional para recrutadores e empresas.

> Projeto em desenvolvimento.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro (sem frameworks)

## Estrutura de arquivos

```text
dr-code-portfolio/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── docs/
    └── referencias/
        └── mockup-aprovado.png
```

## Identidade visual

O layout segue o mockup aprovado em `docs/referencias/mockup-aprovado.png`: fundo escuro, roxo como cor de destaque, bordas discretas e cantos arredondados.

- **Tipografia:** Montserrat (Google Fonts).
- **Logo:** textual, com `D//R` em roxo e `CODE.` logo abaixo.
- **Cabeçalho:** fixo no topo, com menu hambúrguer no celular e menu em linha a partir de 960px.
- **Seção inicial:** apresentação, botões e contatos; ao lado (ou abaixo, no celular), um notebook com código C# feito apenas com HTML e CSS, sem imagens.

As cores ficam em variáveis CSS no início do `assets/css/style.css`, para facilitar mudanças na paleta:

| Variável              | Cor       | Uso                           |
| --------------------- | --------- | ----------------------------- |
| `--cor-fundo`         | `#0A0A1F` | Fundo do site                 |
| `--cor-superficie`    | `#11102B` | Fundo de painéis e do menu    |
| `--cor-roxo`          | `#7C3AED` | Botão principal               |
| `--cor-roxo-vivo`     | `#8B5CF6` | Logo e detalhes de destaque   |
| `--cor-roxo-claro`    | `#A78BFA` | Links e contorno de foco      |
| `--cor-texto`         | `#FFFFFF` | Títulos                       |
| `--cor-texto-suave`   | `#C7C5DB` | Texto corrido                 |

## Como visualizar

Abra o arquivo `index.html` no navegador.

## Fluxo de versionamento

| Branch      | Finalidade                      |
| ----------- | ------------------------------- |
| `master`    | Versão estável                  |
| `develop`   | Integração do desenvolvimento   |
| `feature/*` | Novas funcionalidades           |
| `fix/*`     | Correções                       |

As branches `feature/*` e `fix/*` são criadas a partir da `develop` e integradas por Pull Request.

Os commits seguem o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/), por exemplo:

- `chore: configura estrutura inicial`
- `feat: adiciona cabecalho`
- `fix: corrige responsividade`

## Etapas de desenvolvimento

- [x] Etapa 1: Configuração do projeto e Git
- [x] Etapa 2: Estrutura HTML inicial
- [x] Etapa 3: Identidade visual e cabeçalho
- [x] Etapa 4: Seção inicial com apresentação e ilustração
- [ ] Etapa 5: Tecnologias e projetos
- [ ] Etapa 6: Sobre mim e contato
- [ ] Etapa 7: Responsividade e animações
- [ ] Etapa 8: Testes, revisão e publicação

## Autor

Darlan Rosendo
