const ProjectData = [
  {
    id: 1,
    title: "CircleOfCare",
    bannerImg: "a.jpg",
    description:
      `Focused on mental health, this platform features an AI chatbot, sentiment analysis, personalized recommendations, and gamified
activities. Built dashboards for finance and wellness, automated monthly reports, and ensured secure access with rate limiting and bot
protection`,
    imgBanners: [
      "a.jpg",
      "b.jpg",
      "c.jpg",
      "d.jpg",
      "e.png",
      "f.png",
      "g.png",
      "h.png",
      "i.png",
    ],
    tech: ["NextJs", "python,Spacy" , "NLTK Models", "Vector Embeddings" , "Sentiment Analysis Pipeline", "AWS EC2, Arcjet"],
    gitlink: "",
    demolink: "",
  },
   {
    id: 2,
    title: "Agentic OS",
    bannerImg: "ag.png",
    description:
      "As the Frontend Developer behind the ForkThis Website for VIT's Gravitas event, I harnessed the power of NEXT.JS and Tailwind CSS to create a transformative platform. Over three eventful days, 100+ students utilized this website to monitor their open-source contributions, track event rankings through a leaderboard, and access a wealth of resources. My work enabled collaboration, fostered innovation, and left a significant mark on the event's success. Explore this project to witness my passion for web development and community empowerment.",
    imgBanners: [
      "a.jpg",
      "b.jpg",
      "c.jpg",
      "d.jpg",
      "e.jpg",
      "f.png",
      "g.png",
      "h.png",
    ],
    tech: ["electronJs","MCP","A2A","LangChain","Rag"],
    gitlink: "https://github.com/Keshav-Aneja/Forkthis-2023-frontend",
    demolink: "https://forkthis.csivit.com/",
  },
  {
    id: 3,
    title: "VR-ALIGN",
    bannerImg: "VR.png",
    description:
      `Focused on mental health, this platform features an AI chatbot, sentiment analysis, personalized recommendations, and gamified
activities. Built dashboards for finance and wellness, automated monthly reports, and ensured secure access with rate limiting and bot
protection.`,
    imgBanners: [
      
    ],
    tech: ["Python", "Flask", "Socket.IO", "Virtual Reality"],
    gitlink: "https://github.com/Keshav-Aneja/VIT-MUN",
    demolink: "https://vit-mun.vercel.app/",
  },
  {
    id: 4,
    title: "Peer to Peer",
    bannerImg: "p2p.png",
    description:
      "This project presents the development of a secure and decentralized peer-to-peer communication system that enables private real-time messaging and encrypted file sharing. While not entirely serverless, as it can optionally use untrusted relays for NAT traversal, it significantly reduces reliance on centralized infrastructures. Traditional communication platforms store and manage user data on corporate-controlled servers, which can lead to privacy breaches, data surveillance, and censorship. To overcome these limitations, this application adopts a decentralized architecture where users communicate directly with one another through encrypted peer-to-peer channels. The system is implemented using the Rust programming language for performance and memory safety, while the Iroh framework is used to manage secure peer discovery, distributed messaging, and encrypted file transfer. A terminal-based user interface is integrated to provide an efficient and lightweight user experience. The resulting system ensures a high degree of data sovereignty, censorship resistance, and strong confidentiality of shared information. This project demonstrates that highly decentralized and privacy-preserving communication platforms are both practical and effective.",
    imgBanners: [
     
    ],
    tech: ["rust", "TUI", "Networking"],
    gitlink: "https://github.com/Keshav-Aneja/InnovationX",
    demolink: "https://innovation-x.vercel.app/",
  },
  {
    id: 5,
    title: "Vortex 360",
    bannerImg: "vortex.png",
    description:
      "Built a full-stack hackathon management platform for RoboVITics, integrating team registration, Google OAuth, role-based dashboards, and live event tracking. handled 1000+ concurrent users.",
    imgBanners: ["a.gif", "b.jpg", "c.jpg"],
    tech: ["NextJs", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS"],
    gitlink: "https://github.com/Keshav-Aneja/SFML",
    demolink: "",
  },
 
  // {
  //   id: 6,
  //   title: "Unnati",
  //   bannerImg: "unnati.png",
  //   description:
  //     "Unnati is a ground-breaking initiative that aims to transform the lives of women by providing them with a platform to showcase and sell their skills and services. This website made for women sellers, Allows the seller to list their products easily and customers can view the products. With the dashboard section the sellers can track their orders. An interactive map, allows the users to quickly see the local sellers nearby and see any pictures or videos associated with that place.",
  //   imgBanners: ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.png", "g.png"],
  //   tech: ["next.js", "react", "tailwind css", "css"],
  //   gitlink: "https://github.com/Keshav-Aneja/Unnati",
  //   demolink: "",
  // },
  // {
  //   id: 7,
  //   title: "FlipSketch",
  //   bannerImg: "flipsketch.jpg",
  //   description:
  //     "FlipSketch is a canvas-based drawing tool that lets you explore your artistic side in an interactive way. Whether you're a seasoned artist or just want to doodle during your office breaks, this tool is perfect for everyone! 🎨✨",
  //   imgBanners: ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.png", "f.png"],
  //   tech: ["html", "css", "javascript"],
  //   gitlink: "https://github.com/Keshav-Aneja/FlipSketch",
  //   demolink: "https://keshav-aneja.github.io/FlipSketch/",
  // },
  // {
  //   id: 8,
  //   title: "Corest",
  //   bannerImg: "corest.jpg",
  //   description:
  //     "COREST is an innovative platform designed to empower students on their educational journey by connecting them with valuable scholarships and opportunities that might otherwise go unnoticed. In a world brimming with opportunities, it can be challenging for students to uncover the scholarships and programs tailored to their specific needs and aspirations. COREST is the solution to this common challenge.",
  //   imgBanners: [],
  //   tech: ["html", "css", "javascript"],
  //   gitlink: "https://github.com/Keshav-Aneja/Corest",
  //   demolink: "https://keshav-aneja.github.io/Corest/",
  // },
  // {
  //   id: 9,
  //   title: "Unigames",
  //   bannerImg: "unigames.jpg",
  //   description:
  //     "UniGames is a platform designed specifically for college gamers to showcase their skills and earn recognition for their achievements. I created this platform using just HTML and CSS, and I'm proud to say that it has been up and running successfully for about a month now.UniGames features a unique leaderboard section that showcases the names of top-performing college gamers, allowing them to gain the recognition they deserve. In addition, UniGames offers the opportunity for gamers to earn prize money as they compete in various gaming tournaments.As someone who is passionate about gaming, I understand the importance of creating a platform where fellow gamers can showcase their talents and earn recognition for their hard work. UniGames has been a fulfilling project, and I am excited to continue developing and expanding it further.",
  //   imgBanners: [
  //     "a.jpg",
  //     "b.jpg",
  //     "c.jpg",
  //     "d.jpg",
  //     "e.png",
  //     "g.png",
  //     "h.png",
  //     "i.png",
  //   ],
  //   tech: ["html", "css"],
  //   gitlink: "https://github.com/Keshav-Aneja/UniGames---Project-",
  //   demolink: "https://unigames.in",
  // },
  // {
  //   id: 10,
  //   title: "TypeNinja",
  //   bannerImg: "typeninja.jpg",
  //   description:
  //     "Type Ninja is an engaging typing practice website that I developed during my first year as a computer science student. Inspired by the functionality of MonkeyType, this project is designed to enhance your typing skills while making the learning process fun and interactive. Key features include multiple text fields for varied challenges, a 'Reset Typing' option for continuous improvement, multiple themes for immersive experiences, and a CapsLock warning to encourage proper keyboard techniques.",
  //   imgBanners: ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.png"],
  //   tech: ["html", "css", "javascript"],
  //   gitlink: "https://github.com/Keshav-Aneja/TypeNinja",
  //   demolink: "https://type-ninja-chi.vercel.app/",
  // },
  // {
  //   id: 11,
  //   title: "TCP Chat",
  //   bannerImg: "chat.png",
  //   description:
  //     "The TCP Chat System in Python is a versatile and efficient communication platform that I designed and developed using socket programming. This project provides a robust, text-based chat system built on the principles of the Transmission Control Protocol (TCP). It's a versatile solution for real-time communication that can be used in various scenarios, from simple local chat applications to more complex distributed systems.",
  //   imgBanners: [],
  //   tech: ["python", "sockets", "networking"],
  //   gitlink: "",
  //   demolink: "",
  // },
  // {
  //   id: 12,
  //   title: "YTPlayListDown",
  //   bannerImg: "filenamer.jpg",
  //   description:
  //     "YTPlaylistDownloader, developed using Python and Selenium, simplifies the task of downloading extensive YouTube playlists for later viewing. This automation tool efficiently handles the laborious process of fetching, queuing, and downloading videos, saving you time and effort. Whether it's educational content, music, or entertainment, this project empowers you to effortlessly build your offline playlist library. YTPlaylistDownloader is your shortcut to uninterrupted YouTube enjoyment.",
  //   imgBanners: [],
  //   tech: ["python", "selenium"],
  //   gitlink: "",
  //   demolink: "",
  // },
  // {
  //   id: 13,
  //   title: "SpaceGame",
  //   bannerImg: "spacegame.jpg",
  //   description:
  //     "SpaceGame is a minimalist, browser-based game that challenges your space bar reflexes. Created with simple JavaScript and DOM manipulation, the objective is straightforward: press the space bar as many times as possible within a limited time frame. It's a quick and addictive game that measures your reaction speed and offers a fun way to compete with friends. How many times can you hit the space bar in the allotted time? Find out with SpaceGame!",
  //   imgBanners: [],
  //   tech: ["html", "css", "javascript"],
  //   gitlink: "https://github.com/Keshav-Aneja/SpaceGame",
  //   demolink: "https://keshav-aneja.github.io/SpaceGame/",
  // },
];
export default ProjectData;
