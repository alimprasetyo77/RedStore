import { useLocation } from "react-router";
import Layout from "../../components/Layout";
import { formattedAmount } from "../../utils/formattedAmount";

const OrderResult = () => {
  const { state } = useLocation();
  console.log(state);

  const foto = [
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677027/bca_u8s8de.png",
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677142/bri_tjmr7e.png",
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677155/647bf1a6c87148864bbb4cd44130da36_bl9g38.png",
  ];
  return (
    <Layout>
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="flex justify-center container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          <div className="flex flex-col items-center space-y-8">
            <img
              className="w-56 h-16 pb-4"
              src={
                state.data.Payment.bank === "bca"
                  ? foto[0]
                  : state.data.Payment.bank === "bri"
                  ? foto[1]
                  : foto[2]
              }
            />
            <div className="flex flex-col gap-4">
              <div className="flex gap-32 border-b pb-4">
                <p>Transaction id </p>
                <p className="text-sm">: {state.data.Payment.transaction_id}</p>
              </div>
              <div className="flex gap-36 border-b pb-4">
                <p>VA Number</p>
                <p>: {state.data.Payment.va_number}</p>
              </div>
              <div className="flex gap-[169px] border-b pb-4">
                <p>Amount </p>
                <p>: {formattedAmount(state.data.Payment.gross_amount)}</p>
              </div>
              <div className="flex gap-[107px] border-b pb-4">
                <p>Transaction Time </p>
                <p>: {state.data.Payment.transaction_time} </p>
              </div>
              <div className="flex gap-[136px] border-b pb-4">
                <p>Expired Date </p>
                <p>: {state.data.Payment.expired_at} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderResult;
