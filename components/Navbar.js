import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  BsFillBagCheckFill,
  BsFillPlusCircle,
  BsFillMinusCircle,
} from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { CgProfile } from "react-icons/cg";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log({ cart, addToCart, removeFromCart, clearCart, subTotal });
  const toggleCart = () => {
    if (visibl == false) {
      setVisible(true);
    } else if (visibl == true) {
      setVisible(false);
    }
  };

  const [visibl, setVisible] = useState(false);
  const ref = useRef();
  return (
    <div className="flex  flex-col items-center md:flex-row md:justify-start py-2 shadow-xl sticky top-0 z-10 bg-white">
      <div className="logo mx-5 justify-between">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center justify-center md:justify-start flex-start text-gray-900"
        >
          <Image
            src="/logoimg.avif"
            width={60}
            height={150}
            style={{ borderRadius: 50, marginBottom: 10 }}
          />
          <span className="ml-2 mr-20 text-xl">CodesWear.com</span>
        </Link>
        <div className="cart absolute right-0 mx-2 font-bold top-5 text-xl flex">
          <button onClick={toggleCart}>
            <AiOutlineShoppingCart className="text-3xl md:text-3xl mx-1" />
          </button>
          <Link href={'/login'}><CgProfile className="text-3xl md:text-3xl mx-1" /></Link>

        </div>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-12 font-200 md:text-l font-bold">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      {visibl ? (
        <div
          ref={ref}
          className=" w-72 h-[100vh] sideCart overflow-y-scroll absolute top-0 right-0 bg-yellow-100  py-10 px-8 flex-col flex"
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-yellow-500"
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal fontsembold">
            {Object.keys(cart).length == 0 && (
              <div className="mt-4 my-4 text-xl, font-semibold">
                Your Cart is Empty
              </div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="my-3 flex flex-row">
                    <div className=" font-semibold">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                    <div className="flex font-semibold items-center justify-center  ml-5 text-xl ">
                      <AiFillMinusCircle
                        className="mx-2 text-2xl cursor-pointer"
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />{" "}
                      {cart[k].qty}
                      <AiFillPlusCircle
                        className="mx-2 text-2xl cursor-pointer"
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <span className="total font-bold">SubTotal : {subTotal}</span>

          <div className="flex">
            <Link href={"/checkout"}>
              <button className="flex mt-10 mr-2 text-white bg-yellow-500 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded text-lg cursor-pointer">
                <BsFillBagCheckFill className="mr-1" /> CheckOut
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex mt-10  text-white bg-yellow-500 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded text-lg cursor-pointer"
            >
              ClearCart
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
