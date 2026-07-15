export type Locale = 'es' | 'en' | 'pt';

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
    statusWip: string;
    viewCode: string;
    items: {
      name: string;
      description: string;
      tags: string[];
      repo?: string;
    }[];
  };
  work: {
    label: string;
    title: string;
    intro: string;
    placeholderTitle: string;
    placeholderText: string;
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
      'Backend Tech Lead en Buenos Aires. Construyo sistemas y productos web con PHP, Laravel y AWS. Creador de Nexo Links y Nexo Agenda.',
    nav: { about: 'Sobre mí', products: 'Productos', work: 'Clientes', contact: 'Contacto' },
    hero: {
      kicker: 'Backend Tech Lead · Buenos Aires',
      title: 'Hola, soy Alvaro Carrizales',
      subtitle:
        'Construyo sistemas y productos web que resuelven problemas de verdad. Prefiero resolver bien antes que resolver rápido.',
      ctaProjects: 'Ver proyectos',
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
      label: 'productos',
      title: 'Productos propios',
      intro: 'Cosas que estoy construyendo por mi cuenta.',
      statusWip: 'En desarrollo',
      viewCode: 'Ver código',
      items: [
        {
          name: 'Nexo Links',
          description:
            'Plataforma link-in-bio self-hosted. Tus enlaces, tu dominio y analíticas sin cookies.',
          tags: ['Laravel', 'PHP', 'Self-hosted'],
          repo: 'https://github.com/alvarocdev-git/nexo-links',
        },
        {
          name: 'Nexo Agenda',
          description:
            'Gestión de agenda y reservas para profesionales y pequeños negocios.',
          tags: ['Laravel', 'PHP', 'SaaS'],
        },
      ],
    },
    work: {
      label: 'clientes',
      title: 'Trabajo para clientes',
      intro: 'Proyectos que desarrollé para clientes, contados como casos de estudio.',
      placeholderTitle: 'Caso de estudio en preparación',
      placeholderText:
        'Estoy documentando este proyecto: el problema del cliente, la solución y el resultado. Pronto estará disponible.',
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
      'Backend Tech Lead based in Buenos Aires. I build web systems and products with PHP, Laravel and AWS. Creator of Nexo Links and Nexo Agenda.',
    nav: { about: 'About', products: 'Products', work: 'Clients', contact: 'Contact' },
    hero: {
      kicker: 'Backend Tech Lead · Buenos Aires',
      title: "Hi, I'm Alvaro Carrizales",
      subtitle:
        'I build web systems and products that solve real problems. I would rather solve things well than solve them fast.',
      ctaProjects: 'View projects',
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
      label: 'products',
      title: 'Own products',
      intro: "Things I'm building on my own.",
      statusWip: 'In development',
      viewCode: 'View code',
      items: [
        {
          name: 'Nexo Links',
          description:
            'Self-hosted link-in-bio platform. Your links, your domain, cookieless analytics.',
          tags: ['Laravel', 'PHP', 'Self-hosted'],
          repo: 'https://github.com/alvarocdev-git/nexo-links',
        },
        {
          name: 'Nexo Agenda',
          description:
            'Scheduling and booking management for professionals and small businesses.',
          tags: ['Laravel', 'PHP', 'SaaS'],
        },
      ],
    },
    work: {
      label: 'clients',
      title: 'Client work',
      intro: 'Projects I built for clients, told as case studies.',
      placeholderTitle: 'Case study in progress',
      placeholderText:
        "I'm documenting this project: the client's problem, the solution and the outcome. It will be available soon.",
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
      'Backend Tech Lead em Buenos Aires. Construo sistemas e produtos web com PHP, Laravel e AWS. Criador do Nexo Links e do Nexo Agenda.',
    nav: { about: 'Sobre mim', products: 'Produtos', work: 'Clientes', contact: 'Contato' },
    hero: {
      kicker: 'Backend Tech Lead · Buenos Aires',
      title: 'Olá, sou Alvaro Carrizales',
      subtitle:
        'Construo sistemas e produtos web que resolvem problemas de verdade. Prefiro resolver bem a resolver rápido.',
      ctaProjects: 'Ver projetos',
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
      label: 'produtos',
      title: 'Produtos próprios',
      intro: 'Coisas que estou construindo por conta própria.',
      statusWip: 'Em desenvolvimento',
      viewCode: 'Ver código',
      items: [
        {
          name: 'Nexo Links',
          description:
            'Plataforma link-in-bio self-hosted. Seus links, seu domínio e análises sem cookies.',
          tags: ['Laravel', 'PHP', 'Self-hosted'],
          repo: 'https://github.com/alvarocdev-git/nexo-links',
        },
        {
          name: 'Nexo Agenda',
          description:
            'Gestão de agenda e reservas para profissionais e pequenos negócios.',
          tags: ['Laravel', 'PHP', 'SaaS'],
        },
      ],
    },
    work: {
      label: 'clientes',
      title: 'Trabalho para clientes',
      intro: 'Projetos que desenvolvi para clientes, contados como estudos de caso.',
      placeholderTitle: 'Estudo de caso em preparação',
      placeholderText:
        'Estou documentando este projeto: o problema do cliente, a solução e o resultado. Em breve estará disponível.',
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
  localePaths: { es: '/', en: '/en/', pt: '/pt/' } as Record<Locale, string>,
};
