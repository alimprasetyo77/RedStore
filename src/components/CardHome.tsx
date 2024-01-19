import React from "react";
import { Products } from "../utils/apis/products/types";

const CardHome = (props: Products) => {
  return (
    <div>
      <div className="max-w-xl w-full border shadow-sm rounded overflow-hidden group">
        <div className="relative">
          <img src={props.thumbnail} alt="image-product" width={300} height={300} className="h-[250px] w-full object-center" />
        </div>
        <div className="p-3 ">
          <div className="flex justify-between">
            <h3 className="font-semibold tracking-wide">{props.title}</h3>
          </div>
          <span className="font font-semibold text-sm text-red-500">Rp. {props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
