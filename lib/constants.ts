import { links } from './links';

export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		{
			title: 'Blog',
			href: '/blog',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: links.social,
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Embedded Systems Projects',
		company: 'University / Personal',
		location: 'Ho Chi Minh City, Vietnam',
		startDate: '2023',
		endDate: 'Present',
		description: [
			'Developed and implemented various embedded system projects.',
			'Actively participated in technical workshops related to embedded systems.',
			'Applied cross-disciplinary knowledge in entrepreneurship and critical thinking.',
		],
		technologies: ['C/C++', 'Microcontrollers', 'Digital Electronics', 'Network Systems'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'IoT-Based ECG Monitoring System using AD8232 and ESP32',
		description:
			'Developed a real-time heart monitoring system that captures ECG signals using the AD8232 sensor and transmits data via ESP32 for remote clinical analysis.',
		image: '/projects/IOT_ECG.png',
		tags: ['IoT', 'ESP32', 'AD8232', 'Healthcare', 'C++'],
		link: links.projects.ecgMonitoring.demo,
		repo: links.projects.ecgMonitoring.repo,
	},
	{
		title: 'LSTM Based Uplink Signal Decoding for NOMA OFDM Systems',
		description:
			'Implemented a Deep Learning-based decoding scheme using Long Short-Term Memory (LSTM) networks to enhance signal detection in Non-Orthogonal Multiple Access (NOMA) combined with OFDM.',
		image: '/projects/LSTM.png',
		tags: ['Deep Learning', 'LSTM', 'NOMA', 'OFDM', 'Wireless Communications'],
		link: links.projects.nomaOfdmDecoding.demo,
		repo: links.projects.nomaOfdmDecoding.repo,
	},
	{
		title: 'Renewable Energy Monitoring',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: links.projects.smartGrid.demo,
		repo: links.projects.smartGrid.repo,
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Electronics & Telecommunications',
		institution: 'University of Science - VNUHCM',
		location: 'Ho Chi Minh City, Vietnam',
		startDate: '2021',
		endDate: '2025',
		gpa: '3.8/4.0', // Placeholder, user didn't specify
		achievements: [
			'Achieved Distinction in Core Programming Techniques',
			'Excellence in Applied Microcontroller Practices & Digital Electronics',
			'Advanced Specialization in Digital Signal Processing & Wireless Communications',
			'Active contributor to technical workshops on Embedded Systems',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
	image?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Gemini Certified Educator',
		issuer: 'Google for Education',
		date: 'Dec 26, 2025',
		id: 'Nguyen Ba Tuan',
		url: links.certificates.gemini,
		pdf: '/certificates/certified_1.jpg',
		image: '/certificates/certified_1.jpg',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Digital Electronics', level: 9, category: 'technical' },
	{ name: 'Microcontrollers', level: 9, category: 'technical' },
	{ name: 'Signal Processing', level: 8, category: 'technical' },
	{ name: 'Telecommunication Systems', level: 8, category: 'technical' },
	{ name: 'Network Systems', level: 7, category: 'technical' },
	{ name: 'Embedded Systems', level: 8, category: 'technical' },

	// Software Skills
	{ name: 'C/C++', level: 8, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'MATLAB', level: 7, category: 'software' },
	{ name: 'Programming Techniques', level: 9, category: 'software' },

	// Soft Skills
	{ name: 'Critical Thinking', level: 9, category: 'soft' },
	{ name: 'Entrepreneurship', level: 7, category: 'soft' },
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Teamwork', level: 9, category: 'soft' },

	// Languages
	{ name: 'English', level: 8, category: 'language' },
	{ name: 'Vietnamese', level: 10, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];