import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { Products } from "../../../utils/apis/products/types";
import { getSearch } from "../../../utils/apis/products/api";
import Card from "../../../components/CardSearch";
import { Link, useParams } from "react-router-dom";

const ProductsSearch = () => {
  const [results, setResults] = useState<Products[]>([]);
  const { search } = useParams();

  console.log(search);

  const fetchResult = async (search: string) => {
    try {
      const response = await getSearch(search);
      setResults(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResult(search as string);
  }, [search]);

  return (
    <Layout>
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          <h1>Search Result "{search}"</h1>

          <div className="grid grid-cols-5 gap-8 p-3">
            {results &&
              results.map((product, index) => (
                <Link key={index} to={`/products/${product.id}`}>
                  <Card data={product} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsSearch;
