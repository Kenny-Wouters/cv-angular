import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './cv.component.html',
  styleUrl: 'cv.component.css'
})
export class CvComponent {
  title = 'cv';

  // Background image path
  backgroundImage = 'assets/images/abstract-digital-grid-black-background.jpg';

  // Profile picture path
  profileImage = 'assets/images/photo_cv chemise.jpg';

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

  // Work Experience
  experiences = [
    {
      position: 'Full Stack Developer',
      company: 'Company Name',
      period: '2020 - Present',
      description: 'Description of your role and achievements.'
    }
    // Add more experiences as needed
  ];

  // Projects
  projects = [
    {
      name: 'Project Name',
      description: 'Description of the project and your role.',
      technologies: ['Angular', 'TypeScript', 'Node.js']
    }
    // Add more projects as needed
  ];

  // Education
  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2016 - 2020',
      description: 'Description of your education and achievements.'
    }
    // Add more education entries as needed
  ];

  // Skills
  skills = [
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'TypeScript', 'HTML/CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Java', 'SQL']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'CI/CD']
    }
  ];
} 