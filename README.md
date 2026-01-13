# Portfólio Moderno e Responsivo

Um portfólio profissional moderno, responsivo e colorido criado com React + Vite, apresentando design elegante com gradientes vibrantes, animações interativas e suporte a dark/light mode e multilíngue (PT/EN).

## 🎨 Características

- **Design Moderno**: Gradientes vibrantes e animações suaves
- **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Dark/Light Mode**: Sistema de temas com toggle
- **Multilíngue**: Suporte para Português e Inglês
- **Animações Interativas**: Framer Motion para animações fluidas
- **Formulário de Contato**: Integração com EmailJS
- **Performance Otimizada**: Build rápido com Vite

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construir interfaces
- **Vite** - Build tool rápida e moderna
- **Framer Motion** - Biblioteca de animações
- **React Icons** - Biblioteca de ícones
- **EmailJS** - Serviço de envio de emails
- **CSS3** - Estilização moderna com gradientes e animações

## 📦 Instalação

1. Navegue até a pasta do projeto:
```bash
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador em `http://localhost:5173`

## 🏗️ Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`. Para visualizar a build:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── cv/
│   │   └── curriculo.pdf          # CV para download
│   └── images/                     # Imagens do portfólio
├── src/
│   ├── components/
│   │   ├── Navigation/            # Navegação
│   │   ├── Hero/                  # Banner inicial
│   │   ├── About/                 # Sobre mim
│   │   ├── Experience/            # Experiência profissional
│   │   ├── Skills/                # Habilidades
│   │   ├── Projects/              # Projetos
│   │   ├── Contact/               # Contato
│   │   ├── ThemeToggle/           # Toggle de tema
│   │   └── LanguageToggle/        # Toggle de idioma
│   ├── context/
│   │   ├── ThemeContext.jsx       # Context para tema
│   │   └── LanguageContext.jsx   # Context para idioma
│   ├── data/
│   │   ├── portfolioData.js       # Dados do portfólio
│   │   └── translations.js        # Traduções PT/EN
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useLanguage.js
│   ├── utils/
│   │   └── emailService.js        # Serviço de email
│   ├── styles/
│   │   ├── variables.css
│   │   ├── themes.css
│   │   └── animations.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Personalização

### Configurar EmailJS

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template
4. Atualize as credenciais em `src/utils/emailService.js`:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`

### Popular Dados

Edite `src/data/portfolioData.js` com suas informações:
- Informações pessoais
- Experiência profissional
- Habilidades
- Projetos
- Contato e redes sociais

### Cores e Gradientes

As cores e gradientes podem ser personalizadas em `src/index.css` através das variáveis CSS.

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints para:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## ⚡ Performance

- Build otimizado com Vite
- Animações otimizadas com Framer Motion
- Lazy loading de componentes
- Imagens otimizadas (recomendado usar imagens WebP)

## 📝 Licença

Este projeto é livre para uso pessoal e educacional.

## 🙏 Créditos

Desenvolvido com React, Vite e muito café ☕
