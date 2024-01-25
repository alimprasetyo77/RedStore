import { Products } from "../utils/apis/products/types";
import { Link } from "react-router-dom";
import { formattedAmount } from "../utils/formattedAmount";
import { useAuth } from "../utils/contexts/auth";

const CardHome = (props: Products) => {
  const { user, token } = useAuth();
  return (
    <div>
      <div className="max-w-xl w-full border shadow-sm rounded-lg overflow-hidden group mt-7">
        <div className="relative">
          <Link to={`/products/${props.id}`}>
            <img
              src={props.photo_product}
              alt="image-product"
              className="h-[250px] w-full object-center"
            />
          </Link>
          <div
            onClick={props.addToCart}
            className={`absolute w-full h-[50px] bg-red-500 text-white top-[200px] flex items-center justify-center cursor-pointer hover:opacity-100 opacity-0 hover:transition-opacity duration-300 ${
              user.role === "admin" || !token ? "hidden" : null
            }`}>
            Add to cart
          </div>
        </div>
        <div className="p-3 ">
          <div className="flex justify-between">
            <Link to={`/products/${props.id}`}>
              <h3 className="font-semibold tracking-wide cursor-pointer max-w-[500px] min-h-12">
                {props.name}
              </h3>
            </Link>
          </div>
          <span className="font font-semibold text-sm text-red-500">
            {formattedAmount(props.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
