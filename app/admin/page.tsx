"use client";

import { useState } from 'react';
import Option from '../../src/components/admin/options';
import OptionForm from '../../src/components/admin/optionForm';

type OptionType = {
  id: number;
  name: string | null;
  votes: number;
};

export default function AdminPage() {
  const [options, setOptions] = useState<OptionType[]>([]);

  const handleCreateOptions = (numberOfOptions: number) => {
    const newOptions: OptionType[] = [];
    for (let i = 0; i < numberOfOptions; i++) {
      const name = window.prompt(`Enter name for option ${i + 1}:`);
      newOptions.push({ id: i + 1, name, votes: 0 });
    }
    setOptions(newOptions);
  };

  const handleVote = (id: number) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option
      )
    );
  };

  const handleRefresh = () => {
    if (window.confirm("Are you sure you want to refresh the votes?")) {
      setOptions(options.map((option) => ({ ...option, votes: 0 })));
    }
  };

  const handleClearOptions = () => {
    if (window.confirm("Are you sure you want to clear all options?")) {
      setOptions([]);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Cast Your Vote</h1>
      {options.length === 0 && (
        <OptionForm handleCreateOption={handleCreateOptions} />
      )}
      {options.length > 0 && (
        <div>
          <div className="flex flex-wrap justify-center gap-4">
            {options.map((option) => (
              <Option
                key={option.id}
                id={option.id}
                name={option.name}
                votes={option.votes}
                handleVote={handleVote}
              />
            ))}
          </div>
          <div className="my-8">
            <table className="table-auto border-collapse w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-6 py-4 text-left">Option</th>
                  <th className="border px-6 py-4 text-left">Votes</th>
                </tr>
              </thead>
              <tbody>
                {options.map((option) => (
                  <tr key={option.id} className="hover:bg-gray-100">
                    <td className="border px-6 py-4">{option.name}</td>
                    <td className="border px-6 py-4">{option.votes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center gap-4 mt-4">
              <button 
                onClick={handleRefresh} 
                className="bg-yellow-500 text-white rounded px-6 py-2 hover:bg-yellow-600 transition-colors duration-200"
              >
                Refresh Vote Count
              </button>
              <button 
                onClick={handleClearOptions} 
                className="bg-red-500 text-white rounded px-6 py-2 hover:bg-red-600 transition-colors duration-200"
              >
                Recreate Options
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
