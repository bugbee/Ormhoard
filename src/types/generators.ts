export interface WizardNameData {
  syllables: {
    prefixes: string[];
    middles: string[];
    suffixes: string[];
  };
  epithets: {
    titles: string[];
    compound_nouns: string[];
    of_phrases: string[];
    colorful_titles: string[];
  };
}

export interface GeneratedWizardName {
  name: string;
  epithet: string | null;
  fullName: string;
}

export type EpithetCategory = 'titles' | 'compound_nouns' | 'of_phrases' | 'colorful_titles';
