import React from "react";

function CartProduct() {
  return (
    <tr className="border-t-[1px] border-[#E2E2E2] border-solid ">
      <td className=" flex gap-[20px] items-center py-[30px] px-[20px]">
        <img
          src="https://orskin.ae/wp-content/uploads/2024/06/Pumpkin-apple-spice-peel-150x150.webp"
          alt="Product"
          className="w-[100px]"
        />
        <p className="text-[14px] text-[#9AD6CC]">
          Epicuren - Pumpkin Apple Spice Peel
        </p>
      </td>
      <td className="text-[#A5A7AA] text-[14px]">AED 391.00</td>
      <td>
        <span className="py-[10px] px-[15px] bg-[#FCFCFC] rounded-tl-[5px] rounded-bl-[5px] hover:bg-[white] border-cart cursor-pointer">-</span>
        <span className="py-[10px] px-[15px] border-cart-num  cursor-pointer text-[14px]">1</span>
        <span className="py-[10px] px-[15px] bg-[#FCFCFC] rounded-tr-[5px] rounded-br-[5px]  hover:bg-[white] border-cart cursor-pointer">+</span>
      </td>
      <td className="text-[#A5A7AA] text-[14px] ">AED 391.00</td>
      <td className="text-[#9AD6CC] cursor-pointer">X</td>
    </tr>
  );
}

export default CartProduct;
