import React from "react";
import Banner from "../../assets/images/contactBanner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <img src={Banner} alt="banner" className="w-full" />
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center gap-[50px] my-[70px]">
          <h2 className="text-[#8B8B8B] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[28px] text-[28px]">
            EXPERIENCE THE ORSKIN DIFFERENCE
          </h2>
          <form className="w-full mb-[40px] flex flex-col gap-[30px]">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#F6F6F6] rounded-[7px] py-[15px] px-[20px]"
            />
            <div className="flex gap-[3px]">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full bg-[#F6F6F6] rounded-[7px] py-[15px] px-[20px]"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <input
                  type="email"
                  placeholder="@  Email*"
                  className="w-full bg-[#F6F6F6] rounded-[7px] py-[15px] px-[20px]"
                />
              </div>
            </div>
            <textarea
              className="w-full h-[100px] bg-[#F6F6F6] rounded-[7px] px-[20px] py-[15px]"
              placeholder="Message"
            ></textarea>
            <div className="px-[40px]">
              <button className="w-full rounded-[3px] bg-[#f0c6cf] py-[10px] hover:bg-[#EDE1D4] duration-[.4s] text-[14px] font-[500]">
                ENQUIRE NOW
              </button>
            </div>
          </form>
          <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap gap-[30px]">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  flex flex-col gap-[30px] ">
              <div className="flex gap-[30px] items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[20px] text-[#a8d4cc]"
                />
                <p className=" text-[14px]">
                  285D Al Wasl Rd, Dubai,
                  <br /> United Arab Emirates
                </p>
              </div>
              <div className="flex gap-[30px] items-center">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="text-[20px] text-[#a8d4cc]"
                />
                <div>
                  <p className=" text-[14px]">+971 (0) 4 345 5520</p>
                  <p className=" text-[14px]">+971 (0) 50 445 9672</p>
                </div>
              </div>
              <div className="flex gap-[30px] items-center">
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="text-[20px] text-[#a8d4cc]"
                />
                <p className=" text-[14px]">info@orskin.ae</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  flex flex-col gap-[40px] ">
              <h3 className="text-[22px] text-[#B3D6D0]">We are open</h3>
              <p className="text-[22px] text-[#B3D6D0]">
                Monday to Saturday
                <br />
                09:00 a.m to 09:00 p.m
              </p>
              <p className="text-[22px] text-[#B3D6D0]">
                Sundays
                <br />
                10:00 a.m to 07:00 p.m
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-center">
            <div className="flex gap-[10px]">
              <div className="w-[50px] h-[50px] hover:bg-white duration-[.4s] flex items-center justify-center rounded-[50%] bg-[#a8d4cc]">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-[30px] text-white w-full hover:text-[#a8d4cc] duration-[.4s]"
                />
              </div>
              <div className="w-[50px] h-[50px] hover:bg-white duration-[.4s] flex items-center justify-center rounded-[50%] bg-[#a8d4cc]">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[30px] text-white w-full hover:text-[#a8d4cc] duration-[.4s]"
                />
              </div>
            </div>
            <h4 className="text-[22px] text-[#a8d4cc]">@orskinaesthetics</h4>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4424300213145!2d55.261461775164456!3d25.222019177695024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f425bd2f81ec1%3A0x6b2f70c7bbe69233!2s285d%20Al%20Wasl%20Rd%20-%20Al%20Bada'a%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2saz!4v1722337468106!5m2!1sen!2saz"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>    </>
  );
}

export default Contact;
