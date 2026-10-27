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
├── sitemap.xml          # mapa do site para buscadores
├── .nojekyll            # GitHub Pages sem processamento Jekyll
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── fonts/
    │   ├── montserrat-latin.woff2   # fonte Montserrat (hospedada no projeto)
    │   └── OFL.txt                  # licença da fonte
    └── images/
        ├── favicon.svg
        ├── compartilhamento.png     # imagem para redes sociais (1200×630)
        └── icones/                  # ícones SVG das tecnologias
```

## Identidade visual

O layout segue o mockup aprovado no início do projeto: fundo escuro, roxo como cor de destaque, bordas discretas e cantos arredondados. O mockup era só material de referência e não faz parte do site publicado.

- **Tipografia:** Montserrat, hospedada no próprio projeto (`assets/fonts/`). É o arquivo variável oficial do Google Fonts (subconjunto latin, v31), que cobre todos os pesos usados (400 a 800), distribuído sob a SIL Open Font License 1.1 (`assets/fonts/OFL.txt`). O site não carrega nenhum recurso externo.
- **Logo:** textual, com `D//R` em roxo e `CODE.` logo abaixo.
- **Cabeçalho:** fixo no topo, com menu hambúrguer no celular e menu em linha a partir de 960px.
- **Seção inicial:** apresentação, botões e contatos; ao lado (ou abaixo, no celular), um notebook com código C# feito apenas com HTML e CSS, sem imagens.
- **Tecnologias:** oito cards (C#, .NET, HTML, CSS, JavaScript, Git, GitHub e SQL Server) com ícones SVG locais em `assets/images/icones/`. São 2 colunas no celular, 4 a partir de 768px e 8 a partir de 1200px. Os cards mostram apenas as tecnologias que estou aprendendo, sem níveis de experiência.
- **Projetos:** três cards reservados (Projeto 01, 02 e 03, "Em breve"), em 1 coluna no celular, 2 a partir de 768px e 3 a partir de 1024px. Eles serão substituídos por projetos reais quando estiverem prontos.
- **Sobre mim:** painel com avatar genérico (ícone, sem foto), texto de apresentação e selos com as áreas de interesse. No celular o avatar fica acima do texto; a partir de 768px, ao lado.
- **Contato:** breve convite e três cards com ícone, nome e endereço: GitHub, LinkedIn e E-mail. O card de e-mail tem dois botões, **Enviar e-mail** e **Copiar e-mail**, lado a lado quando há espaço e empilhados quando não há. Até 1023px os cards ficam em 1 coluna; a partir de 1024px, GitHub e LinkedIn ficam lado a lado e o card de e-mail ocupa a largura toda, embaixo. Não há formulário de contato.
- **Rodapé:** texto centralizado em cinza discreto (`--cor-texto-discreto`, contraste 6,99:1), com a mesma largura máxima e margens do conteúdo.

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
| `--cor-texto-discreto`| `#9A98B4` | Rodapé                        |
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
- Atalho "Pular para o conteúdo": é o primeiro item ao apertar Tab e leva direto ao conteúdo, sem passar pelo menu.
- Respeita a preferência por menos movimento (`prefers-reduced-motion`): sem rolagem suave e sem transições.
- Testado em 320, 375, 768, 1024 e 1440px.

## Revisão técnica (Etapa 8)

Revisão de SEO, acessibilidade, desempenho e qualidade do código, preservando o visual aprovado. A única mudança visível é o acabamento do rodapé; o restante da página ficou idêntico, pixel a pixel, à versão anterior nas cinco larguras testadas.

**Melhorias realizadas**

- **SEO e compartilhamento:** novo título e descrição; metadados de autor e cor do tema; Open Graph (`og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`) e cartão do Twitter/X (`summary`).
- **Fonte local:** a Montserrat passou a ser carregada do próprio projeto, com pré-carregamento (`preload`), no lugar do Google Fonts. A página deixou de depender de serviços externos e de enviar o IP do visitante ao Google, e o texto aparece mais cedo.
- **Fonte de reserva:** enquanto a Montserrat carrega, o texto aparece em Arial ajustada para ter o mesmo tamanho, evitando que o layout "pule" quando a fonte chega.
- **Menu no carregamento:** a marcação de que o JavaScript está ativo (classe `js`) é feita no `<head>`, antes da primeira pintura. Sem isso, no celular o menu aparecia aberto por um instante e depois sumia, deslocando a página.
- **Título principal (`h1`):** tamanho de fonte declarado, para não ser afetado por uma mudança anunciada no Chrome.
- **Acessibilidade:** atalho "Pular para o conteúdo"; aviso "(abre em nova aba)" para leitores de tela também nos links do Hero; a lista de áreas de interesse em Sobre mim ganhou um título só para leitores de tela (no lugar de `aria-label`, que os leitores de tela não anunciam de forma consistente em listas).
- **Rodapé:** acabamento mínimo (centralizado, cinza discreto, mesmas margens do conteúdo).
- **Limpeza:** removido um comentário obsoleto do CSS.

**Resultado no Lighthouse (servidor local)**

| | Desempenho | Acessibilidade | Boas práticas | SEO | CLS |
| --- | --- | --- | --- | --- | --- |
| Antes da Etapa 8, celular | 87–93 | 100 | 82 | 100 | até 0,147 |
| Depois, celular (3 rodadas) | 100 | 100 | 100 | 100 | 0 |
| Depois, desktop (2 rodadas) | 100 | 100 | 100 | 100 | 0 |

**Testes executados**

- Lighthouse 12.6.1 (celular e desktop), em várias rodadas, antes e depois.
- Validação do HTML com `html-validate` (regras recomendadas): nenhum problema.
- Carregamento com todos os serviços externos bloqueados: a página fica idêntica.
- `node --check assets/js/main.js` e `git diff --check`.
- Comparação pixel a pixel e de posição dos blocos em 320, 375, 768, 1024 e 1440px.
- Navegação por teclado, menu mobile, atalho, movimento reduzido, links, botão Copiar e-mail e erros de console.
- Os links `mailto:` foram conferidos pelos atributos, sem clique, para não abrir o seletor de aplicativos do Windows.

Os itens que dependiam do endereço público foram tratados na Etapa 9 (abaixo).

## Preparação para publicação (Etapa 9)

O site será publicado no **GitHub Pages gratuito**, sem domínio próprio, no endereço planejado:

**https://darlanrosendo.github.io/dr-code-portfolio/**

> O site **ainda não está publicado**. Esta etapa apenas prepara os arquivos.

**O que foi preparado**

- **Caminhos relativos:** HTML, CSS, JavaScript, ícones SVG, favicon e a fonte local usam caminhos relativos (`assets/...`), então funcionam dentro da subpasta `/dr-code-portfolio/`.
- **`.nojekyll`:** arquivo vazio na raiz que faz o GitHub Pages servir os arquivos como estão, sem processá-los com o Jekyll.
- **URL canônica e `og:url`:** apontam para o endereço público planejado.
- **Imagem de compartilhamento:** `assets/images/compartilhamento.png` (1200×630), com o logo D//R CODE, o nome, "Desenvolvedor em formação | Software & Web", os selos C#, .NET e Desenvolvimento web e o mesmo código C# do notebook do site. Configurada em `og:image` (com tipo, tamanho e texto alternativo) e no cartão grande do Twitter/X (`summary_large_image`).
- **Mockup removido:** a imagem de referência do layout (`docs/referencias/mockup-aprovado.png`) saiu do projeto, para não ficar acessível no site publicado.
- **`sitemap.xml`:** lista a página do site com o endereço público.
- **`robots.txt`:** não foi criado de propósito. Num site em subpasta, os buscadores só leem o `robots.txt` da raiz do domínio (`darlanrosendo.github.io/robots.txt`), então ele não teria efeito. O sitemap deve ser enviado pelo Google Search Console depois da publicação.

**Testes realizados (servidor local imitando o GitHub Pages em `/dr-code-portfolio/`)**

- Todos os recursos carregados dentro da subpasta, sem nenhum erro 404 e sem nenhum recurso externo.
- Página idêntica, pixel a pixel, à versão da `develop` em 320, 375, 768, 1024 e 1440px.
- Fonte local, menu responsivo, atalho de teclado, âncoras, botão Copiar e-mail, links do GitHub e do LinkedIn e `mailto:` (conferido pelos atributos, sem clique).
- `sitemap.xml` validado como XML, com o mesmo endereço da URL canônica e do `og:url`.
- Validação do HTML (`html-validate`) e Lighthouse 12.6.1: 100 em desempenho, acessibilidade, boas práticas e SEO, no celular e no desktop.

**Como publicar (quando aprovado)**

1. Integrar a `feature/preparacao-publicacao` na `develop` por Pull Request.
2. Abrir um Pull Request da `develop` para a `master` e fazer o merge.
3. No GitHub, em **Settings → Pages**, escolher **Deploy from a branch**, branch `master`, pasta `/ (root)`, e salvar.
4. Aguardar a publicação e conferir o endereço público.
5. Repetir os testes e o Lighthouse no site publicado.
6. Enviar o `sitemap.xml` pelo Google Search Console (opcional).

**Pendências antes de ativar o GitHub Pages**

- **Imagem de compartilhamento:** aguarda aprovação visual antes do commit.
- **Prévia nas redes sociais:** só pode ser conferida depois da publicação, porque as redes precisam acessar a imagem pelo endereço público.
- **Compressão e cache:** configurados pelo próprio GitHub Pages; conferir no site publicado.

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
- [x] Etapa 6: Sobre mim e contato
- [ ] Etapa 7: Inclusão dos projetos reais (adiada até os projetos ficarem prontos)
- [x] Etapa 8: Revisão geral, SEO, desempenho e acessibilidade
- [ ] Etapa 9: Publicação no GitHub Pages (em preparação, ainda não publicado)

## Autor

Darlan Rosendo
