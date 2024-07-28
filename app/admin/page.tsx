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
    <div className="container mx-auto text-center">
      <h1 className="text-3xl mb-4">Cast Your Vote</h1>
      {options.length === 0 && (
        <OptionForm handleCreateOption={handleCreateOptions} />
      )}
      {options.length > 0 && (
        <div>
          <div className="flex flex-wrap justify-center">
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
          <div className="my-4">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Option</th>
                  <th className="border px-4 py-2">Votes</th>
                </tr>
              </thead>
              <tbody>
                {options.map((option) => (
                  <tr key={option.id}>
                    <td className="border px-4 py-2">{option.name}</td>
                    <td className="border px-4 py-2">{option.votes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button 
              onClick={handleRefresh} 
              className="bg-yellow-500 text-white rounded px-4 py-2 mt-2 hover:bg-yellow-700"
            >
              Refresh Vote Count
            </button>
            <button 
              onClick={handleClearOptions} 
              className="bg-red-500 text-white rounded px-4 py-2 mt-2 hover:bg-red-700"
            >
              Recreate Options
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
