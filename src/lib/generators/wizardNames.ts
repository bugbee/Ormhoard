import wizardNameData from '@/data/wizard-name-generator.json';
import type { WizardNameData, EpithetCategory } from '@/types/generators';

const data: WizardNameData = wizardNameData;

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function generateWizardName(): string {
  const { prefixes, middles, suffixes } = data.syllables;

  // 50% chance for 2 syllables, 50% chance for 3 syllables
  const useTwoSyllables = Math.random() < 0.5;

  const prefix = getRandomElement(prefixes);
  const suffix = getRandomElement(suffixes);

  if (useTwoSyllables) {
    return capitalizeFirst(prefix + suffix);
  } else {
    const middle = getRandomElement(middles);
    return capitalizeFirst(prefix + middle + suffix);
  }
}

export function generateEpithet(category?: EpithetCategory): string {
  if (category) {
    return getRandomElement(data.epithets[category]);
  }

  // Random category if none specified
  const categories: EpithetCategory[] = ['titles', 'compound_nouns', 'of_phrases', 'colorful_titles'];
  const randomCategory = getRandomElement(categories);
  return getRandomElement(data.epithets[randomCategory]);
}

export function combineFullName(name: string, epithet: string | null): string {
  if (epithet) {
    return `${name} ${epithet}`;
  }
  return name;
}

export function getEpithetCategories(): { value: EpithetCategory; label: string }[] {
  return [
    { value: 'titles', label: 'Titles (the Wise)' },
    { value: 'compound_nouns', label: 'Compound (Starweaver)' },
    { value: 'of_phrases', label: 'Of Phrases (of the Silver Tower)' },
    { value: 'colorful_titles', label: 'Colorful (Greycloak)' },
  ];
}
