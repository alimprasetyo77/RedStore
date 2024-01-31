import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { Products } from "../../../utils/apis/products/types";
import { getSearch } from "../../../utils/apis/products/api";
import CardHome from "../../../components/CardHome";
import { Link, useParams } from "react-router-dom";
import axiosWithConfig from "../../../utils/apis/axiosWithConfig";
import Swal from "sweetalert2";
import { useCart } from "../../../utils/contexts/cartContext";

const ProductsSearch = () => {
  const [results, setResults] = useState<Products[]>([]);
  const { search } = useParams();
  const { changeCart } = useCart();

  const fetchResult = async (search: string) => {
    try {
      const response = await getSearch(search);
      setResults(response.data.data);
      console.log(response);
    } catch (error) {
      setResults([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResult(search as string);
  }, [search]);

  function addToCartHandle(id_product: number) {
    axiosWithConfig
      .post(`/carts/${id_product}`)
      .then((res) => {
        console.log(res);
        changeCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <Layout>
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          <h1>Search Result "{search}"</h1>

          {results && results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-3">
              {results.map((product, index) => (
                <Link key={index} to={`/products/${product.id}`}>
                  <CardHome
                    key={index}
                    photo_product={product.photo_product}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                    addToCart={() => addToCartHandle(product.id!)}
                    type="card-home"
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsSearch;
