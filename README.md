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
│       └── icones/       # ícones SVG das tecnologias
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
- **Tecnologias:** oito cards (C#, .NET, HTML, CSS, JavaScript, Git, GitHub e SQL Server) com ícones SVG locais em `assets/images/icones/`. São 2 colunas no celular, 4 a partir de 768px e 8 a partir de 1200px. Os cards mostram apenas as tecnologias que estou aprendendo, sem níveis de experiência.
- **Projetos:** três cards reservados (Projeto 01, 02 e 03, "Em breve"), em 1 coluna no celular, 2 a partir de 768px e 3 a partir de 1024px. Eles serão substituídos por projetos reais quando estiverem prontos.
- **Sobre mim:** painel com avatar genérico (ícone, sem foto), texto de apresentação e selos com as áreas de interesse. No celular o avatar fica acima do texto; a partir de 768px, ao lado.
- **Contato:** breve convite e três cards com ícone, nome e endereço: GitHub, LinkedIn e E-mail. O card de e-mail tem dois botões, **Enviar e-mail** e **Copiar e-mail**, lado a lado quando há espaço e empilhados quando não há. São 1 coluna até 1023px e 3 colunas a partir de 1024px. Não há formulário de contato.
- **Contatos no Hero:** GitHub, LinkedIn e E-mail. No celular estreito, os contatos podem quebrar para uma segunda linha.

### Contatos oficiais

| Contato  | Endereço                                       |
| -------- | ---------------------------------------------- |
| GitHub   | https://github.com/darlanrosendo               |
| LinkedIn | https://www.linkedin.com/in/darlan-rosendo/    |
| E-mail   | darlanbarbosa8@gmail.com                       |

GitHub e LinkedIn abrem em nova aba (`target="_blank"` com `rel="noopener noreferrer"`).

### Contato por e-mail

Há duas opções, para funcionar em qualquer dispositivo:

- **Enviar e-mail** (e o link E-mail do Hero) usa `mailto:darlanbarbosa8@gmail.com`. Ele abre o aplicativo ou serviço de e-mail configurado no dispositivo do visitante, com o destinatário já preenchido. Se o visitante não tiver nenhum configurado, o clique pode não abrir nada. Isso depende do dispositivo, não do site.
- **Copiar e-mail** copia `darlanbarbosa8@gmail.com` para a área de transferência, como alternativa ao `mailto:`. O botão usa `navigator.clipboard.writeText()` e, se essa API não estiver disponível ou for bloqueada, uma forma alternativa de cópia. A mensagem "E-mail copiado!" só aparece quando a cópia dá certo. Se falhar, o site pede para copiar o endereço manualmente, já que ele fica visível e selecionável. O botão depende de JavaScript e fica oculto quando ele está desativado.

A cópia pela API exige uma página segura (`https://` ou `localhost`), como no GitHub Pages ou no Live Server.

### Acessibilidade e responsividade

- Links com foco visível (contorno roxo) e hover discreto.
- Cards de contato com área de toque de pelo menos 64px de altura.
- Ícones decorativos ocultos para leitores de tela (`aria-hidden="true"`); nos links que abrem nova aba, o texto "(abre em nova aba)" fica disponível só para leitores de tela.
- O resultado do botão Copiar e-mail é anunciado aos leitores de tela (`aria-live="polite"`).
- Endereços longos quebram em pontos definidos (`<wbr>`), sem rolagem horizontal em 320px.
- Testado em 320, 375, 768, 1024 e 1440px.

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
- [x] Etapa 5: Tecnologias e projetos
- [ ] Etapa 6: Sobre mim e contato (implementada, aguardando aprovação visual)
- [ ] Etapa 7: Responsividade e animações
- [ ] Etapa 8: Testes, revisão e publicação

## Autor

Darlan Rosendo
