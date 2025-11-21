import { Project, Experience, Certification, Skill } from '../types/portfolio';

export const profileData = {
  name: 'Muhammad Tegar Wiratama Pohan',
  title: 'S.T.',
  role: 'Fresh Graduate | Machine Learning & Data Engineer',
  bio: 'Fresh graduate in Informatics Engineering with a strong foundation in programming (C++, Python, Java) and hands-on experience in data analysis using SQL, Excel, and data visualization tools. Completed the Bangkit Academy 2024 – Machine Learning Cohort, with experience in developing and deploying real-world ML models and backend systems. Holds multiple industry-recognized certifications in Machine Learning, TensorFlow, and Cybersecurity.',
  email: 'muhammadtegar980@gmail.com',
  phone: '+62 822 2727 10141',
  location: 'Jakarta, Indonesia',
  linkedin: 'https://www.linkedin.com/in/muhammadtegar06/',
  github: 'https://github.com/muhammadtegar06',
  resumeUrl: '/CV_Muhammad Tegar Wiratama Pohan copy.pdf',
  profileImage: '/Foto Full Body 2.png',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Vertical Farming ML System',
    description: 'Conducted collaborative research projects with lecturers to explore and address key topics in vertical farming. Developed comprehensive framework for machine learning model selection and implementation. Designed and deployed cloud computing architectures for scalability and efficiency.',
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Cloud Computing', 'Data Analysis'],
    startDate: 'May 2023',
    endDate: 'Nov 2024',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Bangkit Academy ML Project - GrowRight',
    description: 'Led development of data-based solutions as part of Machine Learning Cohort. Designed and built machine learning models to support mobile application development. Deployed ML models ensuring smooth integration with mobile development team. Optimized models for performance, scalability, and cost efficiency.',
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Mobile Backend', 'API Integration'],
    startDate: 'Feb 2024',
    endDate: 'Jul 2024',
    githubUrl: 'https://github.com/C241-PS343-GrowRight',
  },
  {
    id: '3',
    title: 'Data Analytics Dashboard',
    description: 'Developed interactive dashboards and reports using Apache Superset for data-driven decision-making. Implemented data processing techniques for research and analysis. Collaborated with data team to enhance analysis efficiency.',
    technologies: ['Apache Superset', 'SQL', 'Data Visualization', 'Python', 'PostgreSQL'],
    startDate: 'Aug 2024',
    endDate: 'Nov 2024',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Grab Support Indonesia',
    position: 'Data Entry & Collection Support Coordinator',
    startDate: 'Jul 2025',
    endDate: 'Sep 2025',
    type: 'contract',
    description: [
      'Entered, extracted, and updated tens of thousands of data in company database and systems',
      'Utilized software such as MS Excel, Zeus, and Zendesk for daily tasks',
      'Collaborated with other departments to process work-related data efficiently',
      'Identified and corrected data discrepancies to minimize errors and improve accuracy',
    ],
  },
  {
    id: '2',
    company: 'Institut Teknologi PLN',
    position: 'Laboratory Assistant (Computer Networks & Embedded Systems) - Coordinator Assistant',
    startDate: 'Dec 2023',
    endDate: 'Feb 2025',
    type: 'contract',
    description: [
      'Assisted lecturers in delivering practical sessions on Computer Networks, Microprocessors, Digital Systems, and Embedded Programming',
      'Prepared and maintained lab modules and technical materials for student use',
      'Configured software and simulation tools for hands-on lab activities',
      'Led a team of 24 assistants to manage daily lab operations and support logistics',
      'Supervised inventory control to ensure availability of equipment and materials',
    ],
  },
  {
    id: '3',
    company: 'Badan Riset dan Inovasi Nasional (BRIN RI)',
    position: 'Data and Information Center Internship',
    startDate: 'Aug 2024',
    endDate: 'Nov 2024',
    type: 'internship',
    description: [
      'Assisted in the anonymization of data used for analysis and research purposes',
      'Implemented data processing techniques to ensure personal information is not identifiable',
      'Ensured that the anonymization process adheres to applicable data security standards',
      'Assisted in cleaning raw data to remove errors or duplicates',
      'Identified and corrected missing or inconsistent data',
      'Assisted in using and configuring Apache Superset for data visualization',
      'Created dashboards and interactive reports to support data-driven decision-making',
    ],
  },
  {
    id: '4',
    company: 'Bangkit Academy (Google, GoTo, Traveloka)',
    position: 'Machine Learning Cohort Member',
    startDate: 'Feb 2024',
    endDate: 'Jul 2024',
    type: 'internship',
    description: [
      'Led the development of data-based solutions as part of the Machine Learning Cohort',
      'Designed and built machine learning models to support mobile application development',
      'Deployed app models to the ML pipeline, ensuring smooth integration with the mobile development team',
      'Optimized model machine learning for performance, scalability, and cost efficiency',
      'Collaborated with team members to ensure the delivery of a functional and user-friendly application',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'TensorFlow Developer Certificate',
    issuer: 'DeepLearning.AI',
    year: 2024,
  },
  {
    id: '2',
    name: 'Machine Learning Specialization',
    issuer: 'Andrew Ng, Stanford',
    year: 2024,
  },
  {
    id: '3',
    name: 'Mikrotik Certified Network Associate',
    issuer: 'Mikrotik',
    year: 2024,
  },
  {
    id: '4',
    name: 'Microsoft Office Specialist',
    issuer: 'Microsoft',
    year: 2024,
  },
  {
    id: '5',
    name: 'Junior Cyber Security',
    issuer: 'BNSP',
    year: 2024,
  },
  {
    id: '6',
    name: 'Google: Using Python, Data Cleaning, Data Visualization',
    issuer: 'Coursera',
    year: 2024,
  },
  {
    id: '7',
    name: 'Machine Learning & SQL Basics',
    issuer: 'Dicoding',
    year: 2024,
  },
  {
    id: '8',
    name: 'B2 Upper Intermediate - EF SET English Certificate',
    issuer: 'EF SET',
    year: 2025,
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['C++', 'C', 'Python', 'R', 'SQL', 'HTML', 'CSS', 'PHP', 'JavaScript', 'Linux'],
  },
  {
    category: 'Technical Skills',
    items: ['Machine Learning', 'Data Analysis', 'OOP Programming', 'Computer Network', 'Data Visualization'],
  },
  {
    category: 'Tools & Platforms',
    items: ['MS Office', 'Apache Superset', 'GitHub', 'VS Code', 'Google Colab', 'SQLite', 'Cisco', 'Mikrotik', 'Canva'],
  },
  {
    category: 'Soft Skills',
    items: ['Time Management', 'Team Work', 'Project Management', 'Communication', 'Problem Solving'],
  },
  {
    category: 'Languages',
    items: ['Indonesian (Native)', 'English (Medium)', 'Malay (Fluent)'],
  },
];

export const education = {
  school: 'Institut Teknologi PLN',
  degree: "Bachelor's Degree in Informatics Engineering",
  gpa: '3.52 / 4.00',
  concentration: 'Data Science and Computer Network',
  startDate: 'Sep 2021',
  endDate: 'Feb 2025',
  relevantCourses: [
    'Advanced Data Structure',
    'Advanced Database',
    'Machine Learning',
    'Computer Networking',
    'Introduction to Big Data',
  ],
};
