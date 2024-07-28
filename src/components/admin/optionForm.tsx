import { useState } from 'react';

type OptionFormProps = {
  handleCreateOption: (numberOfOptions: number) => void;
};

export default function OptionForm({ handleCreateOption }: OptionFormProps) {
  const [numberOfOptions, setNumberOfOptions] = useState<number>(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Options</h2>
      <div className="flex items-center">
        <input 
          type="number" 
          value={numberOfOptions}
          onChange={(e) => setNumberOfOptions(Number(e.target.value))}
          className="border border-gray-300 rounded-l p-2 w-3/4"
          placeholder="Enter number of options"
        />
        <button 
          onClick={() => handleCreateOption(numberOfOptions)} 
          className="bg-yellow-500 text-white rounded-r px-6 py-2 w-1/4 hover:bg-yellow-600 transition-colors duration-200"
        >
          Create
        </button>
      </div>
    </div>
  );
}
