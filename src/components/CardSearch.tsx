import { Products } from "../utils/apis/products/types";
import { formattedAmount } from "../utils/formattedAmount";

interface CardProps {
  data?: Products;
}
const Card = (props: CardProps) => {
  return (
    <div className="max-w-xl w-full border shadow-sm rounded overflow-hidden">
      <img
        src={props.data?.photo_product}
        alt="image-product"
        width={300}
        height={300}
        className="h-[250px] w-full object-center "
      />
      <div className="p-3">
        <h3 className="font-semibold tracking-wide">{props.data?.name}</h3>
        <span className="font font-semibold text-sm text-red-500">
          {formattedAmount(props.data?.price ?? 0)}
        </span>
      </div>
    </div>
  );
};

export default Card;
