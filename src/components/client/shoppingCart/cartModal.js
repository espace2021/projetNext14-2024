"use client";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export default function cartModal() {
    
    const { shouldDisplayCart,cartDetails,cartCount } = useShoppingCart();

    const [status, setStatus] = useState("idle");


  return (
    <div
      className={`bg-white flex flex-col absolute right-3 md:right-9 top-14 w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-opacity duration-500 ${
        shouldDisplayCart ? "opacity-100 z-10" : "opacity-0"
      }`}
    >
    {cartCount && cartCount > 0 ? (
        <>
          {Object.values(cartDetails).map((item) => (
    
            <div className="flex items-center gap-4 mb-3" key={item.id}>
            <p>
                          <img
                          src={item.image}
                          width={60} height={60} 
                          alt={item.title}
                         />
                         </p>
            <div>
             {item.title} <span className="text-xs">({item.quantity})</span>
            </div>
            <div className="ml-auto">{item.price} TND</div>
            <button className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1">
              <Image alt="delete icon" src="/images/trash.png" width={25} height={25} />
            </button>
          </div>
      
          ))}
                <article className="mt-3 flex flex-col">
                   <button className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 rounded-md w-100">
                     {status !== "loading" ? "Proceed to checkout" : "Loading..."}
                  </button>
               </article>
        </>
      ) : (
        <div className="p-5">You have no items in your cart</div>
      )}
    </div>
 
  );
}
