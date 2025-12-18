import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-amber-500 mb-4">
          Welcome to Ormhoard
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          A fantasy world filled with ancient mysteries, powerful wizards, and
          endless adventures. Explore the lore or use our tools to enhance your
          roleplaying games.
        </p>
      </div>

      {/* Tools Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-200 mb-6">
          Generator Tools
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/generators/wizard-names"
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-500 rounded-lg p-6 transition-all duration-200 group"
          >
            <h3 className="text-lg font-semibold text-purple-400 group-hover:text-purple-300 mb-2">
              Wizard Name Generator
            </h3>
            <p className="text-slate-400 text-sm">
              Generate mystical names for the wizards of Ormhoard, complete with
              optional epithets and titles.
            </p>
          </Link>

          {/* Placeholder for future generators */}
          <div className="bg-slate-800/50 border border-slate-700 border-dashed rounded-lg p-6 opacity-50">
            <h3 className="text-lg font-semibold text-slate-500 mb-2">
              Adventure Generator
            </h3>
            <p className="text-slate-500 text-sm">Coming soon...</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 border-dashed rounded-lg p-6 opacity-50">
            <h3 className="text-lg font-semibold text-slate-500 mb-2">
              Tavern Name Generator
            </h3>
            <p className="text-slate-500 text-sm">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Lore Section Placeholder */}
      <section>
        <h2 className="text-2xl font-bold text-slate-200 mb-6">
          World of Ormhoard
        </h2>
        <div className="bg-slate-800/50 border border-slate-700 border-dashed rounded-lg p-8 text-center">
          <p className="text-slate-500">
            Worldbuilding content and lore coming soon...
          </p>
        </div>
      </section>
    </div>
  );
}
