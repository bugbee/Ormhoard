'use client';

import { useState } from 'react';
import { generateWizardName, generateEpithet, combineFullName, getEpithetCategories } from '@/lib/generators/wizardNames';
import type { EpithetCategory } from '@/types/generators';

export default function WizardNameGenerator() {
  const [wizardName, setWizardName] = useState<string>('');
  const [epithet, setEpithet] = useState<string>('');
  const [includeEpithet, setIncludeEpithet] = useState<boolean>(false);
  const [epithetCategory, setEpithetCategory] = useState<EpithetCategory | 'random'>('random');

  const epithetCategories = getEpithetCategories();

  const handleGenerateName = () => {
    const newName = generateWizardName();
    setWizardName(newName);
  };

  const handleGenerateEpithet = () => {
    const category = epithetCategory === 'random' ? undefined : epithetCategory;
    const newEpithet = generateEpithet(category);
    setEpithet(newEpithet);
  };

  const handleToggleEpithet = (checked: boolean) => {
    setIncludeEpithet(checked);
    if (!checked) {
      setEpithet('');
    }
  };

  const fullName = combineFullName(wizardName, includeEpithet ? epithet : null);

  return (
    <div className="max-w-md mx-auto">
      {/* Generated Name Display */}
      <div className="bg-slate-800 rounded-lg p-6 mb-6 min-h-[120px] flex flex-col items-center justify-center">
        {wizardName ? (
          <>
            <p className="text-amber-400 text-2xl font-bold text-center mb-2">
              {fullName}
            </p>
            {includeEpithet && epithet && (
              <p className="text-slate-400 text-sm">
                Name: {wizardName} | Epithet: {epithet}
              </p>
            )}
          </>
        ) : (
          <p className="text-slate-500 text-lg italic">
            Click &quot;Generate Name&quot; to begin
          </p>
        )}
      </div>

      {/* Name Generator */}
      <div className="mb-6">
        <button
          onClick={handleGenerateName}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Generate Name
        </button>
      </div>

      {/* Epithet Controls */}
      <div className="bg-slate-800/50 rounded-lg p-4">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="includeEpithet"
            checked={includeEpithet}
            onChange={(e) => handleToggleEpithet(e.target.checked)}
            className="w-5 h-5 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer"
          />
          <label
            htmlFor="includeEpithet"
            className="ml-3 text-slate-300 cursor-pointer select-none"
          >
            Include Epithet/Title
          </label>
        </div>

        {/* Epithet Category Selector */}
        <div className="mb-4">
          <label
            htmlFor="epithetCategory"
            className={`block text-sm mb-2 ${includeEpithet ? 'text-slate-300' : 'text-slate-500'}`}
          >
            Epithet Type
          </label>
          <select
            id="epithetCategory"
            value={epithetCategory}
            onChange={(e) => setEpithetCategory(e.target.value as EpithetCategory | 'random')}
            disabled={!includeEpithet}
            className={`w-full py-2 px-3 rounded-lg border transition-colors duration-200 ${
              includeEpithet
                ? 'bg-slate-700 border-slate-600 text-slate-100 cursor-pointer'
                : 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            <option value="random">Random (All Types)</option>
            {epithetCategories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerateEpithet}
          disabled={!includeEpithet}
          className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
            includeEpithet
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : 'bg-slate-700 text-slate-500 cursor-not-allowed'
          }`}
        >
          Generate Epithet
        </button>

        {includeEpithet && epithet && (
          <p className="mt-3 text-center text-amber-400">
            Current epithet: <span className="font-semibold">{epithet}</span>
          </p>
        )}
      </div>
    </div>
  );
}
