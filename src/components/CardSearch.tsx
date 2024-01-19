import { Products2 } from "../utils/apis/products/types";

interface CardProps {
  data?: Products2;
}
const Card = (props: CardProps) => {
  return (
    <div className="max-w-xl w-full border shadow-sm rounded overflow-hidden">
      <img
        src={`https://picsum.photos/200/200?random=${Math.random()}`}
        alt="image-product"
        width={300}
        height={300}
        className="h-[250px] w-full object-center "
      />
      <div className="p-3">
        <h3 className="font-semibold tracking-wide">{props.data?.name}</h3>
        <span className="font font-semibold text-sm text-red-500">${props.data?.price}</span>
        </div>
    </div>
  );
};

export default Card;