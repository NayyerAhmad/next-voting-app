import { useState } from 'react';

type OptionFormProps = {
  handleCreateOption: (numberOfOptions: number) => void;
};

export default function OptionForm({ handleCreateOption }: OptionFormProps) {
  const [numberOfOptions, setNumberOfOptions] = useState<number>(0);

  return (
    <div>
      <h2 className="mb-4">Create Options</h2>
      <input 
        type="number" 
        value={numberOfOptions}
        onChange={(e) => setNumberOfOptions(Number(e.target.value))}
        className="border border-gray-300 rounded p-2 mb-4"
      />
      <button 
        onClick={() => handleCreateOption(numberOfOptions)} 
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700"
      >
        Create
      </button>
    </div>
  );
}
