import { useEffect, useState } from "react";
import AddEditProduct from "./module/add-product";
import UpdateProduct from "./module/edit-product";
import Card from "../../components/Card";
import {
  createProduct,
  deleteProduct,
  getProductsByUser,
  updateProduct,
} from "../../utils/apis/products/api";
import { IProductType, IProductsUser } from "../../utils/apis/products/types";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { Loader2 } from "lucide-react";
import { useToast } from "../../components/ui/use-toast";

const Products = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [idEdit, setIdEdit] = useState<number>();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const [productsUser, setProductsUser] = useState<IProductsUser[]>();
  useEffect(() => {
    getProductUser();
  }, []);

  const handleCreateProduct = async (body: IProductType) => {
    try {
      const result = await createProduct(body);
      getProductUser();
      toast({
        description: result.message,
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  const getProductUser = async () => {
    try {
      setLoading(true);
      const result = await getProductsByUser();
      setProductsUser(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      const result = await deleteProduct(id);
      getProductUser();
      toast({
        description: result.message,
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  const handleEditProduct = async (body: IProductType) => {
    try {
      const result = await updateProduct(body, idEdit!);
      getProductUser();
      toast({
        description: result.message,
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const onEditProduct = async (open: boolean, id: number) => {
    setIsOpenEditForm(open);
    setIdEdit(id);
  };
  return (
    <Layout>
      <div className="flex bg-slate-100">
        <Sidebar />
        <div className="max-h-screen flex flex-col container bg-white my-8 p-10 gap-8">
          <div className="flex justify-between">
            {isOpenForm ? (
              <AddEditProduct onSubmit={handleCreateProduct} close={() => setIsOpenForm(false)} />
            ) : isOpenEditForm ? (
              <UpdateProduct onSubmit={handleEditProduct} close={() => setIsOpenEditForm(false)} />
            ) : null}
            <h1 className="text-2xl font-semibold ">My Products</h1>
            <button
              className="py1 px-5 rounded-md text-sm bg-red-500 text-white"
              onClick={() => setIsOpenForm(true)}>
              Add Product
            </button>
          </div>

          {loading ? (
            <Loader2 className="animate-spin text-center w-full h-8" />
          ) : (
            <>
              <div className="grid grid-cols-5 gap-10">
                {productsUser && productsUser.length > 0 ? (
                  productsUser.map((product) => (
                    <Card
                      key={product.id}
                      data={product}
                      id={product.id}
                      onDelete={handleDeleteProduct}
                      onEdit={onEditProduct}
                    />
                  ))
                ) : (
                  <p>Product not exists</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
