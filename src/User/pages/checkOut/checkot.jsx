import React from "react";

function Checkout() {
  return (
    <div className="mt-[230px] mb-[80px]">
      <div className="container">
        <div className="border-[1px] border-solid border-[#E2E2E2] py-[15px] px-[8px]">
          <div className="flex justify-between items-center">
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
                <button className="w-full bg-[#9ad6cc] py-[8px] rounded-[5px] text-[#fff] tetx-[14px] px-[13px]">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[50px]">
          <div className="col-lg-6">
            <form className="flex flex-col gap-[20px] border-[1px] border-solid border-[#E2E2E2] p-[20px] ">
              <h3 className="pb-[10px] border-b-[1px] border-b-solid border-b-[#E2E2E2] text-[#9AD6CC] text-[18px]">
                Billing details
              </h3>
              <div className="flex gap-[20px]">
                <div className="col-lg-6">
                  <label htmlFor="firstName" className="text-[14px]">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full focus:outline-[#3ebb3e] border-[1px] border-solid border-[#E2E2E2] py-[12px] px-[8px] rounded-[7px]"
                  />
                </div>
                <div className="col-lg-6">
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
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
