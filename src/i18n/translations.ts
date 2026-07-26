export type Locale = 'es' | 'en' | 'pt';

export type ToolKey =
  | 'nexotools'
  | 'nexoid'
  | 'nexolinks'
  | 'nexoagenda'
  | 'nexoshort'
  | 'nexoevents';

// One card in the Nexo ecosystem grid. `status` is truthful: a tool is either
// 'live' (real demo online) or 'soon' (registered, not yet public — no demo link).
// `demo` is the stable registry URL and is only set for live tools. The code link
// always points to the GitHub org (site.nexoGithubOrg), never to guessed repo URLs.
export interface EcosystemTool {
  key: ToolKey;
  name: string;
  description: string;
  tags: string[];
  status: 'live' | 'soon';
  demo?: string;
}

// Scaffold for the (currently hidden) client carousel. Each client links directly
// to its public production site; the case-study fields feed the optional details
// panel. Real data goes here later — never invent clients.
export interface ClientCase {
  name: string;
  tagline: string;
  url: string;
  problem?: string;
  solution?: string;
  outcome?: string;
}

export interface Translation {
  lang: string;
  metaTitle: string;
  metaDescription: string;
  nav: { about: string; products: string; work: string; contact: string };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    stackLabel: string;
    languagesLabel: string;
    languages: string;
  };
  products: {
    label: string;
    title: string;
    intro: string;
    openSource: string;
    statusLive: string;
    statusSoon: string;
    viewDemo: string;
    viewCode: string;
    browseOrg: string;
    items: EcosystemTool[];
  };
  work: {
    label: string;
    title: string;
    intro: string;
    visitSite: string;
    caseStudies: string;
    emptyState: string;
    placeholderTitle: string;
    placeholderText: string;
    clients: ClientCase[];
  };
  contact: {
    label: string;
    title: string;
    text: string;
    emailCta: string;
  };
  footer: { madeWith: string };
}

export const translations: Record<Locale, Translation> = {
  es: {
    lang: 'es',
    metaTitle: 'Alvaro Carrizales — Backend Tech Lead | alvarocdev',
    metaDescription:
      'Backend Tech Lead en Buenos Aires. Construyo sistemas y productos web — del backend a la infraestructura.',
    nav: { about: 'Sobre mí', products: 'Ecosistema', work: 'Clientes', contact: 'Contacto' },
    hero: {
      kicker: 'Backend Tech Lead · Buenos Aires',
      title: 'Hola, soy Alvaro Carrizales',
      subtitle:
        'Construyo sistemas y productos web que resuelven problemas de verdad. Prefiero resolver bien antes que resolver rápido.',
      ctaProjects: 'Ver el ecosistema',
      ctaContact: 'Contacto',
    },
    about: {
      label: 'sobre-mi',
      title: 'Sobre mí',
      paragraphs: [
        'Soy colombiano y vivo en Buenos Aires desde hace varios años. Actualmente soy Tech Lead de backend en House of CB, una marca de moda del Reino Unido con e-commerce global.',
        'Soy de perfil orquesta: mi base es backend con PHP y Laravel, pero también me muevo con infraestructura, integraciones y todo lo que haga falta para que el producto salga adelante.',
        'Creo que enseñar es la mejor forma de aprender, y que un problema bien resuelto vale más que diez parches rápidos.',
      ],
      stackLabel: 'Stack habitual',
      languagesLabel: 'Idiomas',
      languages: 'Español · Inglés · Portugués',
    },
    products: {
      label: 'ecosistema',
      title: 'El ecosistema Nexo',
      intro:
        'Nexo es un ecosistema de herramientas web pequeñas y honestas que construyo en abierto: sin cookies, sin trackers y con una sola cuenta para todas. Seis piezas que resuelven cosas concretas y conversan entre sí.',
      openSource:
        'Todo es open source y self-hosteable: el software que usás a diario debería poder auditarse y correr en tu propia infraestructura.',
      statusLive: 'En vivo',
      statusSoon: 'Pronto',
      viewDemo: 'Ver demo',
      viewCode: 'Código',
      browseOrg: 'Ver toda la organización en GitHub',
      items: [
        {
          key: 'nexotools',
          name: 'Nexo Tools',
          description:
            'El hub abierto del ecosistema: desde acá lanzás y administrás todas tus herramientas Nexo. Es open source para que cualquiera pueda self-hostear su propio panel.',
          tags: ['Laravel', 'Blade + Alpine', 'Cookieless'],
          status: 'live',
          demo: 'https://nexotools.alvarocdev.com',
        },
        {
          key: 'nexoid',
          name: 'Nexo ID',
          description:
            'Inicio de sesión único (OpenID Connect) para todo el ecosistema: una sola cuenta para todas las tools. Abierto porque tu identidad no debería depender de un tercero cerrado.',
          tags: ['Laravel', 'OpenID Connect', 'Passport'],
          status: 'live',
          demo: 'https://nexoid.alvarocdev.com',
        },
        {
          key: 'nexolinks',
          name: 'Nexo Links',
          description:
            'Tu link-in-bio con tu dominio y métricas sin cookies. Open source y self-hosteable: tus enlaces y tus datos son tuyos.',
          tags: ['Laravel', 'Tailwind', 'Cookieless'],
          status: 'live',
          demo: 'https://nexolinks.alvarocdev.com',
        },
        {
          key: 'nexoagenda',
          name: 'Nexo Agenda',
          description:
            'Recibí reservas para tu negocio en minutos, sin comisiones. Abierto para que puedas correrlo en tu propia infraestructura.',
          tags: ['Laravel', 'Blade + Alpine', 'Tailwind'],
          status: 'live',
          demo: 'https://nexoagenda.alvarocdev.com',
        },
        {
          key: 'nexoshort',
          name: 'Nexo Short',
          description:
            'Acortador de enlaces con métricas sin cookies ni trackers. Open source para que puedas auditar a dónde apunta cada link.',
          tags: ['Laravel', 'Cookieless', 'Tailwind'],
          status: 'soon',
        },
        {
          key: 'nexoevents',
          name: 'Nexo Events',
          description:
            'Creá eventos gratis y validá entradas con QR desde el móvil. Abierto para que la gestión de tus entradas no viva en una caja negra.',
          tags: ['Laravel', 'QR', 'Tailwind'],
          status: 'soon',
        },
      ],
    },
    work: {
      label: 'clientes',
      title: 'Trabajo para clientes',
      intro: 'Proyectos que desarrollé para clientes, con enlace directo a su sitio en producción.',
      visitSite: 'Visitar sitio',
      caseStudies: 'Ver casos de estudio',
      emptyState: 'Casos de estudio en preparación.',
      placeholderTitle: 'Caso de estudio en preparación',
      placeholderText:
        'Estoy documentando este proyecto: el problema del cliente, la solución y el resultado. Pronto estará disponible.',
      clients: [],
    },
    contact: {
      label: 'contacto',
      title: 'Contacto',
      text: '¿Tienes un proyecto, una idea o simplemente quieres charlar? Escríbeme.',
      emailCta: 'Enviar email',
    },
    footer: { madeWith: 'Sin cookies, sin trackers.' },
  },

  en: {
    lang: 'en',
    metaTitle: 'Alvaro Carrizales — Backend Tech Lead | alvarocdev',
    metaDescription:
      'Backend Tech Lead based in Buenos Aires. I build web systems and products — from the backend to the infrastructure.',
    nav: { about: 'About', products: 'Ecosystem', work: 'Clients', contact: 'Contact' },
    hero: {
      kicker: 'Backend Tech Lead · Buenos Aires',
      title: "Hi, I'm Alvaro Carrizales",
      subtitle:
        'I build web systems and products that solve real problems. I would rather solve things well than solve them fast.',
      ctaProjects: 'See the ecosystem',
      ctaContact: 'Contact',
    },
    about: {
      label: 'about',
      title: 'About me',
      paragraphs: [
        "I'm Colombian and have been living in Buenos Aires for several years. I currently work as a backend Tech Lead at House of CB, a UK fashion brand with a global e-commerce operation.",
        "I'm a generalist at heart: my foundation is backend with PHP and Laravel, but I'm also comfortable with infrastructure, integrations, and whatever it takes to ship the product.",
        'I believe teaching is the best way to learn, and that one problem solved well is worth more than ten quick patches.',
      ],
      stackLabel: 'Usual stack',
      languagesLabel: 'Languages',
      languages: 'Spanish · English · Portuguese',
    },
    products: {
      label: 'ecosystem',
      title: 'The Nexo ecosystem',
      intro:
        'Nexo is an ecosystem of small, honest web tools I build in the open: no cookies, no trackers, and a single account across all of them. Six pieces that solve concrete problems and talk to each other.',
      openSource:
        "It's all open source and self-hostable: the software you use every day should be auditable and run on your own infrastructure.",
      statusLive: 'Live',
      statusSoon: 'Soon',
      viewDemo: 'View demo',
      viewCode: 'Code',
      browseOrg: 'Browse the whole organization on GitHub',
      items: [
        {
          key: 'nexotools',
          name: 'Nexo Tools',
          description:
            'The open hub of the ecosystem: launch and manage all your Nexo tools from one place. Open source so anyone can self-host their own dashboard.',
          tags: ['Laravel', 'Blade + Alpine', 'Cookieless'],
          status: 'live',
          demo: 'https://nexotools.alvarocdev.com',
        },
        {
          key: 'nexoid',
          name: 'Nexo ID',
          description:
            "Single sign-on (OpenID Connect) across the whole ecosystem: one account for every tool. Open because your identity shouldn't depend on a closed third party.",
          tags: ['Laravel', 'OpenID Connect', 'Passport'],
          status: 'live',
          demo: 'https://nexoid.alvarocdev.com',
        },
        {
          key: 'nexolinks',
          name: 'Nexo Links',
          description:
            'Your link-in-bio on your own domain, with cookieless analytics. Open source and self-hostable: your links and your data stay yours.',
          tags: ['Laravel', 'Tailwind', 'Cookieless'],
          status: 'live',
          demo: 'https://nexolinks.alvarocdev.com',
        },
        {
          key: 'nexoagenda',
          name: 'Nexo Agenda',
          description:
            'Take bookings for your business in minutes, with no commissions. Open so you can run it on your own infrastructure.',
          tags: ['Laravel', 'Blade + Alpine', 'Tailwind'],
          status: 'live',
          demo: 'https://nexoagenda.alvarocdev.com',
        },
        {
          key: 'nexoshort',
          name: 'Nexo Short',
          description:
            'A link shortener with cookieless, tracker-free metrics. Open source so you can audit where every link points.',
          tags: ['Laravel', 'Cookieless', 'Tailwind'],
          status: 'soon',
        },
        {
          key: 'nexoevents',
          name: 'Nexo Events',
          description:
            'Create events for free and validate tickets by QR from your phone. Open so your ticketing never lives in a black box.',
          tags: ['Laravel', 'QR', 'Tailwind'],
          status: 'soon',
        },
      ],
    },
    work: {
      label: 'clients',
      title: 'Client work',
      intro: 'Projects I built for clients, with a direct link to their live site.',
      visitSite: 'Visit site',
      caseStudies: 'View case studies',
      emptyState: 'Case studies in progress.',
      placeholderTitle: 'Case study in progress',
      placeholderText:
        "I'm documenting this project: the client's problem, the solution and the outcome. It will be available soon.",
      clients: [],
    },
    contact: {
      label: 'contact',
      title: 'Contact',
      text: 'Got a project, an idea, or just want to chat? Drop me a line.',
      emailCta: 'Send email',
    },
    footer: { madeWith: 'No cookies, no trackers.' },
  },

  pt: {
    lang: 'pt',
    metaTitle: 'Alvaro Carrizales — Backend Tech Lead | alvarocdev',
    metaDescription:
      'Backend Tech Lead em Buenos Aires. Construo sistemas e produtos web — do backend à infraestrutura.',
    nav: { about: 'Sobre mim', products: 'Ecossistema', work: 'Clientes', contact: 'Contato' },
    hero: {
      kicker: 'Backend Tech Lead · Buenos Aires',
      title: 'Olá, sou Alvaro Carrizales',
      subtitle:
        'Construo sistemas e produtos web que resolvem problemas de verdade. Prefiro resolver bem a resolver rápido.',
      ctaProjects: 'Ver o ecossistema',
      ctaContact: 'Contato',
    },
    about: {
      label: 'sobre-mim',
      title: 'Sobre mim',
      paragraphs: [
        'Sou colombiano e moro em Buenos Aires há vários anos. Atualmente sou Tech Lead de backend na House of CB, uma marca de moda do Reino Unido com e-commerce global.',
        'Tenho um perfil generalista: minha base é backend com PHP e Laravel, mas também me viro bem com infraestrutura, integrações e tudo o que for preciso para o produto sair.',
        'Acredito que ensinar é a melhor forma de aprender, e que um problema bem resolvido vale mais do que dez remendos rápidos.',
      ],
      stackLabel: 'Stack habitual',
      languagesLabel: 'Idiomas',
      languages: 'Espanhol · Inglês · Português',
    },
    products: {
      label: 'ecossistema',
      title: 'O ecossistema Nexo',
      intro:
        'Nexo é um ecossistema de ferramentas web pequenas e honestas que eu construo em aberto: sem cookies, sem trackers e com uma só conta para todas. Seis peças que resolvem coisas concretas e conversam entre si.',
      openSource:
        'Tudo é open source e self-hospedável: o software que você usa todo dia deveria poder ser auditado e rodar na sua própria infraestrutura.',
      statusLive: 'No ar',
      statusSoon: 'Em breve',
      viewDemo: 'Ver demo',
      viewCode: 'Código',
      browseOrg: 'Ver a organização inteira no GitHub',
      items: [
        {
          key: 'nexotools',
          name: 'Nexo Tools',
          description:
            'O hub aberto do ecossistema: lance e administre todas as suas ferramentas Nexo em um só lugar. Open source para que qualquer um possa self-hospedar o próprio painel.',
          tags: ['Laravel', 'Blade + Alpine', 'Cookieless'],
          status: 'live',
          demo: 'https://nexotools.alvarocdev.com',
        },
        {
          key: 'nexoid',
          name: 'Nexo ID',
          description:
            'Login único (OpenID Connect) para todo o ecossistema: uma só conta para todas as ferramentas. Aberto porque a sua identidade não deveria depender de um terceiro fechado.',
          tags: ['Laravel', 'OpenID Connect', 'Passport'],
          status: 'live',
          demo: 'https://nexoid.alvarocdev.com',
        },
        {
          key: 'nexolinks',
          name: 'Nexo Links',
          description:
            'Seu link-in-bio no seu domínio, com métricas sem cookies. Open source e self-hospedável: seus links e seus dados continuam seus.',
          tags: ['Laravel', 'Tailwind', 'Cookieless'],
          status: 'live',
          demo: 'https://nexolinks.alvarocdev.com',
        },
        {
          key: 'nexoagenda',
          name: 'Nexo Agenda',
          description:
            'Receba reservas para o seu negócio em minutos, sem comissões. Aberto para você rodar na sua própria infraestrutura.',
          tags: ['Laravel', 'Blade + Alpine', 'Tailwind'],
          status: 'live',
          demo: 'https://nexoagenda.alvarocdev.com',
        },
        {
          key: 'nexoshort',
          name: 'Nexo Short',
          description:
            'Encurtador de links com métricas sem cookies nem trackers. Open source para você auditar para onde cada link aponta.',
          tags: ['Laravel', 'Cookieless', 'Tailwind'],
          status: 'soon',
        },
        {
          key: 'nexoevents',
          name: 'Nexo Events',
          description:
            'Crie eventos de graça e valide ingressos por QR pelo celular. Aberto para que a gestão dos seus ingressos nunca fique em uma caixa preta.',
          tags: ['Laravel', 'QR', 'Tailwind'],
          status: 'soon',
        },
      ],
    },
    work: {
      label: 'clientes',
      title: 'Trabalho para clientes',
      intro: 'Projetos que desenvolvi para clientes, com link direto para o site em produção.',
      visitSite: 'Visitar site',
      caseStudies: 'Ver estudos de caso',
      emptyState: 'Estudos de caso em preparação.',
      placeholderTitle: 'Estudo de caso em preparação',
      placeholderText:
        'Estou documentando este projeto: o problema do cliente, a solução e o resultado. Em breve estará disponível.',
      clients: [],
    },
    contact: {
      label: 'contato',
      title: 'Contato',
      text: 'Tem um projeto, uma ideia ou só quer conversar? Me escreva.',
      emailCta: 'Enviar email',
    },
    footer: { madeWith: 'Sem cookies, sem trackers.' },
  },
};

export const site = {
  email: 'contact@alvarocdev.com',
  github: 'https://github.com/alvarocdev-git',
  linkedin: 'https://www.linkedin.com/in/alvarocdev/',
  // Nexo ecosystem entry points (see nexotools' config/nexo-ecosystem.php).
  nexoHub: 'https://nexotools.alvarocdev.com',
  nexoGithubOrg: 'https://github.com/nexo-tools',
  localePaths: { es: '/', en: '/en/', pt: '/pt/' } as Record<Locale, string>,
};
