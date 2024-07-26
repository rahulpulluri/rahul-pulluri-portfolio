import carpool from "../assets/projects/carpool.jpeg";
import ecommerce from "../assets/projects/ecommerce.png";
import plant from "../assets/projects/plant.jpeg";
import bigdata from "../assets/projects/big data.jpeg";

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
    degree: "Masters in Computer Applications",
    institution: "Hindustan University",
  },
  {
    year: "July 2016 - Sept 2020",
    degree: "Bachelors of Commerce",
    institution: "Mumbai University",
  },
];


export const EXPERIENCES = [
  {
    year: "Sept 2022 - May 2023",
    role: "Associate Software Engineer",
    company: "Accenture",
    description: `Worked as a full stack developer, developing and maintaining web applications with React.js and Node.js. Implemented REST APIs in a Django and Node.js microservices architecture. Improved data flow and implemented CI/CD pipelines using Jenkins. Configured AWS EC2, VPC, and Internet Gateway for secure, scalable deployments, and set up subnets for enhanced security.`,
    technologies: ["React.js", "Node.js", "Django", "AWS"],
  },
  {
    year: "Feb 2022 - Aug 2022",
    role: "Software Developer Intern",
    company: "iThink Logistics",
    description: `Developed a real-time tracking system using Apache Kafka, MongoDB, and Elasticsearch for data analytics. Utilized LocalStack for AWS emulation and Socket.IO for dynamic communication. Deployed the system on AWS using EC2, RDS, and Lambda, enhancing scalability and reducing operational costs by 20%.`,
    technologies: ["Apache Kafka", "Socket.IO", "MongoDB", "AWS"],
  },

];

export const PROJECTS = [
  {
    title: "Neighborhood Carpool Platform",
    image: carpool,
    description:
      "Neighborhood Carpool is a community-focused ride-sharing platform developed for neighborhood commuters. It offers features like carpool listings, user account management, and admin controls for a secure, personalized experience. The platform promotes eco-friendly commuting, reduces traffic congestion, and cuts costs.",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "PostgreSQL"],
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
