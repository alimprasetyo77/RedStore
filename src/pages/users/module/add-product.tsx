import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IProductType, productSchema } from "../../../utils/apis/products/types";
import { Loader2, X, FileImage, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { MdCloudUpload } from "react-icons/md";

interface AddProductProps {
  close: () => void;
  onSubmit: (data: IProductType) => void;
}

const AddProduct = ({ close, onSubmit }: AddProductProps) => {
  const [image, setImage] = useState<string>("");

  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = useForm<IProductType>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      close();
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <div className="bg-black/20 fixed inset-0 z-10" onClick={close}></div>
      <div className="absolute translate-x-1/2 -translate-y-1/4 2xl:-translate-y-1/2 top-1/2 right-1/2 z-[999] max-w-3xl w-full bg-white rounded-md shadow px-10 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">New product</h1>
          <button onClick={close} className="text-xl font-semibold">
            <X />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" py-10 px-2 rounded-lg max-w-6xl w-full space-y-5 "
        >
          <div className="flex flex-col gap-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className=" w-full px-4 py-2 rounded-md border outline-none"
            />
            <p className="text-sm text-red-500 ">{errors.name && errors.name.message}</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              {...register("description")}
              className=" w-full px-4 py-2 rounded-md border outline-none"
            />
            <p className="text-sm text-red-500 ">
              {errors.description && errors.description.message}
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              {...register("price", {
                valueAsNumber: true,
              })}
              className=" w-full px-4 py-2 rounded-md border outline-none"
            />
            <p className="text-sm text-red-500 ">{errors.price && errors.price.message}</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              {...register("category")}
              className=" w-full px-4 py-2 rounded-md border outline-none"
            >
              <option value={""} disabled hidden selected>
                Choose category
              </option>
              <option value="computer">Computer</option>
              <option value="camera">Cameras</option>
              <option value="phone">Phones</option>
              <option value="television">Television</option>
              <option value="laptop">Laptop</option>
            </select>
            <p className="text-sm text-red-500 ">{errors.category && errors.category.message}</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="stock">Stock</label>
            <input
              type="text"
              id="stock"
              {...register("stock", {
                valueAsNumber: true,
              })}
              className=" w-full px-4 py-2 rounded-md border outline-none"
            />
            <p className="text-sm text-red-500 ">{errors.stock && errors.stock.message}</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <label
              htmlFor="photo_product"
              className="w-1/2 px-4 py-2 rounded-md border-2 border-dashed outline-none text-gray-500 focus:text-gray-900 flex items-center justify-center gap-x-3 cursor-pointer"
            >
              <input
                type="file"
                id="photo_product"
                className="hidden"
                {...register("photo_product", {
                  onChange: (e) => setImage(URL.createObjectURL(e.target.files[0])),
                })}
              />
              {image ? (
                <img src={image} alt="photo-product" className="size-32" />
              ) : (
                <>
                  <MdCloudUpload color="#1475cf" size={30} />
                  <span className="text-xs">Upload photo product</span>
                </>
              )}
            </label>
            <div className="flex items-center text-xs gap-x-2 ">
              <FileImage className="text-[#1475cf] size-4" />
              {getValues("photo_product")?.length > 0 ? (
                <>
                  {JSON.stringify(getValues("photo_product")[0]?.name)}
                  <Trash2
                    className="size-4 text-red-500 cursor-pointer"
                    onClick={() => {
                      return resetField("photo_product"), setImage("");
                    }}
                  />
                </>
              ) : (
                "No file selected"
              )}
            </div>
            <p className="text-sm text-red-500">{errors.photo_product?.message as string}</p>
          </div>
          <button
            className="px-6 py-1 rounded-md border bg-sky-500 text-white "
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          >
            {isSubmitting ? (
              <p className="flex items-center gap-x-3 text-sm">
                <Loader2 className={"animate-spin text-xl "} /> Please wait
              </p>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
