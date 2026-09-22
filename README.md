# 📱 SSG — E-Commerce Tech Experience

Uma landing page responsiva e moderna inspirada em e-commerces de tecnologia, desenvolvida com **HTML5, CSS3 e JavaScript puro**. O projeto conta com alternância de temas (Dark/Light), visualização interativa de produtos com alteração dinâmica de cores, layouts em Grid/Flexbox e suporte completo para dispositivos móveis.

## 🚀 Funcionalidades

* 🌓 **Tema Claro / Escuro (Dark/Light Mode):** Suporte nativo com persistência da preferência do usuário via `localStorage`.

* 🎨 **Seletor de Cores Interativo:** Troca de modelos do *Galaxy Watch* com efeitos dinâmicos de transição (`scale`, `opacity`) e rótulo explicativo (`tooltip`).

* ✨ **Efeitos Visuais Modernos:** Uso de `backdrop-filter` (Efeito Glassmorphism), sombras sutis e animações CSS no hover dos produtos.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página.

* **CSS3:**

  * CSS Grid & Flexbox para alinhamentos.

  * Variáveis e seletores condicionais para alternância de temas.

  * Animações, transições e regras de responsividade (`@media queries`).

* **JavaScript (ES6+):**

  * Manipulação de DOM e escutadores de eventos (`addEventListener`).

  * Lógica para troca de temas e interação com produtos.

  * Persistência de dados com `localStorage`.

* **Google Fonts:** Tipografias *Poppins*, *Michroma* e *Roboto*.

## 📂 Estrutura de Arquivos

```
├── assets/                  # Imagens e vetores do projeto (Logos, SVGs e Fotos de Produtos)
├── index.html               # Estrutura HTML principal do site
├── style.css                # Estilização global, temas e responsividade
├── script.js                # Lógica de interação, temas e seletor de cores
└── README.md                # Documentação do repositório

```

## 🔧 Como Executar o Projeto

1. **Clone o repositório:**

   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   
   ```

2. **Navegue até o diretório:**

   ```
   cd seu-repositorio
   
   ```

3. **Abra o arquivo `index.html`:**

   * Você pode abrir diretamente em seu navegador preferido dando dois cliques no arquivo `index.html`.

   * Ou utilize a extensão **Live Server** no VS Code para uma experiência de desenvolvimento em tempo real.

## 💡 Próximas Melhorias (Roadmap)

* \[ \] Correção de links e direcionamento das categorias de produtos.

* \[ \] Implementação de carrinho de compras básico com cálculo de valor.

* \[ \] Integração de filtro de busca funcional para os produtos listados.