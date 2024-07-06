import React from "react";

const CategoriesList = () => {
  return (
    <div>
      <div className="text-black flex justify-between my-2 py-4 pl-4 pr-2 rounded-md text-xl hover:bg-slate-100 cursor-pointer">
        <p className="hover:underline cursor-pointer">Beauty</p>
        <span> → </span>
      </div>
      <div className="text-black flex justify-between my-2 py-4 pl-4 pr-2 rounded-md text-xl hover:bg-slate-100 cursor-pointer">
        <p className="hover:underline cursor-pointer">Fragrances</p>
        <span> → </span>
      </div>
      <div className="text-black flex justify-between my-2 py-4 pl-4 pr-2 rounded-md text-xl hover:bg-slate-100 cursor-pointer">
        <p className="hover:underline cursor-pointer">Furniture</p>
        <span> → </span>
      </div>
      <div className="text-black flex justify-between my-2 py-4 pl-4 pr-2 rounded-md text-xl hover:bg-slate-100 cursor-pointer">
        <p className="hover:underline cursor-pointer">Groceries</p>
        <span> → </span>
      </div>
    </div>
  );
};

export default CategoriesList;
