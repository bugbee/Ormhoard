import wizardNameData from '@/data/wizard-names.json';
import type { WizardNameData } from '@/types/generators';

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

export function generateEpithet(): string {
  return getRandomElement(data.epithets);
}

export function combineFullName(name: string, epithet: string | null): string {
  if (epithet) {
    return `${name} ${epithet}`;
  }
  return name;
}
