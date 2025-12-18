import WizardNameGenerator from "@/components/generators/WizardNameGenerator";

export const metadata = {
  title: "Wizard Name Generator - Ormhoard",
  description: "Generate mystical wizard names for the world of Ormhoard",
};

export default function WizardNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-3">
          Wizard Name Generator
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Generate unique names for the wizards of Ormhoard. Names are crafted
          from ancient syllables, with optional mystical epithets.
        </p>
      </div>

      <WizardNameGenerator />
    </div>
  );
}
