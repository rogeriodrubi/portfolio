// Dados do portfólio - populados com informações do currículo
export const portfolioData = {
  personal: {
    name: "Rogerio von Czekus Drubi",
    title: "Desenvolvedor Web | AI-Augmented Developer",
    bio: "Graduando em Engenharia da Computação focado em Desenvolvimento Web. Experiência com IA e agentes de automação como ferramentas auxiliares para otimizar o fluxo de codificação e garantir a qualidade técnica das entregas. Com domínio em HTML, CSS e JavaScript, estou me aperfeiçoando no ecossistema React, buscando aplicar o conceito de AI-Augmented Development para construir interfaces modernas e funcionais.",
    photo: "/images/profile.jpg",
    email: "rogerioczekus@gmail.com",
    phone: "+55 (74) 98855-6918",
    location: "Juazeiro, BA - Brazil",
    social: {
      github: "https://github.com/rogeriodrubi",
      linkedin: "https://linkedin.com/in/rogerio-drubi",
      twitter: "",
      instagram: "",
    },
  },
  experience: [
    {
      id: 1,
      company: "UNIVASF - CPA",
      position: "Interno de TI",
      period: "Novembro 2023 - Novembro 2025",
      description:
        "Atuação em desenvolvimento web, automação com IA e desenvolvimento de agentes inteligentes para otimização de processos institucionais.",
      responsibilities: [
        "Desenvolvi fluxos de automação no n8n integrados a LLMs para análise de dados de grandes pesquisas institucionais, reduzindo o tempo de elaboração do relatório anual em 40%",
        "Atuei no desenvolvimento do front da nova plataforma de avaliação para substituir sistemas legados, utilizando Engenharia de Prompt com Taskmaster para gerenciamento de tarefas e mantendo versionamento rigoroso via Git",
        "Implementei agentes de IA para triagem e resposta automática de e-mails, otimizando o fluxo de atendimento da secretaria ao automatizar protocolos padrões e encaminhamentos inteligentes melhorando e acelerando o suporte técnico à comunidade acadêmica",
        "Desenvolvi e mantive sistemas web internos, garantindo alta disponibilidade e melhorias contínuas em funcionalidades acessadas por docentes e equipes técnicas",
      ],
      technologies: [
        "LLMs",
        "Google Sheets",
        "CSV",
        "Gmail API",
        "MySQL",
        "HTML",
        "CSS",
        "WordPress",
        "n8n",
        "PHP",
        "Scrum",
        "Git",
        "Linux",
        "Bash",
      ],
      logo: "/images/univasf-logo.png",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: 95, icon: "FaHtml5" },
        { name: "CSS3", level: 90, icon: "FaCss3Alt" },
        { name: "JavaScript", level: 90, icon: "FaJs" },
        { name: "React", level: 80, icon: "FaReact" },
        { name: "WordPress", level: 75, icon: "FaWordpress" },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Python", level: 75, icon: "FaPython" },
        { name: "MySQL", level: 60, icon: "SiMysql" },
        { name: "PHP", level: 30, icon: "FaPhp" },
      ],
    },
    {
      category: "IA & Automação",
      items: [
        { name: "LLMs", level: 85, icon: "FaCode" },
        { name: "n8n", level: 80, icon: "FaCode" },
        { name: "Deep Learning", level: 75, icon: "FaCode" },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 90, icon: "FaGitAlt" },
        { name: "Scrum", level: 90, icon: "FaProjectDiagram" },
        { name: "Linux", level: 60, icon: "FaLinux" },
        { name: "Bash", level: 75, icon: "FaTerminal" },
        { name: "Google Sheets API", level: 85, icon: "FaCode" },
        { name: "Gmail API", level: 80, icon: "FaCode" },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Site da Imobiliaria Capitale PNZ",
      description:
        "Plataforma imobiliária para compra de imóveis e terrenos. Possui mapa interativo de lotes, galeria de imagens otimizada e integração com banco de dados em tempo real, focando em performance e UX responsiva.",
      image: "/images/project-capitale.jpg",
      technologies: [
        "Next.js 15",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
      ],
      demoUrl: "https://capitalepnz.vercel.app/",
      codeUrl: "https://github.com/rogeriodrubi/capitale",
      featured: true,
    },
    {
      id: 2,
      title: "Plataforma de Avaliação UNIVASF",
      description:
        "Desenvolvimento do front-end da nova plataforma de avaliação institucional para substituir sistemas legados. Utilizando Engenharia de Prompt com Taskmaster para gerenciamento de tarefas e versionamento rigoroso via Git.",
      image: "/images/project-platform.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "Scrum", "Taskmaster"],
      demoUrl: "",
      codeUrl: "",
      featured: false,
    },
    {
      id: 3,
      title: "Detecção de Ponto de Colheita com IA",
      description:
        "Desenvolvi uma rede neural convolucional (CNN) para identificar, por meio de imagens de drones, se uma plantação estava pronta para a colheita. Projeto da disciplina de Deep Learning utilizando técnicas avançadas de aprendizado profundo.",
      image: "/images/project-harvest.jpg",
      technologies: ["Python", "Keras", "Deep Learning", "CNN", "Google Colab"],
      demoUrl: "",
      codeUrl: "https://github.com/rogeriodrubi",
      featured: false,
    },
    {
      id: 4,
      title: "Detecção de Estresse e Doenças em Árvores",
      description:
        "Reproduzi modelo de artigo científico que utilizava imagens de folhas para identificar estresse e possíveis doenças em árvores. Projeto focado em aplicação prática de deep learning para agricultura sustentável.",
      image: "/images/project-disease.jpg",
      technologies: [
        "Python",
        "Keras",
        "Deep Learning",
        "Computer Vision",
        "Google Colab",
      ],
      demoUrl: "",
      codeUrl: "https://github.com/rogeriodrubi",
      featured: false,
    },
    {
      id: 5,
      title: "Aplicativo SIBI-UNIVASF",
      description:
        "Aplicativo oficial do Sistema Integrado de Bibliotecas da universidade, desenvolvido com Flutter e metodologia Scrum. Projeto acadêmico focado em desenvolvimento mobile moderno e práticas ágeis.",
      image: "/images/project-sibi.jpg",
      technologies: ["Flutter", "Dart", "Scrum", "Mobile Development"],
      demoUrl: "",
      codeUrl: "https://github.com/rogeriodrubi",
      featured: false,
    },
    {
      id: 6,
      title: "Aplicativo Caatinga Lens",
      description:
        "Aplicativo criado para o Projeto Escola Verde, com foco em educação ambiental através de tecnologia mobile. Desenvolvido com Flutter utilizando metodologias ágeis de desenvolvimento.",
      image: "/images/project-caatinga.jpg",
      technologies: [
        "Flutter",
        "Dart",
        "Scrum",
        "Mobile Development",
        "Environmental Tech",
      ],
      demoUrl: "",
      codeUrl: "https://github.com/rogeriodrubi",
      featured: false,
    },
  ],
  education: [
    {
      institution: "Universidade Federal do Vale do São Francisco (UNIVASF)",
      course: "Bacharelado em Engenharia da Computação",
      period: "2018 - Presente",
      description:
        "Graduação em andamento com foco em Desenvolvimento Web, Inteligência Artificial e Engenharia de Software.",
    },
  ],
  certifications: [
    {
      name: "AI Automation: Build LLM Apps & AI-Agents with n8n & APIs",
      issuer: "Online Course",
      date: "",
    },
    {
      name: "The Web Developer Bootcamp 2023",
      issuer: "Udemy",
      date: "2023",
    },
    {
      name: "HTML5/CSS3 do Zero",
      issuer: "FreeCodeCamp",
      date: "2021",
    },
    {
      name: "Programa de Extensão Tecnológica – Engenharia de Software na Área da Saúde",
      issuer: "UNIVASF",
      date: "",
    },
    {
      name: "Curso de Python",
      issuer: "Curso em Vídeo (YouTube)",
      date: "2020",
    },
  ],
  languages: [
    { name: "Português", level: "Nativo/C2", icon: "FaFlag" },
    { name: "Inglês", level: "Avançado/C1", icon: "FaFlag" },
    { name: "Espanhol", level: "Básico/A2", icon: "FaFlag" },
  ],
};
