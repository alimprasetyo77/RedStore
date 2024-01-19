import React from "react";

const Pagination = () => {
  return (
    <div>
      <ul className="flex gap-2">
        <li className="h-[35px] w-[70px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer">
          <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            Back
          </a>
        </li>
        <li className="h-[35px] w-[35px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer">
          <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            1
          </a>
        </li>
        <li className="h-[35px] w-[35px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer">
          <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            2
          </a>
        </li>
        <li className="h-[35px] w-[35px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer">
          <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            3
          </a>
        </li>
        <li className="h-[35px] w-[35px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer">
          <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            4
          </a>
        </li>
        <li className="h-[35px] w-[35px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer">
          <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            5
          </a>
        </li>
        <li className="h-[35px] w-[70px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer">
          <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
