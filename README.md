# 🎀 Sanrio World - Landing Page

![Project Status](https://img.shields.io/badge/status-concluído-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Love](https://img.shields.io/badge/made%20with-💖-ff69b4)

> **"Site Sanrio para minha Namorada <3"**

Uma Landing Page temática, interativa e totalmente responsiva, desenvolvida como um presente especial e também como um projeto de estudo avançado em Front-end Development. O projeto apresenta os personagens favoritos do universo Sanrio com uma interface moderna e "kawaii".

## ✨ Funcionalidades

O projeto foi refatorado para incluir práticas profissionais de desenvolvimento:

- 🎨 **Design Responsivo & Temático:** Layout fluido que se adapta a celulares e desktops, com uma paleta de cores inspirada na Hello Kitty e Cinnamoroll.
- 🌙 **Dark Mode (Tema Kuromi):** Alternância dinâmica de temas (Claro/Escuro) utilizando CSS Variables e persistência local (LocalStorage).
- ⚡ **Performance Otimizada:** Carregamento rápido, uso de HTML Semântico e CSS moderno.
- 🎭 **Animações Fluidas:** Micro-interações nos botões e animações de entrada (scroll reveal) usando Intersection Observer API.
- 🧩 **Renderização Dinâmica:** Os cards dos personagens são gerados via JavaScript a partir de uma estrutura de dados (Array de Objetos), simulando uma API.

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Semântica e Acessibilidade)
- **CSS3** (Flexbox, Grid, Variables, Animations e Media Queries)
- **JavaScript** (ES6+, DOM Manipulation, LocalStorage)
- **Git & GitHub** (Versionamento)

## 📁 Estrutura do Projeto

A organização dos arquivos segue o padrão MVC (Model-View-Controller) simplificado para front-end:

```text
sanrio-landing-page/
│
├── index.html        # Estrutura principal (Semântica)
├── css/
│   └── style.css     # Estilos, Variáveis e Responsividade
├── js/
│   └── script.js     # Lógica, Dados e Interatividade
└── assets/           # Imagens e recursos visuais
    └── img/