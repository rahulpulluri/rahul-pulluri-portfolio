import carpool from "../assets/projects/carpool.jpeg";
import ecommerce from "../assets/projects/ecommerce.png";
import plant from "../assets/projects/plant.jpeg";
import bigdata from "../assets/projects/big data.jpeg";
import movie from "../assets/projects/movies.png";
import MLBlog from "../assets/projects/MLBlog.png"

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
    year: "Jan 2024 - Present",
    role: "Research Assistant",
    company: "Virginia Tech",
    description: `Developing a geospatial information visualization platform with Django and React, integrating INRX traffic data through GeoServer and OpenLayers for enhanced location display. Optimizing the data pipeline with Python, AWS Lambda, and SQL, improving data handling efficiency and increasing data access speed by 20% across various datasets.`,
    technologies: ["Django", "React", "Python", "AWS Lambda", "SQL", "GeoServer", "OpenLayers"],
  },
  {
    year: "Sept 2022 - July 2023",
    role: "Associate Software Engineer",
    company: "Accenture",
    description: `Automated user role management with Java (Spring Boot) in a microservices architecture, improving role assignment accuracy by 30% and reducing manual work. Developed and fine-tuned models for a real-time video processing asset using TensorFlow, incorporating object detection, motion detection, custom training, and JWT-based user authentication. Optimized database schemas for user-role mappings with MySQL and Hibernate, enhancing data retrieval speed. Managed microservices deployment using Docker and Kubernetes, automating scaling and load balancing, while implementing Prometheus and Grafana for real-time monitoring, ensuring 99.9% uptime. Strengthened API security through Role-Based Access Control (RBAC) and OAuth 2.0 authentication, ensuring secure access to sensitive data.`,
    technologies: ["Java", "Spring Boot", "TensorFlow", "JWT", "Docker", "Kubernetes", "Prometheus, Grafana", "RBAC", "OAuth 2.0"],
  },
  {
    year: "Feb 2022 - Aug 2022",
    role: "Software Developer",
    company: "iThink Logistics",
    description: `Developed a React Native app with user authentication features and collaborated with the DevOps team to implement CI/CD pipelines, enhancing deployment reliability in a cloud environment. Built a real-time notification system using WebSockets and Redis, delivering notifications to over 5,000 users daily and reducing delivery time from 2 minutes to under 10 seconds.`,
    technologies: ["React", "Node", "MongoDB", "React Native", "WebSockets", "Redis", "Jenkins", "Cloud"],
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
    title: "QuickCart",
    image: ecommerce,
    description:
      "Developed a microservices application with services for User Authentication, Ticket Creation, Order Creation, Payment, and Timed Expiration. Users can list and purchase event tickets. When a user attempts to purchase a ticket, it is 'locked' for 15 minutes to allow payment processing. If the payment is not completed within this time, the ticket unlocks. Ticket prices can be edited if they are not locked.",
    technologies: ["React.js", "FastAPI", "Node.js", "Express.js", "MongoDB", "Redis", "Docker", "Kubernetes",],
    link: "https://github.com/rahulpulluri/E-Commerce-Website",
  },
  {
    title: "AgriShield",
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
  {
    title: "Machine Learning Blog",
    image: MLBlog,
    description:
      "Created a blog on machine learning that explains key concepts such as probability, classification, clustering, linear and nonlinear regression, and outlier detection. It also includes code samples and data visualizations to clearly understand the concepts.",
    technologies: ["Python", "Machine learning topics", "Data Visualizations",],
    link: "https://rahulpulluri.github.io/MLBlog/",
  },
  {
    title: "Movie Streaming Platform",
    image: movie,
    description:
      "Built a Netflix-like streaming platform with features including secure user authentication via JWT, movie and TV show browsing, search functionality, and watch history tracking. The platform supports protected routes with middleware, has a responsive design for desktop and mobile, and includes custom error handling. The project uses React.js and Tailwind CSS on the frontend, Node.js and Express.js on the backend, MongoDB for the database, and JWT for authentication.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://github.com/rahulpulluri/Movie-Streaming-Platform",
  },
];

export const CONTACT = {
  // address: "2251 Pimmit Dr, Falls Church, VA 22043 ",
  // phoneNo: "+12 4555 666 00 ",
  email: "rahulpulluri1@gmail.com",
};
