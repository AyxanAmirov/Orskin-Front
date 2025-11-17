import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faMobileScreen,
  faAt,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { api1 } from "../../api";
import { useState } from "react";
import { useToast } from "../../hooks/useToast";

function ContactForm() {
  const [errors, setErrors] = useState(null);
  const [isProccess, setIsProccess] = useState(false);
  const { toast, showToast } = useToast();

  const formSubmit = async (e) => {
    e.preventDefault();
    setIsProccess(true);
    setErrors(null);

    try {
      const data = await api1.post("/orskin", {
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        message: e.target.message.value,
        phoneNumber: e.target.phoneNumber.value,
      })
      showToast("success", "Your message has been sent successfully!");
      setIsProccess(false);
      e.target.reset();
    } catch (error) {
      setIsProccess(false);

      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
        return;
      }

      if (error.response?.status === 429) {
        showToast("error", "Too many contact form submissions. Try again after 15 minutes.");
        return;
      }

      showToast("error", "Something went wrong. Please try again later.");
    }
  }
  return (
    <>
      {toast.visible && (
        <div
          className={`fixed top-6 right-6 left-6 sm:left-auto z-[9999] border-l-4 p-4 rounded-xl shadow-lg animate-slideIn ${toast.type === "success"
              ? "bg-green-100 text-green-800 border-green-400"
              : "bg-red-100 text-red-800 border-red-400"
            }`}
        >
          <p className="font-medium">{toast.message}</p>
        </div>
      )}

      <form className="flex mt-[30px] flex-col gap-[20px]"
        onSubmit={formSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className="w-full border-solid border-[1px] border-[#E2E2E2] text-[#A1A3A7] py-[15px] pl-[50px] bg-[#F6F6F6] rounded-[10px] focus:outline-[#65BC7B]"
            placeholder="Full Name*"
            name="fullName"
            data-aos="zoom-in"
          />
          {errors && errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
          <FontAwesomeIcon
            icon={faFaceSmile}
            className="absolute left-[20px] top-[18px] text-[18px] text-[#A1A3A7]"
            data-aos="zoom-in"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="relative">
            <input
              type="tel"
              className="w-full border-solid border-[1px] border-[#E2E2E2] text-[#A1A3A7] py-[15px] pl-[50px] bg-[#F6F6F6] rounded-[10px] focus:outline-[#65BC7B]"
              placeholder="example: +97143455520"
              name="phoneNumber"
              data-aos="zoom-in"
            />
            {errors && errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
            <FontAwesomeIcon
              icon={faMobileScreen}
              className="absolute left-[20px] top-[18px] text-[18px] text-[#A1A3A7]"
              data-aos="zoom-in"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              className="w-full border-solid border-[1px] border-[#E2E2E2] text-[#A1A3A7] py-[15px] pl-[50px] bg-[#F6F6F6] rounded-[10px] focus:outline-[#65BC7B]"
              name="email"
              placeholder=" Email*"
              data-aos="zoom-in"
            />
            {errors && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <FontAwesomeIcon
              icon={faAt}
              className="absolute left-[20px] top-[18px] text-[18px] text-[#A1A3A7]"
              data-aos="zoom-in"
            />
          </div>
        </div>
        <div className="w-full relative">
          <textarea
            className="w-full border-solid py-[14px] border-[1px] border-[#E2E2E2] text-[#A1A3A7] h-[150px] pl-[50px] bg-[#F6F6F6] rounded-[10px] focus:outline-[#65BC7B]"
            placeholder="Message"
            name="message"
            data-aos="zoom-in"
          ></textarea>
          {errors && errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="absolute left-[20px] top-[18px] text-[18px] text-[#A1A3A7]"
            data-aos="zoom-in"
          />
        </div>
        <button className="w-full py-[10px] bg-[#f0c6cf] rounded-[5px] font-bold hover:bg-[#EDE1D4] duration-300 disabled:bg-[#f0c6cf65] disabled:cursor-not-allowed" data-aos="zoom-in"
          disabled={isProccess} >
          ENQUIRE NOW
        </button>
      </form>
    </>
  )
}

export default ContactForm