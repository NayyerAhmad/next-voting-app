type OptionProps = {
    id: number;
    name: string | null;
    votes: number;
    handleVote: (id: number) => void;
  };
  
  export default function Option({ id, name, votes, handleVote }: OptionProps) {
    return (
      <div className="bg-white border border-gray-300 rounded shadow p-4 m-2 text-center w-48">
        <h3 className="font-bold">{name}</h3>
        <p>{votes} votes</p>
        <button 
          onClick={() => handleVote(id)} 
          className="bg-green-500 text-white rounded px-4 py-2 mt-2 hover:bg-green-700"
        >
          Vote
        </button>
      </div>
    );
  }
  