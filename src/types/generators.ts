export interface WizardNameData {
  syllables: {
    prefixes: string[];
    middles: string[];
    suffixes: string[];
  };
  epithets: string[];
}

export interface GeneratedWizardName {
  name: string;
  epithet: string | null;
  fullName: string;
}
