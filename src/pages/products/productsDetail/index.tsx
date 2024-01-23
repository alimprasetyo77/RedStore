import { useEffect, useState } from "react";
import { ProductsDetail } from "../../../utils/apis/products/types";
import { getDetail } from "../../../utils/apis/products/api";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import { formattedAmount } from "../../../utils/formattedAmount";

const ProductDetail = () => {
  const [detail, setDetail] = useState<ProductsDetail>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchDetail();
    }
  }, []);

  const fetchDetail = async () => {
    const response = await getDetail(id as string);
    setDetail(response);
    console.log(response.toko);
    console.log(response);
  };

  return (
    <Layout>
      <div className="py-10 bg-slate-100 min-h-screen">
        {detail && (
          <div className="flex container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
            <div className="flex flex-col space-y-8 items-center justify-center flex-1">
              <img
                className="max-w-[450px] max-h-[450px] rounded-lg"
                src={detail.photo_product}
                alt="keyboard"
              />
            </div>
            <div className="flex-1 text-left mt-14 mr-3">
              <h1 className="text-[26px] font-medium mb-2 max-w-[470px]">{detail.name}</h1>
              <div className="text-xl font-medium mb-6">{formattedAmount(detail.price)}</div>
              <p className="mb-8 border-b-[1px] border-gray-600 pb-8">{detail.description}</p>
              {detail.toko && (
                <div className="flex items-center mb-8 mr-64">
                  <img
                    src={detail.toko.photo_profile}
                    alt=""
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{detail.toko.name}</h3>
                    <p className="text-lg">{detail.toko.user_name}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-8">
                <p className="text-[18px] font-medium border-y-[1px] border-gray-600 py-2 px-8">
                  STOK {detail.stock}
                </p>
                <button className="bg-[#1E81B3] text-white py-3 px-8">Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
