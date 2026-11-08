import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'wealth-finance',
    title: 'Wealth - Personal Finance Manager',
    tagline: 'Comprehensive MERN platform for real-time asset monitoring, budgeting, and recurring calculations.',
    category: 'MERN Stack Web App',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    summary: 'A full-stack personal finance and wealth management platform enabling users to track investment portfolios, monitor multi-asset performance, and manage budgets in real time across a unified dashboard.',
    features: [
      'Structured REST APIs and analytical views automating recurring calculations and balance sheets',
      'Real-time spending categorizations, expense breakdown charts, and budget threshold alerts',
      'Secure authentication with protected routes and persistent database transactions via MongoDB',
      'Improved personal financial visibility through intuitive, modern responsive dashboards'
    ],
    metrics: 'Designed for optimal query execution on high-volume transaction entries with sub-100ms response times.'
  },
  {
    id: 'officemeet',
    title: 'OfficeMeet - Real-Time Video Conferencing',
    tagline: 'High-performance WebRTC & Socket.io video calling with room authorization and instant messaging.',
    category: 'Real-Time Communication',
    tags: ['React.js', 'WebRTC', 'Socket.io', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    summary: 'A full-stack real-time video conferencing application designed for frictionless peer-to-peer virtual meetings, dynamic room creation, low-latency audio/video transmission, and collaborative chat.',
    features: [
      'Low-latency peer-to-peer audio and video streaming powered by WebRTC mesh connections',
      'Bi-directional signaling and meeting room event handling engineered with Socket.io',
      'JWT-based user authentication and token verification securing video channel entry',
      'Integrated real-time text chat alongside interactive audio/video mute and screen toggles'
    ],
    metrics: 'Engineered peer signaling handling multi-client sync with minimal latency overhead.'
  }
];
