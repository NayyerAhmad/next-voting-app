type OptionProps = {
    id: number;
    name: string | null;
    votes: number;
    handleVote: (id: number) => void;
  };
  
  export default function Option({ id, name, votes, handleVote }: OptionProps) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 m-2 text-center w-64">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <p className="text-gray-600">{votes} votes</p>
        <button 
          onClick={() => handleVote(id)} 
          className="bg-yellow-500 text-white rounded px-4 py-2 mt-4 hover:bg-green-600 transition-colors duration-200"
        >
          Vote
        </button>
      </div>
    );
  }
  