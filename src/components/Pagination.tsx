import React, { useState } from "react";
import { Data } from "../utils/apis/products/types";

const Pagination = (props: Data) => {
  const datas = props.data;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage: number = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = datas.slice(firstIndex, lastIndex);
  const npage = Math.ceil(datas.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  console.log(datas);

  return (
    <div>
      <ul className="flex gap-2">
        <li className="h-[35px] w-[70px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer">
          <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            Back
          </a>
        </li>
        {numbers.map((n: number, i: number) => (
          <li className="h-[35px] w-[35px] relative rounded-sm hover:bg-black hover:text-white border-2 border-slate-300 cursor-pointer" key={i}>
            <a href="#" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" onClick={}>
              {n}
            </a>
          </li>
        ))}
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
