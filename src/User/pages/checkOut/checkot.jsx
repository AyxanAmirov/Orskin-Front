import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="mt-[230px] mb-[80px]">
      <div className="container">
        <div className="border-[1px] border-solid border-[#E2E2E2] py-[15px] px-[8px]">
          <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap  xl:justify-between lg:justify-between justify-center items-center">
            <h2 className="text-[#9AD6CC] text-[23px]">
              Have A Promotional Code?
            </h2>
            <div className="flex gap-[15px] items-center">
              <div className="col-lg-7">
                <input
                  type="text"
                  className="border-[1px] border-solid border-[#E2E2E2] py-[8px] rounded-[5px] px-[6px] "
                  placeholder="Coupon code"
                />
              </div>
              <div className="col-lg-5">
                <button className="w-full bg-[#9ad6cc] py-[8px] rounded-[5px] text-[#fff] text-[14px] px-[13px]">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap mt-[50px] gap-[40px]">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <form className="flex flex-col gap-[20px] border-[1px] border-solid border-[#E2E2E2] p-[20px] ">
              <h3 className="pb-[10px] border-b-[1px] border-b-solid border-b-[#E2E2E2] text-[#9AD6CC] text-[18px]">
                Billing details
              </h3>
              <div className="flex gap-[20px] xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label htmlFor="firstName" className="text-[14px]">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label htmlFor="name" className="text-[14px]">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country / Region *
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-full focus:outline-none focus:ring-0 border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px] appearance-none pl-3 pr-10"
                  style={{
                    borderLeftColor: "#3ebb3e",
                    borderLeftWidth: "4px",
                  }}
                  defaultValue="United Arab Emirates"
                >
                  <option>United Arab Emirates</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Street address *
                </label>
                <div className="flex flex-col gap-[10px]">
                  <input
                    type="text"
                    id="firstName"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    id="firstName"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                    placeholder="Apartment,suite,unit,etc.(optional)"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Town / City *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                />
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  State / County (optional)
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                />
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Phone *
                </label>
                <input
                  type="number"
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                />
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Email address *
                </label>
                <input
                  type="email"
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                />
              </div>
            </form>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <form className="flex flex-col gap-[20px] border-[1px] border-solid border-[#E2E2E2] p-[20px] ">
              <h3 className="pb-[10px] border-b-[1px] border-b-solid border-b-[#E2E2E2] text-[#9AD6CC] text-[18px]">
              Ship to a different address?
              </h3>
              <div className="flex gap-[20px] xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label htmlFor="firstName" className="text-[14px]">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label htmlFor="name" className="text-[14px]">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country / Region *
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-full focus:outline-none focus:ring-0 border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px] appearance-none pl-3 pr-10"
                  style={{
                    borderLeftColor: "#3ebb3e",
                    borderLeftWidth: "4px",
                  }}
                  defaultValue="United Arab Emirates"
                >
                  <option>United Arab Emirates</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Street address *
                </label>
                <div className="flex flex-col gap-[10px]">
                  <input
                    type="text"
                    id="firstName"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    id="firstName"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                    placeholder="Apartment,suite,unit,etc.(optional)"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Town / City *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                />
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  State / County (optional)
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                />
              </div>
              <div>
                <label htmlFor="firstName" className="text-[14px]">
                  Order notes (optional){" "}
                </label>
                <textarea
                  id="firstName"
                  className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                  placeholder="Notes about your order,e.g. special notes delivery"
                ></textarea>
              </div>
            </form>
          </div>{" "}
        </div>
        <div className="border-[1px] mt-[40px] border-solid border-[#E2E2E2}">
          <p className="py-[10px] px-[10px] border-b-[1px] border-b-solid border-b-[#E2E2E2] text-[#9AD6CC] text-[18px]">
            Your Order
          </p>
          <div className="py-[10px] px-[10px] flex justify-between border-b-[1px] border-b-solid border-b-[#E2E2E2]">
            <p className="text-[13px] font-bold">Product</p>
            <p className="text-[13px] font-bold">Subtotal</p>
          </div>
          <div className="py-[20px] px-[20px] flex items-center justify-between border-b-[1px] border-b-solid border-b-[#E2E2E2]">
            <div className="flex gap-[20px] items-center">
              <img
                src="https://orskin.ae/wp-content/uploads/2024/06/Pumpkin-apple-spice-peel-150x150.webp"
                alt="prpduct"
                className="w-[100px]"
              />
              <p>Epicuren - Pumpkin Apple Spice Peel × 1</p>
            </div>
            <p className="text-[13px] text-[#a5a7aa]">AED 391.00</p>
          </div>
          <div className="py-[25px] px-[10px] flex justify-between border-b-[1px] border-b-solid border-b-[#E2E2E2]">
            <div className="col-lg-4">
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-between">
                  <p className="text-[#868686] font-[500]">Subtotal </p>
                  <p className="text-[13px] text-[#a5a7aa]">AED 391.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#868686] font-[500]">Shipping </p>
                  <p className="text-[#868686] font-[500] text-[13px]">
                    Enter your address to view shipping options.
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#868686] font-[500]">VAT </p>
                  <p className="text-[13px] text-[#a5a7aa]">AED 19.55</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#868686] font-[500]">Total </p>
                  <p className="text-[13px] text-[#a5a7aa]">AED 410.55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[10px] px-[10px] flex gap-[3px] border-b-[1px] border-b-solid border-b-[#E2E2E2]">
            <p className="text-[13px] text-[#555555">Have a coupon? </p>
            <Link className="text-[14px] text-[#9AD6CC]">
              Click here to enter your code
            </Link>
          </div>
          <div className="py-[10px] px-[10px]  border-b-[1px] border-b-solid border-b-[#E2E2E2]">
            <p className="text-[13px] text-[#555555] ">
              If you have a coupon code, please apply it below.{" "}
            </p>
            <input
              type="text"
              placeholder="Cupoun code"
              className="w-full p-[10px] rounded-[10px] border-[1px] border-solid border-[#E2E2E2] mt-[10px]"
            />
            <button className="uppercase w-full text-center mt-[10px] bg-[#9ad6cc] py-[10px]  rounded-[4px] text-[white] duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
              Apply coupon
            </button>
            <p className="mt-[40px]">Credit/Debit Card</p>
            <div className="bg-[#F9F9FB] p-[20px] h-[100px] mt-[20px]">
              <p>Pay using a credit or debit card via Telr Secure Payments</p>
            </div>
            <div className="m-[25px]">
              <input type="checkbox"   id="check"/>
              <label htmlFor="check" className="cursor-pointer"> I have read and agree to the website <Link className="text-[#9AD6CC]">terms and conditions *</Link></label>
            </div>
            <button className="uppercase w-full text-center mt-[10px] bg-[#9ad6cc] py-[10px]  rounded-[4px] text-[white] duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
              Apply coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
