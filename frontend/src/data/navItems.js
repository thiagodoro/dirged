import {
  Home, Briefcase, Network, FileText, Users, DollarSign,
  MapPin, FolderOpen, Database, Lightbulb, Award, Sparkles
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "competencias", label: "Competências", icon: Briefcase },
  { id: "organograma", label: "Organograma", icon: Network },
  { id: "atos-normativos", label: "Atos Normativos", icon: FileText },
  { id: "capital-humano", label: "Capital Humano", icon: Users },
  { id: "orcamento", label: "Orçamento", icon: DollarSign },
  { id: "mapa", label: "Mapa", icon: MapPin },
  { id: "gestao-documental", label: "Gestão Documental", icon: FolderOpen },
  { id: "gestao-informacao", label: "Gestão da Informação", icon: Database },
  { id: "iniciativas", label: "Iniciativas", icon: Lightbulb },
  { id: "premios", label: "Prêmios", icon: Award },
  { id: "projetos", label: "Projetos Futuros", icon: Sparkles },
];

export default navItems;
