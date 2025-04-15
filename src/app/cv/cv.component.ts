import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './cv.component.html',
  styleUrl: 'cv.component.css'
})
export class CvComponent implements OnInit {
  title = 'cv';
  currentLanguage = 'en';

  // Background image path
  backgroundImage = 'assets/images/abstract-digital-grid-black-background.jpg';

  // Profile picture path
  profileImage = 'assets/images/photo_cv chemise.jpg';

  // Personal Information
  personalInfo = {
    name: "Wouters Kenny",
    title: "Junior Full Stack Developer",
    tagline: {
      en: "Eager to learn and grow in the world of web development.",
      fr: "Passionné par l'apprentissage et le développement dans le monde du web.",
      nl: "Gretig om te leren en te groeien in de wereld van webontwikkeling."
    },
    email: "kendev007@outlook.com",
    phone: "+32 488 81 88 97",
    location: "Belgium",
    linkedin: "https://www.linkedin.com/in/kenny-wouters-408bb0279/?trk=opento_sprofile_details",
    github: "https://github.com/Kenny-Wouters"
  };

  // Work Experience
  experiences = [
    {
      position: {
        en: 'Trainee Developer',
        fr: 'Développeur Stagiaire',
        nl: 'Stagiair Ontwikkelaar'
      },
      company: 'Roggemans development',
      period: '3 months',
      description: {
        en: 'Participated in a training program focused on .NET and Blazor web development. Gained hands-on experience with modern web technologies and best practices (clean architecture, MVVM, Azure, etc.).',
        fr: 'Participation à un stage de formation axé sur le développement web .NET et Blazor. Acquisition d\'une expérience pratique avec les technologies web modernes et les meilleures pratiques (clean architecture, MVVM, Azure, etc.).',
        nl: 'Deelgenomen aan een trainingsprogramma gericht op .NET en Blazor webontwikkeling. Praktische ervaring opgedaan met moderne webtechnologieën en best practices (clean architecture, MVVM, Azure, etc.).'
      }
    },
    {
      position: {
        en: 'Web Development Bootcamp',
        fr: 'Formation Intensive en Développement Web',
        nl: 'Web Development Bootcamp'
      },
      company: 'Coding School',
      period: '7 months',
      description: {
        en: 'Completed an intensive bootcamp covering full-stack web development. Learned modern web technologies and development practices through hands-on projects.',
        fr: 'Terminé un bootcamp intensif couvrant le développement web full-stack. Appris les technologies web modernes et les pratiques de développement à travers des projets pratiques.',
        nl: 'Voltooid een intensieve bootcamp over full-stack webontwikkeling. Moderne webtechnologieën en ontwikkelingspraktijken geleerd door middel van praktische projecten.'
      }
    }
  ];

  // Projects
  projects = [
    {
      name: {
        en: 'Personal Portfolio Website',
        fr: 'Site Web Portfolio Personnel',
        nl: 'Persoonlijke Portfolio Website'
      },
      description: {
        en: 'A responsive portfolio website built with Angular and Tailwind CSS, showcasing my skills and projects.',
        fr: 'Un site web portfolio responsive construit avec Angular et Tailwind CSS, présentant mes compétences et projets.',
        nl: 'Een responsieve portfolio website gebouwd met Angular en Tailwind CSS, die mijn vaardigheden en projecten toont.'
      },
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      name: {
        en: 'E-commerce Demo',
        fr: 'Démo E-commerce',
        nl: 'E-commerce Demo'
      },
      description: {
        en: 'A full-stack e-commerce demo application built during bootcamp, featuring product listings and shopping cart functionality.',
        fr: 'Une application de démonstration e-commerce full-stack construite pendant le bootcamp, avec des listes de produits et une fonctionnalité de panier d\'achat.',
        nl: 'Een full-stack e-commerce demo applicatie gebouwd tijdens de bootcamp, met productlijsten en winkelwagen functionaliteit.'
      },
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Bootstrap']
    }
  ];

  // Education
  education = [
    {
      degree: {
        en: 'Web Development Bootcamp',
        fr: 'Formation Intensive en Développement Web',
        nl: 'Web Development Bootcamp'
      },
      institution: 'Coding School',
      period: '2023',
      description: {
        en: 'Intensive training in full-stack web development, covering both frontend and backend technologies.',
        fr: 'Formation intensive en développement web full-stack, couvrant les technologies frontend et backend.',
        nl: 'Intensieve training in full-stack webontwikkeling, met aandacht voor zowel frontend als backend technologieën.'
      }
    }
  ];

  // Skills
  skills = [
    {
      category: {
        en: 'Frontend',
        fr: 'Frontend',
        nl: 'Frontend'
      },
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Blazor']
    },
    {
      category: {
        en: 'Backend',
        fr: 'Backend',
        nl: 'Backend'
      },
      items: ['Node.js', '.NET', 'C#', 'Express', 'MongoDB', 'SQL']
    },
    {
      category: {
        en: 'Tools & Technologies',
        fr: 'Outils & Technologies',
        nl: 'Tools & Technologieën'
      },
      items: ['Git', 'VS Code', 'Visual Studio', 'Postman', 'Docker']
    }
  ];

  // About Me text
  aboutMe = {
    en: `I am a passionate junior full-stack developer with a strong foundation in modern web technologies. 
    After completing a 7-month intensive web development bootcamp, I further enhanced my skills through a 3-month 
    training program focused on .NET and Blazor development. I am enthusiastic about learning new technologies 
    and best practices in web development. My experience includes building responsive web applications, 
    working with both frontend and backend technologies, and implementing modern development workflows. 
    I am eager to contribute to real-world projects and continue growing as a developer.`,
    fr: `Je suis un développeur full-stack junior passionné avec une solide base dans les technologies web modernes.
    Après avoir terminé un bootcamp intensif de 7 mois en développement web, j'ai perfectionné mes compétences
    grâce à un programme de formation de 3 mois axé sur le développement .NET et Blazor. Je suis enthousiaste
    à l'idée d'apprendre de nouvelles technologies et les meilleures pratiques en développement web. Mon expérience
    comprend la création d'applications web responsives, le travail avec les technologies frontend et backend,
    et la mise en œuvre de flux de travail de développement modernes. Je suis impatient de contribuer à des projets
    réels et de continuer à grandir en tant que développeur.`,
    nl: `Ik ben een gepassioneerde junior full-stack ontwikkelaar met een sterke basis in moderne webtechnologieën.
    Na het voltooien van een intensieve 7-maanden durende web development bootcamp, heb ik mijn vaardigheden verder
    verbeterd door een 3-maanden durend trainingsprogramma gericht op .NET en Blazor ontwikkeling. Ik ben enthousiast
    over het leren van nieuwe technologieën en best practices in webontwikkeling. Mijn ervaring omvat het bouwen van
    responsieve webapplicaties, werken met zowel frontend als backend technologieën, en het implementeren van moderne
    ontwikkelingsworkflows. Ik sta te popelen om bij te dragen aan echte projecten en door te groeien als ontwikkelaar.`
  };

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  getTranslatedText(text: any): string {
    if (typeof text === 'string') return text;
    return text[this.currentLanguage] || text['en'] || '';
  }
} 