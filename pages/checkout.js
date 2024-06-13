import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  BsFillBagCheckFill,
} from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

const checkout = ({cart, clearCart, subTotal, addToCart, removeFromCart}) => {
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">checkout</h1>
      <h2 className="font-bold text-xl ml-1">1. Delivery Details</h2>
      <div className="mx-auto flex my-2  ">
        <div className="px-2 w-1/2">
          <div class=" mb-4 ml-1">
            <label htmlfor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4 ml-1">
            <label htmlfor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 ">
        <div class=" mb-4 ml-1">
          <label htmlfor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto flex my-2  ">
        <div className="px-2 w-1/2">
          <div class=" mb-4 ml-1">
            <label htmlfor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4 ml-1">
            <label
              htmlfor="cityname"
              className="leading-7 text-sm text-gray-600"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2  ">
        <div className="px-2 w-1/2">
          <div class=" mb-4 ml-1">
            <label
              htmlfor="statename"
              className="leading-7 text-sm text-gray-600"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4 ml-1">
            <label
              htmlfor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              PinCode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
        <h2>2. Review Cart Items</h2>
      <div
        className="  sideCart  bg-yellow-100  py-10 px-8"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
       
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

    
      
      </div>
      <div className="mx-8">    <Link href={'/checkout'}><button className="flex mt-10 mr-2 text-white bg-yellow-500 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded text-lg cursor-pointer">
              <BsFillBagCheckFill className="mr-1" /> Pay ₹{subTotal}
            </button>
            </Link></div>
    </div>
  );
};

export default checkout;
