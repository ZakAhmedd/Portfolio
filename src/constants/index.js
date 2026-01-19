export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Forever - Clothing Ecommerce Website',
    desc: 'Forever is a clothing ecommerce website that allows you to view and buy clothing items.',
    subdesc:
      'Payments are handled by Stripe. The platform contains both backend and frontend code. Built with Node.js, Express.js, MongoDB, Tailwind and React.',
    href: 'full-stack-ecom-app-pq5m.onrender.com',
    texture: '/textures/project/project6.png',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/Node.js.png',
      },
      {
        id: 3,
        name: 'Tailwind',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/MongoDB.png',
      },
    ],
  },
  {
    title: 'Chat App - Realtime Messaging',
    desc: 'A real time messaging application that allows you to chat with other users.',
    subdesc:
      'Live messages handled via Socket.io. Custom themes with daisyUi. The platform contains both backend and frontend code. Built with Node.js, Express.js, MongoDB, React and Tailwind.',
    href: 'fullstack-chat-app-vmlh.onrender.com',
    texture: '/textures/project/project7.png',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/Node.js.png',
      },
      {
        id: 3,
        name: 'Tailwind',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/MongoDB.png',
      },
    ],
  },
  {
    title: 'SaaS App - AI Companions',
    desc: 'Learn more about your chosen subject with your AI companion.',
    subdesc:
      'Backend built using Clerk, Supabase and Vapi and the Frontend built using Next.js and Tailwind.',
    texture: '/textures/project/project8.png',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: 'assets/nextlogo.png',
      },
      {
        id: 3,
        name: 'Tailwind',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Supabase',
        path: '/assets/Supabase.png',
      },
      {
        id: 5,
        name: 'Vapi',
        path: '/assets/vapi.svg',
      },
      {
        id: 6,
        name: 'Clerk',
        path: '/assets/clerklogo.svg',
      },
    ],
  },
  {
    title: 'Natours - Tour Booking Platform',
    desc: 'Natours is an application that allows you to view and book tours that are hosted all around the world!',
    subdesc:
      'Bookings are handled by Stripe. The platform contains both backend and frontend code. Built with Node.js, Express.js, MongoDB, Pug, and Postman.',
    href: 'https://natours-55q3.onrender.com/',
    texture: '/textures/project/project1.png',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/Node.js.png',
      },
      {
        id: 3,
        name: 'Postman',
        path: '/assets/Postman.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/MongoDB.png',
      },
    ],
  },
  {
    title: 'Chef Claude - AI Recipe Generator',
    desc: 'Chef Claude will generate you a food recipe based of your inputted ingredients.',
    subdesc:
      'Built using React and HuggingFace AI.',
    href: 'https://chef-claude-recipes.netlify.app/',
    texture: '/textures/project/project2.png',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Hugging Face',
        path: 'assets/hf-logo.png',
      },
    ],
  },
  {
    title: 'Meme Generator - Create Your Own Memes',
    desc: 'Input your own text and make your own memes using randomly generated images pulled from an API!',
    subdesc:
      '',
    href: 'https://meme-generator01x.netlify.app/',
    texture: '/textures/project/project3.png',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
    ],
  },
  {
    title: 'Tenzies - Dice Game',
    desc: 'The aim of the game is to roll all of the die until they all hold the same value!',
    subdesc:
      '',
    href: 'https://dice-game01x.netlify.app/',
    texture: '/textures/project/project4.png',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
    ],
  },
  {
    title: 'Assembly Endgame - (Hangman game)',
    desc: 'Guess the randomly generated word before all of the programming languages get taken out! (Similar to Hangman)',
    subdesc:
      '',
    href: 'https://hangman-re4ct.netlify.app/',
    texture: '/textures/project/project5.png',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#FFC0CB',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -7, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];