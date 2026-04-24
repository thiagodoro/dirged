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

## File Structure
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
│       ├── OrganogaramaSection.jsx (includes 7 profile modals)
│       ├── AtosNormativosSection.jsx
│       ├── CapitalHumanoSection.jsx
│       ├── OrcamentoSection.jsx
│       ├── MapaSection.jsx (Leaflet integration)
│       ├── GestaoDocumentalSection.jsx
│       ├── GestaoInformacaoSection.jsx (placeholder)
│       ├── IniciativasSection.jsx (Últimas Iniciativas com subseções)
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
- [x] Modal de perfil: Rafaela Carvalho (COBIB) adicionado
- [x] Total: 7 modais de perfil interativos

## Modais de Perfil Implementados
1. Thiago Doro - Diretor Executivo (DIRGED)
2. Simone Meireles - Gerente (GEDOC)
3. André Borges Ribeiro - Assessor Técnico (ASGID)
4. Daniela Fernanda Santos - Gerente (GEDAN)
5. Marianna Levenhagen - Coordenadora (CORCEN)
6. Giselle Cesário da Costa - Coordenadora (COARQ)
7. Rafaela Carvalho - Coordenadora (COBIB)

### Phase 4 (Abril 2026)
- [x] PasswordGate.jsx: Modal com senha "transicao2026", imagem de fundo, logo EJEF
- [x] GestaoInformacaoSection.jsx: Conteúdo completo com carrossel de competências, stats, biblioteca digital
- [x] OrganogaramaSection.jsx: Layout mobile vertical, modais expandidos (Thiago, Vantuir, Claudiciano, André), fotos ajustadas
- [x] MapaSection.jsx: 8 localizações com CORCEN e coordenadas precisas
- [x] CapitalHumanoSection.jsx: Cargos terceirizados em ordem alfabética
- [x] GestaoDocumentalSection.jsx: Modal informativo 84% ocupação galpões (DENGEP)
- [x] Mobile: Scroll horizontal desabilitado, zoom desabilitado, valores orçamento reduzidos, marquee acelerado
- [x] IniciativasSection.jsx: Seção "Últimas Iniciativas" com subseções "Gestão da Informação" e "Gestão Documental"
  - Iniciativa 1: Digitalização dos diários oficiais MG (1943-2010), acordo cooperação 3 poderes, Iron Mountain, timeline

## Prioritized Backlog

### P0 (Critical) - ALL COMPLETED
- [x] Todas as seções implementadas
- [x] Navegação funcional
- [x] Design responsivo
- [x] Refatoração do App.js

### P1 (High Priority) - Pending
- [ ] Substituir "Em construção..." por conteúdo real (3 seções: Prêmios, Projetos Futuros, Gestão Documental sub-iniciativas)
- [ ] Adicionar fotos/modais para membros restantes (Claudiciano, Mauricio, Vantuir, Márcio, Sônia, Bárbara)

### P2 (Medium Priority) - Future
- [ ] Formulário de contato
- [ ] SEO meta tags
- [ ] Performance optimization (lazy loading)

### P3 (Low Priority) - Future
- [ ] Modo claro/escuro toggle
- [ ] Analytics integration
