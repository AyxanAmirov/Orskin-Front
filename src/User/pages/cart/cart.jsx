import React from "react";
import CartProduct from "../../components/cartProduct/cartProduct";
const productData = [
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
];

function Cart() {
  return (
    <div className="container">
      <div className="my-[120px] border-cart">
        <h2 className="text-[#9AD6CC] text-[26px] border-cart-head">
          You Have 2 Items In Your Cart
        </h2>
        <table className="w-full text-left">
          <thead className=" border-cart-head">
            <th className="py-[10px]">Product</th>
            <th className="py-[10px]">Price</th>
            <th className="py-[10px]">Quantity</th>
            <th className="py-[10px]">Subtotal</th>
          </thead>
          <tbody>
            <CartProduct />
            <CartProduct />
          </tbody>
        </table>
      </div>
      <div className="flex gap-[50px] mb-[70px] ">
        <div className="col-lg-6">
          <div className="border-[1px] border-[#E2E2E2] border-solid p-[30px]">
            <h3 className="text-[#9AD6CC] mb-[30px] text-[25px] border-b-[1px] border-[#E2E2E2] border-solid pb-[10px]">
              Calculate shipping
            </h3>
            <form className="flex flex-col gap-[20px]">
              <select
                name="cars"
                id="cars"
                className="w-full border-[1px] rounded-tl-[5px] rounded-[5px] border-[#E2E2E2] border-solid py-[15px] focus:outline-none focus:border-[green]"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <div className="flex gap-[20px]">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="State/Country"
                    className="w-full border-[1px] px-[8px] rounded-tl-[5px] rounded-[5px] border-[#E2E2E2] border-solid py-[10px] focus:outline-none focus:border-[green]"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Town/City"
                    className="w-full border-[1px] px-[8px] rounded-tl-[5px] rounded-[5px] border-[#E2E2E2] border-solid py-[10px] focus:outline-none focus:border-[green]"
                  />
                </div>
              </div>
              <button className="bg-[#9ad6cc] py-[10px] px-[35px] rounded-[4px] text-[white] self-end duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
                Update
              </button>
            </form>
          </div>
          <form className="flex mt-[30px] flex-col gap-[10px] border-[1px] border-[#E2E2E2] border-solid p-[30px]">
            <h3 className="text-[#9AD6CC] mb-[30px] text-[25px] border-b-[1px] border-[#E2E2E2] border-solid pb-[10px]">
              Have A Promotional Code?
            </h3>
            <div className="flex gap-[20px] items-center">
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Cupon code"
                  className="w-full border-[1px] px-[8px] rounded-tl-[5px] rounded-[5px] border-[#E2E2E2] border-solid py-[10px] focus:outline-none focus:border-[green]"
                />
              </div>
              <div className="col-lg-6">
                <button className="w-full text-[14px] bg-[#9ad6cc] py-[10px]  rounded-[4px] text-[white] duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
                  APPLY CUPON
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="h-full border-[1px] border-[#E2E2E2] border-solid p-[30px]">
            <h3 className="text-[#9AD6CC] mb-[30px] text-[25px] border-b-[1px] border-[#E2E2E2] border-solid pb-[10px]">
              Cart totals
            </h3>
            <div className="flex flex-col gap-[50px] ">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p className="text-[14px] text-[#AAACAF]">AED 755.32</p>
              </div>
              <div className="flex justify-between border-b-[1px] border-[#E2E2E2] border-solid pb-[30px]">
                <p>Shipping</p>
                <p className="text-[14px] ">
                  Enter your address to view shipping options.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-between mt-[20px] border-b-[1px] border-[#E2E2E2] border-solid pb-[10px]">
                <p>VAT </p>
                <p className="text-[14px] text-[#AAACAF]">AED 37.77</p>
              </div>
              <div className="flex justify-between">
                <p>Total </p>
                <p className="text-[14px] text-[#A5A7AA] font-[600]">AED 793.09</p>
              </div>
            </div>
          
            <div className="flex flex-col gap-[10px] mt-[30px]">
              <button className="w-full uppercase text-[14px] bg-[#9ad6cc] py-[10px]  rounded-[4px] text-[white] duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
                update cart
              </button>
              <button className="w-full uppercase text-[14px] bg-[#9ad6cc] py-[10px]  rounded-[4px] text-[white] duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
