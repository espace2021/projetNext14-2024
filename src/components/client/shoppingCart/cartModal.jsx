"use client";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';

import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function cartModal() {

  const router = useRouter();
    
    const { shouldDisplayCart,cartDetails,cartCount , removeItem , clearCart, totalPrice,} = useShoppingCart();

    const [status, setStatus] = useState("idle");

    async function handleClick() {

      setStatus("loading")

const firstName= "H"
const lastName="H"
const phoneNumber= 98123456
const email="hh@gmail.com"
const orderId=1234657

    const objPay={
        "receiverWalletId": "65a3e74c3952f91b26c5c388",
        "token": "TND",
        "amount": totalPrice,
        "type": "immediate",
        "description": "payment description",
        "acceptedPaymentMethods": [
          "wallet",
          "bank_card",
          "e-DINAR"
        ],
        "lifespan": 10,
        "checkoutForm": true,
        "addPaymentFeesToAmount": true,
        "firstName": firstName,
        "lastName": lastName,
        "phoneNumber": phoneNumber,
        "email": email,
        "orderId": orderId,
        "webhook": "merchant.tech/api/notification_payment",
        "silentWebhook": true,
        "successUrl": "https://gateway.sandbox.konnect.network/payment-success",
        "failUrl": "https://gateway.sandbox.konnect.network/payment-failure",
        "theme": "light"
      }

      const headers = {
              'x-api-key': '65a3e74c3952f91b26c5c384:wuIg9Sq54CosG1MhbP'
        }

        axios.post("https://api.preprod.konnect.network/api/v2/payments/init-payment", objPay, {
    headers: headers
  })
        .then((response) => {
          console.log(response);
          const payUrl = response.data.payUrl
          const paymentRef = response.data.paymentRef
           router.push(payUrl)
           clearCart()
        })
       .catch((error) => {console.log(error)})
     }

    return (
    <div
      className={`bg-white flex flex-col absolute right-3 md:right-9 top-14 w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-opacity duration-500 ${
        shouldDisplayCart ? "opacity-100 z-10" : "opacity-0"
      }`}
    >
    {cartCount && cartCount > 0 ? (
        <>
        <div 
            onClick={() => clearCart()}
            >
             <ClearIcon/>
        </div>
       
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
            <button className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
            onClick={() => removeItem(item.id)}
            >
            <DeleteIcon color="secondary"/>
            </button>
          </div>
      
          ))}
                <article className="mt-3 flex flex-col">
                    Total : {totalPrice} TND
                   <button 
                   className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 rounded-md w-100"
                   onClick={()=>handleClick()}
                   >
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
