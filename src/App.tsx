import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Zap,
  Settings,
  Users,
  Award,
  Play,
} from 'lucide-react';

const Waveform = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-end gap-[3px] ${className}`}>
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="w-[3px] bg-primary rounded-full wave-bar"
        style={{
          height: `${12 + (i % 3) * 8}px`,
          animationDelay: `${i * 0.1}s`,
          animationDuration: `${0.8 + (i % 3) * 0.2}s`,
        }}
      />
    ))}
  </div>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Stack', href: '#stack' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Metodologia', href: '#metodologia' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-lg border-b border-dark-500/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors" />
            <Waveform />
          </div>
          <span className="text-xl font-bold tracking-tight font-display">
            emotion<span className="text-primary">lab</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary text-sm py-3 px-6">
            Fale Conosco
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-800 border-b border-dark-500/50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" className="btn-primary text-center mt-2">
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent" />

        {/* Waveform texture behind the content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <div className="flex items-end gap-1 w-full px-8" style={{ height: '60%' }}>
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-primary rounded-full wave-bar"
                style={{
                  height: `${15 + Math.sin(i * 0.3) * 50 + Math.random() * 35}%`,
                  animationDelay: `${i * 0.04}s`,
                  animationDuration: `${1.2 + (i % 5) * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-dark-700/80 backdrop-blur-sm border border-dark-500/50 rounded-full px-4 py-2 mb-10">
          <Zap size={14} className="text-primary" />
          <span className="text-xs text-gray-300 tracking-widest uppercase">Tecnologia Audiovisual de Ponta</span>
        </div>

        <h1 className="font-display mb-6 leading-[1.05] tracking-tight">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white/90">
            Transformamos
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient glow-text">
            Eventos
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white/90">
            em <span className="font-bold text-gradient glow-text">Experiências</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-body font-light">
          Soluções completas de sonorização, iluminação, projeção e transmissão
          para eventos que marcam presença.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contato" className="btn-primary flex items-center gap-2 group">
            Solicitar Orçamento
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="btn-secondary flex items-center gap-2">
            <Play size={16} />
            Ver Portfólio
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1.5">
          <div className="w-0.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// ─── Stats ────────────────────────────────────────────────────────────────────
const Stats = () => {
  const stats = [
    { number: '500+', label: 'Eventos Realizados' },
    { number: '12', label: 'Anos de Experiência' },
    { number: '50+', label: 'Marcas Parceiras' },
    { number: '98%', label: 'Clientes Satisfeitos' },
  ];

  return (
    <section className="relative py-14 bg-dark-800 border-y border-dark-500/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-gray-500 text-sm tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Services ─────────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Sonorização',
      description: 'Sistemas de áudio profissional para eventos de qualquer porte. Caixas line-array, monitores, microfones e mesas de som digitais.',
      features: ['Line Array JBL / L-Acoustics', 'Mesas Digitais Yamaha / DiGiCo', 'Monitoração In-Ear'],
    },
    {
      number: '02',
      title: 'Iluminação',
      description: 'Design de iluminação cênica e arquitetural. Moving heads, lasers, LEDs e controle DMX para espetáculos inesquecíveis.',
      features: ['Moving Heads Robe / Chauvet', 'Lasers e Efeitos Especiais', 'Design 3D Previz'],
    },
    {
      number: '03',
      title: 'Projeção & LED',
      description: 'Telas de LED de alta resolução, projetores laser e video walls. Mapeamento de projeção e conteúdo digital.',
      features: ['Telas LED P1.9 – P3.9', 'Projetores Laser 4K', 'Video Mapping'],
    },
    {
      number: '04',
      title: 'Transmissão',
      description: 'Live streaming multi-plataforma com qualidade broadcast. Switchers, câmeras PTZ, gráficos e integração com redes sociais.',
      features: ['Switchers Blackmagic / ATEM', 'Câmeras PTZ 4K', 'Streaming RTMP / SRT'],
    },
  ];

  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/4 via-transparent to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Settings size={16} />
            <span className="text-xs uppercase tracking-widest">Nossos Serviços</span>
          </div>
          <h2 className="section-title">
            Soluções <span className="text-gradient">Completas</span>
          </h2>
        </div>

        {/* Asymmetric grid: 1 large + 3 smaller */}
        <div className="grid lg:grid-cols-3 gap-6" style={{ gridTemplateRows: 'auto auto auto' }}>
          {/* Large card – service 0 */}
          <div
            className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3
                       card p-10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            <span className="absolute top-6 right-8 text-[120px] font-display font-black text-primary/5 leading-none select-none group-hover:text-primary/8 transition-colors">
              {services[0].number}
            </span>
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {services[0].title}
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-lg font-body">
                {services[0].description}
              </p>
              <ul className="space-y-3">
                {services[0].features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Small cards – services 1, 2, 3 */}
          {services.slice(1).map((service, idx) => (
            <div
              key={idx}
              className={`card p-7 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300
                ${idx === 0 ? 'lg:col-start-3 lg:row-start-1' : ''}
                ${idx === 1 ? 'lg:col-start-3 lg:row-start-2' : ''}
                ${idx === 2 ? 'lg:col-start-1 lg:col-end-4 lg:row-start-3' : ''}
              `}
            >
              <span className="absolute top-4 right-6 text-7xl font-display font-black text-primary/5 leading-none select-none group-hover:text-primary/10 transition-colors">
                {service.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 font-body">
                  {service.description}
                </p>
                {idx === 2 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.features.map((f, i) => (
                      <span key={i} className="text-xs text-gray-400 border border-dark-500/60 rounded-full px-3 py-1">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Tech Stack Ticker ────────────────────────────────────────────────────────
const TechStack = () => {
  const rows = [
    {
      label: 'Áudio',
      brands: ['JBL', 'L-Acoustics', 'Yamaha', 'DiGiCo', 'Sennheiser', 'Shure', 'dBTechnologies', 'Powersoft'],
    },
    {
      label: 'Iluminação',
      brands: ['Robe', 'Chauvet', 'Martin', 'Elation', 'ADJ', 'Astera', 'Ayrton', 'Claypaky'],
    },
    {
      label: 'Vídeo & LED',
      brands: ['Sony', 'Christie', 'Absen', 'Leyard', 'Blackmagic', 'Ross', 'Panasonic', 'NEC'],
    },
    {
      label: 'Software',
      brands: ['grandMA3', 'QLab', 'Resolume', 'vMix', 'OBS', 'WYSIWYG', 'Capture', 'Hog 4'],
    },
  ];

  return (
    <section id="stack" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="inline-flex items-center gap-2 text-primary mb-4">
          <Star size={16} />
          <span className="text-xs uppercase tracking-widest">Stack Tecnologia</span>
        </div>
        <h2 className="section-title">
          Equipamentos de <span className="text-gradient">Potência</span>
        </h2>
      </div>

      <div className="space-y-6 ticker-wrapper">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex items-center gap-6 overflow-hidden">
            <span className="text-xs font-display font-bold text-primary/60 uppercase tracking-widest shrink-0 pl-6 w-28">
              {row.label}
            </span>
            <div className="overflow-hidden flex-1">
              <div
                className="flex gap-4 ticker-track animate-ticker"
                style={{ animationDirection: rowIdx % 2 === 0 ? 'normal' : 'reverse' }}
              >
                {/* Duplicate for seamless loop */}
                {[...row.brands, ...row.brands].map((brand, i) => (
                  <span
                    key={i}
                    className="shrink-0 px-5 py-2.5 bg-dark-700/60 border border-dark-500/40 rounded-full text-sm font-medium text-gray-300 hover:border-primary/50 hover:text-primary transition-all cursor-default whitespace-nowrap"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Portfolio ────────────────────────────────────────────────────────────────
const Portfolio = () => {
  const projects = [
    {
      title: 'Congresso Nacional de Tecnologia',
      category: 'Evento Corporativo',
      image: 'https://images.pexels.com/photos/2774566/pexels-photo-2774566.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Festival de Música Eletrônica',
      category: 'Show ao Vivo',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Lançamento de Produto Automotivo',
      category: 'Evento Corporativo',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Casamento de Luxo',
      category: 'Evento Social',
      image: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Live Streaming Festival',
      category: 'Transmissão',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Conferência Internacional',
      category: 'Evento Corporativo',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const ProjectCard = ({ project, className = '', tall = false }: { project: typeof projects[0]; className?: string; tall?: boolean }) => (
    <div className={`group relative overflow-hidden rounded-2xl bg-dark-700 cursor-pointer ${tall ? 'aspect-[3/4]' : 'aspect-[4/3]'} ${className}`}>
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.category}
        </span>
        <h3 className="text-xl font-display font-bold text-white">
          {project.title}
        </h3>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Award size={16} />
            <span className="text-xs uppercase tracking-widest">Portfólio</span>
          </div>
          <h2 className="section-title">
            Projetos <span className="text-gradient">em Destaque</span>
          </h2>
        </div>

        <div className="space-y-6">
          {/* Asymmetric row: 1 tall left + 2 stacked right */}
          <div className="grid lg:grid-cols-2 gap-6">
            <ProjectCard project={projects[0]} tall />
            <div className="grid gap-6">
              <ProjectCard project={projects[1]} />
              <ProjectCard project={projects[2]} />
            </div>
          </div>

          {/* Equal row: 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(3).map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Methodology – Horizontal Timeline ────────────────────────────────────────
const Methodology = () => {
  const steps = [
    {
      number: '01',
      title: 'Briefing',
      description: 'Reunião inicial para entender necessidades, público-alvo, local e objetivos do evento.',
      icon: Users,
    },
    {
      number: '02',
      title: 'Design',
      description: 'Projeto técnico com plantas 3D, listas de equipamentos e diagramas de conexão.',
      icon: Settings,
    },
    {
      number: '03',
      title: 'Montagem',
      description: 'Instalação profissional com equipe treinada. Testes e ajustes para perfeição.',
      icon: Zap,
    },
    {
      number: '04',
      title: 'Execução',
      description: 'Operação do evento com suporte dedicado e monitoramento em tempo real.',
      icon: Play,
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <ChevronRight size={16} />
            <span className="text-xs uppercase tracking-widest">Metodologia</span>
          </div>
          <h2 className="section-title">
            Nosso <span className="text-gradient">Processo</span>
          </h2>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[3.5rem] right-[3.5rem] h-px bg-dark-500/50 z-0">
            <div className="h-full bg-gradient-to-r from-primary/70 to-primary/20 timeline-line" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="group flex flex-col items-start lg:items-center">
                {/* Circle node */}
                <div className="w-16 h-16 rounded-full bg-dark-800 border-2 border-dark-500/60 group-hover:border-primary flex items-center justify-center mb-6 relative z-10 transition-colors duration-300">
                  <span className="font-display font-bold text-gray-400 group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors lg:text-center">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body lg:text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── CTA – Two columns ────────────────────────────────────────────────────────
const CTA = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text + contacts */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-6">
              <Zap size={16} />
              <span className="text-xs uppercase tracking-widest">Contato</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Pronto para
              <br />
              <span className="text-gradient glow-text">Começar?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-body font-light max-w-md">
              Entre em contato e solicite um orçamento personalizado. Nossa equipe está pronta para transformar sua visão em realidade.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contato@emotionlab.com.br"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-dark-700 border border-dark-500/50 rounded-xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Mail size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-gray-300 group-hover:text-primary transition-colors text-sm">
                  contato@emotionlab.com.br
                </span>
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-dark-700 border border-dark-500/50 rounded-xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Phone size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-gray-300 group-hover:text-primary transition-colors text-sm">
                  +55 11 99999-9999
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-dark-700 border border-dark-500/50 rounded-xl flex items-center justify-center">
                  <MapPin size={18} className="text-gray-500" />
                </div>
                <span className="text-gray-500 text-sm">São Paulo, SP — Brasil</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="card p-8">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Nome</label>
                  <input
                    type="text"
                    className="w-full bg-dark-800 border border-dark-500/50 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-gray-700 font-body"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    className="w-full bg-dark-800 border border-dark-500/50 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-gray-700 font-body"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Tipo de Evento</label>
                <select className="w-full bg-dark-800 border border-dark-500/50 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors font-body">
                  <option>Evento Corporativo</option>
                  <option>Show ao Vivo</option>
                  <option>Evento Social</option>
                  <option>Transmissão / Streaming</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full bg-dark-800 border border-dark-500/50 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-gray-700 font-body"
                  placeholder="Conte-nos sobre seu evento..."
                />
              </div>
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group">
                Enviar Mensagem
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-500/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                <Waveform />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                emotion<span className="text-primary">lab</span>
              </span>
            </div>
            <p className="text-gray-500 mb-6 max-w-md text-sm font-body leading-relaxed">
              Transformando eventos em experiências inesquecíveis através de tecnologia audiovisual de ponta.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-dark-700 rounded-lg flex items-center justify-center text-gray-500 hover:text-primary hover:bg-dark-600 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-dark-700 rounded-lg flex items-center justify-center text-gray-500 hover:text-primary hover:bg-dark-600 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-dark-700 rounded-lg flex items-center justify-center text-gray-500 hover:text-primary hover:bg-dark-600 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Serviços', 'Portfólio', 'Stack', 'Metodologia', 'Contato'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone size={14} className="text-primary shrink-0" />
                +55 11 99999-9999
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail size={14} className="text-primary shrink-0" />
                contato@emotionlab.com.br
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <MapPin size={14} className="text-primary shrink-0" />
                São Paulo, SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 emotionlab. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <TechStack />
        <Portfolio />
        <Methodology />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
