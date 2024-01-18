import { Products } from "../utils/apis/products/types";

const Card = (props: Products) => {
  return (
    <div className="max-w-xl w-full border shadow-sm rounded overflow-hidden">
      <img src={props.thumbnail} alt="image-product" width={300} height={300} className="h-[250px] w-full object-center " />
      <div className="p-3">
        <h3 className="font-semibold tracking-wide">{props.title}</h3>
        <span className="font font-semibold text-sm text-red-500">${props.price}</span>
      </div>
    </div>
  );
};

export default Card;
