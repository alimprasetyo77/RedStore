import Layout from "../../components/Layout";
import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdOutlineCamera } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoIosLaptop } from "react-icons/io";
import Card from "../../components/Card";

const Home = () => {
  return (
    <Layout>
      <div className="mx-[100px] my-[50px]">
        <h1 className="text-red-500 font-semibold ps-5 border-s-[15px] border-red-500 text-lg mb-5">Categories</h1>
        <h1 className="text-3xl font-bold mb-5">Browse By Category</h1>
        <div className="flex gap-auto justify-between flex-wrap">
          <div className="w-[170px] h-[145px] border-2 border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5">
            <CiMobile4 className="text-5xl" />
            <h1 className="text-center">Phones</h1>
          </div>
          <div className="w-[170px] h-[145px] border-2 border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5">
            <HiOutlineComputerDesktop className="text-5xl" />
            <h1 className="text-center">Computers</h1>
          </div>
          <div className="w-[170px] h-[145px] border-2 border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5">
            <MdOutlineCamera className="text-5xl" />
            <h1 className="text-center">Cameras</h1>
          </div>
          <div className="w-[170px] h-[145px] border-2 border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5">
            <BsSmartwatch className="text-5xl" />
            <h1 className="text-center">Smartwatch</h1>
          </div>
          <div className="w-[170px] h-[145px] border-2 border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5">
            <PiTelevisionSimpleLight className="text-5xl" />
            <h1 className="text-center">Television</h1>
          </div>
          <div className="w-[170px] h-[145px] border-2 border-slate-400 hover:bg-red-500 hover:text-white cursor-pointer flex flex-col justify-center items-center gap-5">
            <IoIosLaptop className="text-5xl" />
            <h1 className="text-center">Laptop</h1>
          </div>
        </div>
        <div className="grid grid-cols-4 my-5 gap-5">
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
          <Card thumbnail="https://source.unsplash.com/random?product" title="product" price={300} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
