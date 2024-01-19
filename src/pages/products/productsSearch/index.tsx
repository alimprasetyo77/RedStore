import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { Products2 } from "../../../utils/apis/products/types";
import { getSearch } from "../../../utils/apis/products/api";
import Card from "../../../components/CardSearch";

interface SearchResultProps {
  query: string;
}
const ProductsSearch: React.FC<SearchResultProps> = ({ query }) => {
  const [results, setResults] = useState<Products2[]>([]);

  const fetchResult = async (query: string) => {
    try {
      const response = await getSearch(query);
      setResults(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResult;
  }, [query]);

  return (
    <Layout>
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          <h1>Search Result "Gamepad"</h1>
          <div className="grid grid-cols-5 gap-8 p-3">
            {results?.map((product, index) => (
              <Card key={index} data={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsSearch;
