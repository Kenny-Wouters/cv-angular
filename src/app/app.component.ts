import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';

  // Background image path
  backgroundImage = 'assets/images/abstract-digital-grid-black-background.jpg';

  // Personal Information
  personalInfo = {
    name: environment.personalInfo.name,
    title: environment.personalInfo.title,
    tagline: environment.personalInfo.tagline,
    email: environment.personalInfo.email,
    phone: environment.personalInfo.phone,
    location: environment.personalInfo.location,
    linkedin: environment.personalInfo.linkedin,
    github: environment.personalInfo.github
  };

  // Experience
  experiences = [
    {
      position: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2020 - Present',
      description: 'Led development of microservices architecture using Node.js and Angular. Implemented CI/CD pipelines and containerized applications using Docker. Managed team of 5 developers and mentored junior developers.'
    },
    {
      position: 'Full Stack Developer',
      company: 'Web Solutions Inc.',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client-facing web applications using React, Node.js, and MongoDB. Implemented responsive designs and optimized application performance.'
    }
  ];

  // Education
  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2015 - 2019',
      description: 'Specialized in Web Development and Software Engineering. Graduated with First Class Honours.'
    }
  ];

  // Skills
  skills = [
    { 
      category: 'Frontend Development', 
      items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS/SCSS'] 
    },
    { 
      category: 'Backend Development', 
      items: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'] 
    },
    { 
      category: 'DevOps & Tools', 
      items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Nginx', 'Linux'] 
    },
    { 
      category: 'Testing & Quality', 
      items: ['Jest', 'Jasmine', 'Karma', 'Cypress', 'Unit Testing', 'E2E Testing', 'TDD'] 
    },
    { 
      category: 'Other Skills', 
      items: ['Agile/Scrum', 'System Design', 'Microservices', 'Web Security', 'Performance Optimization'] 
    }
  ];

  // Projects
  projects = [
    {
      name: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce solution with Angular, Node.js, and MongoDB. Implemented real-time inventory management and payment processing.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API', 'Socket.io']
    },
    {
      name: 'Task Management System',
      description: 'Developed a collaborative task management system with real-time updates and team collaboration features.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'WebSocket', 'Redis']
    }
  ];
}
