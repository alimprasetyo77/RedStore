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

const Products = () => {
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
      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  const getProductUser = async () => {
    try {
      const result = await getProductsByUser();
      setProductsUser(result.Product);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteProduct = async (id: number) => {
    try {
      const result = await deleteProduct(id);
      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditProduct = async (body: IProductType) => {
    try {
      const result = await updateProduct(body, idEdit!);
      alert(result.message);
    } catch (error) {
      console.log(error);
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
        <div className="max-h-screen flex flex-col container bg-white my-8 p-10 gap-3">
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

          <div className="grid grid-cols-5 gap-6">
            {productsUser
              ? productsUser.map((product) => (
                  <Card
                    key={product.id}
                    data={product}
                    id={product.id}
                    onDelete={handleDeleteProduct}
                    onEdit={onEditProduct}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
