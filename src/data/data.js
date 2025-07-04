export const data = {
  // --- Home --
  universal: {
    color: "#fe9119",
    // color: "#dc3545",
    darkTheme: {
      color: "#ffffff",
      backgroundColor: "#0a101a",
      navBgColor: "#0f1624",
    },
    lightTheme: {
      color: "black",
      backgroundColor: "#edf2f8",
      navBgColor: "#d5e2f1",
    },
  },
  profile: {
    first_name: "Guddu",
    meddle_name: "",
    last_name: "Tiwari",
    full_name: "Guddu Tiwari",
    profile_image: "./assets/round-shap-profile-pic.jpg",
    designation: "Software Developer",
    company_name: "Cimet Private Limited",
    date_of_joining: "03 November 2024",
    date_of_left: "31 June 2024",
    date_of_IT: "01-04-2022",
    mobile: "7800142610",
    email: "gt29015@.gmail.com",
    github_username: "Gr7800",
    linkedin_handle: "http://www.linkedin.com/in/guddu-tiwari-57b841230/",
    github_handle: "https://github.com/Gr7800",
    website: "https://gr7800.github.io/",
    resume: "./assets/Guddu-Tiwari-Resume.pdf",
    resume_url:
      "https://drive.google.com/file/d/1uGspjyk-gKX_5r7DHaXXCbqIKKznWvXU/view?usp=sharing",
    email_img: "./assets/emailimg.png",
    profile_img_bg: "./assets/yellowBrushImg.png",
    stop_form: false,
    tagline: "I am a Full Stack Developer,",

    social_icons: [
      {
        link: "https://www.linkedin.com/in/guddu-tiwari-57b841230/",
        name: "LinkeDin",
        type: "linkedin",
        color: "#0a66c2",
        icon: "",
      },
      {
        link: "https://github.com/gr7800",
        name: "GitHub",
        type: "github",
        color: "#3f3d55",
        icon: "",
      },
      {
        link: "mailto:gt29015@gmail.com",
        name: "Email",
        type: "email",
        color: "#f04244",
        icon: "",
      },
      {
        link: "tel:+917800142610",
        name: "Phone or WhatsApp",
        type: "phone",
        color: "#4db946",
        icon: "",
      },
    ],
  },

  logo_img: {
    hii_logo: "./assets/hii_gif.gif",
  },

  // ---- About me --
  about_me: {
    image: "./assets/AboutImg.gif",
    contents: [
      {
        content:
          "Hi, I'm Guddu Tiwari, a Software Developer at Cimet Private Limited, based in Jaipur, Rajasthan.",
      },
      {
        content: `I have ${getTotalExperience(
          "01-04-2022"
        )}+ years of experience in full-stack web development with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). I’m a quick learner and passionate about building scalable web applications.`,
      },
      {
        content:
          "I have hands-on experience in building responsive React web apps and Android applications. I'm confident working across both frontend and backend, and I have a solid understanding of Data Structures and Algorithms.",
      },
      {
        content:
          "I’ve contributed to 5+ company projects and built 15+ major personal projects. These experiences have strengthened my skills in teamwork, problem-solving, and communication. I'm now actively seeking new opportunities as a Full Stack or Frontend Developer.",
      },
    ],
  },
  //Experience Section
  experience: [
    {
      company_logo: "./assets/cimetlogo.svg",
      company_name: "Cimet Private Limited",
      role: "Software Developer",
      duration: "Sep 2024 - Present",
      website: "https://www.cimet.com.au/",
      address: "Vaishali Nagar, Jaipur, Rajasthan",
      description:
        "Working as a Software Developer at Cimet, I played a key role in optimizing performance and user experience. Implemented advanced lazy loading and caching strategies, reducing initial load time by 65%. Integrated SonarQube and ESLint to improve code quality, reducing code smells by 25%. Developed secure, scalable REST APIs with Node.js and Express, following OOP principles. Built modular, reusable UI components in React and Next.js, significantly improving UI consistency and maintainability. Enhanced SEO score to 92 by optimizing content, integrating lead generation forms, and utilizing Keystone.js.",
      tech_stacks:
        "React.js | Next.js | Node.js | Express.js | Chakra UI | Keystone.js | SonarQube | ESLint | REST APIs | Git",
    },
    {
      company_logo: "./assets/pipllilogo.jpg",
      bgColor: "blue",
      company_name: "Pipli Technologies Pvt Ltd",
      role: "Software Developer",
      duration: "Jul 2023 – Sep 2024",
      website: "https://pipli.com/",
      address: "Bandra East, Mumbai, Maharashtra",
      description:
        "At Pipli Technologies, I worked on key frontend and backend features for web and CMS platforms. Successfully integrated the BillDesk Payment Gateway, reducing transaction time by 50% and improving overall reliability. Built responsive and performant UIs using React.js, Next.js, and Chakra UI. Contributed to the development of multiple CMS dashboards, admin panels, and consumer-facing applications, enhancing operational efficiency. Led the creation of modular components, reducing UI code redundancy by 30%. Followed best practices in scalable architecture, improving codebase maintainability and development speed.",
      tech_stacks:
        "React.js | Next.js | Chakra UI | Node.js | MongoDB | BillDesk | Git | Agile | REST APIs",
    },
    {
      company_logo: "./assets/avitorcloud.png",
      company_name: "Aero Knowledge Solution Pvt Ltd",
      role: "Full Stack Developer",
      duration: "Apr 2022 – May 2023",
      website: "https://aviatorcloud.com",
      address: "Nadia, West Bengal, India",
      description:
        "As a Full Stack Developer at Aero Knowledge Solution, I led the end-to-end development of the 'Aviator Exam' web platform using the MERN stack. Designed secure login systems with email-based authentication, reducing unauthorized access by 60%. Integrated OpenAI GPT APIs to deliver AI-powered learning tools. Improved site performance and responsiveness, achieving a 55% reduction in page load times. Implemented role-based access control and dynamic routing for a better user experience and data security across admin and student portals.",
      tech_stacks:
        "MongoDB | Express.js | React.js | Node.js | OpenAI API | JWT Auth | CSS | Git | REST APIs",
    },
  ],
  // --- Projects --
  projects: [
    {
      image: "./assets/hubspot.gif",
      name: "Hubspot.com - Clone",
      description:
        "HubSpot is a CRM platform for managing marketing, sales, and customer service. This clone replicates key tools for lead tracking, engagement, automation, and analytics. It helps demonstrate user-friendly dashboards, streamlined workflows, and backend integration for building enterprise-level customer relationship solutions effectively.",
      is_group_project: true,
      collaborators: 5,
      duration: "05 Days",
      tech_stacks:
        "React Js | CSS | Javascript | Node-js | Mongodb | Expressjs | react-router-dom | chakra-ui",
      github: "https://github.com/Guruprasad3n/HubSpot.com---Clone",
      video_watch_on: "Google Drive",
      is_github_private: false,
      video: "",
      deploy_link: "https://animated-narwhal-cecc2b.netlify.app/",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/shemrush.gif",
      name: "Shemrush.com - Clone",
      description:
        "Semrush is a digital marketing tool offering solutions for SEO, PPC, and analytics. This clone mirrors its main functions like keyword tracking and campaign management. It demonstrates how businesses can monitor performance, plan marketing strategies, and track user behavior using a seamless and intuitive full-stack application.",
      is_group_project: true,
      collaborators: 5,
      duration: "05 Days",
      tech_stacks:
        "React Js | CSS | Javascript | Node-js | Mongodb | Expressjs | react-router-dom | chakra-ui",
      github: "https://github.com/dinesh0085/Shemrush-Clone",
      video_watch_on: "Google Drive",
      is_github_private: false,
      video: "",
      deploy_link: "https://www.semrush.com/",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/nordstrom.gif",
      name: "Nordstrom.com - Clone",
      description:
        "Nordstrom is a retail fashion website offering clothing and accessories. This clone replicates features like product listings, navigation, cart handling, and stylish UI. It emphasizes customer experience by using smooth scrolling, Chakra UI, and a mock server to reflect real-world e-commerce shopping workflows and layout.",
      is_group_project: false,
      collaborators: 5,
      duration: "05 Days",
      tech_stacks:
        "React JS | React-Router-Dom | JSON-Server | Chakra UI | React-Icons | JavaScript | CSS",
      github: "https://github.com/gr7800/grumpy-behavior-5631",
      video_watch_on: "Google Drive",
      is_github_private: false,
      video: "",
      deploy_link: "https://melodic-marzipan-98f3ec.netlify.app/",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/portfolio.gif",
      name: "My Portfolio",
      description:
        "This is my responsive personal portfolio built using React and Chakra UI. It includes dark mode, smooth scroll, and AOS animation. The site highlights my skills, GitHub activity, and projects with interactive sections, a clean layout, and optimized performance across all screen sizes and mobile devices.",
      is_group_project: false,
      collaborators: null,
      duration: "04 Days",
      tech_stacks: "ReactJS | CSS | JavaScript | Chakra UI | AOS Animation",
      github: "https://github.com/gr7800/gr7800.github.io",
      is_github_private: true,
      video_watch_on: "Google Drive",
      video: "",
      deploy_link: "https://gr7800.github.io/",
      deployed_on: "GitHub",
    },
    {
      image: "./assets/indegogo.gif",
      name: "Indiegogo.com - Clone",
      description:
        "Indiegogo is a crowdfunding platform supporting creative and tech projects. This clone simulates campaign browsing, project details, and user interactions using mock APIs. It showcases a clean layout and intuitive UI, enabling users to explore and support innovative campaigns with simple and responsive frontend development technologies.",
      is_group_project: true,
      collaborators: 4,
      duration: "05 Days",
      tech_stacks: "HTML | CSS | Javascript | JSON-Server",
      github: "https://github.com/gr7800/daily-wound-486",
      is_github_private: false,
      video_watch_on: "LinkeDin",
      video: "",
      deploy_link: "https://incandescent-croissant-b71896.netlify.app/",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/cosheduleClone.gif",
      name: "Coschedule - Clone",
      description:
        "CoSchedule is a planning and scheduling platform for blogs and social media. This clone reproduces its editorial calendar and campaign manager using HTML, CSS, and JavaScript. It enables users to visualize tasks, organize content, and manage workflow from a single dashboard with a clean and simple interface.",
      is_group_project: true,
      collaborators: 4,
      duration: "05 Days",
      tech_stacks: "HTML | CSS | JavaScript",
      github: "https://github.com/Abhishek07788/CoShedule-Website-Project-",
      video_watch_on: "Google Drive",
      is_github_private: false,
      video: "",
      deploy_link: "https://bejewelled-lebkuchen-8a5107.netlify.app/",
      deployed_on: "Netlify",
    },
  ],
  // --- GitHub overView --
  github: {
    github_username: "gr7800",
    github_stats: [
      {
        name: "stats",
        light_theme_link:
          "https://github-readme-stats.vercel.app/api?username=gr7800&show_icons=true&locale=en&theme=tokyonight",
        dark_theme_link:
          "https://github-readme-stats.vercel.app/api?username=gr7800&show_icons=true&locale=en&layout=compact&theme=flag-india",
      },
      {
        name: "streak",
        light_theme_link:
          "https://github-readme-streak-stats.herokuapp.com/?user=gr7800&show_icons=true&locale=en&theme=tokyonight",
        dark_theme_link:
          "https://github-readme-streak-stats.herokuapp.com/?user=gr7800&show_icons=true&locale=en&theme=flag-india",
      },
      {
        name: "languages",
        light_theme_link:
          "https://github-readme-stats.vercel.app/api/top-langs?username=gr7800&show_icons=true&locale=en&layout=compact&theme=tokyonight",
        dark_theme_link:
          "https://github-readme-stats.vercel.app/api/top-langs?username=gr7800&show_icons=true&locale=en&layout=compact&theme=flag-india",
      },
    ],
    stats: [
      {
        number: getTotalExperience("01-04-2022") + "y",
        title: "Total",
        subTitle: "Experience",
      },
      {
        number: 30,
        title: "Projects",
        subTitle: "Done",
      },
      {
        number: 10,
        title: "Projects",
        subTitle: "Company",
      },
      {
        number: 900,
        title: "DSA",
        subTitle: "Solved (OJ)",
      },
    ],
  },

  // --- Skills --
  skills: [
    // Frontend
    { name: "HTML5", image: "./assets/html.svg" },
    { name: "CSS3", image: "./assets/css.svg" },
    { name: "JavaScript", image: "./assets/javascript.svg" },
    { name: "TypeScript", image: "./assets/typescript.png" },
    { name: "React JS", image: "./assets/react.svg" },
    { name: "Next JS", image: "./assets/nextjs.png" },
    { name: "React Native", image: "./assets/reactnative.png" },
    { name: "Expo", image: "./assets/expo.png" },
    { name: "Redux", image: "./assets/redux.svg" },
    { name: "Tailwind CSS", image: "./assets/tailwindcss.svg" },
    { name: "Chakra UI", image: "./assets/chakraui.png" },
    { name: "Material UI", image: "./assets/materialui.svg" },
    { name: "Bootstrap", image: "./assets/bootstrap.svg" },

    // Backend
    { name: "Node JS", image: "./assets/nodejs.svg" },
    { name: "Express", image: "./assets/express.svg" },
    { name: "REST APIs", image: "./assets/api.svg" },
    { name: "GraphQL", image: "./assets/graphql.svg" },

    // Databases & ORM
    { name: "MongoDB", image: "./assets/mongodb.svg" },
    { name: "PostgreSQL", image: "./assets/postgresql.svg" },
    { name: "Prisma", image: "./assets/prisma.svg" },
    { name: "Elasticsearch", image: "./assets/elasticsearch.svg" },

    // Tools & Utilities
    { name: "Git", image: "./assets/git.svg" },
    { name: "GitHub Actions", image: "./assets/githubactions.svg" },
    { name: "GitHub Copilot", image: "./assets/copilot.svg" },
    { name: "NPM", image: "./assets/npm.svg" },
    { name: "Yarn", image: "./assets/yarn.png" },
    { name: "Postman", image: "./assets/postman.png" },
    { name: "ESLint", image: "./assets/eslint.svg" },
    { name: "Cypress", image: "./assets/cypress.svg" },
    { name: "SonarQube", image: "./assets/sonarqube.svg" },
    { name: "Agile Methodology", image: "./assets/agile.svg" },
  ],

  // --- Contact Section --
  contact: {
    contact_title: "Contact",
    contact_subtitle: "Get In Touch",
    social_buttons: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/guddu-tiwari-57b841230/",
        color: "#0a66c2",
        icon: "linkedin",
        title: "Guddu Tiwari LinkedIn",
      },
      {
        name: "GitHub",
        link: "https://github.com/Gr7800",
        color: "#3f3d55",
        icon: "github",
        title: "Gr7800 GitHub",
      },
      {
        name: "Email",
        link: "mailto:gt29015@gmail.com",
        color: "#f04244",
        icon: "email",
        title: "gt29015@gmail.com",
      },
      {
        name: "Phone",
        link: "tel:+917800142610",
        color: "#4db946",
        icon: "phone",
        title: "Call & WhatsApp: 7800142610",
      },
    ],
    form_fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Full Name",
        required: true,
        maxLength: 100,
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true,
      },
      {
        name: "number",
        type: "text",
        placeholder: "Phone",
        required: true,
        minLength: 10,
        maxLength: 10,
      },
      {
        name: "message",
        type: "textarea",
        placeholder: "Your Message",
        required: true,
        rows: 5,
      },
    ],
  },
  aos: {
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    once: true,
  },
};

export function getTotalExperience(inputDate) {
  // Split the inputDate by "-" and construct a new Date object
  let [day, month, year] = inputDate.split("-");
  let inputDateObj = new Date(`${year}-${month}-${day}`);
  let currentDate = new Date();

  let yearsDifference = currentDate.getFullYear() - inputDateObj.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let inputMonth = inputDateObj.getMonth();
  let monthsDifference = currentMonth - inputMonth;
  let daysDifference = currentDate.getDate() - inputDateObj.getDate();

  // Adjust years difference based on months and days
  if (monthsDifference < 0 || (monthsDifference === 0 && daysDifference < 0)) {
    yearsDifference--;
    monthsDifference += 12; // Add 12 months to monthsDifference
  }

  let totalYears =
    yearsDifference + monthsDifference / 12 + daysDifference / 365;

  // Check if totalYears is less than 1.0
  if (totalYears < 1.0) {
    let totalMonths = yearsDifference * 12 + monthsDifference;
    return `${totalMonths}+ Months`;
  } else {
    // Check if totalYears is a whole number
    if (Number.isInteger(totalYears)) {
      return `${totalYears}`;
    } else {
      return `${totalYears.toFixed(1)}`;
    }
  }
}
