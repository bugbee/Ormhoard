import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition-colors"
          >
            Ormhoard
          </Link>

          <div className="flex gap-6">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/generators/wizard-names"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Wizard Names
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
