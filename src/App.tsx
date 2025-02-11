import { Trash2 } from 'lucide-react';
import './App.css';
import ImageHeader from './components/imageHeader';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setItems((prev) => [...prev, inputValue]);
      setInputValue(""); // Reset the input field after submission
    }
  };

  const handleRemove = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index)); // Remove item by index
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <ImageHeader />
      <div className="w-[250px]">
        <form className="mb-20" onSubmit={handleSubmit}>
          <input
            className="w-full p-2 rounded-sm mb-2 bg-gray-200 text-black"
            value={inputValue}
            placeholder="Enter a todo"
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
          <button
            className="bg-gray-200 p-2 rounded-sm hover:bg-gray-400 cursor-pointer w-full"
            type="submit"
          >
            Add
          </button>
        </form>
        <div className="h-52 overflow-y-auto">
          {items.map((data, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-slate-600 pl-2 mr-1 mb-2 py-2"
            >
              <p>{data}</p>
              <button className='text-red-600 cursor-pointer ' onClick={() => handleRemove(index)}>
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
