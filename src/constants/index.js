import carpool from "../assets/projects/carpool.jpeg";
import ecommerce from "../assets/projects/ecommerce.png";
import plant from "../assets/projects/plant.jpeg";
import bigdata from "../assets/projects/big data.jpeg";
import movie from "../assets/projects/movies.png";

export const HERO_CONTENT = `I am a technology professional with experience as an Associate Software Engineer at Accenture and a Software Developer Intern at iThink Logistics. My expertise includes Full Stack Development, Data Engineering, and Cloud Computing. I am currently pursuing a Master of Engineering in Computer Science from Virginia Tech.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATIONS = [
  {
    year: "Aug 2023 - Present",
    degree: "Master of Engineering in Computer Science",
    institution: "Virginia Tech",
  },
  {
    year: "Oct 2020 - May 2022",
    degree: "Master of Computer Applications",
    institution: "Hindustan University",
  },
  {
    year: "July 2016 - Sept 2020",
    degree: "Bachelor of Commerce",
    institution: "University of Mumbai",
  },
];


export const EXPERIENCES = [
  {
    year: "June 2024 - Aug 2024",
    role: "Summer Intern (Data)",
    company: "Virginia Tech",
    description: `Redesigned an AWS-based data pipeline utilizing S3, Glue, and Athena to significantly cut processing time by around 2 hours, thereby enabling quicker insights and enhancing project timelines. Improved ETL workflows with Python, AWS Lambda, and SQL, boosting data handling efficiency by 20% across various datasets and accelerating data access for the team. Volunteered with the Virginia Tech Drone Program, contributing to drone construction and motivating K12 students to explore STEM fields.`,
    technologies: ["Python", "AWS", "PostgreSQL", "PySpark", "Pandas"],
  },
  {
    year: "Sept 2022 - May 2023",
    role: "Associate Software Engineer",
    company: "Accenture",
    description: `Automated the user role management system in Django, which enhanced role assignment accuracy by 30%, minimized manual effort, and saved several days of work. Developed a scalable pricing module using RESTful APIs, Java Spring Boot, and React, enabling precise processing for over 200 product categories and improving transaction reliability for a major client. Created a real-time notification system with WebSockets and Redis, efficiently delivering notifications to approximately 5,000 users daily and reducing delivery time from 2 minutes to under 10 seconds, thus significantly boosting user engagement. Additionally, implemented AWS Lambda functions to automate routine data processing tasks, minimizing manual intervention and streamlining data workflows.`,
    technologies: ["Java", "Spring Boot", "Django", "React.js", "Node.js", "WebSockets", "Redis", "AWS"],
  },
  {
    year: "Feb 2022 - Aug 2022",
    role: "Software Developer Intern",
    company: "iThink Logistics",
    description: `Integrated a real-time tracking system using Apache Kafka, MongoDB, and Elasticsearch, optimizing the tracking and logistics process and leading to enhanced operational efficiency.

`,
    technologies: ["Apache Kafka", "Socket.IO", "MongoDB", "AWS"],
  },

];

export const PROJECTS = [
  {
    title: "Neighborhood Carpool Platform",
    image: carpool,
    description:
      "Neighborhood Carpool is a community-focused ride-sharing platform developed for neighborhood commuters. It offers features like carpool listings, user account management, and admin controls for a secure, personalized experience. The platform promotes eco-friendly commuting, reduces traffic congestion, and cuts costs.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Ajax", "Django", "PostgreSQL"],
    link: "https://github.com/rahulpulluri/Neighborhood-Carpool-platform",
  },
  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "Developed a microservices application with services for User Authentication, Ticket Creation, Order Creation, Payment, and Timed Expiration. Users can list and purchase event tickets. When a user attempts to purchase a ticket, it is 'locked' for 15 minutes to allow payment processing. If the payment is not completed within this time, the ticket unlocks. Ticket prices can be edited if they are not locked.",
    technologies: ["React.js", "FastAPI", "Node.js", "Express.js", "MongoDB", "Redis", "Docker", "Kubernetes",],
    link: "https://github.com/rahulpulluri/E-Commerce-Website",
  },
  {
    title: "Movie Streaming Platform",
    image: movie,
    description:
      "Built a Netflix-like streaming platform with features including secure user authentication via JWT, movie and TV show browsing, search functionality, and watch history tracking. The platform supports protected routes with middleware, has a responsive design for desktop and mobile, and includes custom error handling. The project uses React.js and Tailwind CSS on the frontend, Node.js and Express.js on the backend, MongoDB for the database, and JWT for authentication.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://github.com/rahulpulluri/Movie-Streaming-Platform",
  },
  {
    title: "Plant Disease Classification",
    image: plant,
    description:
      "Developed a web application to assist farmers in detecting two common diseases in potato and tomato plants: early blight and late blight. By uploading pictures of plant leaves, farmers can use the app to identify the disease. The model analyzes the images and accurately detects whether the plant is affected by early blight, caused by fungi, or late blight, caused by specific microorganisms, allowing for timely and appropriate treatment to prevent economic losses.",
    technologies: ["React.js", "CSS", "Deep learning", "CNN", "TensorFlow", "GCP"],
    link: "https://github.com/rahulpulluri/Plant-Disease-Classification",
  },
  {
    title: "X Hashtag Counter Using Amazon EMR",
    image: bigdata,
    description:
      "Analyzed social media hashtags, identifying the top 20 hashtags from Twitter data using Apache Spark on Amazon EMR. Configured a transient cluster for cost efficiency and managed data storage with AWS S3.",
    technologies: ["Python", "Apache Spark", "Amazon EMR", "Amazon S3"],
    link: "https://github.com/rahulpulluri/X-Hashtag-Counter-using-Amazon-EMR",
  },
];

export const CONTACT = {
  address: "2251 Pimmit Dr, Falls Church, VA 22043 ",
  // phoneNo: "+12 4555 666 00 ",
  email: "prahul@vt.edu",
};
