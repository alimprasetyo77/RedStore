import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { Products2 } from "../../../utils/apis/products/types";
import { getSearch } from "../../../utils/apis/products/api";
import Card from "../../../components/CardSearch";
import { useParams } from "react-router-dom";

const ProductsSearch = () => {
  const [results, setResults] = useState<Products2[]>([]);
  const { search } = useParams();

  console.log(search);

  const fetchResult = async (search: string) => {
    try {
      const response = await getSearch(search);
      setResults(response.Product);
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
            {results && results?.map((product, index) => <Card key={index} data={product} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsSearch;
