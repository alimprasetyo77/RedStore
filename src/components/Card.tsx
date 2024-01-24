import { MoreHorizontal } from "lucide-react";
import { IProductsUser } from "../utils/apis/products/types";
import { useState } from "react";
import Alert from "./Alert";

interface CardProps {
  data: IProductsUser;
  id: number;
  onDelete: (id: number) => void;
  onEdit: (open: boolean, id: number) => void;
}

const Card = ({ data, id, onDelete, onEdit }: CardProps) => {
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  console.log(data);
  const handleOptions = () => {
    if (id !== data.id) return;
    setOptionIsOpen((prev) => !prev);
  };
  return (
    <div className="max-w-xl w-full border shadow-sm rounded overflow-hidden group">
      <div className="relative">
        <img src={`${data.photo_product}`} alt="image-product" width={300} height={300} className="h-[250px] w-full object-center" />
        <MoreHorizontal
          className={`absolute top-1 right-1 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:bg-zinc-100 rounded-full duration-300 cursor-pointer ${optionIsOpen && "opacity-100 bg-zinc-300"}`}
          onClick={() => handleOptions()}
        />
        {optionIsOpen ? (
          <div className=" absolute top-8 right-2 rounded bg-white flex flex-col gap-y-1">
            <button className="text-sm hover:bg-slate-100 w-full px-6 py-2" onClick={() => onEdit(true, data.id)}>
              Edit
            </button>
            <Alert title="Are you sure?" description={`This action cannot be undone. This will permanently delete the your product.`} onAction={() => onDelete(data.id)}>
              <button className="text-sm hover:bg-slate-100 w-full px-6 py-2"> Delete</button>
            </Alert>
          </div>
        ) : null}
      </div>
      <div className="p-3 ">
        <div className="flex justify-between">
          <h3 className="font-semibold tracking-wide">{data.name}</h3>
          <span className="text-sm text-zinc-500 font-semibold">{data.category}</span>
        </div>
        <span className="font font-semibold text-sm text-red-500">Rp. {data.price}</span>
      </div>
    </div>
  );
};

export default Card;
