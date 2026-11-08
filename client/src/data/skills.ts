import { Skill } from '../types';

export const SKILLS_DATA: Skill[] = [
  { name: 'Core Java & OOP', level: 'Advanced', category: 'java-backend', icon: '☕', highlight: 'Collections & Multithreading' },
  { name: 'Spring Boot & MVC', level: 'Intermediate', category: 'java-backend', icon: '🍃', highlight: 'RESTful Microservices' },
  { name: 'Hibernate & JPA / JDBC', level: 'Intermediate', category: 'java-backend', icon: '⚡', highlight: 'ORM & Persistence' },
  { name: 'Python', level: 'Intermediate', category: 'java-backend', icon: '🐍', highlight: 'Scripting & AI Basics' },
  { name: 'JavaScript (ES6+)', level: 'Advanced', category: 'java-backend', icon: '🟡', highlight: 'Asynchronous Programming' },
  { name: 'React.js', level: 'Advanced', category: 'frontend', icon: '⚛️', highlight: 'Hooks, SPA & State' },
  { name: 'Tailwind CSS', level: 'Advanced', category: 'frontend', icon: '🎨', highlight: 'Fluid Responsive UI' },
  { name: 'HTML5 & CSS3', level: 'Advanced', category: 'frontend', icon: '🌐', highlight: 'Semantic & Accessible' },
  { name: 'Node.js & Express.js', level: 'Advanced', category: 'realtime-backend', icon: '🟢', highlight: 'Event-Driven Architecture' },
  { name: 'REST API Design', level: 'Advanced', category: 'realtime-backend', icon: '🔌', highlight: 'Integration & JWT Auth' },
  { name: 'WebRTC', level: 'Intermediate', category: 'realtime-backend', icon: '📹', highlight: 'Peer-to-Peer Streaming' },
  { name: 'Socket.io', level: 'Intermediate', category: 'realtime-backend', icon: '📡', highlight: 'Bidirectional Sockets' },
  { name: 'MongoDB', level: 'Advanced', category: 'databases', icon: '🍃', highlight: 'Mongoose & Aggregations' },
  { name: 'MySQL & SQLite', level: 'Intermediate', category: 'databases', icon: '🐬', highlight: 'Relational Schemas & Queries' },
  { name: 'Git & GitHub', level: 'Advanced', category: 'databases', icon: '🐙', highlight: 'Version Control & Workflows' },
  { name: 'CI/CD Pipeline Awareness', level: 'Intermediate', category: 'databases', icon: '🚀', highlight: 'Secure Software Delivery' },
  { name: 'Prompt Engineering & AI', level: 'Advanced', category: 'tools-ai', icon: '🤖', highlight: 'AI-assisted Development' },
  { name: 'Selenium WebDriver (Basics)', level: 'Intermediate', category: 'tools-ai', icon: '🧪', highlight: 'Automated Testing' },
  { name: 'Jira & ServiceNow', level: 'Intermediate', category: 'tools-ai', icon: '📋', highlight: 'Agile & Ticket Lifecycle' },
  { name: 'ERP Fundamentals', level: 'Intermediate', category: 'tools-ai', icon: '🏢', highlight: 'SAP & Oracle Concepts' },
  { name: 'SharePoint', level: 'Intermediate', category: 'tools-ai', icon: '📁', highlight: 'Enterprise Collaboration' }
];

export const SKILL_CATEGORIES: { id: Skill['category']; label: string }[] = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'java-backend', label: 'Languages & Java' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'realtime-backend', label: 'Backend & WebRTC' },
  { id: 'databases', label: 'Databases & DevOps' },
  { id: 'tools-ai', label: 'Enterprise & AI' }
];
