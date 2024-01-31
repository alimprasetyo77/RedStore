import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdOutlineCamera } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoIosLaptop } from "react-icons/io";
import Swipper from "../../components/Swiper";
import CardHome from "../../components/CardHome";
import axiosWithConfig from "../../utils/apis/axiosWithConfig";
import Swal from "sweetalert2";
import { useCart } from "../../utils/contexts/cartContext";
const Home = () => {
  const [products, setProducts] = useState<[]>([]);
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { changeCart } = useCart();

  function getProduct(pageProduct: number, productCategory: string) {
    axiosWithConfig
      .get(`/products?page=${pageProduct}&category=${productCategory}`)
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

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

  function changeCategory(productCategory: string) {
    setCategory(productCategory);
    setPage(1);
  }

  useEffect(() => {
    getProduct(page, category);
  }, [category, page]);

  return (
    <Layout>
      <div className="md:mx-[100px] sm:my-[50px] mx-[10px] ">
        <div className="h-[350px] mb-20">
          <Swipper />
        </div>
        <h1 className="text-red-500 font-semibold ps-5 border-s-[15px] border-red-500 text-lg mb-5">
          Categories
        </h1>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold mb-5">Browse By Category</h1>{" "}
          {category == "" ? (
            <></>
          ) : (
            <button
              className="hover:bg-red-500 hover:text-white p-1"
              onClick={() => setCategory("")}
            >
              Show all product
            </button>
          )}
        </div>
        <div className="flex gap-auto justify-between flex-wrap">
          <div
            onClick={() => changeCategory("phone")}
            className={`xl:w-[170px] xl:h-[145px] lg:w-[120px] lg:h-[95px] md:w-[80px] border-2 lg:rounded-lg p-4 md:p-0 rounded-sm ${
              category === "phone" ? "bg-red-500 text-white" : "bg-white"
            } border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5 md:gap-2`}
          >
            <CiMobile4 className="xl:text-5xl lg:text-3xl sm:text-4xl" />
            <h1 className="text-center md:text-sm hidden md:inline">Phones</h1>
          </div>
          <div
            onClick={() => changeCategory("computer")}
            className={`xl:w-[170px] xl:h-[145px] lg:w-[120px] lg:h-[95px] md:w-[80px] border-2 lg:rounded-lg p-4 md:p-0 rounded-sm ${
              category === "computer" ? "bg-red-500 text-white" : "bg-white"
            } border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5 md:gap-2`}
          >
            <HiOutlineComputerDesktop className="xl:text-5xl lg:text-3xl sm:text-4xl" />
            <h1 className="text-center md:text-sm hidden md:inline">
              Computers
            </h1>
          </div>
          <div
            onClick={() => changeCategory("camera")}
            className={`xl:w-[170px] xl:h-[145px] lg:w-[120px] lg:h-[95px] md:w-[80px] border-2 lg:rounded-lg p-4 md:p-0 rounded-sm ${
              category === "camera" ? "bg-red-500 text-white" : "bg-white"
            } border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5 md:gap-2`}
          >
            <MdOutlineCamera className="xl:text-5xl lg:text-3xl sm:text-4xl" />
            <h1 className="text-center md:text-sm hidden md:inline">Cameras</h1>
          </div>
          <div
            onClick={() => changeCategory("smartwatch")}
            className={`xl:w-[170px] xl:h-[145px] lg:w-[120px] lg:h-[95px] md:w-[80px] border-2 lg:rounded-lg p-4 md:p-0 rounded-sm ${
              category === "smartwatch" ? "bg-red-500 text-white" : "bg-white"
            } border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5 md:gap-2`}
          >
            <BsSmartwatch className="xl:text-5xl lg:text-3xl sm:text-4xl" />
            <h1 className="text-center md:text-sm hidden md:inline">
              Smartwatch
            </h1>
          </div>
          <div
            onClick={() => changeCategory("television")}
            className={`xl:w-[170px] xl:h-[145px] lg:w-[120px] lg:h-[95px] md:w-[80px] border-2 lg:rounded-lg p-4 md:p-0 rounded-sm ${
              category === "television" ? "bg-red-500 text-white" : "bg-white"
            } border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5 md:gap-2`}
          >
            <PiTelevisionSimpleLight className="xl:text-5xl lg:text-3xl sm:text-4xl" />
            <h1 className="text-center md:text-sm hidden md:inline">
              Television
            </h1>
          </div>
          <div
            onClick={() => changeCategory("laptop")}
            className={`xl:w-[170px] xl:h-[145px] lg:w-[120px] lg:h-[95px] md:w-[80px] border-2 lg:rounded-lg p-4 md:p-0 rounded-sm ${
              category === "laptop" ? "bg-red-500 text-white" : "bg-white"
            } border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5 md:gap-2`}
          >
            <IoIosLaptop className="xl:text-5xl lg:text-3xl sm:text-4xl" />
            <h1 className="text-center md:text-sm hidden md:inline">Laptop</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-5 gap-5">
          {products ? (
            products.map((item: any, index: number) => {
              return (
                <CardHome
                  key={index}
                  type="card-home"
                  photo_product={item.photo_product}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  addToCart={() => addToCartHandle(item.id)}
                />
              );
            })
          ) : (
            <div>
              <h1>No product...</h1>
              <button onClick={() => setPage((prev) => prev - 1)}>
                Back to previous page
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          {/* <Pagination data={products} /> */}
          <div>
            <ul className="flex gap-2">
              <li
                className="h-[35px] w-[70px] relative rounded-sm hover:bg-red-500 hover:text-white border-2 border-slate-300 cursor-pointer"
                onClick={prePage}
              >
                <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  Back
                </p>
              </li>
              <li
                className={`h-[35px] w-[35px] relative  rounded-sm hover:bg-red-500 hover:text-white border-2 border-slate-300 cursor-pointer`}
              >
                <p
                  className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
                >
                  {page}
                </p>
              </li>
              <li
                className="h-[35px] w-[70px] relative rounded-sm hover:bg-red-500 hover:text-white border-2 border-slate-300 cursor-pointer"
                onClick={nextPage}
              >
                <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  Next
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );

  function prePage() {
    if (page !== 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (products) {
      setPage(page + 1);
    } else {
      setPage(page + 0);
    }
  }
};

export default Home;
