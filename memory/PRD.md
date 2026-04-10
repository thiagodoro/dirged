# DIRGED Portal - Product Requirements Document

## Original Problem Statement
Construa uma página sobre a "Diretoria Executiva de Gestão da Informação Documental (DIRGED)". Ela deve ter botões no topo que levem as seções ao longo da página: Home, Competências, Capital Humano, Mapa, Gestão Documental, Gestão da Informação, Últimas Iniciativas, Prêmios e Projetos Futuros

## User Personas
- **Público Geral**: Cidadãos buscando informações sobre a DIRGED
- **Servidores TJMG**: Funcionários do Tribunal de Justiça de MG
- **Pesquisadores**: Pessoas buscando dados sobre gestão documental judicial

## Core Requirements (Static)
- Landing page moderna com tema escuro alternando (preto #000 e cinza escuro #1A1A1A)
- Paleta de cores: branco, roxo, rosa, amarelo, azul, verde
- Navegação sticky com smooth scroll e 12 seções
- Vídeo de fundo na hero section
- Organograma interativo com modais de perfil (foto + currículo)
- Mapa Leaflet interativo com 7 marcadores geolocalizados
- Carrosséis de imagens com auto-play
- Acordeões expansíveis para Capital Humano e Orçamento
- Atos Normativos com tabs navegáveis
- Design responsivo (desktop e mobile)

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Components**: Shadcn UI + Modular section components
- **Icons**: Lucide React
- **Map**: react-leaflet + Leaflet
- **Fonts**: Outfit (headings) + Satoshi (body)

## File Structure (Post-Refactoring)
```
/app/frontend/src/
├── App.js (slim ~38 lines - composition only)
├── App.css (custom CSS + Leaflet styles)
├── data/
│   └── navItems.js (shared navigation data)
├── components/
│   ├── ui/ (Shadcn components)
│   └── sections/
│       ├── Navbar.jsx
│       ├── HeroSection.jsx
│       ├── CompetenciasSection.jsx (includes CarouselResolucao)
│       ├── OrganogaramaSection.jsx (includes 6 profile modals)
│       ├── AtosNormativosSection.jsx
│       ├── CapitalHumanoSection.jsx
│       ├── OrcamentoSection.jsx
│       ├── MapaSection.jsx (Leaflet integration)
│       ├── GestaoDocumentalSection.jsx
│       ├── GestaoInformacaoSection.jsx (placeholder)
│       ├── IniciativasSection.jsx (placeholder)
│       ├── PremiosSection.jsx (placeholder)
│       ├── ProjetosFuturosSection.jsx (placeholder)
│       └── Footer.jsx
```

## What's Been Implemented

### Phase 1 (December 2024)
- [x] Hero section com título, subtítulo e CTAs
- [x] Navbar sticky com links de navegação
- [x] Todas as 12 seções criadas
- [x] Design responsivo completo
- [x] Animações com Framer Motion

### Phase 2 (Abril 2026)
- [x] Vídeo de fundo na hero section
- [x] Organograma interativo com SVG lines
- [x] 6 Modais de perfil (Thiago, Simone, André, Daniela, Marianna, Giselle)
- [x] Seção Competências com carrossel auto-play e tag cloud
- [x] Seção Capital Humano com dados reais (245 colaboradores)
- [x] Seção Orçamento com dados XLSX (R$ 46.714.391)
- [x] Mapa Leaflet com 7 marcadores geolocalizados
- [x] Seção Gestão Documental com stats e vídeo
- [x] Atos Normativos com 6 categorias e links

### Phase 3 (Abril 2026)
- [x] REFATORAÇÃO: App.js de 2292 linhas para 38 linhas
- [x] 15 componentes modulares extraídos
- [x] 100% dos testes passando (testing agent)

## Prioritized Backlog

### P0 (Critical) - ALL COMPLETED
- [x] Todas as seções implementadas
- [x] Navegação funcional
- [x] Design responsivo
- [x] Refatoração do App.js

### P1 (High Priority) - Pending
- [ ] Substituir "Em construção..." por conteúdo real (4 seções: Gestão da Informação, Iniciativas, Prêmios, Projetos Futuros)
- [ ] Adicionar fotos/modais para membros restantes (GEJUR, etc.)

### P2 (Medium Priority) - Future
- [ ] Formulário de contato
- [ ] SEO meta tags
- [ ] Performance optimization (lazy loading)

### P3 (Low Priority) - Future
- [ ] Modo claro/escuro toggle
- [ ] Analytics integration

## Next Tasks
1. Aguardar conteúdo do usuário para as 4 seções placeholder
2. Adicionar modais de perfil para membros restantes se fornecidos
3. Considerar formulário de contato
