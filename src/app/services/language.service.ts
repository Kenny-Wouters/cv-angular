import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translation {
  [key: string]: {
    [lang: string]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  private translations: Translation = {
    'about': {
      'en': 'About Me',
      'fr': 'À Propos',
      'nl': 'Over Mij'
    },
    'experience': {
      'en': 'Experience & Training',
      'fr': 'Expérience & Formation',
      'nl': 'Ervaring & Opleiding'
    },
    'projects': {
      'en': 'Projects',
      'fr': 'Projets',
      'nl': 'Projecten'
    },
    'education': {
      'en': 'Education',
      'fr': 'Formation',
      'nl': 'Opleiding'
    },
    'skills': {
      'en': 'Technical Skills',
      'fr': 'Compétences Techniques',
      'nl': 'Technische Vaardigheden'
    },
    'contact': {
      'en': 'Contact',
      'fr': 'Contact',
      'nl': 'Contact'
    }
  };

  constructor() {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      this.setLanguage(savedLanguage);
    }
  }

  setLanguage(lang: string) {
    this.currentLanguage.next(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  getTranslation(key: string): string {
    const lang = this.currentLanguage.value;
    return this.translations[key]?.[lang] || this.translations[key]?.['en'] || key;
  }
} 