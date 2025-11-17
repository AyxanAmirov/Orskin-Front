import { useEffect, useState } from "react"
import logo from "../../assets/image/logo.png"
import { useToast } from "../../hooks/useToast"
import { api2 } from "../../api"
import "./style.css"
function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNum: "",
    email: "",
    aboutUs: "",
    waterSize: false,
    supplements: false,
    supplementsDesc: "",
    smoke: false,
    diet: {
      dairy: false,
      oils: false,
      carbs: false,
      gluten: false
    },
    sunbathe: false,
    sunbatheDesc: "",
    facialDate: "",
    laserDate: "",
    peelDate: "",
    botox: false,
    fillers: false,
    tmj: false,
    surgery: false,
    skinFeeling: "",
    skincare: "",
    allergic: false,
    skinConcern: ""
  })
  const [errors, setErrors] = useState(null)
  const [isProccess, setIsProccess] = useState(false);
  const { toast, showToast } = useToast();


  const inputHandler = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value === "true"
      })
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        diet: {
          ...formData.diet,
          [name]: e.target.checked
        }
      })

    } else {
      setFormData({
        ...formData,
        [name]: value
      })

    }

  }

  const formSubmit = async (e) => {
    e.preventDefault();
    setIsProccess(true);
    setErrors(null);
    try {
      await api2.post("/form", formData)
      showToast("success", "Your message has been sent successfully!");
      setIsProccess(false);
    } catch (error) {
      setIsProccess(false);
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
        return;
      }
      if (error.response?.status === 429) {
        showToast("error", "Too many consultation form submissions. Try again after 15 minutes.");
        return;
      }
      showToast("error", "Something went wrong. Please try again later.");
    }
  }

  return (
    <main id="online-form" className="min-h-[100vh]" >
      <header className="h-[200px] flex items-center justify-center mb-[70px]">
        <a href="https://orskin.ae" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="" className="w-[210px]" />
        </a>
      </header>
      <section className="max-w-[1320px] w-[65%] mx-[auto]">
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
        <form onSubmit={formSubmit}>
          <div className="mb-[70px]">
            <h2 className="  font-[600] text-[30px] leading-[36px] text-[#70C5B5] text-center mb-[40px]"
            >CONSULTATION FORM</h2>
            <div className="grid lg:grid-cols-[1fr_2fr] grid-cols-1 gap-[30px]">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]"
                >Full Name</label>
                <input type="text" id="fullName" name="fullName" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px]" onChange={inputHandler} />
                {errors && errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]">Address</label>
                <input type="text" id="address" name="address" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px]" onChange={inputHandler} />
                {errors && errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phonenumber"
                  className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]"
                >
                  Mobile No. <span className="text-[#999] text-[16px]">(e.g. +971501234567)</span>
                </label>

                <input type="text" id="phonenumber" name="phoneNum" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px]" onChange={inputHandler} />
                {errors && errors.phoneNum && (
                  <p className="text-red-500 text-sm">{errors.phoneNum}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]">Email Address</label>
                <input type="text" id="email" name="email" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px]" onChange={inputHandler} />
                {errors && errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col lg:col-span-2">
                <label htmlFor="aboutus" className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]">How did you hear about us?</label>
                <input type="text" id="aboutus" name="aboutUs" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px]" onChange={inputHandler} />
                {errors && errors.aboutUs && (
                  <p className="text-red-500 text-sm">{errors.aboutUs}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-[70px]">
            <h2 className="font-[600] text-[30px] leading-[36px] text-[#70C5B5] text-center mb-[40px]"
            >LIFESTYLE</h2>
            <div className="flex flex-col gap-[50px]">
              <div className="block sm:flex gap-[50px] items-center">
                <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[20px] sm:mb-0"
                >Do you drink enough water (minimum 2L per day)?</p>
                <div className="flex gap-[50px] items-center">
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value="true" id="" name="waterSize" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]" >Yes</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value="false" id="" name="waterSize" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                  </label>
                </div>
              </div>
              <div>
                <div className="block sm:flex gap-[50px] items-center mb-[20px]">
                  <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C]  mb-[20px] sm:mb-0"
                  >Do you take any supplements? If yes, what kind?</p>
                  <div className="flex gap-[50px] items-center ">
                    <label className="flex gap-[10px] items-center">
                      <input type="radio" id="" value="true" name="supplements" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                      <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Yes</span>
                    </label>
                    <label className="flex gap-[10px] items-center">
                      <input type="radio" id="" value="false" name="supplements" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                      <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                    </label>
                  </div>
                </div>
                {
                  formData.supplements && (
                    <>
                      <input type="text" id="supplementsDesc" name="supplementsDesc" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px] w-full" onChange={inputHandler} />
                      {errors && errors.supplementsDesc && (
                        <p className="text-red-500 text-sm">{errors.supplementsDesc}</p>
                      )}
                    </>
                  )
                }
              </div>
              <div className="block sm:flex gap-[50px] items-center">
                <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C]  mb-[20px] sm:mb-0"
                >Do you drink or smoke?</p>
                <div className="flex gap-[50px] items-center">
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value="true" name="smoke" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Yes</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value="false" name="smoke" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                  </label>
                </div>
              </div>
              <div className="block lg:flex gap-[50px] items-center">
                <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C]  mb-[20px] sm:mb-0"
                >How is your diet?</p>
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-[30px_50px] items-center">
                  <label className="flex gap-[10px] items-center">
                    <input type="checkbox" name="dairy" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Dairy</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="checkbox" name="gluten" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Gluten</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="checkbox" name="carbs" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Carbs</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="checkbox" name="oils" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Oils</span>
                  </label>
                </div>
              </div>
              <div>
                <div className="block sm:flex gap-[50px] items-center mb-[20px]">
                  <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C]  mb-[20px] sm:mb-0"
                  >Do you sunbathe? If yes, how often?</p>
                  <div className="flex gap-[50px] items-center">
                    <label className="flex gap-[10px] items-center">
                      <input type="radio" value={"true"} name="sunbathe" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                      <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Yes</span>
                    </label>
                    <label className="flex gap-[10px] items-center">
                      <input type="radio" value={"false"} name="sunbathe" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                      <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                    </label>
                  </div>
                </div>
                {
                  formData.sunbathe && (<>
                    <input type="text" name="sunbatheDesc" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px] w-full" onChange={inputHandler} />
                    {errors && errors.sunbatheDesc && (
                      <p className="text-red-500 text-sm">{errors.sunbatheDesc}</p>
                    )}</>)
                }
              </div>
            </div>
          </div>
          <div className="mb-[70px]">
            <h2 className="  font-[600] text-[30px] leading-[36px] text-[#70C5B5] text-center mb-[40px]"
            >SKINCARE</h2>
            <div className="flex flex-col gap-[50px]">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
                <div className="flex flex-col">
                  <label htmlFor="facialDate" className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]"
                  >Date of your last facial</label>
                  <input type="date" id="facialDate" name="facialDate" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px]" onChange={inputHandler} />
                  {errors && errors.facialDate && (
                    <p className="text-red-500 text-sm">{errors.facialDate}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="laserDate" className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]">Date of your last laser</label>
                  <input type="date" id="laserDate" name="laserDate" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px]" onChange={inputHandler} />
                  {errors && errors.laserDate && (
                    <p className="text-red-500 text-sm">{errors.laserDate}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="peelDate" className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]">Date of your last peel</label>
                  <input type="date" id="peelDate" name="peelDate" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px]" onChange={inputHandler} />
                  {errors && errors.peelDate && (
                    <p className="text-red-500 text-sm">{errors.peelDate}</p>
                  )}
                </div>
              </div>
              <div className="block sm:flex gap-[50px] items-center">
                <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C]  mb-[10px] sm:mb-0"
                >Have you done any botox in the past 2 weeks?</p>
                <div className="flex gap-[50px] items-center">
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"true"} name="botox" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Yes</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"false"} name="botox" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                  </label>
                </div>
              </div>
              <div className="block sm:flex gap-[50px] items-center">
                <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px] sm:mb-0"
                >Have you done any fillers in the past 2 weeks?</p>
                <div className="flex gap-[50px] items-center">
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"true"} name="fillers" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Yes</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"false"} name="fillers" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                  </label>
                </div>
              </div>
              <div className="block sm:flex gap-[50px] items-center">
                <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px] sm:mb-0"
                >Are you experiencing any pain / tension in the jaw area? TMJ?</p>
                <div className="flex gap-[50px] items-center">
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"true"} name="tmj" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Yes</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"false"} name="tmj" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                  </label>
                </div>
              </div>
              <div className="block sm:flex gap-[50px] items-center">
                <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px] sm:mb-0"
                >Have you done any surgery or threads in the last few months?</p>
                <div className="flex gap-[50px] items-center">
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"true"} name="surgery" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Yes</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"false"} name="surgery" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]"
                  htmlFor="skinFeeling">How is your skin feeling after cleansing?</label>
                <input type="text" id="skinFeeling" name="skinFeeling" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px] w-full" onChange={inputHandler} />
              </div>
              <div>
                <label htmlFor="skincare" className="block font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]"
                >What kind of skincare brands do you currently use? (SPF, etc.)</label>
                <input type="text" id="skincare" name="skincare" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px] w-full" onChange={inputHandler} />
              </div>
              <div className="block sm:flex gap-[50px] items-center">
                <p className="font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px] sm:mb-0"
                >Do you have any skin allergic reactions?</p>
                <div className="flex gap-[50px] items-center">
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"true"} name="allergic" className="appearance-none border border-gray-400 outline-none rounded-[none] w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">Yes</span>
                  </label>
                  <label className="flex gap-[10px] items-center">
                    <input type="radio" value={"false"} name="allergic" className="appearance-none border border-gray-400 outline-none rounded-[none]  w-7 h-7 flex items-center justify-center relative  checked:after:content-['✔']  checked:after:text-[20px] checked:after:text-[#2f7265] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] transition-all duration-200" onChange={inputHandler} />
                    <span className="font-light text-[22px] leading-[26px] text-[#70C5B5]">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="skinConcern" className="block font-light text-[22px] leading-[26px] text-[#2C2C2C] mb-[10px]"
                >What’s your main skin concern?</label>
                <input type="text" id="skinConcern" name="skinConcern" className="border-1 focus:border-[#70C5B5] outline-none p-[7px_20px] w-full" onChange={inputHandler} />
              </div>
            </div>
          </div>
          <div className="pb-[70px]">
            <button type="submit" className="focus:border-[#70C5B5] cursor-pointer outline-none p-[7px_50px] bg-[#9ad6cc] text-[#fff]
            disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isProccess} >Send Form</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default ConsultationForm