import React from "react";
import { Products } from "../utils/apis/products/types";
import { Link } from "react-router-dom";

const CardHome = (props: Products) => {
  return (
    <div>
      <div className="max-w-xl w-full border shadow-sm rounded overflow-hidden group">
        <div className="relative">
          <img src={props.thumbnail} alt="image-product" width={300} height={300} className="h-[250px] w-full object-center" />
          <div onClick={props.addToCart} className="absolute w-full h-[50px] bg-black text-white top-[200px] flex items-center justify-center cursor-pointer hover:opacity-100 opacity-0 hover:transition-opacity duration-300">
            Add to cart
          </div>
        </div>
        <div className="p-3 ">
          <div className="flex justify-between">
            <Link to={`/products/${props.id}`}>
              <h3 className="font-semibold tracking-wide cursor-pointer">{props.title}</h3>
            </Link>
          </div>
          <span className="font font-semibold text-sm text-red-500">Rp. {props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
