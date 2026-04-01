# DIRGED Portal - Product Requirements Document

## Original Problem Statement
Construa uma página sobre a "Diretoria Executiva de Gestão da Informação Documental (DIRGED)". Ela deve ter botões no topo que levem as seções ao longo da página: Home, Competências, Capital Humano, Mapa, Gestão Documental, Gestão da Informação, Últimas Iniciativas, Prêmios e Projetos Futuros

## User Personas
- **Público Geral**: Cidadãos buscando informações sobre a DIRGED
- **Servidores TJMG**: Funcionários do Tribunal de Justiça de MG
- **Pesquisadores**: Pessoas buscando dados sobre gestão documental judicial

## Core Requirements (Static)
- Landing page moderna com fundo preto
- Paleta de cores: branco, roxo, rosa, amarelo
- Navegação sticky com smooth scroll
- 9 seções: Home, Competências, Capital Humano, Mapa, Gestão Documental, Gestão da Informação, Últimas Iniciativas, Prêmios, Projetos Futuros
- Mapa mostrando localizações em BH e Contagem com legenda
- Design responsivo (desktop e mobile)
- Textos placeholder (Lorem Ipsum) para edição posterior

## What's Been Implemented
**Date: December 2024**
- ✅ Hero section com título, subtítulo e CTAs
- ✅ Navbar sticky com 9 links de navegação
- ✅ Seção Competências com 6 cards
- ✅ Seção Capital Humano com stats e imagem
- ✅ Seção Mapa com visualização estilizada de BH e Contagem
- ✅ 7 localizações com marcadores coloridos e legenda
- ✅ Seção Gestão Documental com 4 cards
- ✅ Seção Gestão da Informação com stats
- ✅ Seção Últimas Iniciativas com marquee e cards
- ✅ Seção Prêmios com 4 cards de premiações
- ✅ Seção Projetos Futuros com timeline
- ✅ Footer com logo e créditos
- ✅ Menu mobile funcional
- ✅ Animações com Framer Motion
- ✅ Design responsivo completo

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Components**: Shadcn UI components
- **Icons**: Lucide React
- **Fonts**: Outfit (headings) + Satoshi (body)

## Prioritized Backlog

### P0 (Critical) - COMPLETED
- [x] Todas as seções implementadas
- [x] Navegação funcional
- [x] Design responsivo

### P1 (High Priority) - Future
- [ ] Substituir Lorem Ipsum por conteúdo real
- [ ] Adicionar imagens reais da equipe
- [ ] Integrar mapa real (Google Maps ou similar)

### P2 (Medium Priority) - Future
- [ ] Adicionar formulário de contato
- [ ] SEO meta tags
- [ ] Performance optimization (lazy loading)

### P3 (Low Priority) - Future
- [ ] Modo claro/escuro toggle
- [ ] Animações de scroll mais elaboradas
- [ ] Analytics integration

## Next Tasks
1. Substituir textos placeholder por conteúdo real
2. Adicionar fotos reais da equipe na seção Capital Humano
3. Considerar integração com API de mapas real
