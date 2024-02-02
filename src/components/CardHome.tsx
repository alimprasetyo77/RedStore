import { IProductsUser, Products } from "../utils/apis/products/types";
import { Link } from "react-router-dom";
import { formattedAmount } from "../utils/formattedAmount";
import { useAuth } from "../utils/contexts/auth";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import Alert from "./Alert";

interface CardProps extends Products {
  type: "card-home" | "card-my-product";
  data?: IProductsUser;
  id_product?: number | undefined;
  onDelete?: (id: number) => void;
  onEdit?: (open: boolean, id: number) => void;
}

const CardHome = ({
  data,
  id_product,
  onDelete,
  onEdit,
  type,
  ...props
}: CardProps) => {
  const { user, token } = useAuth();
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const handleOptions = () => {
    if (id_product !== data?.id) return;
    setOptionIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="max-w-xl w-full border shadow-sm rounded-lg overflow-hidden group mt-7">
        <div className="relative">
          <Link to={`/products/${props.id ?? id_product}`}>
            <img
              src={props.photo_product ?? data?.photo_product}
              alt="image-product"
              className="h-[250px] w-full object-center group-hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
          {type === "card-home" ? (
            <div
              onClick={props.addToCart}
              className={`absolute w-full h-[50px] bg-red-500 text-white top-[200px] flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 hover:transition-opacity duration-300 ${
                user.role === "admin" || !token ? "hidden" : null
              }`}
            >
              Add to cart
            </div>
          ) : (
            <>
              <MoreHorizontal
                className={`absolute top-1 right-1 text-zinc-500 opacity-100 bg-zinc-100 rounded-full duration-300 cursor-pointer ${
                  optionIsOpen && "opacity-100 bg-zinc-300"
                }`}
                onClick={() => handleOptions()}
              />
              {optionIsOpen ? (
                <div className=" absolute top-8 right-2 rounded bg-white flex flex-col gap-y-1">
                  <button
                    className="text-sm hover:bg-slate-100 w-full px-6 py-2"
                    onClick={() => onEdit!(true, data?.id!)}
                  >
                    Edit
                  </button>
                  <Alert
                    title="Are you sure?"
                    description={`This action cannot be undone. This will permanently delete the your product.`}
                    onAction={() => onDelete!(data?.id!)}
                  >
                    <button className="text-sm hover:bg-slate-100 w-full px-6 py-2">
                      Delete
                    </button>
                  </Alert>
                </div>
              ) : null}
            </>
          )}
        </div>
        <div className="p-3 space-y-2">
          {type === "card-my-product" ? (
            <div className="flex items-center justify-between gap-x-3">
              <h3 className="whitespace-pre-line">{data?.name}</h3>
              <span>{data?.category}</span>
            </div>
          ) : (
            <div className="flex justify-between">
              <Link to={`/products/${props.id ?? id_product}`}>
                <h3 className="font-semibold tracking-wide cursor-pointer max-w-[500px] min-h-12">
                  {props.name}
                </h3>
              </Link>
            </div>
          )}
          <div className="flex items-center justify-between ">
            <span className="font font-semibold text-lg text-red-500">
              {formattedAmount(props.price ?? data?.price!)}
            </span>
            <span
              className={`text-teal-500 font-medium text-xs uppercase ${
                type === "card-home" ? "hidden" : "block"
              }`}
            >
              stock : {data?.stock}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
