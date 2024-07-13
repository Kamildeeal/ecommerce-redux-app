import React, { useRef } from "react";

interface SearchInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchInput = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value === "") return;
    // Add your logic for form submission
  };
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleSubmit} className="max-w-[40vw] w-full mx-auto">
      <input
        type="text"
        placeholder="What are you searching for?"
        className="w-full px-4 py-2 rounded text-black max-w-[40vw] mx-auto"
        ref={inputRef}
      />
    </form>
  );
};

export default SearchInput;
