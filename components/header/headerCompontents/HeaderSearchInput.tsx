import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (!value) return;
    router.push(`/search/${value}`);
    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={onSubmit}
      className="md:max-w-[40vw] w-full mr-3 flex:1 relative overflow-hidden md:mx-auto"
    >
      <input
        type="text"
        placeholder="What are you searching for?"
        className="w-full px-4 py-2 rounded text-black pl-12"
        ref={inputRef}
      />
      <button
        type="submit"
        className="ml-2 p-2 text-gray-800 rounded absolute left-0 bottom-[4px] hover:bg-gray-200"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
